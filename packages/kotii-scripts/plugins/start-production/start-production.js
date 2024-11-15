import methods from "./methods.js";

class StartProduction {
  constructor(pao) {
    this.pao = pao;
    // this.cwd = path.join(__dirname, "..", "..");

    this.init = methods.init;
    this.handleConfigIsReady = methods.handleConfigIsReady;
    this.doStartUp = methods.doStartUp;
    this.copyFromToFolder = methods.copyFromToFolder;
    this.createFolder = methods.createFolder;
  }
}
export default StartProduction;
