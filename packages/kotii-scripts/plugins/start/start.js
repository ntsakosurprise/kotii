/**
 * @type Class
 */
const methods = require("./methods");

class Start {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleStartScript = methods.handleStartScript;
    this.getWebPackConfig = methods.getWebPackConfig;
  }
}

module.exports = Start;
