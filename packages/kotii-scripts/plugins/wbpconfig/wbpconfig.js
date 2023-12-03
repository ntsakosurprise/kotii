import webpack from "webpack";
import webpackDevMiddleware from "webpack-dev-middleware";
import webpackHotMiddleware from "webpack-hot-middleware";
import methods from "./methods.js";
import webPackConfig from "./webpack.config.js";
/**
 * @type WebpackConfig
 */
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
export default WebpackConfig;
