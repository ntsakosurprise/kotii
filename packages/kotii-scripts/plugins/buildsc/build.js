/**
 * @type Class
 */
const methods = require("./methods");

class Build {
  constructor(pao) {
    this.pao = pao;

    this.init = methods.init;
    this.handleBuildScript = methods.handleBuildScript;
  }
}

module.exports = Build;
