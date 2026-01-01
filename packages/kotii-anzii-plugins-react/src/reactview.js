import React from "react";
import { renderToPipeableStream, renderToString } from "react-dom/server";
// import Header from "./header.jsx";
import serialize from "serialize-javascript";
import { ServerApp } from "kotii-internal/app";
import { meta } from "kotii-internal";
import { Head, HeadHelmet } from "kotii-components";
import methods from "./methods.js";

/**
 * @type ReactView
 */
class ReactView {
  constructor(pao) {
    this.pao = pao;
    this.ssrRoutes = null;
    this.React = React;
    // this.createReduxStore = createReduxStore;
    this.comps = null;
    this.styledTags = "";
    this.REACTAPP = ServerApp;

    this.effectsData = {};

    this.renderToString = renderToString;
    this.renderToPipeableStream = renderToPipeableStream;
    this.serialize = serialize;
    this.Head = Head;
    this.HeadHelmet = HeadHelmet;
    this.meta = meta;

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
    this.createAppElement = methods.createAppElement;
    this.generatePageStaticParts = methods.generatePageStaticParts;
    this.getCurrentRouteComponent = methods.getCurrentRouteComponent;
  }
}

export default ReactView;
