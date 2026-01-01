import React from "react";
import methods from "./methods.js";
class SsgInteractive {
  constructor(pao) {
    this.pao = pao;
    this.init = methods.init;
    this.React = React;
    this.handleStaticInteractivity = methods.handleStaticInteractivity;
    this.extractPageInteractiveParts = methods.extractPageInteractiveParts;
    this.generatePageJs = methods.generatePageJs;
  }
}
export default SsgInteractive;
