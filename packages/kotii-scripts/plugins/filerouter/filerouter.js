/**
 * @type Class
 */

const methods = require("./methods");
const { globSync } = require("glob");

class FileRouter {
  constructor(pao) {
    this.pao = pao;
    this.globSync = globSync;
    // this.openApp = openApp;
    // this.apps = apps;

    this.init = methods.init;
    this.handleFileRoutes = methods.handleFileRoutes;
    this.dynamicImport = methods.dynamicImport;
    this.createRouterComponents = methods.createRouterComponents;
    this.getPages = methods.getPages;
    this.getItemPathAndFile = methods.getItemPathAndFile;
  }
}

module.exports = FileRouter;
