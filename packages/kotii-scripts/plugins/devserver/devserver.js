/**
 * @type Class
 */

const methods = require("./methods");
const webpackDevServer = require("webpack-dev-server");

class DevServer {
  constructor(pao) {
    this.pao = pao;
    this.webpackDevServer = webpackDevServer;
    this.open = null;
    // this.openApp = openApp;
    // this.apps = apps;

    this.init = methods.init;
    this.handleDevServer = methods.handleDevServer;
    this.dynamicImport = methods.dynamicImport;
  }
}

module.exports = DevServer;
