import methods from "./methods.js";
class Ssg {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.handleStaticGeneration = methods.handleStaticGeneration;
    this.getWebPackConfig = methods.getWebPackConfig;
  }
}
export default Ssg;
