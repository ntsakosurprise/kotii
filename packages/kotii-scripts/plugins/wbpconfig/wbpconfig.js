/**
 * @type Class
 */
const methods = require("./methods");

class WebpackConfig {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleWebpackConfig = methods.handleWebpackConfig;
  }
}

module.exports = WebpackConfig;
