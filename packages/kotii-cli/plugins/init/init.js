/**
 * @type Class
 */
const methods = require("./methods");

class Init {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleInitScript = methods.handleInitScript;
  }
}

module.exports = Init;
