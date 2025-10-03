import * as methods from "./methods.js";

class Session {
  constructor(pao) {
    this.pao = pao;
    this.strategies = { anzii: true, social: true };

    // // methods

    this.init = methods.init;
    this.handleLoginTask = methods.handleLoginTask;
    // this.loginStrategy = methods.loginStrategy
    this.loginUser = methods.loginUser;
    this.anzii = methods.anzii;
    this.social = methods.social;
    this.isUserExist = methods.isUserExist;
    this.compareUser = methods.compareUser;
    this.getUserProfile = methods.getUserProfile;
    // this.findHandler = methods.findHandler
    // this.setTokenHeader = methods.setTokenHeader
    this.preSetImage = methods.preSetImage;
    this.hookFunkToThingy = methods.hookFunkToThingy;
    this.dataRequestHandler = methods.dataRequestHandler;
  }
}

export default Session;
