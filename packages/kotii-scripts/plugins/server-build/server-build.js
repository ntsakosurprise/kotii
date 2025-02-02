import generate from "@babel/generator";
import parser from "@babel/parser";
import template from "@babel/template";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import methods from "./methods.js";

class ServerBuild {
  constructor(pao) {
    this.pao = pao;
    this.parser = parser;
    this.traverse = traverse.default;
    this.t = t;
    this.template = template.default;
    this.generate = generate.default;
    this.assetsManifestData = null;
    // this.kotiiScriptsPath = path.join(__dirname, "..", "..");

    this.init = methods.init;
    this.handleServerBuild = methods.handleServerBuild;
    this.renderApp = methods.renderApp;
    this.cleanBuildFolder = methods.cleanBuildFolder;
    this.copyPublicToDist = methods.copyPublicToDist;
    this.createDistFolder = methods.createDistFolder;
    this.savePageToFile = methods.savePageToFile;
    this.handleIgnores = methods.handleIgnores;
    this.removeJsxReferences = methods.removeJsxReferences;
    this.updateJSXImportDeclarations = methods.updateJSXImportDeclarations;
    this.doKotiiLandPagesFile = methods.doKotiiLandPagesFile;
    this.syncDirectories = methods.syncDirectories;
    this.addObjectExpressionProperty = methods.addObjectExpressionProperty;
    this.saveRoutesInUserLand = methods.saveRoutesInUserLand;
    this.getKotiiConfigTemplate = methods.getKotiiConfigTemplate;
    this.getStylesMap = methods.getStylesMap;
    this.processStylesNodes = methods.processStylesNodes;
    this.processDataNodes = methods.processDataNodes;
  }
}
export default ServerBuild;
