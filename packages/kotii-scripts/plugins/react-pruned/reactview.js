import React from "react";
import { renderToPipeableStream, renderToString } from "react-dom/server";
// import { StaticRouter } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server.mjs";
// import Header from "./header.jsx";
import serialize from "serialize-javascript";
import { ServerApp } from "../../kotii-land/prod/app_b.js";
import createReduxStore from "../../kotii-land/prod/app_redux.js";
import { meta } from "../../kotii-land/prod/manifest.js";
import { Head, HeadHelmet } from "../../react-components-pruned/index.js";
import methods from "./methods.js";
// import {
//   Footer,
//   Header,
// } from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/layout/index.jsx";
// import { GlobalStyle } from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/globals/styles.js";

/**
 * @type ReactView
 */
class ReactView {
  constructor(pao) {
    this.pao = pao;
    this.ssrRoutes = null;
    this.React = React;
    this.createReduxStore = createReduxStore;
    // this.Provider = Provider;
    this.StaticRouter = StaticRouter;
    this.styledTags = "";
    this.REACTAPP = ServerApp;
    // this.Header = Header;
    // this.Footer = Footer;
    // this.GlobalStyle = GlobalStyle;
    this.renderToString = renderToString;
    this.renderToPipeableStream = renderToPipeableStream;
    this.serialize = serialize;
    this.Head = Head;
    this.HeadHelmet = HeadHelmet;
    this.meta = meta;

    // this.currentReactView = nul/

    // // methods

    this.init = methods.init;
    this.handleReactView = methods.handleReactView;
    this.runReactView = methods.runReactView;
    this.renderFullPage = methods.renderFullPage;
    this.handleSsrRoutes = methods.handleSsrRoutes;
    this.getStateDataFromServer = methods.getStateDataFromServer;
    this.handleReactStaticViews = methods.handleReactStaticViews;
    this.doImport = methods.doImport;
  }
}
export default ReactView;