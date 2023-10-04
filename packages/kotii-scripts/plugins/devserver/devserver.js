/**
 * @type Class
 */
const methods = require("./methods");

class DevServer {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleDevServer = methods.handleDevServer;
  }
}

module.exports = DevServer;
