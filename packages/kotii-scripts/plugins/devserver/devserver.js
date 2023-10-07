/**
 * @type Class
 */
import open, { apps, openApp } from "open";
const methods = require("./methods");
const webpackDevServer = require("webpack-dev-server");

class DevServer {
  constructor(pao) {
    this.pao = pao;
    this.webpackDevServer = webpackDevServer;
    this.open = open;
    this.openApp = openApp;
    this.apps = apps;

    this.init = methods.init;
    this.handleDevServer = methods.handleDevServer;
  }
}

module.exports = DevServer;
