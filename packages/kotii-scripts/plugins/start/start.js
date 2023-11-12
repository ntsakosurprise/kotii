import methods from "./methods.js";
class Start {
    constructor(pao) {
        this.pao = pao;
        this.init = methods.init;
        this.handleStartScript = methods.handleStartScript;
        this.getWebPackConfig = methods.getWebPackConfig;
    }
}
export default Start;
