import * as methods from "./methods.js";

class Session {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.verifyJwtToken = methods.verifyJwtToken;
    this.handleCreateUserSession = methods.handleCreateUserSession;
    this.handleGetUserFromSession = methods.handleGetUserFromSession;
    this.customSession = methods.customSession;
    this.expressSession = methods.expressSession;
    this.getCustomSessionCookie = methods.getCustomSessionCookie;
  }
}

export default Session;
