/**
 * @type Class
 */
const kotiiRouter = require("kotii-router");

const methods = require("./methods");

class ContextApp {
  constructor(pao) {
    this.pao = pao;
    this.appFolder = null;
    this.appRoot = null;
    this.router = kotiiRouter;

    this.init = methods.init;
    this.handleContextApp = methods.handleContextApp;
    this.getContextAppInfo = methods.getContextAppInfo;
    this.setContexts = methods.setContexts;
    this.getAppInContextResources = methods.getAppInContextResources;
    this.getFilePath = methods.getFilePath;
    this.checkIfIsFile = methods.checkIfIsFile;
    this.doRoutes = methods.doRoutes;
  }
}

module.exports = ContextApp;
