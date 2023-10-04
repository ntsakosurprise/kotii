/**
 * @type Class
 */
const methods = require("./methods");

class ContextApp {
  constructor(pao) {
    this.pao = pao;
    this.appFolder = null;
    this.appRoot = null;

    this.init = methods.init;
    this.handleContextApp = methods.handleContextApp;
    this.getContextAppInfo = methods.getContextAppInfo;
    this.setContexts = methods.setContexts;
  }
}

module.exports = ContextApp;
