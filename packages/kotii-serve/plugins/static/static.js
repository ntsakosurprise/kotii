import methods from "./methods.js";

class Static {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleStaticCommand = methods.handleStaticCommand;
  }
}
export default Static;
