import * as methods from "./methods.js";

class Session {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.verifyJwtToken = methods.verifyJwtToken;
    this.handleCreateUserSession = methods.handleCreateUserSession;
    this.handleGetUserFromSession = methods.handleGetUserFromSession;
    this.handleViewGuard = methods.handleViewGuard;
    this.handleShareMiddleware = methods.handleShareMiddleware
    this.customSession = methods.customSession;
    this.expressSession = methods.expressSession;
    this.getCustomSessionCookie = methods.getCustomSessionCookie;
    this.getUserFromSession = methods.getUserFromSession
    this.token = methods.token
    this.endRequestSession = methods.endRequestSession
    this.auth = methods.auth
    this.handleDestroyUserSession = methods.handleDestroyUserSession
    this.expressSession = methods.expressSession

  }
}

export default Session;
