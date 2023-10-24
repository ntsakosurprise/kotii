import methods from "./methods.js";
class Config {
    constructor(pao) {
        this.pao = pao;
        this.init = methods.init;
        this.handleDevConfig = methods.handleDevConfig;
    }
}
export default Config;
