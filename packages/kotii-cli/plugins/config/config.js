/**
 * @type Class
 */
const methods = require("./methods");

class Config {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleDevConfig = methods.handleDevConfig;
  }
}

module.exports = Config;
