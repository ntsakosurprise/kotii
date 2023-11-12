import methods from "./methods.js";
import * as octonode from "octonode";
class Github {
    constructor(pao) {
        this.pao = pao;
        this.github = octonode;
        this.init = methods.init;
        this.handleGitAuth = methods.handleGitAuth;
    }
}
export default Github;
