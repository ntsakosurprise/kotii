import methods from "./methods.js";

class Spa {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleSpaCommand = methods.handleSpaCommand;
    this.doStartUp = methods.doStartUp;
    this.copyFromToFolder = methods.copyFromToFolder;
    this.createFolder = methods.createFolder;
    this.doProdRoutes = methods.doProdRoutes;
    this.getEnvVariables = methods.getEnvVariables;
  }
}
export default Spa;
