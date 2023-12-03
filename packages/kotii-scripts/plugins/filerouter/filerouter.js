import babel from "@babel/core";
import generate from "@babel/generator";
import parser from "@babel/parser";
import template from "@babel/template";
import traverse from "@babel/traverse";
import * as t from "@babel/types";
import execSync from "child_process";
import fs from "fs";
import { globSync } from "glob";
// import { createRequire } from "module";
import path from "path";
import React from "react";
import routerDom from "react-router-dom";
import methods from "./methods.js";

// const require = createRequire(import.meta.url);
const { BrowserRouter, Switch } = routerDom;
// exec('npm run dev')
// import Public from "../Public/component.js";

class FileRouter {
  constructor(pao) {
    this.pao = pao;
    this.globSync = globSync;
    this.babel = babel;
    this.React = React;
    this.BrowserRouter = BrowserRouter;
    this.Switch = Switch;
    this.fs = fs;
    this.path = path;
    // this.require = require;
    this.parser = parser;
    this.traverse = traverse.default;
    this.t = t;
    this.template = template.default;
    this.generate = generate.default;
    this.execSync = execSync.spawn;
    this.keys = {
      SAVE_FILES_KEY: "SAVE_FILES_KEY",
      CACHE_ROUTES_PATHS_KEY: "CACHE_ROUTES_PATHS_KEY",
    };

    // this.openApp = openApp;
    // this.apps = apps;
    this.init = methods.init;
    this.handleFileRoutes = methods.handleFileRoutes;
    this.dynamicImport = methods.dynamicImport;
    this.createRouterComponents = methods.createRouterComponents;
    this.getPages = methods.getPages;
    this.getItemPathAndFile = methods.getItemPathAndFile;
    this.buildFile = methods.buildFile;
    this.buildStringCode = methods.buildStringCode;
    this.parseJsxToReact = methods.parseJsxToReact;
    this.getSourceCodes = methods.getSourceCodes;
    this.enableBabelRegister = methods.enableBabelRegister;
    this.addToAST = methods.addToAST;
    this.variableCreation = methods.variableCreation;
    this.funcToJsx = methods.funcToJsx;
    this.doImports = methods.doImports;
    this.doImport = methods.doImport;
    this.insertImportDeclarations = methods.insertImportDeclarations;
    this.checkForSavedFiles = methods.checkForSavedFiles;
    this.watchFileAddEvent = methods.watchFileAddEvent;
    this.updateCacheData = methods.updateCacheData;
    this.watchFileDeleteEvent = methods.watchFileDeleteEvent;
    this.cacheData = methods.cacheData;
    this.getRoutesHelper = methods.getRoutesHelper;
    this.astAddNode = methods.astAddNode;
    this.astDeleteNode = methods.astDeleteNode;
    this.removeImportDeclarations = methods.removeImportDeclarations;
    this.createMetaAst = methods.createMetaAst;
    this.merge = methods.merge;
  }
}
export default FileRouter;
