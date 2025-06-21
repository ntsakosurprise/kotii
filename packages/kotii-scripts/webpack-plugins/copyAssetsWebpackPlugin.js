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
      this.loggas.copyAssetsWebpackPlugin.debug(
        "PLUGIN:: Copy Asssets Webpack plugin"
      );
      console.log("THE ASSETS PATH FOR SYNC", this.options);
      fs.copyFileSync(
        `${this.options.kotiiRootPath}/client-tools/index.js`,
        `${path.resolve(this.options.extra.emitPath, "kotii-client.js")}`
      );
      if (!this.assetsManifestData)
        this.assetsManifestData = getAssetsManifest(this.options);
      emitFilesInOutputDir(this.options, this.assetsManifestData);
      // console.log("THE ASSETS MANIFEST", this.assetsManifestData);
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
  // let assetsPath = path.resolve(referenceAssetsPath, assetsFile);
  // let assetsManifestData = null;

  // if (fs.existsSync(assetsPath)) {
  //   assetsManifestData = JSON.parse(
  //     fs.readFileSync(assetsPath, {
  //       encoding: "utf8",
  //     })
  //   );
  // }

  // return assetsManifestData;
};

export default CopyAssetsWebpackPlugin;
