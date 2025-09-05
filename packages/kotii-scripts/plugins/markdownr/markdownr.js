import methods from "./methods";
class Markdownr {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleMardownPages = methods.handleMardownPages;
  }
}
export default Markdownr;
