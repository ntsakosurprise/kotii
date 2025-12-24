/* eslint-disable no-unused-vars */
import fs from "node:fs";
import path from "node:path";

class CopyAssetsWebpackPlugin {
  loggas = null;
  options = null;
  assetsManifestData = null;

  constructor(options = null, loggas) {
    this.loggas = loggas;
    this.options = options;
    this.assetsManifestData = null;
  }
  apply(compiler) {
    compiler.hooks.afterEmit.tap("CopyAssetsWebpackPlugin", () => {
      // if (appStyles) self.createCssStyles(appStyles, contextApp.appBuildFolder);
      this.loggas.copyAssetsWebpackPlugin.debug(
        "PLUGIN:: Copy Asssets Webpack plugin"
      );
      console.log("THE ASSETS PATH FOR SYNC", this.options);
      let files = this.options.files;
      files.forEach((fileItem) => {
        if (!fileItem?.fileEmitter) {
          fs.copyFileSync(
            `${fileItem.kotiiRootPath}/client-tools/index.js`,
            `${path.resolve(fileItem.extra.emitPath, "kotii-client.js")}`
          );
          if (!this.assetsManifestData)
            this.assetsManifestData = getAssetsManifest(fileItem);
          emitFilesInOutputDir(fileItem, this.assetsManifestData);
          // console.log("THE ASSETS MANIFEST", this.assetsManifestData);
        } else {
          fileItem.fileEmitter(fileItem.extra.appStyles, fileItem.extra.build);
        }
      });
    });
  }
}

const getAssetsManifest = (options) => {
  const { referenceAssetsPath, assetsFile, extra } = options;
  // const { emitFile = false, emitPath } = extra;
  let assetsPath = path.resolve(referenceAssetsPath, assetsFile);
  let assetsManifestData = null;

  if (fs.existsSync(assetsPath)) {
    assetsManifestData = JSON.parse(
      fs.readFileSync(assetsPath, {
        encoding: "utf8",
      })
    );
  }

  return assetsManifestData;
};
const emitFilesInOutputDir = (options, assetsMeta) => {
  const { extra } = options;
  const { emitFile = false, emitPath } = extra;
  let assetsKeys = Object.keys(assetsMeta);

  if (emitFile) {
    assetsKeys.forEach((assetKey) => {
      let lastIndexOf = assetsMeta[assetKey].content.lastIndexOf("/");
      let fileName = `./${assetsMeta[assetKey].content.substring(lastIndexOf)}`;
      if (!assetsMeta[assetKey].inlined) {
        console.log("The current item is not inlined", assetKey);
        let buildPath = path.resolve(emitPath, fileName);
        console.log(
          "THE SRC PATH",
          buildPath,
          assetsMeta[assetKey].pathContext.fileFullPath
        );

        try {
          fs.copyFileSync(
            assetsMeta[assetKey].pathContext.fileFullPath,
            buildPath
          );
        } catch (error) {
          console.log("COPY FILE SYNC HAS FAILED", error);
        }
      }
    });
  }
};

export default CopyAssetsWebpackPlugin;
