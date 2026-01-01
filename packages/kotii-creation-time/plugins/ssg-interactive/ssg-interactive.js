import methods from "./methods.js";
class SsgInteractive {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;

    this.handleStaticInteractivity = methods.handleStaticInteractivity;
    this.extractPageInteractiveParts = methods.extractPageInteractiveParts;
    this.generatePageJs = methods.generatePageJs;
    this.extractForReactPage = methods.extractForReactPage;
  }
}
export default SsgInteractive;
