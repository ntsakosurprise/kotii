import methods from "./methods.js";
import * as octonode from "octonode";
class Gitauth {
    constructor(pao) {
        this.pao = pao;
        this.github = octonode;
        this.init = methods.init;
        this.handleGitAuth = methods.handleGitAuth;
        this.handleGetGitAuthToken = methods.handleGetGitAuthToken;
        this.authenticate = methods.authenticate;
        this.getToken = methods.getToken;
        this.byUsername = methods.byToken;
    }
}
export default Gitauth;
