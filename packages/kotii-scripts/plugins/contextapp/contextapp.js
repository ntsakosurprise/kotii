import fs from "fs";
import path from "path";
import methods from "./methods.js";
class ContextApp {
  constructor(pao) {
    this.pao = pao;
    this.appFolder = null;
    this.appRoot = null;
    this.path = path;
    this.fs = fs;
    this.init = methods.init;
    this.handleContextApp = methods.handleContextApp;
    this.getContextAppInfo = methods.getContextAppInfo;
    this.setContexts = methods.setContexts;
    this.getAppInContextResources = methods.getAppInContextResources;
    this.getFilePath = methods.getFilePath;
    this.checkIfIsFile = methods.checkIfIsFile;
    this.doRoutes = methods.doRoutes;
  }
}
export default ContextApp;
