/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const methods = {};
import fs from "fs";
import path from "path";
import { Builder } from "xml2js";
const ASSETS_FOLDERS = {
  css: "css",
  fonts: "fonts",
  images: "images",
  js: "js",
  docs: "docs",
  data: "data",
  videos: "videos",
};
methods.init = function () {
  this.listens({
    "generate-static-content": this.handleStaticGeneration.bind(this),
  });
};

methods.handleStaticGeneration = function (data) {
  const self = this;
  const pao = self.pao;
  const { payload } = data;
  const { dataToConfig } = payload;
  const { routes, routesObject, resources } = dataToConfig;
  const getWorkingFolder = pao.pa_getWorkingFolder;

  self.debug("THE DATA OF SSG PLUGIN", dataToConfig);

  const setCall = data.callback;
  const cwd = getWorkingFolder();

  const BUILD = `${resources.appBuildFolder}`;

  self
    .renderApp(routes)
    .then(({ htmlViews, styles }) => {
      self.debug("THE HTML on render app", htmlViews);
      const DIST = self.createDistFolder(
        `${resources.appFolder}${path.sep}dist`
      );
      self.debug("THE DIST FOLDER", DIST);
      self.copyPublicToDist(resources.appAssetsPublic, DIST, "index.html");
      self.copyPublicToDist(BUILD, DIST, "index.html");
      fs.existsSync(`${DIST}${path.sep}index.html`)
        ? fs.rmSync(`${DIST}${path.sep}index.html`)
        : null;
      self.postBuildStaticResources({
        buildFolder: BUILD,
        distFolder: DIST,
        styles,
      });
      htmlViews.forEach((html) => {
        self.savePageToFile(
          `${DIST}${path.sep}${html.name.toLowerCase()}.html`,
          html.content
        );
      });
      setCall({ message: "Static html has completed" });
    })
    .catch((err) => {
      self.debug("RENDERAPP REJECTED", err);
    });
};
methods.renderApp = function (views) {
  const self = this;
  const staticMetaData = {
    css: "index.css",
    js: "bootstrap.js",
    fonts: "fonts",
  };
  return new Promise((resolve) => {
    self.emit({
      type: "handle-react-static",
      data: {
        views: views,
        info: staticMetaData,
        staticRender: true,
        callback: (data) => {
          resolve(data);
        },
      },
    });
  });

  // {
  //   view: {
  //     match: '/',
  //     vHandler: 'react',
  //     title: 'REACT SERVE-SIDE RENDERING COMPONENT'
  //   },
  //   payload: {
  //     parsed: { url: '/', handler: '' },
  //     handler: '/home',
  //     request: {
  //       req: [IncomingMessage],
  //       res: [ServerResponse],
  //       next: [Function: next]
  //     }
  //   },
  //   callback: [Function: bound viewHandler]
  // }
};
methods.cleanBuildFolder = function (view, setCall) {
  const self = this;

  self.emit({
    type: "handle-react-view",
    data: {
      view: view,
      staticRender: true,
      callback: (err, data) => {
        setCall({ message: "handleStaticGeneration in action" });
      },
    },
  });

  // {
  //   view: {
  //     match: '/',
  //     vHandler: 'react',
  //     title: 'REACT SERVE-SIDE RENDERING COMPONENT'
  //   },
  //   payload: {
  //     parsed: { url: '/', handler: '' },
  //     handler: '/home',
  //     request: {
  //       req: [IncomingMessage],
  //       res: [ServerResponse],
  //       next: [Function: next]
  //     }
  //   },
  //   callback: [Function: bound viewHandler]
  // }
};
methods.copyPublicToDist = function (from, to, ignore) {
  const self = this;
  self.debug("copying from", from, to);
  if (fs.existsSync(from)) {
    fs.cpSync(from, to, { recursive: true, filter: (fi) => fi !== ignore });
  } else {
    self.infoSync(
      `Folder:${from} does not exist, kotii will skip trying to copy from it`
    );
  }

  // {
  //   view: {
  //     match: '/',
  //     vHandler: 'react',
  //     title: 'REACT SERVE-SIDE RENDERING COMPONENT'
  //   },
  //   payload: {
  //     parsed: { url: '/', handler: '' },
  //     handler: '/home',
  //     request: {
  //       req: [IncomingMessage],
  //       res: [ServerResponse],
  //       next: [Function: next]
  //     }
  //   },
  //   callback: [Function: bound viewHandler]
  // }
};
methods.createDistFolder = function (filepath) {
  const self = this;
  const pao = self.pao;
  const makeFolderSync = pao.pa_makeFolderSync;
  const isExistingDir = pao.pa_isExistingDir;
  if (isExistingDir(filepath)) fs.rmSync(filepath, { recursive: true });
  makeFolderSync(filepath);
  return filepath;
};
methods.savePageToFile = function (filepath, content) {
  const self = this;
  const pao = self.pao;
  const saveToFile = pao.pa_saveToFile;

  saveToFile(filepath, content);
};
methods.postBuildStaticResources = async function (context) {
  const self = this;
  self.debug("THE CONTEXT AGGREGATE PRODUCTION", context);
  let cssSavePath = `${context.distFolder}/css/index.css`;
  let files = await self.readFiles(context.buildFolder);
  let cssJoined = files.join(" ");
  cssJoined += context.styles;
  // let kotiiBundleSavePath = `${context.appBuildFolder}/.kotii-land/bundle.js`;
  // let kotiiBundleSaveImportsPath = `${context.appBuildFolder}/.kotii-land/bundle-imports.js`;
  // let cssModulesMap = self.aggregateAppKotiiMeta(context);
  // let css = self.aggregateAppCss(context);
  // let images = self.aggregateAppImages(context);
  // console.log("THE IMAGES", images, cssSavePath);
  // console.log("THE CSS MODULES", cssModulesMap);
  // let kotiiBundleSaveContent = `
  // const ƒ = ${JSON.stringify(cssModulesMap)};
  // const appImagesMap = ${JSON.stringify(images)};
  // export {appModules, appImagesMap};
  // `;
  self.createDistFolder(`${context.distFolder}${path.sep}css`);
  // self.createDistFolder(
  //       `${context.distFolder}${path.sep}img`
  //     );
  self.copyImageFilesSync(context.buildFolder, `${context.distFolder}/img`, [
    ".jpg",
    ".jpeg",
    ".png",
    ".gif",
    ".bmp",
    ".webp",
    ".svg",
  ]);
  fs.writeFileSync(cssSavePath, cssJoined);
  // fs.writeFileSync(kotiiBundleSavePath, kotiiBundleSaveContent);
  // fs.writeFileSync(kotiiBundleSaveImportsPath, `${context.pagesSourceCode}`);
};

methods.readFiles = async function (directoryPath) {
  try {
    const files = fs.readdirSync(directoryPath);

    // Filter for only .css files
    const cssFiles = files.filter(
      (file) => path.extname(file).toLowerCase() === ".css"
    );
    const contents = [];

    for (const file of cssFiles) {
      const filePath = path.join(directoryPath, file);
      const content = fs.readFileSync(filePath, "utf8");
      console.log(`--- Content of ${file} ---`);
      console.log(content);
      contents.push(content);
    }
    return contents;
  } catch (err) {
    console.error("Error reading directory:", err);
  }
};

methods.copyImageFilesSync = function (sourceDir, destDir, imageExtensions) {
  try {
    // 1. Ensure the destination directory exists
    fs.mkdirSync(destDir, { recursive: true });

    // 2. Read all files in the source directory
    const files = fs.readdirSync(sourceDir);

    console.log(`Found ${files.length} files in source directory.`);

    let copiedCount = 0;
    for (const file of files) {
      const sourcePath = path.join(sourceDir, file);
      const destPath = path.join(destDir, file);
      const fileExt = path.extname(file).toLowerCase();

      // 3. Check if the file is an image based on its extension
      if (imageExtensions.includes(fileExt)) {
        // 4. Copy the image file to the destination directory
        fs.copyFileSync(sourcePath, destPath);
        console.log(`Copied: ${file}`);
        copiedCount++;
      }
    }
    console.log(`\nOperation complete. Total images copied: ${copiedCount}`);
  } catch (err) {
    console.error("An error occurred during file operations:", err);
  }
};

export default methods;
