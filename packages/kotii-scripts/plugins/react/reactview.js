import methods from "./methods.js";

import React from "react";
// import { StaticRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.mjs";

import { renderToString } from "react-dom/server";
import {
  Footer,
  Header,
} from "../../../kotii-templates/javascript/ssr/src/components/layout/index.jsx";
import { GlobalStyle } from "../../../kotii-templates/javascript/ssr/src/globals/styles.js";
import { ServerApp } from "../../app_.js";

// import * as central from "../../src/store/store";
/**
 * @type ReactView
 */
class ReactView {
  constructor(pao) {
    this.pao = pao;
    this.React = React;
    // this.store = central.store;
    // this.createStore = createStore;
    // this.Provider = Provider;
    this.StaticRouter = StaticRouter;
    this.REACTAPP = ServerApp;
    this.Header = Header;
    this.Footer = Footer;
    this.GlobalStyle = GlobalStyle;
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
