/**
 * @type Class
 */
const methods = require("./methods");
const webPackConfig = require("./webpack.config");
const webpack = require("webpack");
const webpackDevMiddleware = require("webpack-dev-middleware");
const webpackHotMiddleware = require("webpack-hot-middleware");

class WebpackConfig {
  constructor(pao) {
    this.pao = pao;
    this.webPackConfig = webPackConfig;
    this.webpack = webpack;
    this.webpackDevMiddleware = webpackDevMiddleware;
    this.webpackHotMiddleware = webpackHotMiddleware;

    this.init = methods.init;
    this.handleWebpackConfig = methods.handleWebpackConfig;
    this.configureWebPack = methods.configureWebPack;
    this.giveWebpackFunction = methods.giveWebpackFunction;
    this.setContextEnv = methods.setContextEnv;
    this.configureDevServer = methods.configureDevServer;
  }
}

module.exports = WebpackConfig;
