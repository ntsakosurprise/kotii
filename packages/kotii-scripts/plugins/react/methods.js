const methods = {};
import fs from "fs";
import { ServerStyleSheet } from "kotii-styled";
import path from "path";
import { Router } from "wouter";
import { kotiiKotiiLandPath } from "../../kotii_paths.js";

methods.init = function () {
  this.listens({
    "handle-react-view": this.handleReactView.bind(this),
    "take-ssr-routes": this.handleSsrRoutes.bind(this),
    "handle-react-static": this.handleReactStaticViews.bind(this),
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

  self.debug("THE VIEW DATA", data);
  self.debug("ServerStyleSheet", ServerStyleSheet);
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
  const { views } = data;
  let mappedPromises = views.map(async (view) => {
    let gotHtmlView = await self.runReactView({
      view: { match: view.path },
      route: view,
      staticRender: true,
    });
    // self.debug("THE GOT HTML VIEW", gotHtmlView, view.name);
    return { content: gotHtmlView, name: view.name };
  });
  Promise.all(mappedPromises).then((htmlViews) => {
    // self.debug("ALL VIEWS PROMISES MAPPED", htmlViews);
    self.callback(htmlViews);
  });
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
    meta,
  } = self;
  const { view, staticRender = false, route = null } = data;
  const { app } = meta;
  const { stateVendor = "" } = app;

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
  return new Promise(async (resolve) => {
    const store = stateVendor === "redux" ? createReduxStore() : {};
    let stateData = await self.getStateDataFromServer({
      routePath: view.match,
      store,
      staticRender,
      route,
    });
    if (!staticRender) {
      await self.runComponentEffects(view.match);
    } else {
      if (route && route.hasEffectsToRun) {
        await self.runComponentEffects(view.match, route);
      }
    }

    let layoutStaticAbsolutePath =
      process.env.NODE_ENV == "development"
        ? `/src/components/startup/index.jsx`
        : `/src/components/startup/index.js`;
    let layoutRoot = await self.doImport(
      `${layoutStaticAbsolutePath}`,
      true,
      false
    );
    if (!self.comps) {
      let compsAbsolutePath =
        process.env.NODE_ENV == "development"
          ? `/kotii-land/dev/pages.js`
          : `.kotii-land/bundle-imports.js`;
      self.comps = await self.doImport(`${compsAbsolutePath}`, true, false);
    }

    let effectsStore = self.effectsData;

    self.debug("THE LAYOUT ROOT", layoutRoot.Layout);
    self.debug("GOT STATE DATA", stateData);
    self.debug("THE SELF COMPS", self.comps);
    //   appWrapper = null,
    // layout = null,
    // goodies=null,
    // storeFromSource = null}=props
    let html = "";

    const sheet = new ServerStyleSheet();
    let goodies = self.comps;
    try {
      html = renderToString(
        sheet.collectStyles(
          !layoutRoot ? (
            <Router ssrPath={view.match}>
              {REACTAPP({ storeFromSource: store, goodies, effectsStore })}
            </Router>
          ) : layoutRoot.Layout && layoutRoot.Root ? (
            <Router ssrPath={view.match}>
              {REACTAPP({
                appWrapper: layoutRoot.Root,
                layout: layoutRoot.Layout,
                storeFromSource: store,
                goodies,
                effectsStore,
              })}
            </Router>
          ) : layoutRoot.Layout ? (
            <Router ssrPath={view.match}>
              {REACTAPP({
                layout: layoutRoot.Layout,
                storeFromSource: store,
                goodies,
                effectsStore,
              })}
            </Router>
          ) : (
            <Router ssrPath={view.match}>
              {REACTAPP({
                appWrapper: layoutRoot.Root,
                storeFromSource: store,
                effectsStore,
              })}
            </Router>
          )
        )
      );
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
    });
    self.debug("THE HTML IN RUN REACT-VIEW", fullPage);
    resolve(fullPage);
  });
};

methods.renderFullPage = function ({
  html,
  preloadedState,
  staticRender,
  view,
  head,
  scripts = [],
} = props) {
  const self = this;
  if (!self.styleTags) self.doKotiiStyles();

  self.debug("THE PRELOADED STATE", preloadedState);
  return `
		<!doctype html>
		<html ${head.htmlAttributes.toString()}> 
    <head>
    ${head?.title.toString()}
    ${head?.meta.toString()}
    ${head?.link.toString()}
    ${self.styledTags}
    ${self.styleTags}
    <link rel="stylesheet" type="text/css" href="/tailwind.css">
    </head>
		<body ${head.bodyAttributes.toString()}>
			<div id="root">${html}</div>
			${!staticRender ? self.includeScripts(preloadedState) : null}
			
		</body>
		</html>
    `;
};

methods.includeScripts = function (preloadedState) {
  const self = this;
  const { serialize } = self;
  return `
   <script>
     window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
     window.__KOTII_EFFECTS_STATE__ = ${serialize(
       JSON.stringify(self.effectsData)
     )}
    
   </script>
   <script src="/server.bundle.js" ></script>
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
    let dataFetchPromises = routes.filter((route, i) => {
      if (route.path === routePath && route?.requiresData) {
        return route.requiresData(store);
      }
    });

    Promise.all(dataFetchPromises).then((resolveData) => {
      self.debug("THE RESOLVED DATA", resolveData);
      resolve(resolveData);
    });
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

  const jsonStyles = fs.existsSync(
    `${kotiiKotiiLandPath}${path.sep}dev/styles.json`
  )
    ? JSON.parse(
        fs.readFileSync(`${kotiiKotiiLandPath}${path.sep}dev/styles.json`)
      )
    : null;
  self.styleTags = jsonStyles
    ? `<style>${jsonStyles.toString().replaceAll(",", " ")}</style>`
    : "";
};

// methods.renderFullPage = function (html, preloadedState, view, scripts = []) {
//   //   self.debug("THE HTML", html);
//   return `
// 		  <!doctype html>
// 		  <html>
// 		  <head>

// 		  <meta charset="utf-8" />
// 		  <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
// 		  <meta name="viewport" content="width=device-width, initial-scale=1" />
// 		  <meta name="theme-color" content="#000000" />
// 		  <meta
// 			name="description"
// 			content="
// 			South Septic PTY Limited is a sewage removal company that focuses
// 			on emptying septic tanks using a truck fitted with a vacuum system to effectively pump out sewage waste."
// 		  />
// 		  <link rel="apple-touch-icon" href="logo192.png" />
// 		  <link rel="apple-touch-icon" href="logo192.png" />
// 		  <link rel="stylesheet" type="text/css" href="/css/style.css">
// 		  <!--
// 			manifest.json provides metadata used when your web app is installed on a
// 			user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
// 		  -->
// 		  <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
// 		  <!--
// 			Notice the use of %PUBLIC_URL% in the tags above.
// 			It will be replaced with the URL of the "public" folder during the build.
// 			Only files inside the "public" folder can be referenced from the HTML.

// 			Unlike "/favicon.ico" or "favicon.ico", "%PUBLIC_URL%/favicon.ico" will
// 			work correctly both with client-side routing and a non-root public URL.
// 			Learn how to configure a non-root public URL by running "npm run build".
// 		  -->
// 			  <title>Test Title REactSSR</title>
// 			  <script src="/static/js/2.176c43eb.chunk.js" defer></script>
// 			  <script src="/static/js/main.8a703e28.chunk.js" defer></script>
// 		  </head>
// 		  <body>
// 			  <div id="root">${html}</div>

// 	window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(
//   /</g,
//   "\\u003c"
// )}

//         <script src="/[main].bundle.js" ></script>

// 		  </body>
// 		  </html>
// 	  `;
// };

export default methods;
