import babel from "@babel/core";
import methods from "./methods.js";
class JsxToReact {
  constructor(pao) {
    this.pao = pao;
    this.babel = babel;
    this.init = methods.init;
    this.handleConvertionToJsx = methods.handleConvertionToJsx;
    this.buildStringCode = methods.buildStringCode;
  }
}
export default JsxToReact;
