import methods from "./methods.js";
class ServerBuild {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleServerBuild = methods.handleServerBuild;
    this.renderApp = methods.renderApp;
    this.cleanBuildFolder = methods.cleanBuildFolder;
    this.copyPublicToDist = methods.copyPublicToDist;
    this.createDistFolder = methods.createDistFolder;
    this.savePageToFile = methods.savePageToFile;
    this.handleIgnores = methods.handleIgnores;
  }
}
export default ServerBuild;
