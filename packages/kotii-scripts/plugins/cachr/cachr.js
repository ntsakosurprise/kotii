import methods from "./methods.js";
import NodeCache from ("node-cache");

class Cachr {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.NodeCache = NodeCache
    this.cache = null
    this.handleCache = methods.handleCache;
    this.handleGetData = methods.handleGetData
    this.doCache = methods.doCache
  }
}
export default Cachr;
