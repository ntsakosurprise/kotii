/**
 * @type Class
 */
const methods = require("./methods");
const webpackDevServer = require("webpack-dev-server");

class DevServer {
  constructor(pao) {
    this.pao = pao;
    this.webpackDevServer = webpackDevServer;

    this.init = methods.init;
    this.handleDevServer = methods.handleDevServer;
  }
}

module.exports = DevServer;
