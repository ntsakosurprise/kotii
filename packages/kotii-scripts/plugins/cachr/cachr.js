import NodeCache from "node-cache";
import methods from "./methods.js";

class Cachr {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.NodeCache = NodeCache;
    this.cache = null;
    this.handleCache = methods.handleCache;
    this.handleGetData = methods.handleGetData;
    this.doCache = methods.doCache;
    this.handleDeleteData = methods.handleDeleteData;
  }
}
export default Cachr;
