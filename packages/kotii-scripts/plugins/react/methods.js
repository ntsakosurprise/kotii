const methods = {};
import fs from "fs";
import { ServerStyleSheet } from "kotii-styled";
import path from "path";
import { Router } from "wouter";
import { kotiiKotiiLandPath } from "../../kotii_paths.js";

methods.init = function () {
  this.adLog("React View has been initialised");
  this.listens({
    "handle-react-view": this.handleReactView.bind(this),
    "take-ssr-routes": this.handleSsrRoutes.bind(this),
    "handle-react-static": this.handleReactStaticViews.bind(this),
  });
};

methods.handleSsrRoutes = function (data) {
  const self = this;
  console.log("THE SSR ROUTES", data);
  console.log("THE ACTUAL DATA", data.payload.routes);
  self.ssrRoutes = data.payload.routes;
};

methods.handleReactView = function (data) {
  const self = this;
  self.adLog("Handling ReactView Event");
  self.adLog(data);
  self.callback = data.callback;

  console.log("THE VIEW DATA", data);
  console.log("ServerStyleSheet", ServerStyleSheet);
  self.runReactView(data).then((html) => {
    self.callback(null, html);
  });
};

methods.handleReactStaticViews = function (data) {
  const self = this;
  // console.log("Static Views");
  self.callback = data.callback;

  console.log("THE VIEW DATA", data);
  const { views } = data;
  let mappedPromises = views.map(async (view) => {
    let gotHtmlView = await self.runReactView({
      view: { match: view.path },
      staticRender: true,
    });
    // console.log("THE GOT HTML VIEW", gotHtmlView, view.name);
    return { content: gotHtmlView, name: view.name };
  });
  Promise.all(mappedPromises).then((htmlViews) => {
    // console.log("ALL VIEWS PROMISES MAPPED", htmlViews);
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
  const { view, staticRender = false } = data;
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
    let stateData = await self.getStateDataFromServer(
      view.match,
      store,
      staticRender
    );
    let layoutRoot = await self.doImport(
      `/src/components/startup/index.jsx`,
      true,
      false
    );
    if (!self.comps) {
      self.comps = await self.doImport(`/kotii-land/dev/pages.js`, true, false);
    }

    console.log("THE LAYOUT ROOT", layoutRoot.Layout);
    console.log("GOT STATE DATA", stateData);
    console.log("THE SELF COMPS", self.comps);
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
              {REACTAPP({ storeFromSource: store, goodies })}
            </Router>
          ) : layoutRoot.Layout && layoutRoot.Root ? (
            <Router ssrPath={view.match}>
              {REACTAPP({
                appWrapper: layoutRoot.Root,
                layout: layoutRoot.Layout,
                storeFromSource: store,
                goodies,
              })}
            </Router>
          ) : layoutRoot.Layout ? (
            <Router ssrPath={view.match}>
              {REACTAPP({
                layout: layoutRoot.Layout,
                storeFromSource: store,
                goodies,
              })}
            </Router>
          ) : (
            <Router ssrPath={view.match}>
              {REACTAPP({
                appWrapper: layoutRoot.Root,
                storeFromSource: store,
              })}
            </Router>
          )
        )
      );
      const styleTags = sheet.getStyleTags(); // or sheet.getStyleElement();
      self.styledTags = styleTags;
      console.log("STYLED-COMPONENTS STYLE TAGS", styleTags);
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
    //   console.log("THE RENDER ERROR", error);
    // }

    const finalState = store.getState();
    const helmetGenerated = HeadHelmet.renderStatic();
    // console.log("HELMET GENERATED", helmetGenerated.title.toString());
    const fullPage = self.renderFullPage(
      html,
      finalState,
      view,
      helmetGenerated
    );
    console.log("THE HTML IN RUN REACT-VIEW", fullPage);
    resolve(fullPage);
  });
};

methods.renderFullPage = function (
  html,
  preloadedState,
  view,
  head,
  scripts = []
) {
  const self = this;
  const { serialize } = self;
  const jsonStyles = fs.existsSync(
    `${kotiiKotiiLandPath}${path.sep}dev/styles.json`
  )
    ? JSON.parse(
        fs.readFileSync(`${kotiiKotiiLandPath}${path.sep}dev/styles.json`)
      )
    : null;
  let styleTags = jsonStyles ? jsonStyles.toString().replace(",", "") : "";
  console.log("THE PRELOADED STATE", preloadedState, styleTags);
  return `
		<!doctype html>
		<html ${head.htmlAttributes.toString()}> 
    <head>
    ${head?.title.toString()}
    ${head?.meta.toString()}
    ${head?.link.toString()}
    ${self.styledTags}
    ${styleTags}
    </head>
		<body ${head.bodyAttributes.toString()}>
			<div id="root">${html}</div>
			<script>
      window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
			</script>
			<script src="/server.bundle.js" ></script>

		</body>
		</html>
    `;
};

methods.getStateDataFromServer = function (
  routePath,
  store,
  staticRender = false
) {
  const self = this;
  const routes = self.ssrRoutes;

  // console.log("THE FOUND", routes);

  return new Promise((resolve, reject) => {
    if (staticRender) return resolve({});

    let dataFetchPromises = routes.filter((route, i) => {
      if (route.path === routePath && route?.requiresData) {
        return route.requiresData(store);
      }
    });

    Promise.all(dataFetchPromises).then((resolveData) => {
      console.log("THE RESOLVED DATA", resolveData);
      resolve(resolveData);
    });
  });
};

methods.runComponentEffects = function (routePath) {
  const self = this;
  const routes = self.ssrRoutes;
  const effect_id_prefix = "kotii_eff_id_";

  // console.log("THE FOUND", routes);

  return new Promise((resolve, reject) => {
    let effectsRouteList = routes.filter((route) => {
      if (route.path === routePath && route?.hasEffectsToRun) return true;
    });
    console.log("THE EFFECTS ROUTE LIST", effectsRouteList);
    let effectsRoute = effectsRouteList[0];
    console.log("THE EFFECTS ROUTE", effectsRoute);
    let effectsToRun =
      effectsRoute.effectsToRun instanceof Array
        ? effectsRoute.effectsToRun
        : [effectsRoute.effectsToRun];
    let routeId = effectsRoute.name;
    console.log("THE EFFECTS TO RUN", effectsToRun);

    let effectsPromises = effectsToRun.map((effectToRun, ID) => {
      let effectID = `${effect_id_prefix}${ID + 1}`;
      return new Promise((resolve, reject) => {
        effectToRun()
          .then((data) => {
            console.log("Kotii effect react:data", data);

            if (!self.effectsData["componentName"])
              self.effectsData["componentName"] = routeId;
            if (!self.effectsData[routeId]) self.effectsData[routeId] = {};
            // self.effectsData[routeId][effectID] = data
            if (!self.effectsData[routeId]["data"]) {
              self.effectsData[routeId]["data"] = {};
              self.effectsData[routeId].data[effectID] = data;
              // self.effectsData.data[routeId] = data
              console.log("Kotii effect react: self.effects", self.effectsData);
            } else {
              self.effectsData[routeId].data[effectID] = data;
            }
            resolve(true);
          })
          .catch((err) => {
            console.log("Kotii effect react:err", err);
            if (!self.effectsData[routeId]) self.effectsData[routeId] = {};
            if (!self.effectsData[routeId]["errors"]) {
              self.effectsData[routeId]["errors"] = {};
              self.effectsData[routeId].errors[effectID] = err;
            } else {
              self.effectsData[routeId].errors[effectID] = err;
            }
            resolve(true);
          });
      });
    });
    console.log("THE EFFECTS PROMISES", effectsPromises);

    Promise.all(effectsPromises).then((resolveData) => {
      console.log("THE RESOLVED EFFECTS DATA", resolveData);
      resolve(resolveData);
    });
  });
};

methods.doImport = function (toImport, all = false, check = true) {
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const loadFileSync = pao.pa_loadFileSync;
  // console.log("TIIMPORT", toImport);
  return new Promise((resolve, reject) => {
    // const manifestFile = loadFileSync(toImport);
    // resolve({ module: imported.meta });
    loadFile(toImport, all, check)
      .then((imported) => {
        console.log("Module has successfully been imported:", imported);
        resolve(imported);
      })
      .catch((err) => {
        console.log(
          `importing module:${toImport}, has failed with an error:${err}`
        );
        reject(err);
      });
  });
};

// methods.renderFullPage = function (html, preloadedState, view, scripts = []) {
//   //   console.log("THE HTML", html);
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
