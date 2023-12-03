import methods from "./methods.js";

import React from "react";
import { StaticRouter } from "react-router-dom";

import { renderToString } from "react-dom/server";
import { RoutesAsServerRoutes } from "../../build.js";
// import * as central from "../../src/store/store";

class ReactView {
  constructor(pao) {
    this.pao = pao;
    this.React = React;
    // this.store = central.store;
    // this.createStore = createStore;
    // this.Provider = Provider;
    this.StaticRouter = StaticRouter;
    this.REACTAPP = RoutesAsServerRoutes;
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
