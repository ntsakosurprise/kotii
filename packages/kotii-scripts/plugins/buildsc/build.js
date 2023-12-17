import methods from "./methods.js";
class Build {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleBuildScript = methods.handleBuildScript;
    this.doStaticSiteGeneration = methods.doStaticSiteGeneration;
  }
}
export default Build;
