import React from "react";
import { renderToPipeableStream, renderToString } from "react-dom/server";
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
    this.comps = null;
    this.styledTags = "";
    this.REACTAPP = ServerApp;
    this.effectsData = {};
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
    this.runComponentEffects = methods.runComponentEffects;
    this.getEffectsRouteList = methods.getEffectsRouteList;
    this.includeScripts = methods.includeScripts;
    this.doKotiiStyles = methods.doKotiiStyles;
    this.renderHtmlSpa = methods.renderHtmlSpa;
    this.handleReactSpa = methods.handleReactSpa;
    this.handleSetHtmlPageSettings = methods.handleSetHtmlPageSettings;
    this.doPageSettings = methods.doPageSettings;
    this.preloadLazyComponents = methods.preloadLazyComponents;
    this.processViewAfterCheck = methods.processViewAfterCheck;
    this.loaderStyles = methods.loaderStyles;
    this.handleReceiveEnvVariables = methods.handleReceiveEnvVariables;
    this.getProductionProcess = methods.getProductionProcess;
  }
}
export default ReactView;