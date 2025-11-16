import methods from "./methods.js";
class Bitbucket {
    constructor(pao) {
        this.pao = pao;
        this.init = methods.init;
        this.handleBitbucketAction = methods.handleBitbucketAction;
    }
}
export default Bitbucket;
