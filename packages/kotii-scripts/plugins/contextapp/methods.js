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
  self.getContextAppInfo();
  data.callback({ message: "Context app plugin successfully called" });
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
  const { appFolder, getFilePath, checkIfIsFile } = self;
  checkIfIsFile(getFilePath(appFolder, "package.json"));

  const resources = {
    appEnv: getFilePath(appFolder, ".env"),
    appFolder: getFilePath(appFolder, "."),
    appIndexFile: getFilePath(appFolder, "src/index.js"),
    appSrc: getFilePath(appFolder, "src"),
    appTsConfig: getFilePath(appFolder, "tsconfig.ts"),
    appJsConfig: getFilePath(appFolder, "tsconfig.js"),
    appIndexHtml: getFilePath(appFolder, "public/index.html"),
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
};
methods.getContextAppInfo = function () {
  const self = this;
  const pao = self.pao;

  const createFolderContent = pao.pa_createFolderContent;
  const makeFolderSync = pao.pa_makeFolderSync;

  // self.callback = data.callback;
  self.getAppInContextResources();
  console.log("THE WORKING DIR INFORMATION", self.appFolder, self.appRoot);
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

methods.namespace = function (data) {
  const self = this;

  const clientOptions = { auth: data.creds };
  const bitbucket = new Bitbucket(clientOptions);
  return bitbucket;
};

methods.api = function (data) {
  const self = this;
  const clientOptions = { auth: data.token };
  const bitbucket = new Bitbucket(clientOptions);
  return bitbucket;
};

module.exports = methods;
