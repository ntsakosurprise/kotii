const methods = {};
import fs from "fs";
import { Router } from "kotii-router";
import { ServerStyleSheet } from "kotii-styled";
import path from "path";
import { kotiiKotiiLandPath } from "../../kotii_paths.js";
methods.init = function () {
  this.listens({
    "handle-react-view": this.handleReactView.bind(this),
    "take-ssr-routes": this.handleSsrRoutes.bind(this),
    "set-html-page-settings": this.handleSetHtmlPageSettings.bind(this),
    "handle-react-static": this.handleReactStaticViews.bind(this),
    "handle-react-spa": this.handleReactSpa.bind(this),
    "receive-kotii-env-variables": this.handleReceiveEnvVariables.bind(this)
  });
};
methods.handleSsrRoutes = function (data) {
  const self = this;
  self.debug("THE SSR ROUTES", data, data.payload.routes);
  self.ssrRoutes = data.payload.routes;
};
methods.handleReactView = function (data) {
  const self = this;
  self.debug("Handling ReactView Event", data);
  self.callback = data.callback;
  self.effectsData = {};
  const {
    view,
    payload
  } = data;
  const {
    isRoutePrivate = false
  } = view;
  if (!isRoutePrivate) {
    self.debug("THE VIEW DATA", data);
    self.processViewAfterCheck(data);
  } else {
    self.emit({
      type: "run-view-authentication",
      data: {
        payload: payload,
        callback: authResults => {
          if (authResults) {
            self.processViewAfterCheck(data, authResults);
          } else {
            return self.callback(null, {
              redirect: true,
              code: 302,
              to: "/login"
            });
          }
        }
      }
    });
  }
};
methods.processViewAfterCheck = function (data) {
  let authData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const self = this;
  self.debug("ServerStyleSheet", ServerStyleSheet);
  if (authData) data["authUser"] = authData;
  self.runReactView(data).then(html => {
    self.callback(null, html);
  });
};
methods.handleReactStaticViews = function (data) {
  const self = this;
  // self.debug("Static Views");
  self.callback = data.callback;
  self.effectsData = {};
  self.debug("THE VIEW DATA", data);
  const {
    views
  } = data;
  let mappedPromises = views.map(async view => {
    let gotHtmlView = await self.runReactView({
      view: {
        match: view.path
      },
      route: view,
      staticRender: true
    });
    // self.debug("THE GOT HTML VIEW", gotHtmlView, view.name);
    return {
      content: gotHtmlView,
      name: view.name
    };
  });
  Promise.all(mappedPromises).then(htmlViews => {
    // self.debug("ALL VIEWS PROMISES MAPPED", htmlViews);
    self.callback(htmlViews);
  });
};
methods.handleReactSpa = function (data) {
  const self = this;
  self.debug("Handling ReactView Event", data);
  self.callback = data.callback;
  // self.debug("THE VIEW DATA", data);
  // self.debug("ServerStyleSheet", ServerStyleSheet);
  self.callback(self.renderHtmlSpa());
};
methods.handleSetHtmlPageSettings = function (data) {
  const self = this;
  self.debug("THE SSR ROUTES", data, data.payload);
  self.htmlPageSettings = data.payload.htmlPageSettings;
};
methods.handleReceiveEnvVariables = function (data) {
  const self = this;
  self.debug("THE RECEIVE ENVS", data, data.payload);
  self.kotiiEnvs = data.payload.kotiiEnvs;
};
methods.runReactView = function (data) {
  const self = this;
  const {
    React,
    renderToString,
    REACTAPP,
    // Header,
    // Footer,
    // GlobalStyle,
    createReduxStore,
    HeadHelmet,
    meta
  } = self;
  const {
    view,
    staticRender = false,
    route = null,
    authUser = null
  } = data;
  const {
    app
  } = meta;
  const {
    stateVendor = ""
  } = app;

  // const Layout = (props) => {
  //   return (
  //     <div
  //       style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
  //     >
  //       <Header />
  //       {props.children}
  //       <Footer />
  //     </div>
  //   );
  // };

  // const Root = (props) => {
  //   return (
  //     <div>
  //       <GlobalStyle />
  //       {props.children}
  //     </div>
  //   );
  // };

  // Grab the initial state from our Redux store
  return new Promise(async resolve => {
    var _process$env, _process$env2;
    const store = stateVendor === "redux" ? createReduxStore() : {};
    let stateData = await self.getStateDataFromServer({
      routePath: view.match,
      store,
      staticRender,
      route
    });
    if (!staticRender) {
      await self.runComponentEffects(view.match);
    } else {
      if (route && route.hasEffectsToRun) {
        await self.runComponentEffects(view.match, route);
      }
    }
    let layoutStaticAbsolutePath = process.env.NODE_ENV == "development" ? "/kotii-user-land-aliase/src/components/startup/index" : "/src/components/startup/index.js";
    let layoutRoot = await self.doImport("".concat(layoutStaticAbsolutePath), true, false);
    if (!self.comps) {
      let compsAbsolutePath = process.env.NODE_ENV == "development" ? "/kotii-land/dev/pages.js" : ".kotii-land/bundle-imports.js";
      self.comps = await self.doImport("".concat(compsAbsolutePath), true, false);
    }
    let effectsStore = self.effectsData;
    self.debug("THE LAYOUT ROOT", layoutRoot.Layout);
    self.debug("GOT STATE DATA", stateData);
    self.debug("THE SELF COMPS", self.comps);
    self.debug("VIEW", (_process$env = process.env) === null || _process$env === void 0 ? void 0 : _process$env.useLazyLoad, view);
    //   appWrapper = null,
    // layout = null,
    // goodies=null,
    // storeFromSource = null}=props
    let html = "";
    const sheet = new ServerStyleSheet();
    (_process$env2 = process.env) !== null && _process$env2 !== void 0 && _process$env2.useLazyLoad ? await self.preloadLazyComponents(view) : null;
    let goodies = self.comps;
    // let authUser = {
    //   name: "Ntsako Surprise",
    //   age: "Grown man",
    //   timeNow: new Date(),
    // };
    try {
      html = renderToString(sheet.collectStyles(!layoutRoot ? /*#__PURE__*/React.createElement(Router, {
        ssrPath: view.match
      }, REACTAPP({
        storeFromSource: store,
        goodies,
        effectsStore,
        authUser
      })) : layoutRoot.Layout && layoutRoot.Root ? /*#__PURE__*/React.createElement(Router, {
        ssrPath: view.match
      }, REACTAPP({
        appWrapper: layoutRoot.Root,
        layout: layoutRoot.Layout,
        storeFromSource: store,
        goodies,
        effectsStore,
        authUser
      })) : layoutRoot.Layout ? /*#__PURE__*/React.createElement(Router, {
        ssrPath: view.match
      }, REACTAPP({
        layout: layoutRoot.Layout,
        storeFromSource: store,
        goodies,
        effectsStore,
        authUser
      })) : /*#__PURE__*/React.createElement(Router, {
        ssrPath: view.match
      }, REACTAPP({
        appWrapper: layoutRoot.Root,
        storeFromSource: store,
        effectsStore,
        authUser
      }))));
      const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
      self.styledTags = styleTags;
      self.debug("STYLED-COMPONENTS STYLE TAGS", styleTags);
    } catch (error) {
      // handle error
      console.error(error);
    } finally {
      sheet.seal();
    }

    // try {
    //   html = renderToString(
    //     <Router ssrPath={view.match}>{REACTAPP(Root, Layout, store)}</Router>
    //   );
    // } catch (error) {
    //   self.debug("THE RENDER ERROR", error);
    // }

    const finalState = store.getState();
    const helmetGenerated = HeadHelmet.renderStatic();
    // self.debug("HELMET GENERATED", helmetGenerated.title.toString());
    const fullPage = self.renderFullPage({
      html,
      preloadedState: finalState,
      staticRender,
      view,
      head: helmetGenerated,
      authUser
    });
    self.debug("THE HTML IN RUN REACT-VIEW", fullPage);
    resolve(fullPage);
  });
};
methods.renderHtmlSpa = function () {
  const self = this;
  return "\n\t\t<!doctype html>\n\t\t<html> \n    <head>\n    <link rel=\"stylesheet\" type=\"text/css\" href=\"/tailwind.css\">\n    </head>\n\t\t<body>\n\t\t\t<div id=\"root\"></div>\n      <script src=\"/server.bundle.js\" ></script>\t\n\t\t</body>\n\t\t</html>\n    ";
};
methods.renderFullPage = function () {
  var _process;
  let {
    html,
    preloadedState,
    staticRender,
    view,
    head,
    scripts = [],
    authUser
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  const self = this;
  if (!self.styleTags) self.doKotiiStyles();
  if (self !== null && self !== void 0 && self.htmlPageSettings) self.doPageSettings();
  self.debug("THE PRELOADED STATE", preloadedState);
  return "\n\t\t<!doctype html>\n\t\t<html ".concat(head.htmlAttributes.toString(), "> \n    <head>\n    ").concat(head === null || head === void 0 ? void 0 : head.title.toString(), "\n    ").concat(head === null || head === void 0 ? void 0 : head.meta.toString(), "\n    ").concat(head === null || head === void 0 ? void 0 : head.link.toString(), "\n    ").concat((self === null || self === void 0 ? void 0 : self.styledTags) || "", "\n    ").concat((self === null || self === void 0 ? void 0 : self.styleTags) || "", "\n    ").concat(((_process = process) === null || _process === void 0 || (_process = _process.env) === null || _process === void 0 ? void 0 : _process.NODE_ENV) === "development" ? self.loaderStyles() : "", "\n    ").concat((self === null || self === void 0 ? void 0 : self.pageSettings) || "", "\n\n\n    </head>\n\t\t<body ").concat(head.bodyAttributes.toString(), ">\n\t\t\t<div id=\"root\">").concat(html, "</div>\n\t\t\t").concat(!staticRender ? self.includeScripts(preloadedState, authUser) : null, "\n\t\t\t\n\t\t</body>\n\t\t</html>\n    ");
};
methods.includeScripts = function (preloadedState, authUser) {
  var _self$htmlPageSetting, _process2;
  const self = this;
  const {
    serialize
  } = self;
  let possibleExtraScripts = "";
  self.debug("THE SELF.KOTIIENV", self.kotiiEnvs);
  if (self !== null && self !== void 0 && self.htmlPageSettings && (_self$htmlPageSetting = self.htmlPageSettings) !== null && _self$htmlPageSetting !== void 0 && _self$htmlPageSetting.scripts) {
    // self.htmlPageSettings.scripts.forEach((script) => {
    //   possibleExtraScripts = `${possibleExtraScripts}\n <script src=${script.src}></script>`;
    // });
  }
  return "\n   <script>\n     window.__PRELOADED_STATE__ = ".concat(serialize(preloadedState), "\n     window.__KOTII_EFFECTS_STATE__ = ").concat(serialize(JSON.stringify(self.effectsData)), "\n    window.__KOTII_AUTH_USER__ = ").concat(serialize(JSON.stringify(authUser)), "\n    window.__KOTII_APP_URL__ = ").concat(JSON.stringify((_process2 = process) === null || _process2 === void 0 || (_process2 = _process2.env) === null || _process2 === void 0 ? void 0 : _process2.KOTII_APP_URL), "\n    ").concat(self.getProductionProcess(), "\n   \n    \n     \n   \n   </script>\n   <script src=\"/server.js\" ></script>\n   <script src=\"/kotii-client.js\" ></script>\n   ").concat(possibleExtraScripts, "\n  ");
};
methods.getStateDataFromServer = function () {
  let {
    routePath,
    store,
    staticRender = false,
    route
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  const self = this;
  const routes = !staticRender ? self.ssrRoutes : [route];

  // self.debug("THE FOUND", routes);

  return new Promise((resolve, reject) => {
    let dataFetchPromises = routes.filter((route, i) => {
      if (route.path === routePath && route !== null && route !== void 0 && route.requiresData) {
        return route.requiresData(store);
      }
    });
    Promise.all(dataFetchPromises).then(resolveData => {
      self.debug("THE RESOLVED DATA", resolveData);
      resolve(resolveData);
    });
  });
};
methods.runComponentEffects = function (routePath) {
  let specialRoute = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  const self = this;
  const routes = !specialRoute ? self.ssrRoutes : [specialRoute];
  const effect_id_prefix = "kotii_eff_id_";

  // self.debug("THE FOUND", routes);

  return new Promise((resolve, reject) => {
    let effectsRoute = self.getEffectsRouteList(routes, routePath);
    if (!effectsRoute) return resolve(true);
    self.debug("THE EFFECTS ROUTE", effectsRoute);
    let effectsToRun = effectsRoute.effectsToRun instanceof Array ? effectsRoute.effectsToRun : [effectsRoute.effectsToRun];
    let routeId = effectsRoute.name;
    self.debug("THE EFFECTS TO RUN", effectsToRun);
    let effectsPromises = effectsToRun.map((effectToRun, ID) => {
      let effectID = "".concat(effect_id_prefix).concat(ID + 1);
      return new Promise((resolve, reject) => {
        effectToRun().then(data => {
          self.debug("Kotii effect react:data", data);
          if (!self.effectsData["effectsCount"]) {
            self.effectsData["effectsCount"] = ID + 1;
          } else {
            self.effectsData["effectsCount"] = ID + 1;
          }
          if (!self.effectsData["componentName"]) self.effectsData["componentName"] = routeId;
          if (!self.effectsData[routeId]) self.effectsData[routeId] = {};
          // self.effectsData[routeId][effectID] = data
          if (!self.effectsData[routeId]["data"]) {
            self.effectsData[routeId]["data"] = {};
            self.effectsData[routeId].data[effectID] = {
              userData: data,
              isFirstTimeRun: true
            };
            // self.effectsData.data[routeId] = data
            self.debug("Kotii effect react: self.effects", self.effectsData);
          } else {
            self.effectsData[routeId].data[effectID] = {
              userData: data,
              isFirstTimeRun: true
            };
          }
          resolve(true);
        }).catch(err => {
          self.debug("Kotii effect react:err", err);
          if (!self.effectsData[routeId]) self.effectsData[routeId] = {};
          if (!self.effectsData[routeId]["errors"]) {
            self.effectsData[routeId]["errors"] = {};
            self.effectsData[routeId].errors[effectID] = {
              error: err,
              isFirstTimeRun: true
            };
          } else {
            self.effectsData[routeId].errors[effectID] = {
              error: err,
              isFirstTimeRun: true
            };
          }
          resolve(true);
        });
      });
    });
    self.debug("THE EFFECTS PROMISES", effectsPromises);
    Promise.all(effectsPromises).then(resolveData => {
      self.debug("THE RESOLVED EFFECTS DATA", resolveData);
      resolve(resolveData);
    });
  });
};
methods.getEffectsRouteList = function (routes, routePath) {
  let effectsRouteList = [];
  effectsRouteList = routes.filter(route => {
    if (route.path === routePath && route !== null && route !== void 0 && route.hasEffectsToRun) return true;
  });
  return effectsRouteList.length > 0 ? effectsRouteList[0] : null;
};
methods.doImport = function (toImport) {
  let all = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let check = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const loadFileSync = pao.pa_loadFileSync;
  // self.debug("TIIMPORT", toImport);
  return new Promise((resolve, reject) => {
    // const manifestFile = loadFileSync(toImport);
    // resolve({ module: imported.meta });
    loadFile(toImport, all, check).then(imported => {
      self.debug("Module has successfully been imported:", imported);
      resolve(imported);
    }).catch(err => {
      self.debug("importing module:".concat(toImport, ", has failed with an error:").concat(err));
      reject(err);
    });
  });
};
methods.doKotiiStyles = function () {
  var _process3, _process4, _process5;
  const self = this;
  const jsonStyles = fs.existsSync("".concat(kotiiKotiiLandPath).concat(path.sep, "dev/styles.json")) ? !((_process3 = process) !== null && _process3 !== void 0 && _process3.useLinkStyleTag) ? JSON.parse(fs.readFileSync("".concat(kotiiKotiiLandPath).concat(path.sep, "dev/styles.json"))) : true : null;
  if ((_process4 = process) !== null && _process4 !== void 0 && _process4.tailwindGenerated) self.styleTags = "<link rel=\"stylesheet\" id=\"tailwind-stylesheet-link\" type=\"text/css\" href=\"/".concat(process.tailwindStyleSheetName, "\">");
  if (!jsonStyles) return null;
  if ((_process5 = process) !== null && _process5 !== void 0 && _process5.useLinkStyleTag) {
    self.styleTags = "".concat((self === null || self === void 0 ? void 0 : self.styleTags) || "", "<link rel=\"stylesheet\" type=\"text/css\" id=\"kotii-stylesheet-link\" href=\"/").concat(process.styleSheetName, "\">");
  } else {
    self.styleTags = "".concat((self === null || self === void 0 ? void 0 : self.styleTags) || "", "<style id=\"styles-tag\">").concat(jsonStyles.toString().replaceAll(",", " "), "</style>");
  }
};
methods.doPageSettings = function () {
  var _self$htmlPageSetting2, _self$htmlPageSetting4;
  const self = this;
  let possibleMeta = "";
  let possibleLinks = "";
  if ((_self$htmlPageSetting2 = self.htmlPageSettings) !== null && _self$htmlPageSetting2 !== void 0 && _self$htmlPageSetting2.meta) {
    var _self$htmlPageSetting3;
    const meta = (_self$htmlPageSetting3 = self.htmlPageSettings) === null || _self$htmlPageSetting3 === void 0 ? void 0 : _self$htmlPageSetting3.meta;
    Object.keys(meta).forEach(metaKey => {
      possibleMeta = "".concat(possibleMeta, " <meta name=\"").concat(metaKey, "\" content=\"").concat(meta[metaKey], "\" />");
    });
  }
  if ((_self$htmlPageSetting4 = self.htmlPageSettings) !== null && _self$htmlPageSetting4 !== void 0 && _self$htmlPageSetting4.links) {
    const links = self.htmlPageSettings.links;
    links.forEach(link => {
      possibleLinks = "".concat(possibleLinks, " <link rel=\"stylesheet\" href=\"").concat(link.href, "\"");
    });
  }
  self.pageSettings = "".concat(possibleMeta, " ").concat(possibleLinks);
};
methods.preloadLazyComponents = async function (view) {
  var _self$comps, _loadComponent;
  const self = this;
  self.debug("THE PRELOAD VIEW", view);
  let loadComponent = "";
  let compsList = Object.keys(self.comps.comps);
  for (let i = 0; i < self.comps.routes.length; i++) {
    if (self.comps.routes[i].path === view.match) {
      self.debug("LOAD LAZY COMPONENT", self.comps.routes[i], view.match);
      loadComponent = self.comps.routes[i];
      break;
    }
  }
  console.log("THE COMPS LIST", compsList);
  if (compsList.includes(loadComponent.component)) {
    var _self$comps$comps$loa;
    // console.log("THE COMPONENT EXISTS",await self.comps.comps[loadComponent.component])
    if ((_self$comps$comps$loa = self.comps.comps[loadComponent.component]) !== null && _self$comps$comps$loa !== void 0 && _self$comps$comps$loa.preload) {
      const mod = await self.comps.comps[loadComponent.component].preload();
      self.info("THE PRELOADED MOD", mod);
      if (typeof mod === "function") {
        // 🔥 This triggers evaluation
        const evaluated = mod;

        // Optionally log styled-component ID
        if (evaluated !== null && evaluated !== void 0 && evaluated.styledComponentId) {
          self.debug("✅ styledComponentId:", evaluated.styledComponentId);
        } else {
          self.warn("⛔ No styledComponentId on component");
        }
        return evaluated;
      }
    }
  }
  let markdownCompsRouteIndex = -1;
  if (self !== null && self !== void 0 && (_self$comps = self.comps) !== null && _self$comps !== void 0 && _self$comps.markdownRoutes) {
    for (let i = 0; i < self.comps.markdownRoutes.length; i++) {
      if (self.comps.markdownRoutes[i].path === view.match) {
        self.debug("LOAD LAZY MARKDOWN", self.comps.markdownRoutes[i], view.match);
        markdownCompsRouteIndex = i;
        loadComponent = self.comps.markdownRoutes[i];
        break;
      }
    }
  }
  if ((_loadComponent = loadComponent) !== null && _loadComponent !== void 0 && _loadComponent.markdownComponents) {
    let componentsKeys = Object.keys(loadComponent.markdownComponents);
    let preloads = componentsKeys.map(async component => {
      var _currentComponent$com;
      self.debug("THE COMPONENT PRE-LOAD", component);
      let currentComponent = loadComponent.markdownComponents[component];
      self.debug("THE CURRENT COMPONENT", currentComponent);
      if (currentComponent !== null && currentComponent !== void 0 && (_currentComponent$com = currentComponent.component) !== null && _currentComponent$com !== void 0 && _currentComponent$com.preload) {
        var _currentComponent$com2;
        self.debug("THE COMPONENT PRE-LOAD-ING", component);
        self.comps.markdownRoutes[markdownCompsRouteIndex].markdownComponents[component].component = await ((_currentComponent$com2 = currentComponent.component) === null || _currentComponent$com2 === void 0 ? void 0 : _currentComponent$com2.preload());
      }
    });
    await Promise.all(preloads);
  }
};
methods.loaderStyles = function () {
  return "<style>\n  #loader-overlay {\n    display: none;\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(17, 17, 17, 0.95);\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    z-index: 9999;\n    color: #fff;\n    font-family: Arial, sans-serif;\n    font-size: 1.5rem;\n    text-align: center;\n    transition: opacity 0.3s ease;\n  }\n\n  /* Gradient spinner */\n  .spinner {\n    width: 80px;\n    height: 80px;\n    border-radius: 50%;\n    background: conic-gradient(#4fa3ff, #ff7a5c, #4fa3ff);\n    animation: spin 1s linear infinite;\n    margin-bottom: 20px;\n  }\n\n  @keyframes spin {\n    0% { transform: rotate(0deg); }\n    100% { transform: rotate(360deg); }\n  }\n\n  /* Animated dots */\n  .dots {\n    display: inline-block;\n    margin-top: 10px;\n  }\n\n  .dot {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    margin: 0 3px;\n    background: #fff;\n    border-radius: 50%;\n    animation: bounce 1.2s infinite ease-in-out;\n  }\n\n  .dot:nth-child(1) { animation-delay: 0s; }\n  .dot:nth-child(2) { animation-delay: 0.2s; }\n  .dot:nth-child(3) { animation-delay: 0.4s; }\n\n  @keyframes bounce {\n    0%, 80%, 100% { transform: scale(0); }\n    40% { transform: scale(1); }\n  }\n\n  /* Fade-out */\n  .hidden {\n    opacity: 0;\n    pointer-events: none;\n  }\n</style>";
};
methods.getProductionProcess = function () {
  const self = this;
  if (process.env.NODE_ENV != "production") return "";
  return "window.process = {envs:".concat(JSON.stringify(self.kotiiEnvs), "}");
};
export default methods;