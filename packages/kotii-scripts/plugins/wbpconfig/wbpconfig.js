/**
 * @type Class
 */
const methods = require("./methods");
const webPackConfig = require("./webpack.config");
const webpack = require("webpack");

class WebpackConfig {
  constructor(pao) {
    this.pao = pao;
    this.webPackConfig = webPackConfig;
    this.webpack = webpack;

    this.init = methods.init;
    this.handleWebpackConfig = methods.handleWebpackConfig;
    this.configureWebPack = methods.configureWebPack;
    this.giveWebpackFunction = methods.giveWebpackFunction;
    this.setContextEnv = methods.setContextEnv;
    this.configureDevServer = methods.configureDevServer;
  }
}

module.exports = WebpackConfig;
