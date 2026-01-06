import React from "react";
import methods from "./methods.js";
class Ssg {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.React = React;
    this.handleStaticGeneration = methods.handleStaticGeneration;
    this.renderApp = methods.renderApp;
    this.cleanBuildFolder = methods.cleanBuildFolder;
    this.copyPublicToDist = methods.copyPublicToDist;
    this.createDistFolder = methods.createDistFolder;
    this.savePageToFile = methods.savePageToFile;
    this.readFiles = methods.readFiles;
    this.postBuildStaticResources = methods.postBuildStaticResources;
    this.copyImageFilesSync = methods.copyImageFilesSync;
  }
}
export default Ssg;
