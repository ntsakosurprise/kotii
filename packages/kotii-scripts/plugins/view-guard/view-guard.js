import * as methods from "./methods.js";

class ViewGuard {
  constructor(pao) {
    this.pao = pao;

    // // methods

    this.init = methods.init;

    this.handleViewAuthentication = methods.handleViewAuthentication;
  }
}

export default ViewGuard;
