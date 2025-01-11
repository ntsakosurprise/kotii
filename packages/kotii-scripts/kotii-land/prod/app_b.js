import fs from "fs";
import { loggas, logger } from "kotii-logger";
import path from "path";
import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AppProvider, useAppContext } from "../../react-components-pruned/index.js";
import createReduxStore from "./app_redux.js";
import { ClientRoutes, RoutesAsServerRoutes } from "./build_b.js";
logger.setNameSpaces([{
  namespace: "app:start-client",
  id: "appClient"
}, {
  namespace: "app:start-server",
  id: "appServer"
}, {
  namespace: "app:demo",
  id: "app"
}]);

// import { meta } from "./manifest.js";
let hydrateInvokes = 0;
let userWrapper = null;
let userLayout = null;
let container = null;
let customHydrateRoot = null;
const App = function () {
  let appWrapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let layout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  userWrapper = appWrapper;
  userLayout = layout;
  const app = process.env.KOTII_APP_META;
  const effectsStore = JSON.parse(window.__KOTII_EFFECTS_STATE__);
  loggas.appClient.debug("THE PROCESS.BROWSER.ENVS", process.env);
  let {
    type,
    stateVendor = null
  } = app;
  if (type !== "ssr") {
    loggas.appClient.debug("NOT SSR", stateVendor);
    if (stateVendor && stateVendor === "redux") {
      const store = createReduxStore();
      return appSpaWithRedux({
        appWrapper,
        layout,
        store,
        effectsStore
      });
    }
    return appSpa({
      appWrapper,
      layout,
      effectsStore
    });
  } else {
    if (stateVendor && stateVendor === "redux") {
      loggas.appClient.debug("TYPE IS SSR");
      const store = createReduxStore(window.__PRELOADED_STATE__);
      return appWithRedux({
        appWrapper,
        layout,
        store,
        effectsStore
      });
    }
    return appNormal({
      appWrapper,
      layout,
      effectsStore
    });
  }
};
const appWithRedux = function () {
  let {
    appWrapper,
    layout,
    store,
    isServer = false,
    goodies = null,
    effectsStore
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  loggas.appClient.debug("APP WITH REDUX", appWrapper, layout, store, isServer);
  if (isServer) {
    return /*#__PURE__*/React.createElement(Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(AppProvider, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore
    }, /*#__PURE__*/React.createElement(AppGeneric, {
      isServer: true,
      goodies: goodies
    })));
  }
  hydrateInvokes++;
  loggas.appClient.debug(" ABOUT TO HYDRATE ON THE CLIENT", document.getElementById);
  container = !container ? document.getElementById("root") : container;

  // customHydrateRoot = hydrateRoot(
  //   container,
  //   <Provider store={store}>
  //     <AppProvider appWrapper={appWrapper} layout={layout}>
  //       <AppGeneric />
  //     </AppProvider>
  //   </Provider>
  // );
  if (customHydrateRoot) {
    return customHydrateRoot.render( /*#__PURE__*/React.createElement(Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(AppProvider, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore
    }, /*#__PURE__*/React.createElement(AppGeneric, null))));
  } else {
    customHydrateRoot = hydrateRoot(container, /*#__PURE__*/React.createElement(Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(AppProvider, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore
    }, /*#__PURE__*/React.createElement(AppGeneric, null))));
    loggas.appClient.debug("CREATED HYDRATED ROOT", customHydrateRoot, customHydrateRoot.render);
  }
};
const AppGeneric = props => {
  const {
    appWrapper
  } = useAppContext();
  const {
    isServer = false,
    goodies = {}
  } = props;
  const AppWrapper = appWrapper;
  return appWrapper ? /*#__PURE__*/React.createElement(AppWrapper, null, !isServer ? /*#__PURE__*/React.createElement(ClientRoutes, {
    goodies: goodies
  }) : /*#__PURE__*/React.createElement(RoutesAsServerRoutes, {
    goodies: goodies
  })) : !isServer ? /*#__PURE__*/React.createElement(ClientRoutes, null) : /*#__PURE__*/React.createElement(RoutesAsServerRoutes, null);
};
const appNormal = function () {
  let {
    appWrapper,
    layout,
    isServer = false,
    effectsStore
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  loggas.appClient.debug("APP NORMARL IS RUNNING");
  if (isServer) {
    return /*#__PURE__*/React.createElement(AppProvider, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore
    }, /*#__PURE__*/React.createElement(AppGeneric, null));
  }
  container = !container ? document.getElementById("root") : container;
  hydrateRoot(document.getElementById("root"), /*#__PURE__*/React.createElement(AppProvider, {
    appWrapper: appWrapper,
    layout: layout,
    effectsStore: effectsStore
  }, /*#__PURE__*/React.createElement(AppGeneric, null)));
};
const appSpa = function () {
  let {
    appWrapper,
    layout,
    effectsStore
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  loggas.appClient.debug("APP SPA IS RUNNING");
  const root = createRoot(document.getElementById("root"));
  root.render( /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(AppProvider, {
    appWrapper: appWrapper,
    layout: layout,
    effectsStore: effectsStore
  }, /*#__PURE__*/React.createElement(AppGeneric, null))));
};
const appSpaWithRedux = function () {
  let {
    appWrapper,
    layout,
    store,
    effectsStore
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  loggas.appClient.debug("APP SPA WITH REDUX RUNNING");
  const root = createRoot(document.getElementById("root"));
  root.render( /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(AppProvider, {
    appWrapper: appWrapper,
    layout: layout,
    effectsStore: effectsStore
  }, /*#__PURE__*/React.createElement(AppGeneric, null)))));
};
const ServerApp = function () {
  let {
    appWrapper = null,
    layout = null,
    goodies = null,
    storeFromSource = null,
    effectsStore
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  loggas.appServer.debug("THE GOODIES FROM SERVER", goodies);
  const store = !storeFromSource ? createReduxStore() : storeFromSource;
  const existsMeta = fs.existsSync(`${process.cwd()}${path.sep}app.manifest.json`);
  if (!existsMeta) throw new Error("This project is missing app.manifest.json, please add it");
  const meta = JSON.parse(fs.readFileSync(`${process.cwd()}${path.sep}app.manifest.json`));
  const {
    app
  } = meta;
  const {
    stateVendor = null
  } = app;
  loggas.appServer.debug("SERVER META", meta);
  if (stateVendor && stateVendor === "redux") {
    return appWithRedux({
      appWrapper,
      layout,
      store,
      isServer: true,
      goodies,
      effectsStore
    });
  }
  return appNormal({
    appWrapper,
    layout,
    isServer: true,
    goodies,
    effectsStore
  });
};
if (import.meta.webpackHot) {
  loggas.appClient.debug("THE META.HOT");
  import.meta.webpackHot.accept("./build.js", er => {
    loggas.appClient.debug("THE HOT ERROR", er);
    loggas.appClient.debug("THE CUSTOM", customHydrateRoot, userLayout, userWrapper);
    App(userWrapper, userLayout);
  });
}
export { Head, useAppContext, useUniversalEffect } from "../../react-components-pruned/index.js";
export { ServerApp };
export default App;