import generate from "@babel/generator";
import parser from "@babel/parser";
import template from "@babel/template";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import webpack from "webpack";
import webpackHotMiddleware from "webpack-hot-middleware";
import methods from "./methods.js";

import webPackServerConfig from "./webpack.server.config.js";

/**
 * @type WebpackConfig
 */
class WebpackConfig {
  constructor(pao) {
    this.pao = pao;
    this.webPackConfig = {};
    this.webPackServerConfig = webPackServerConfig;
    this.addedEmptyFiles = null;
    this.webpack = webpack;
    this.webpackHotMiddleware = webpackHotMiddleware;
    this.fileIsAddOrDelProcessed = false;
    this.lastAddOrDelFile = "";

    this.defaultSettings = {
      pages: {
        onNewPage: {
          openPage: true,
        },
        onDeleteOfPage: {
          openPagee: true,
        },
      },
    };

    this.parser = parser;
    this.traverse = traverse.default;
    this.t = t;
    this.template = template.default;
    this.generate = generate.default;

    this.init = methods.init;
    this.handleWebpackConfig = methods.handleWebpackConfig;
    this.configureWebPack = methods.configureWebPack;
    this.giveWebpackFunction = methods.giveWebpackFunction;
    this.setContextEnv = methods.setContextEnv;
    this.configureDevServer = methods.configureDevServer;
    this.hookIntoWebpackCompilation = methods.hookIntoWebpackCompilation;
    this.getEnvVariables = methods.getEnvVariables;
    this.removePagesImport = methods.removePagesImport;
    this.startWatchingAppFiles = methods.startWatchingAppFiles;
    this.watchFile = methods.watchFile;
    this.notifyClient = methods.notifyClient;
    this.closeFileWatch = methods.closeFileWatch;
    this.closeWatcher = () => {
      console.log("PLUGIN:: DEFAULT FUN RUN");
      return new Promise((resolve) => {
        resolve(true);
      });
    };
    this.restartSever = methods.restartSever;
    this.checkIfIsFile = methods.checkIfIsFile;
    this.createSSLCertificate = methods.createSSLCertificate;
    this.addDomainToHost = methods.addDomainToHost;
    this.addImportLineTCSSModulesJs = methods.addImportLineTCSSModulesJs;
    this.insertIdentifierImportDeclarations =
      methods.insertIdentifierImportDeclarations;
    this.addImportLineTAppJs = methods.addImportLineTAppJs;
    this.runOnceDone = methods.runOnceDone;

    this.hookSocketToServer = methods.hookSocketToServer;
    this.doOldSelectorUpdate = methods.doOldSelectorUpdate;
    this.doNewSelectorUpdate = methods.doNewSelectorUpdate;
    this.getCssUpdateContent = methods.getCssUpdateContent;
    this.doNoneImportsCssUpdates = methods.doNoneImportsCssUpdates;
    this.doImportsCssUpdates = methods.doImportsCssUpdates;
    this.checkMatchType = methods.checkMatchType;
    this.syncContentToParents = methods.syncContentToParents;
    this.removeOutdatedCssFile = methods.removeOutdatedCssFile;
    this.loadCssModuleDataFile = methods.loadCssModuleDataFile;
    this.recursivelyRemoveChildren = methods.recursivelyRemoveChildren;
    this.createCssStyles = methods.createCssStyles;
    this.buildListToRemoveOnClient = methods.buildListToRemoveOnClient;
    this.buildListToAddOnClient = methods.buildListToAddOnClient;
    this.dynamicImport = methods.dynamicImport;
    this.runForTailwindCss = methods.runForTailwindCss;
    this.saveTailwindResources = methods.saveTailwindResources;
    this.diffTailwindCss = methods.diffTailwindCss;
    this.extractTailwindClasses = methods.extractTailwindClasses;
    this.findAddedTailwindClassContent = methods.findAddedTailwindClassContent;
    this.closeWatchersOnShutdown = methods.closeWatchersOnShutdown;
    this.registerForShutdown = methods.registerForShutdown;
    this.runWebpackCompiler = methods.runWebpackCompiler;
    this.kotiiMiddleware = methods.kotiiMiddleware;
    this.safeInvalidate = methods.safeInvalidate;
    this.replaceKotiiJsFilesContent = methods.replaceKotiiJsFilesContent;
    this.getCentralFilesContent = methods.getCentralFilesContent;
    this.closeWatcherAndRestart = methods.closeWatcherAndRestart;
    this.sendReloadSignaOnRestart = methods.sendReloadSignaOnRestart;
    this.getVendorModulesFromVirutal = methods.getVendorModulesFromVirutal;
    this.doImport = methods.doImport;
  }
}
export default WebpackConfig;
