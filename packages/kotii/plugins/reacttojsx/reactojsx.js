import methods from "./methods.js";
class ReactToJsx {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleConvertionToJsx = methods.handleConvertionToJsx;
  }
}
export default ReactToJsx;
