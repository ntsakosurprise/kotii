/**
 * @type Class
 */
const methods = require("./methods");

class Start {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleStartScript = methods.handleStartScript;
  }
}

module.exports = Start;
