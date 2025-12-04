import methods from "./methods.js";
import Configstore from "configstore";
class Configstorer {
    constructor(pao) {
        this.pao = pao;
        this.Configstore = Configstore;
        this.init = methods.init;
        this.handleStoreInConfig = methods.handleStoreInConfig;
        this.handleGetFromConfig = methods.handleGetFromConfig;
    }
}
export default Configstorer;
