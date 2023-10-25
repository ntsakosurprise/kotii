import babel from "@babel/core";
import fs from "fs";
import { globSync } from "glob";
import path from "path";
import methods from "./methods.js";

class FileRouter {
  constructor(pao) {
    this.pao = pao;
    this.globSync = globSync;
    this.babel = babel;
    this.fs = fs;
    this.path = path;
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
  }
}
export default FileRouter;
