import methods from "./methods.js";
class Build {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleBuildScript = methods.handleBuildScript;
    this.doStaticSiteGeneration = methods.doStaticSiteGeneration;
    this.doServerBuildGeneration = methods.doServerBuildGeneration;
    this.getWebPackConfig = methods.getWebPackConfig;
  }
}
export default Build;
