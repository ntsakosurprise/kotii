import methods from "./methods.js";
class StartProduction {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleConfigIsReady = methods.handleConfigIsReady;
    this.doStartUp = methods.doStartUp;
  }
}
export default StartProduction;
