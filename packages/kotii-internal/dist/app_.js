/* eslint-disable react/jsx-no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import fs from "fs";
import { loggas, logger } from "kotii-logger";
import path from "path";
import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { AppProvider, useAppContext } from "kotii-components";
import { ClientRoutes, ServerRoutes } from "@kotii/_internal/land";
import { AuthProvider } from "kotii-auth";
import { OptionalDynamiceReduxWrapper } from "@kotii/_internal/land";
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
  var _window, _window2;
  let appWrapper = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let layout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  userWrapper = appWrapper;
  userLayout = layout;
  const app = process.env.KOTII_APP_META;
  const effectsStore = (_window = window) !== null && _window !== void 0 && _window.__KOTII_EFFECTS_STATE__ ? JSON.parse(window.__KOTII_EFFECTS_STATE__) : null;
  const authUser = (_window2 = window) !== null && _window2 !== void 0 && _window2.__KOTII_AUTH_USER__ ? JSON.parse(window.__KOTII_AUTH_USER__) : null;
  let {
    type,
    stateVendor = null
  } = app;
  const store = window.__PRELOADED_STATE__;
  return kotiiApp({
    appWrapper,
    layout,
    store,
    isServer: true,
    effectsStore,
    authUser,
    reduxEnabled: stateVendor && stateVendor === "redux" ? true : false
  });

  // let { type, stateVendor = null } = app;
  // if (type !== "ssr") {
  //   if (stateVendor && stateVendor === "redux") {
  //     const store = createReduxStore();
  //     return appSpaWithRedux({
  //       appWrapper,
  //       layout,
  //       store,
  //       effectsStore,
  //       authUser,
  //     });
  //   }
  //   return appSpa({ appWrapper, layout, effectsStore, authUser });
  // } else {
  //   if (stateVendor && stateVendor === "redux") {
  //     const store = createReduxStore(window.__PRELOADED_STATE__);
  //     return appWithRedux({
  //       appWrapper,
  //       layout,
  //       store,
  //       effectsStore,
  //       authUser,
  //     });
  //   }
  //   return appNormal({ appWrapper, layout, effectsStore, authUser });
  // }
};
const ServerApp = function () {
  let {
    appWrapper = null,
    layout = null,
    goodies = null,
    storeFromSource = null,
    effectsStore,
    authUser = null,
    reduxResources = null
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  const store = storeFromSource;
  const existsMeta = fs.existsSync("".concat(process.cwd()).concat(path.sep, "app.manifest.json"));
  if (!existsMeta) throw new Error("This project is missing app.manifest.json, please add it");
  const meta = JSON.parse(fs.readFileSync("".concat(process.cwd()).concat(path.sep, "app.manifest.json")));
  const {
    app
  } = meta;
  const {
    stateVendor = null
  } = app;
  return kotiiApp({
    appWrapper,
    layout,
    store,
    isServer: true,
    goodies,
    effectsStore,
    authUser,
    isStoreCreated: true,
    reduxEnabled: stateVendor && stateVendor === "redux" ? true : false,
    reduxResources
  });

  // if (stateVendor && stateVendor === "redux") {
  //   return appWithRedux({
  //     appWrapper,
  //     layout,
  //     store,
  //     isServer: true,
  //     goodies,
  //     effectsStore,
  //     authUser,
  //   });
  // }
  // return appNormal({
  //   appWrapper,
  //   layout,
  //   isServer: true,
  //   goodies,
  //   effectsStore,
  //   authUser,
  // });
};
const AppGeneric = props => {
  console.log("THE APP GENERIC. Server", ServerRoutes);
  console.log("THE APP GENERIC. Client", ClientRoutes);
  const {
    appWrapper
  } = useAppContext();
  const {
    isServer = false,
    goodies = {},
    authUser = null
  } = props;
  const AppWrapper = appWrapper;
  console.log("THE APP GENERIC. props ", props);
  return appWrapper ? /*#__PURE__*/React.createElement(AuthProvider, {
    authUser: authUser
  }, /*#__PURE__*/React.createElement(AppWrapper, null, !isServer ? /*#__PURE__*/React.createElement(ClientRoutes, {
    goodies: goodies
  }) : /*#__PURE__*/React.createElement(ServerRoutes, {
    goodies: goodies
  }))) : !isServer ? /*#__PURE__*/React.createElement(AuthProvider, {
    authUser: authUser
  }, /*#__PURE__*/React.createElement(ClientRoutes, null)) : /*#__PURE__*/React.createElement(AuthProvider, {
    authUser: authUser
  }, /*#__PURE__*/React.createElement(ServerRoutes, null));
};
const KotiiMainApp = props => {
  console.log("KOTII MAIN PROPS", props);
  const {
    appWrapper,
    layout,
    store,
    isServer = false,
    goodies,
    effectsStore,
    authUser,
    isStoreCreated = false,
    reduxEnabled,
    reduxResources
  } = props;
  return /*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(OptionalDynamiceReduxWrapper, {
    enabled: reduxEnabled,
    preloadState: store,
    isStoreCreated: isStoreCreated,
    reduxResources: reduxResources
  }, /*#__PURE__*/React.createElement(AppProvider, {
    appWrapper: appWrapper,
    layout: layout,
    effectsStore: effectsStore
  }, /*#__PURE__*/React.createElement(AppGeneric, {
    isServer: isServer,
    goodies: goodies,
    authUser: authUser
  }))));
};
const kotiiApp = function () {
  let {
    appWrapper,
    layout,
    store,
    isServer = false,
    goodies = null,
    effectsStore,
    authUser,
    isStoreCreated,
    reduxEnabled,
    reduxResources
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  if (isServer) {
    return /*#__PURE__*/React.createElement(KotiiMainApp, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore,
      authUser: authUser,
      store: store,
      goodies: goodies,
      reduxEnabled: reduxEnabled,
      isStoreCreated: isStoreCreated,
      reduxResources: reduxResources,
      isServer: isServer
    });
  }
  hydrateInvokes++;
  container = !container ? document.getElementById("root") : container;
  if (customHydrateRoot) {
    return customHydrateRoot.render(/*#__PURE__*/React.createElement(KotiiMainApp, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore,
      authUser: authUser,
      store: store,
      goodies: goodies
    }));
  } else {
    customHydrateRoot = hydrateRoot(container, /*#__PURE__*/React.createElement(KotiiMainApp, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore,
      authUser: authUser,
      store: store,
      goodies: goodies
    }));
  }
};
const appWithRedux = function () {
  let {
    appWrapper,
    layout,
    store,
    isServer = false,
    goodies = null,
    effectsStore,
    authUser
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  if (isServer) {
    return /*#__PURE__*/React.createElement(Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(AppProvider, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore
    }, /*#__PURE__*/React.createElement(AppGeneric, {
      isServer: true,
      goodies: goodies,
      authUser: authUser
    })));
  }
  hydrateInvokes++;
  container = !container ? document.getElementById("root") : container;
  if (customHydrateRoot) {
    return customHydrateRoot.render(/*#__PURE__*/React.createElement(Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(AppProvider, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore
    }, /*#__PURE__*/React.createElement(AppGeneric, {
      authUser: authUser
    }))));
  } else {
    customHydrateRoot = hydrateRoot(container, /*#__PURE__*/React.createElement(Provider, {
      store: store
    }, /*#__PURE__*/React.createElement(AppProvider, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore
    }, /*#__PURE__*/React.createElement(AppGeneric, {
      authUser: authUser
    }))));
  }
};
const appNormal = function () {
  let {
    appWrapper,
    layout,
    isServer = false,
    effectsStore,
    authUser
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  if (isServer) {
    return /*#__PURE__*/React.createElement(AppProvider, {
      appWrapper: appWrapper,
      layout: layout,
      effectsStore: effectsStore
    }, /*#__PURE__*/React.createElement(AppGeneric, {
      authUser: authUser
    }));
  }
  container = !container ? document.getElementById("root") : container;
  hydrateRoot(document.getElementById("root"), /*#__PURE__*/React.createElement(AppProvider, {
    appWrapper: appWrapper,
    layout: layout,
    effectsStore: effectsStore
  }, /*#__PURE__*/React.createElement(AppGeneric, {
    authUser: authUser
  })));
};
const appSpa = function () {
  let {
    appWrapper,
    layout,
    effectsStore,
    authUser
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  const root = createRoot(document.getElementById("root"));
  root.render(/*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(AppProvider, {
    appWrapper: appWrapper,
    layout: layout,
    effectsStore: effectsStore
  }, /*#__PURE__*/React.createElement(AppGeneric, {
    authUser: authUser
  }))));
};
const appSpaWithRedux = function () {
  let {
    appWrapper,
    layout,
    store,
    effectsStore,
    authUser
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  const root = createRoot(document.getElementById("root"));
  root.render(/*#__PURE__*/React.createElement(StrictMode, null, /*#__PURE__*/React.createElement(Provider, {
    store: store
  }, /*#__PURE__*/React.createElement(AppProvider, {
    appWrapper: appWrapper,
    layout: layout,
    effectsStore: effectsStore
  }, /*#__PURE__*/React.createElement(AppGeneric, {
    authUser: authUser
  })))));
};
export { Head, Image, Svg, useAppContext, useUniversalEffect } from "kotii-components";
export { ServerApp };
export default App;