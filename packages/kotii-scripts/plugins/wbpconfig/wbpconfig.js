/**
 * @type Class
 */
const methods = require("./methods");
const webPackConfig = require("./webpack.config");

class WebpackConfig {
  constructor(pao) {
    this.pao = pao;
    this.webPackConfig = webPackConfig;

    this.init = methods.init;
    this.handleWebpackConfig = methods.handleWebpackConfig;
    this.configureWebPack = methods.configureWebPack;
  }
}

module.exports = WebpackConfig;
