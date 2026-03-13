/* eslint-disable no-async-promise-executor */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const methods = {};
import fs from "fs";
import { Router, resolveHead } from "kotii-router";
import { ServerStyleSheet } from "kotii-styled";
import { HeadProvider, createHeadStore } from "kotii-head";
import path from "path";
// import { kotiiKotiiLandPath } from "kotii-creation-time/root";
// import { kotiiInternal } from "kotii-internal/root";
import {
  USER_LAND_ALIAS_START_UP,
  USER_LAND_ALIAS_PAGES,
  USER_LAND_ALIAS_STYLES_JSON,
  USER_LAND_ALIASES,
  ENV_PRODUCTION,
  ENV_DEVELOPMENT,
} from "kotii-internal/user";

methods.init = function () {
  this.listens({
    "handle-react-view": this.handleReactView.bind(this),
    "take-ssr-routes": this.handleSsrRoutes.bind(this),
    "set-html-page-settings": this.handleSetHtmlPageSettings.bind(this),
    "handle-react-static": this.handleReactStaticViews.bind(this),
    "handle-react-spa": this.handleReactSpa.bind(this),
    "receive-kotii-env-variables": this.handleReceiveEnvVariables.bind(this),
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
  const { view, payload } = data;
  const { isRoutePrivate = false } = view;

  if (!isRoutePrivate) {
    self.debug("THE VIEW DATA", data);
    self.processViewAfterCheck(data);
  } else {
    self.emit({
      type: "run-view-authentication",
      data: {
        payload: payload,
        callback: (authResults) => {
          if (authResults) {
            self.processViewAfterCheck(data, authResults);
          } else {
            return self.callback(null, {
              redirect: true,
              code: 302,
              to: "/login",
            });
          }
        },
      },
    });
  }
};

methods.processViewAfterCheck = function (data, authData = null) {
  const self = this;
  self.debug("ServerStyleSheet", ServerStyleSheet);
  if (authData) data["authUser"] = authData;
  self.runReactView(data).then((html) => {
    self.callback(null, html);
  });
};

methods.handleReactStaticViews = function (data) {
  const self = this;
  // self.debug("Static Views");
  self.callback = data.callback;
  self.effectsData = {};

  self.debug("THE VIEW DATA", data);
  const { views, info } = data;
  let mappedPromises = views.map(async (view) => {
    let gotHtmlView = await self.runReactView({
      view: {
        match: view.path,
        htmlPath: view.htmlPath,
        componentSourcePath: view.componentSourcePath,
      },
      route: view,
      staticRender: true,
      info: info,
    });
    self.debug("THE GOT HTML VIEW", gotHtmlView, view.name);
    return {
      content: gotHtmlView,
      name: view.name,
      staticPath: view?.staticPath || "",
      htmlPath: view?.htmlPath || "",
    };
  });
  Promise.all(mappedPromises).then((htmlViews) => {
    self.debug("ALL VIEWS PROMISES MAPPED", self.styledTags);
    self.callback({
      htmlViews,
      styles: self.styledTags,
      jsStaticFilesToSave: self.pageJsPackages,
    });
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
  const { REACTAPP, React } = self;

  const { renderToString, HeadHelmet, meta } = self;
  const {
    view,
    staticRender = false,
    route = null,
    authUser = null,
    info = null,
  } = data;
  const { app } = meta;
  const { stateVendor = "" } = app;

  self.debug("THE PROCESS.REACT");

  // Grab the initial state from our Redux store
  return new Promise(async (resolve) => {
    const { loadRedux } = await import("kotii-internal");
    let isRedux = true;
    // console.log("THE CREATE FUNCTION IMPORT", createReduxStore)
    self.reduxResources = isRedux ? await loadRedux() : null;
    self.debug("SELF.REDUX RESOURCES", self.reduxResources);
    const store = self?.reduxResources
      ? await self.reduxResources.createReduxStore(
          {},
          self.reduxResources.reducers,
          self.reduxResources.reduxFuncs,
          self.reduxResources.reduxThunk
        )
      : null;
    console.log("THE CREATE RESULT STORE", store);
    let stateData = await self.getStateDataFromServer({
      routePath: view.match,
      store,
      staticRender,
      route,
    });
    // This piece of code will be re-factored
    if (!staticRender) {
      await self.runComponentEffects(view.match);
    } else {
      if (route && route.hasEffectsToRun) {
        await self.runComponentEffects(view.match, route);
      }
    }

    let layoutStaticAbsolutePath = USER_LAND_ALIAS_START_UP;
    let layoutRoot = await self.doImport(
      `${layoutStaticAbsolutePath}`,
      true,
      false
    );
    if (!self.comps) {
      let compsAbsolutePath = USER_LAND_ALIAS_PAGES;
      self.debug("THE COMPLETE ABS", compsAbsolutePath);
      self.comps = await self.doImport(`${compsAbsolutePath}`, true, false);
    }

    let effectsStore = self.effectsData;

    self.debug("THE LAYOUT ROOT", layoutRoot.Layout);
    self.debug("GOT STATE DATA", stateData);
    self.debug("THE SELF COMPS", self.comps);
    self.debug("VIEW", process.env?.useLazyLoad, view);
    //   appWrapper = null,
    // layout = null,
    // goodies=null,
    // storeFromSource = null}=props
    let html = "";

    const sheet = new ServerStyleSheet();
    process.env?.useLazyLoad ? await self.preloadLazyComponents(view) : null;

    if (isRedux) {
      const { OptionalDynamiceReduxWrapperLazy } = await import(
        "kotii-internal"
      );
      await OptionalDynamiceReduxWrapperLazy.preload();
    }

    let goodies = self.comps;

    try {
      const context = createHeadStore();
      self.debug("THE HEAD STORE", context);
      let generatedPage;
      let CurrentRouteComp = self.getCurrentRouteComponent(view);
      self.debug("THE REACT COMPONENT FROM GENERATE", view);
      let Page = sheet.collectStyles(
        self.createAppElement({
          store,
          layoutRoot,
          goodies,
          authUser,
          view,
          context,
        })
      );
      generatedPage = await self.generatePageStaticParts(Page, view);
      const { html, pageJs = "", pageJsPackages } = generatedPage;

      self.debug("THE STATIC PART JS FROM SSG", pageJs);
      console.log("THE FINAL STATE", store, store.getState());
      const finalState = store.getState() || store;
      const helmetGenerated = HeadHelmet.renderStatic();
      self.doStyledSheets(sheet);

      // self.debug("HELMET GENERATED", helmetGenerated.title.toString());
      self["pageJsPackages"] = pageJsPackages;
      const fullPage = self.renderStaticFullPage({
        html,
        pageJs,
        head: helmetGenerated,
        info,
        pageJsPackages,
      });
      self.debug("THE HTML IN RUN REACT-VIEW", fullPage);
      resolve(fullPage);

      // const context = createHeadStore();
      // self.debug("THE HEAD STORE", context);
      // html = renderToString(
      //   sheet.collectStyles(
      //     self.createAppElement({
      //       store,
      //       layoutRoot,
      //       goodies,
      //       authUser,
      //       view,
      //       context,
      //     })
      //   )
      // );
      // const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
      // self.styledTags = styleTags;
      // self.debug("STYLED-COMPONENTS STYLE TAGS", styleTags);
      // self.debug("THE HEAD STORE AFTER CREATE HEAD", context.getEntries());
    } catch (error) {
      // handle error
      console.error(error);
    } finally {
      sheet.seal();
    }

    // console.log("THE FINAL STATE", store, store.getState());
    // const finalState = store.getState() || store;
    // const helmetGenerated = HeadHelmet.renderStatic();
    // // self.debug("HELMET GENERATED", helmetGenerated.title.toString());
    // const fullPage = self.renderFullPage({
    //   html,
    //   preloadedState: finalState,
    //   staticRender,
    //   view,
    //   head: helmetGenerated,
    //   authUser,
    // });
    // self.debug("THE HTML IN RUN REACT-VIEW", fullPage);
    // resolve(fullPage);
  });
};

methods.renderHtmlSpa = function () {
  const self = this;

  return `
		<!doctype html>
		<html> 
    <head>
    <link rel="stylesheet" type="text/css" href="/tailwind.css">
    </head>
		<body>
			<div id="root"></div>
      <script src="/server.bundle.js" ></script>	
		</body>
		</html>
    `;
};

methods.renderFullPage = function ({
  html,
  preloadedState,
  staticRender,

  view,
  head,
  scripts = [],
  authUser,
} = props) {
  const self = this;
  if (!self.styleTags) self.doKotiiStyles();
  if (self?.htmlPageSettings) self.doPageSettings();
  self.debug("THE HTML IN RENDER FULL", html);

  self.debug("THE PRELOADED STATE", preloadedState);
  return `
		<!doctype html>
		<html ${head.htmlAttributes.toString()}> 
    <head>
    ${head?.title.toString()}
    ${head?.meta.toString()}
    ${head?.link.toString()}
    ${self?.styledTags || ""}
    ${self?.styleTags || ""}
    ${process?.env?.NODE_ENV === ENV_DEVELOPMENT ? self.loaderStyles() : ""}
    ${self?.pageSettings || ""}


    </head>
		<body ${head.bodyAttributes.toString()}>
			<div id="root">${html}</div>
			${
        !staticRender
          ? self.includeScripts(preloadedState, authUser)
          : self.includeScripts(preloadedState, authUser)
      }
			
		</body>
		</html>
    `;
};
methods.renderStaticFullPage = function ({
  html,
  info,
  head,
  pageJs = "test.js",
  pageJsPackages,
} = props) {
  const self = this;

  if (self?.htmlPageSettings) self.doPageSettings();
  self.debug("THE HTML IN RENDER FULL", html);

  return `
		<!doctype html>
		<html ${head.htmlAttributes.toString()}> 
    <head>
    ${head?.title.toString()}
    ${head?.meta.toString()}

    ${self?.pageSettings || ""}
    <link rel="stylesheet" type="text/css" id="kotii-stylesheet-link" href="css/${
      info.css
    }" />
    </head>
		<body ${head.bodyAttributes.toString()}>
		 <div id="root">${html}</div>
		<script> window.process = {env:${process.env.APP_ENVS}} </script>
    <script src="./assets/vendor/bootstrap.js"></script>
    <script src="./assets/vendor/packages.js"></script>
    <script >${pageJs}</script>
    
     
			
		</body>
		</html>
    `;
};
methods.includeScripts = function (preloadedState, authUser) {
  const self = this;
  const { serialize } = self;
  let possibleExtraScripts =
    process?.env?.NODE_ENV !== ENV_PRODUCTION
      ? `<script src="/kotii-client.js" ></script>`
      : "";
  self.debug("THE SELF.KOTIIENV", self.kotiiEnvs);
  if (self?.htmlPageSettings && self.htmlPageSettings?.scripts) {
    // self.htmlPageSettings.scripts.forEach((script) => {
    //   possibleExtraScripts = `${possibleExtraScripts}\n <script src=${script.src}></script>`;
    // });
  }

  return `
   <script>
     window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
     window.__KOTII_EFFECTS_STATE__ = ${serialize(
       JSON.stringify(self.effectsData)
     )}
    window.__KOTII_AUTH_USER__ = ${serialize(JSON.stringify(authUser))}
    window.__KOTII_APP_URL__ = ${JSON.stringify(process?.env?.KOTII_APP_URL)}
    ${self.getProductionProcess()}
  
   </script>
   <script src="/server.js" ></script>
   ${possibleExtraScripts}
  `;
};

methods.getStateDataFromServer = function ({
  routePath,
  store,
  staticRender = false,
  route,
} = props) {
  const self = this;
  const routes = !staticRender ? self.ssrRoutes : [route];

  // self.debug("THE FOUND", routes);

  return new Promise((resolve, reject) => {
    const dataFetchPromises = routes
      .filter((route) => route.path === routePath && route?.requiresData)
      .map((route) => {
        self.debug("THE ROUTE REQUIRES");
        return route.requiresData(store);
      });

    Promise.all(dataFetchPromises)
      .then((resolveData) => {
        self.debug("THE RESOLVED DATA", resolveData);
        resolve(resolveData);
      })
      .catch(reject);
  });
};

methods.runComponentEffects = function (routePath, specialRoute = null) {
  const self = this;
  const routes = !specialRoute ? self.ssrRoutes : [specialRoute];
  const effect_id_prefix = "kotii_eff_id_";

  // self.debug("THE FOUND", routes);

  return new Promise((resolve, reject) => {
    let effectsRoute = self.getEffectsRouteList(routes, routePath);
    if (!effectsRoute) return resolve(true);

    self.debug("THE EFFECTS ROUTE", effectsRoute);
    let effectsToRun =
      effectsRoute.effectsToRun instanceof Array
        ? effectsRoute.effectsToRun
        : [effectsRoute.effectsToRun];
    let routeId = effectsRoute.name;
    self.debug("THE EFFECTS TO RUN", effectsToRun);

    let effectsPromises = effectsToRun.map((effectToRun, ID) => {
      let effectID = `${effect_id_prefix}${ID + 1}`;
      return new Promise((resolve, reject) => {
        effectToRun()
          .then((data) => {
            self.debug("Kotii effect react:data", data);

            if (!self.effectsData["effectsCount"]) {
              self.effectsData["effectsCount"] = ID + 1;
            } else {
              self.effectsData["effectsCount"] = ID + 1;
            }

            if (!self.effectsData["componentName"])
              self.effectsData["componentName"] = routeId;
            if (!self.effectsData[routeId]) self.effectsData[routeId] = {};
            // self.effectsData[routeId][effectID] = data
            if (!self.effectsData[routeId]["data"]) {
              self.effectsData[routeId]["data"] = {};
              self.effectsData[routeId].data[effectID] = {
                userData: data,
                isFirstTimeRun: true,
              };
              // self.effectsData.data[routeId] = data
              self.debug("Kotii effect react: self.effects", self.effectsData);
            } else {
              self.effectsData[routeId].data[effectID] = {
                userData: data,
                isFirstTimeRun: true,
              };
            }
            resolve(true);
          })
          .catch((err) => {
            self.debug("Kotii effect react:err", err);
            if (!self.effectsData[routeId]) self.effectsData[routeId] = {};
            if (!self.effectsData[routeId]["errors"]) {
              self.effectsData[routeId]["errors"] = {};
              self.effectsData[routeId].errors[effectID] = {
                error: err,
                isFirstTimeRun: true,
              };
            } else {
              self.effectsData[routeId].errors[effectID] = {
                error: err,
                isFirstTimeRun: true,
              };
            }
            resolve(true);
          });
      });
    });
    self.debug("THE EFFECTS PROMISES", effectsPromises);

    Promise.all(effectsPromises).then((resolveData) => {
      self.debug("THE RESOLVED EFFECTS DATA", resolveData);
      resolve(resolveData);
    });
  });
};
methods.getEffectsRouteList = function (routes, routePath) {
  let effectsRouteList = [];
  effectsRouteList = routes.filter((route) => {
    if (route.path === routePath && route?.hasEffectsToRun) return true;
  });

  return effectsRouteList.length > 0 ? effectsRouteList[0] : null;
};
methods.doImport = function (toImport, all = false, check = true) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const loadFileSync = pao.pa_loadFileSync;
  // self.debug("TIIMPORT", toImport);
  return new Promise((resolve, reject) => {
    // const manifestFile = loadFileSync(toImport);
    // resolve({ module: imported.meta });
    loadFile(toImport, all, check)
      .then((imported) => {
        self.debug("Module has successfully been imported:", imported);
        resolve(imported);
      })
      .catch((err) => {
        self.debug(
          `importing module:${toImport}, has failed with an error:${err}`
        );
        reject(err);
      });
  });
};
methods.doKotiiStyles = function () {
  const self = this;

  self.debug("USER LAND.REACT.DOSTYLES", USER_LAND_ALIAS_STYLES_JSON);

  if (process?.env?.NODE_ENV !== ENV_PRODUCTION) {
    const jsonStyles = fs.existsSync(
      `${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_JSON]}`
    )
      ? !process?.useLinkStyleTag
        ? JSON.parse(
            fs.readFileSync(`${USER_LAND_ALIASES[USER_LAND_ALIAS_STYLES_JSON]}`)
          )
        : true
      : null;
    if (process?.tailwindGenerated)
      self.styleTags = `<link rel="stylesheet" id="tailwind-stylesheet-link" type="text/css" href="/${process.tailwindStyleSheetName}" />`;
    if (!jsonStyles) return null;
    if (process?.useLinkStyleTag) {
      self.styleTags = `${
        self?.styleTags || ""
      }<link rel="stylesheet" type="text/css" id="kotii-stylesheet-link" href="/${
        process?.styleSheetName || "index.css"
      }" />`;
    } else {
      self.styleTags = `${
        self?.styleTags || ""
      }<style id="styles-tag">${jsonStyles
        .toString()
        .replaceAll(",", " ")}</style>`;
    }
  } else {
    self.styleTags = `<link rel="stylesheet" type="text/css" href="/css/index.css">`;
  }
};

methods.doPageSettings = function () {
  const self = this;

  let possibleMeta = "";
  let possibleLinks = "";
  if (self.htmlPageSettings?.meta) {
    const meta = self.htmlPageSettings?.meta;
    Object.keys(meta).forEach((metaKey) => {
      possibleMeta = `${possibleMeta} <meta name="${metaKey}" content="${meta[metaKey]}" />`;
    });
  }

  if (self.htmlPageSettings?.links) {
    const links = self.htmlPageSettings.links;
    links.forEach((link) => {
      possibleLinks = `${possibleLinks} <link rel="stylesheet" href="${link.href}"/>`;
    });
  }

  self.pageSettings = `${possibleMeta} ${possibleLinks}`;
};

methods.preloadLazyComponents = async function (view) {
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
    // console.log("THE COMPONENT EXISTS",await self.comps.comps[loadComponent.component])
    if (self.comps.comps[loadComponent.component]?.preload) {
      const mod = await self.comps.comps[loadComponent.component].preload();
      self.info("THE PRELOADED MOD", mod);
      if (typeof mod === "function") {
        // 🔥 This triggers evaluation
        const evaluated = mod;

        // Optionally log styled-component ID
        if (evaluated?.styledComponentId) {
          self.debug("✅ styledComponentId:", evaluated.styledComponentId);
        } else {
          self.warn("⛔ No styledComponentId on component");
        }

        return evaluated;
      }
    }
  }
  let markdownCompsRouteIndex = -1;

  if (self?.comps?.markdownRoutes) {
    for (let i = 0; i < self.comps.markdownRoutes.length; i++) {
      if (self.comps.markdownRoutes[i].path === view.match) {
        self.debug(
          "LOAD LAZY MARKDOWN",
          self.comps.markdownRoutes[i],
          view.match
        );
        markdownCompsRouteIndex = i;
        loadComponent = self.comps.markdownRoutes[i];
        break;
      }
    }
  }

  if (loadComponent?.markdownComponents) {
    let componentsKeys = Object.keys(loadComponent.markdownComponents);
    let preloads = componentsKeys.map(async (component) => {
      self.debug("THE COMPONENT PRE-LOAD", component);
      let currentComponent = loadComponent.markdownComponents[component];
      self.debug("THE CURRENT COMPONENT", currentComponent);

      if (currentComponent?.component?.preload) {
        self.debug("THE COMPONENT PRE-LOAD-ING", component);

        self.comps.markdownRoutes[markdownCompsRouteIndex].markdownComponents[
          component
        ].component = await currentComponent.component?.preload();
      }
    });

    await Promise.all(preloads);
  }
};

methods.loaderStyles = function () {
  return `<style>
  #loader-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(17, 17, 17, 0.95);
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 9999;
    color: #fff;
    font-family: Arial, sans-serif;
    font-size: 1.5rem;
    text-align: center;
    transition: opacity 0.3s ease;
  }

  /* Gradient spinner */
  .spinner {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: conic-gradient(#4fa3ff, #ff7a5c, #4fa3ff);
    animation: spin 1s linear infinite;
    margin-bottom: 20px;
  }

  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }

  /* Animated dots */
  .dots {
    display: inline-block;
    margin-top: 10px;
  }

  .dot {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 0 3px;
    background: #fff;
    border-radius: 50%;
    animation: bounce 1.2s infinite ease-in-out;
  }

  .dot:nth-child(1) { animation-delay: 0s; }
  .dot:nth-child(2) { animation-delay: 0.2s; }
  .dot:nth-child(3) { animation-delay: 0.4s; }

  @keyframes bounce {
    0%, 80%, 100% { transform: scale(0); }
    40% { transform: scale(1); }
  }

  /* Fade-out */
  .hidden {
    opacity: 0;
    pointer-events: none;
  }
</style>`;
};

methods.getProductionProcess = function () {
  const self = this;
  if (process.env.NODE_ENV != ENV_PRODUCTION) return "";
  return `window.process = {envs:${JSON.stringify(self.kotiiEnvs)}}`;
};

methods.createAppElement = function ({
  store,
  view,
  layoutRoot,
  effectsStore,
  goodies,
  authUser,
  context,
}) {
  const self = this;
  const { REACTAPP, React } = self;
  let appElement;
  console.log("THE LAYOUT IN", layoutRoot);

  if (!layoutRoot) {
    appElement = React.createElement(
      HeadProvider,
      { context },
      React.createElement(
        Router,
        { ssrPath: view.match },
        REACTAPP({
          storeFromSource: store,
          goodies,
          effectsStore,
          authUser,
          reduxResources: self.reduxResources,
        })
      )
    );
  } else if (layoutRoot.Layout && layoutRoot.Root) {
    appElement = React.createElement(
      HeadProvider,
      { context },
      React.createElement(
        Router,
        { ssrPath: view.match },
        REACTAPP({
          appWrapper: layoutRoot.Root,
          layout: layoutRoot.Layout,
          storeFromSource: store,
          goodies,
          effectsStore,
          authUser,
          reduxResources: self.reduxResources,
        })
      )
    );
  } else if (layoutRoot.Layout) {
    appElement = React.createElement(
      HeadProvider,
      { context },
      React.createElement(
        Router,
        { ssrPath: view.match },
        REACTAPP({
          layout: layoutRoot.Layout,
          storeFromSource: store,
          goodies,
          effectsStore,
          authUser,
          reduxResources: self.reduxResources,
        })
      )
    );
  } else {
    appElement = React.createElement(
      HeadProvider,
      { context },
      React.createElement(
        Router,
        { ssrPath: view.match },
        REACTAPP({
          appWrapper: layoutRoot.Root,
          storeFromSource: store,
          effectsStore,
          authUser,
          reduxResources: self.reduxResources,
        })
      )
    );
  }

  return appElement;

  // html = renderToString(
  //   sheet.collectStyles(appElement)
  // );
};
methods.generatePageStaticParts = function (Component, view) {
  const self = this;
  self.debug("THE STATIC PART PAGE", Component);

  return new Promise((resolve, reject) => {
    self.emit({
      type: "generate-ssg-interactivity",
      data: {
        payload: { type: "react", Page: Component, view },
        callback: (err, pageJs) => {
          self.debug("THE STATIC PART PAGE RESULTS", err, pageJs);
          if (!err) return resolve(pageJs);
          reject(err);
        },
      },
    });
  });
};
methods.getCurrentRouteComponent = function (view) {
  const self = this;
  self.debug("THE STATIC PART ROUTE", view);
  let RouteComponent = "";
  let compsList = Object.keys(self.comps.comps);
  self.debug("THE COMPONENTS LIST", compsList);
  for (let i = 0; i < self.comps.routes.length; i++) {
    if (self.comps.routes[i].path === view.match) {
      RouteComponent = self.comps.routes[i].component;
      break;
    }
  }
  self.debug("THE STATIC ROUTE", self.comps.comps[RouteComponent]);
  return self.comps.comps[RouteComponent];
};
methods.doStyledSheets = function (sheet, isStatic = false) {
  const self = this;

  if (!isStatic) {
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
    self.styledTags = styleTags;
  } else {
    const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
    self.styleTags += styleTags;
  }
};
// methods.addStyledCssToFile = function(){

//   const self = this

// }
methods.doPageJsPackages = function (pageJsPackages) {
  let packagesCode = ``;
  pageJsPackages.forEach((currentPackage) => {
    packagesCode += `\n<script src="./assets/vendor/${currentPackage.fileName}" ></script>`;
  });
  return packagesCode;
};

export default methods;
