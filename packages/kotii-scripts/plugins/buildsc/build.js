import methods from "./methods.js";
class Build {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleBuildScript = methods.handleBuildScript;
    this.doServerBuildGeneration = methods.doServerBuildGeneration;
    this.getWebPackConfig = methods.getWebPackConfig;
  }
}
export default Build;
