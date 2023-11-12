import methods from "./methods.js";
class Init {
    constructor(pao) {
        this.pao = pao;
        this.init = methods.init;
        this.handleInitScript = methods.handleInitScript;
    }
}
export default Init;
