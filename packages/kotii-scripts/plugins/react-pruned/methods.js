const methods = {};
import fs from "fs";
import { ServerStyleSheet } from "kotii-styled";
import path from "path";
import { Router } from "wouter";
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
      view: {
        match: view.path,
      },
      staticRender: true,
    });
    // console.log("THE GOT HTML VIEW", gotHtmlView, view.name);
    return {
      content: gotHtmlView,
      name: view.name,
    };
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
      "".concat("/src/components/startup/index.js")
    );
    console.log("THE LAYOUT ROOT", layoutRoot.Layout);
    console.log("GOT STATE DATA", stateData);
    let html = "";
    const sheet = new ServerStyleSheet();
    try {
      html = renderToString(
        sheet.collectStyles(
          !layoutRoot
            ? /*#__PURE__*/ React.createElement(
                Router,
                {
                  ssrPath: view.match,
                },
                REACTAPP(null, null, store)
              )
            : layoutRoot.Layout && layoutRoot.Root
            ? /*#__PURE__*/ React.createElement(
                Router,
                {
                  ssrPath: view.match,
                },
                REACTAPP(layoutRoot.Root, layoutRoot.Layout, store)
              )
            : layoutRoot.Layout
            ? /*#__PURE__*/ React.createElement(
                Router,
                {
                  ssrPath: view.match,
                },
                REACTAPP(null, layoutRoot.Layout, store)
              )
            : /*#__PURE__*/ React.createElement(
                Router,
                {
                  ssrPath: view.match,
                },
                REACTAPP(layoutRoot.Root, null, store)
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
methods.renderFullPage = function (html, preloadedState, view, head) {
  let scripts =
    arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
  const self = this;
  const { serialize } = self;
  const jsonStyles = fs.existsSync(
    "".concat(process.cwd()).concat(path.sep, "styles.json")
  )
    ? JSON.parse(
        fs.readFileSync(
          "".concat(process.cwd()).concat(path.sep, "styles.json")
        )
      )
    : null;
  let styleTags = jsonStyles ? jsonStyles.toString().replace(",", "") : "";
  console.log("THE PRELOADED STATE", preloadedState, styleTags);
  return "\n\t\t<!doctype html>\n\t\t<html "
    .concat(head.htmlAttributes.toString(), "> \n    <head>\n    ")
    .concat(
      head === null || head === void 0 ? void 0 : head.title.toString(),
      "\n    "
    )
    .concat(
      head === null || head === void 0 ? void 0 : head.meta.toString(),
      "\n    "
    )
    .concat(
      head === null || head === void 0 ? void 0 : head.link.toString(),
      "\n    "
    )
    .concat(self.styledTags, "\n    ")
    .concat(styleTags, "\n    </head>\n\t\t<body ")
    .concat(head.bodyAttributes.toString(), '>\n\t\t\t<div id="root">')
    .concat(html, "</div>\n\t\t\t<script>\n      window.__PRELOADED_STATE__ = ")
    .concat(
      serialize(preloadedState),
      '\n\t\t\t</script>\n\t\t\t<script src="/[main].server.bundle.js" ></script>\n\n\t\t</body>\n\t\t</html>\n    '
    );
};
methods.getStateDataFromServer = function (routePath, store) {
  let staticRender =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const self = this;
  const routes = self.ssrRoutes;

  // console.log("THE FOUND", routes);

  return new Promise((resolve, reject) => {
    if (staticRender) return resolve({});
    let dataFetchPromises = routes.filter((route, i) => {
      if (
        route.path === routePath &&
        route !== null &&
        route !== void 0 &&
        route.requiresData
      ) {
        return route.requiresData(store);
      }
    });
    Promise.all(dataFetchPromises).then((resolveData) => {
      console.log("THE RESOLVED DATA", resolveData);
      resolve(resolveData);
    });
  });
};
methods.doImport = function (toImport) {
  let all =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  const self = this;
  const pao = self.pao;
  const loadFile = pao.pa_loadFile;
  const loadFileSync = pao.pa_loadFileSync;
  // console.log("TIIMPORT", toImport);
  return new Promise((resolve, reject) => {
    // const manifestFile = loadFileSync(toImport);
    // resolve({ module: imported.meta });
    loadFile(toImport, false, false)
      .then((imported) => {
        console.log("Module has successfully been imported:", imported);
        resolve(imported);
      })
      .catch((err) => {
        console.log(
          "importing module:"
            .concat(toImport, ", has failed with an error:")
            .concat(err)
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
