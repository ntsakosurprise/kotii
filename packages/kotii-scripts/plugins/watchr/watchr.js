import chokidar from "chokidar";
import methods from "./methods.js";
class Watchr {
  constructor(pao) {
    this.pao = pao;
    this.chokidar = chokidar;
    this.init = methods.init;
    this.handleWatch = methods.handleWatch;
  }
}
export default Watchr;
