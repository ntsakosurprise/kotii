import methods from "./methods.js";

import React from "react";
import { Provider } from "react-redux";
import { StaticRouter } from "react-router-dom";
import { createStore } from "redux";

import { renderToString } from "react-dom/server";
import App from "../../src/sevcode";
import * as central from "../../src/store/store";

class ReactView {
  constructor(pao) {
    this.pao = pao;
    this.React = React;
    this.store = central.store;
    this.createStore = createStore;
    this.Provider = Provider;
    this.StaticRouter = StaticRouter;
    this.REACTAPP = App;
    this.renderToString = renderToString;
    // this.currentReactView = nul/

    // // methods

    this.init = methods.init;
    this.handleReactView = methods.handleReactView;
    this.runReactView = methods.runReactView;
    this.renderFullPage = methods.renderFullPage;
  }
}

export default ReactView;
