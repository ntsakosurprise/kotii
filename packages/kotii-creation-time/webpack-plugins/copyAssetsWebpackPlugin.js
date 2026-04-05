/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import fs from "node:fs";
import path from "node:path";
import { getFileFormatMaps } from "../globals.js";
import { kotiiRootPath } from "kotii-creation-time/root";

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
      // if (appStyles) self.(appStyles, contextApp.appBuildFolder);
      this.loggas.copyAssetsWebpackPlugin.debug(
        "PLUGIN:: Copy Asssets Webpack plugin"
      );
      console.log("THE ASSETS PATH FOR SYNC", this.options);
      let appEnv = process.env.NODE_ENV;

      let files = this.options.files;
      let buildFolder = this.options.buildFolder;
      console.log("THE BUILD FOLDER:COPY", buildFolder, process.env.NODE_ENV);

      let assetsFolderName = this?.options?.assetsFolderName || "assets";
      if (appEnv === "production")
        assetsFolderName = `public/${assetsFolderName}`;
      console.log("THE ASSETS FOLDER NAME", assetsFolderName);

      // let assetsJs = createFolder(`${assetsFolder}/js`)
      // console.log("THE ASSETS FOLDER", assetsFolder);

      let appAssetsPublic = this.options?.appAssetsPublic;
      let isPublicAssets = fs.existsSync(appAssetsPublic) ? true : false;
      let assetsToBuild = [];

      if (isPublicAssets || appEnv === "production") {
        let buildPublicFolder = !fs.existsSync(`${buildFolder}/public`)
          ? createFolder(`${buildFolder}/public`)
          : `${buildFolder}/public`;
        // console.log("THE BUILD PUBLIC FOLDER", assetsFolder);
        if (isPublicAssets) copyDirectory(appAssetsPublic, buildPublicFolder);
      }

      let possibleAssetFolder = `${buildFolder}/${assetsFolderName}`;
      let assetsFolder = !fs.existsSync(possibleAssetFolder)
        ? createFolder(`${buildFolder}/${assetsFolderName}`)
        : possibleAssetFolder;

      files.forEach((fileItem) => {
        if (!fileItem?.fileEmitter) {
          // fs.copyFileSync(
          //   `${fileItem.kotiiRootPath}/client-tools/index.js`,
          //   `${path.resolve(assetsJs, "kotii-client.js")}`
          // );
          if (!this.assetsManifestData)
            this.assetsManifestData = getAssetsManifest(fileItem);
          emitFilesInOutputDir(
            fileItem,
            this.assetsManifestData,
            assetsToBuild
          );
          // console.log("THE ASSETS MANIFEST", this.assetsManifestData);
        } else {
          fileItem.fileEmitter({
            appStyles: fileItem.extra.appStyles,
            appBuildFolder: fileItem.extra.build,
            kotiiRootPath: this.options.kotiiRootPath,
            assetsFolder,
          });
        }
      });
      organizeAssets(assetsToBuild, assetsFolder);
    });
  }
}

const createFolder = (folderPath) => {
  console.log("THE FOLDER PATH. MAKE DIR", folderPath);
  return fs.mkdirSync(folderPath, { recursive: true });

  // return assetsManifestData;
};
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
const emitFilesInOutputDir = (options, assetsMeta, files) => {
  const { extra } = options;
  const { emitFile = false, emitPath } = extra;
  let assetsKeys = Object.keys(assetsMeta);

  if (emitFile) {
    assetsKeys.forEach((assetKey) => {
      // let lastIndexOf = assetsMeta[assetKey].content.lastIndexOf("/");
      // let fileName = `./${assetsMeta[assetKey].content.substring(lastIndexOf)}`;
      if (!assetsMeta[assetKey].inlined) {
        // console.log("The current item is not inlined", assetKey);
        // let fileFullPath = assetsMeta[assetKey].pathContext.fileFullPath
        // let fileExt = path.extname(fileFullPath)
        // let fileFolder = getFileFolder(ext)

        // let buildPath = path.resolve(emitPath, fileName);
        // console.log(
        //   "THE SRC PATH",
        //   buildPath,
        //   assetsMeta[assetKey].pathContext.fileFullPath
        // );
        files.push(assetsMeta[assetKey].pathContext.fileFullPath);

        // try {
        //   fs.copyFileSync(
        //     assetsMeta[assetKey].pathContext.fileFullPath,
        //     buildPath
        //   );
        // } catch (error) {
        //   console.log("COPY FILE SYNC HAS FAILED", error);
        // }
      }
    });
  }
};

// Get all files in src folder recursively
// const getAllFiles = (dir, files = []) => {
//   fs.readdirSync(dir).forEach(file => {
//     const fullPath = path.join(dir, file);
//     if (fs.statSync(fullPath).isDirectory()) {
//       getAllFiles(fullPath, files);
//     } else {
//       files.push(fullPath);
//     }
//   });
//   return files;
// }

// Determine destination folder based on extension
const getDistFolder = (fileName, EXTENSIONS_MAPS) => {
  const ext = path.extname(fileName).slice(1).toLowerCase(); // remove dot
  return EXTENSIONS_MAPS[ext] || path.join(distRoot, "unknown"); // fallback
};

// Copy files to correct folder
const organizeAssets = (files, disFolder) => {
  // const files = getAllFiles(srcFolder);
  const EXTENSIONS_MAPS = getFileFormatMaps("");
  console.log("THE FILES", files, disFolder);

  files.forEach((file) => {
    console.log("FILE OF FILES", file);
    const fileName = path.basename(file);
    console.log("THE FILE NAME", fileName);
    const destFolder = getDistFolder(fileName, EXTENSIONS_MAPS);
    console.log("THE DEST FOLDER", destFolder);
    const destAssetFolder = path.join(disFolder, destFolder);
    console.log("THE DEST FOLDER", destFolder);

    // Ensure folder exists
    fs.mkdirSync(destAssetFolder, { recursive: true });

    // Copy file
    const destPath = path.join(destAssetFolder, fileName);
    fs.copyFileSync(file, destPath);
    console.log(`Copied ${fileName} → ${destPath}`);
  });
};

const copyDirectory = (source, target) => {
  fs.mkdirSync(target, { recursive: true });

  fs.readdirSync(source).forEach((item) => {
    const srcPath = path.join(source, item);
    const destPath = path.join(target, item);

    if (fs.statSync(srcPath).isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
      console.log(`Copied: ${destPath}`);
    }
  });
};

export default CopyAssetsWebpackPlugin;
