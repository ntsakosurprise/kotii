import methods from "./methods.js";

import React from "react";
// import { StaticRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.mjs";

import { renderToString } from "react-dom/server";
import { ServerApp } from "../../app_.js";
// import Header from "./header.jsx";
import { store } from "../../app_redux.js";
import {
  Footer,
  Header,
} from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/layout/index.jsx";
import { GlobalStyle } from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/globals/styles.js";
/**
 * @type ReactView
 */
class ReactView {
  constructor(pao) {
    this.pao = pao;
    this.React = React;
    this.store = store;
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
