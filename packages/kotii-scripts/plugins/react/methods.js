const methods = {};
import { Link } from "react-router-dom";
import { Router } from "wouter";

//import Footer from "/Users/surprisemashele/Documents/kotii/packages/kotii-templates/javascript/ssr/src/components/layout/Footer/component.jsx";

methods.init = function () {
  this.adLog("React View has been initialised");
  this.listens({
    "handle-react-view": this.handleReactView.bind(this),
    "take-ssr-routes": this.handleSsrRoutes.bind(this),
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
  self.runReactView(data);
};

methods.runReactView = function (data) {
  const self = this;
  //   const { store, React, StaticRouter, renderToString, Provider, REACTAPP } =
  //     self;
  // console.log("runReactView", data);
  const {
    React,
    renderToString,
    REACTAPP,
    Header,
    Footer,
    GlobalStyle,
    createReduxStore,
    HeadHelmet,
  } = self;
  const { view } = data;
  //   console.log("RENDER TO STRING FUNCTION", renderToString);

  // Render the component to a string

  // console.log("THE HEADER", Header, Footer);

  const Layout = (props) => {
    return (
      <div
        style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
      >
        <Header />
        {props.children}
        <Footer />
      </div>
    );
  };

  const Root = (props) => {
    return (
      <div>
        <GlobalStyle />
        {props.children}
      </div>
    );
  };

  const LayoutAlt = () => {
    <nav>
      <Link to="/test">Test Link</Link>
    </nav>;
  };
  //console.log("THE ROOT", Root, Layout);

  // Grab the initial state from our Redux store
  const store = createReduxStore();
  self.getStateDataFromServer(view.match, store).then((stateData) => {
    console.log("GOT STATE DATA", stateData);
    let html = "";
    try {
      html = renderToString(
        <Router ssrPath={view.match}>{REACTAPP(Root, Layout, store)}</Router>
      );
    } catch (error) {
      console.log("THE RENDER ERROR", error);
    }

    console.log("THE HTML IN RUN REACT-VIEW", html);

    const finalState = store.getState();
    const helmetGenerated = HeadHelmet.renderStatic();
    const fullPage = self.renderFullPage(
      html,
      finalState,
      view,
      helmetGenerated
    );
    return self.callback(null, fullPage);
  });

  //const fullPage = self.renderFullPage(html, view);
  //   console.log("THE HTML FULL PAGE", fullPage);
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
  console.log("THE PRELOADED STATE", preloadedState);
  return `
		<!doctype html>
		<html ${head.htmlAttributes.toString()}>

    <head>
    ${head?.title.toString()}
    ${head?.meta.toString()}
    ${head?.link.toString()}
    </head>
		<body ${head.bodyAttributes.toString()}>
			<div id="root">${html}</div>
			<script>
      window.__PRELOADED_STATE__ = ${serialize(preloadedState)}
			</script>
			<script src="/[main].bundle.js" ></script>

		</body>
		</html>
    `;
};

methods.getStateDataFromServer = function (routePath, store) {
  const self = this;
  const routes = self.ssrRoutes;

  return new Promise((resolve, reject) => {
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
