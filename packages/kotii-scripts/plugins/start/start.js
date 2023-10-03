/**
 * @type Class
 */
const methods = require("./methods");

class Start {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleStartScripts = methods.handleStartScripts;
  }
}

module.exports = Start;
