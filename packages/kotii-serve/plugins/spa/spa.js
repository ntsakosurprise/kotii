import methods from "./methods.js";

class Spa {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleSpaCommand = methods.handleSpaCommand;
    this.handleCatchAll = methods.handleCatchAll;
  }
}
export default Spa;
