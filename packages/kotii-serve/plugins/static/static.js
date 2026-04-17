import methods from "./methods.js";

class Static {
  constructor(pao) {
    this.pao = pao;
    // this.cwd = path.join(__dirname, "..", "..");

    this.init = methods.init;
    this.handleConfigIsReady = methods.handleConfigIsReady;
    this.doStartUp = methods.doStartUp;
    this.copyFromToFolder = methods.copyFromToFolder;
    this.createFolder = methods.createFolder;
    this.doProdRoutes = methods.doProdRoutes;
    this.getEnvVariables = methods.getEnvVariables;
  }
}
export default Static;
