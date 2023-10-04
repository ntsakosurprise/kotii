/**
 * @type Class
 */
const methods = require("./methods");

class WebpackConfig {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleDevServer = methods.handleDevServer;
  }
}

module.exports = WebpackConfig;
