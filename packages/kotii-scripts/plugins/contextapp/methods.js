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
  const { appFolder } = self;

  const resources = {
    appEnv: self.getFilePath(appFolder, ".env"),
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
