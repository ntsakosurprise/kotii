/* eslint-disable no-unused-vars */
const methods = {};
methods.init = function () {
  // console.log('Bitbucket has been initialised')
  console.log("THE VALUE OF THIS", this);
  this.setContexts();
  this.listens({
    "context-app": this.handleContextApp.bind(this),
  });
};

methods.handleContextApp = function (data) {
  // console.log("THE DATA OF START SCRIPTS", data);
  const self = this;
  const resources = self.getContextAppInfo();

  data.callback({
    message: "Context app plugin successfully called",
    data: resources,
  });
  return;
};

methods.setContexts = function (data) {
  // console.log("THE DATA OF START SCRIPTS", data);
  const self = this;
  const pao = self.pao;
  const getWorkingFolder = pao.pa_getWorkingFolder;
  const createFolderContent = pao.pa_createFolderContent;
  const makeFolderSync = pao.pa_makeFolderSync;
  const getRootDir = pao.pa_getRootDir;

  self.appFolder = getWorkingFolder();
  self.appRoot = getRootDir();
};

methods.getAppInContextResources = function () {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const { appFolder: folder, getFilePath, checkIfIsFile } = self;
  const templateFolder = folder.slice(0, folder.indexOf("/kotii-scripts"));
  const appPackageJson = loadFile(getFilePath(folder, "package.json"));
  const isPackageNameKotii =
    appPackageJson.name === "kotii-scripts" ? true : false;
  const appFolder = isPackageNameKotii
    ? `${templateFolder}/kotii-templates/spa`
    : folder;
  console.log("THE APP PACKAGE JSON", appPackageJson);
  console.log("THE APP CONFIG", isPackageNameKotii);
  console.log("THE TEMPLATE FOLDER", templateFolder);

  const resources = {
    appEnv: getFilePath(appFolder, ".env"),
    appFolder: getFilePath(appFolder, "."),
    appIndexFile: getFilePath(appFolder, "src/index.js"),
    appSrc: getFilePath(appFolder, "src"),
    appTsConfig: getFilePath(appFolder, "tsconfig.ts"),
    appJsConfig: getFilePath(appFolder, "tsconfig.js"),
    appIndexHtml: getFilePath(appFolder, "public/index.html"),
    appAssetsPublic: getFilePath(appFolder, "public"),
    appBuildFolder: getFilePath(appFolder, "build"),
    appPublicPath: checkIfIsFile(getFilePath(appFolder, "package.json"))
      ? loadFile(getFilePath(appFolder, "package.json"))?.homePage || "/"
      : "/",
    appNodeModules: getFilePath(appFolder, "node_modules"),
    appCustomWbpConfig: checkIfIsFile(
      getFilePath(appFolder, "webpack.custom.js")
    )
      ? loadFile(getFilePath(appFolder, "webpack.custom.js"))
      : null,
  };

  console.log("THE RESOURCES OBJECT", resources);
  return resources;
};
methods.getContextAppInfo = function () {
  const self = this;
  const pao = self.pao;

  const createFolderContent = pao.pa_createFolderContent;
  const makeFolderSync = pao.pa_makeFolderSync;

  // self.callback = data.callback;
  return self.getAppInContextResources();
  // console.log("THE WORKING DIR INFORMATION", self.appFolder, self.appRoot);
};

methods.getFilePath = function (fromDir, to) {
  const self = this;
  const path = require("path");
  return path.resolve(fromDir, to);
};

methods.checkIfIsFile = function (filePath) {
  const self = this;
  const fs = require("fs");
  let stats;
  try {
    stats = fs.statSync(filePath);
    // console.log("FILE STATISTICS", stats);
    const isFile = stats.isFile();
    // console.log("IS FILE", isFile);
    return isFile;
  } catch (error) {
    // console.log("THE STATS THROWN", error);
    return false;
  }
};

module.exports = methods;
