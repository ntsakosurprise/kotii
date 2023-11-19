import methods from "./methods.js";
class Cachr {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleCache = methods.handleCache;
  }
}
export default Cachr;
