import methods from "./methods.js";
class Static {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleStaticScript = methods.handleStaticScript;
    this.getWebPackConfig = methods.getWebPackConfig;
  }
}
export default Static;
