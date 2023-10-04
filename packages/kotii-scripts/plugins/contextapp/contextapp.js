/**
 * @type Class
 */
const methods = require("./methods");

class ContextApp {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleContextApp = methods.ContextApp;
  }
}

module.exports = ContextApp;
