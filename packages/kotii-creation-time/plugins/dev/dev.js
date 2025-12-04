import methods from "./methods.js";
class Dev {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleDevScript = methods.handleDevScript;
    this.getWebPackConfig = methods.getWebPackConfig;
  }
}
export default Dev;
