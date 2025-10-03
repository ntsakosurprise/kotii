import * as methods from "./methods.js";

import jwt from "jsonwebtoken";

class ViewGuard {
  constructor(pao) {
    this.pao = pao;
    this.jwt = jwt;
    this.key = "randomefyerczhk5r325xsr6";

    // // methods

    this.init = methods.init;
    this.jwtSign = methods.jwtSign;
    this.jwtVerify = methods.jwtVerify;
    this.handleViewAuthentication = methods.handleViewAuthentication;
    this.handleCreateToken = methods.handleCreateToken;
    this.handleVerifyToken = methods.handleVerifyToken;
  }
}

export default ViewGuard;
