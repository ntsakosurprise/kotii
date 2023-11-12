import methods from "./methods.js";
import webpackDevServer from "webpack-dev-server";
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
        this.hookIntoWebpackCompilation = methods.hookIntoWebpackCompilation;
    }
}
export default DevServer;
