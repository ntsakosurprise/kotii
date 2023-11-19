import methods from "./methods.js";
class Watchr {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleWatch = methods.handleWatch;
  }
}
export default Watchr;
