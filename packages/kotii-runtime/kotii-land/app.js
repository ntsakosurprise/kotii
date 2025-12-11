/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import fs from "fs";
import { loggas, logger } from "kotii-logger";
import path from "path";
import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AppProvider, useAppContext } from "kotii-components";
import createReduxStore from "./redux.js";
import { ClientRoutes, RoutesAsServerRoutes } from "./build.js";
import { AuthProvider } from "kotii-auth";
logger.setNameSpaces([
  {
    namespace: "app:start-client",
    id: "appClient",
  },
  {
    namespace: "app:start-server",
    id: "appServer",
  },
  {
    namespace: "app:demo",
    id: "app",
  },
]);

// import { meta } from "./manifest.js";
let hydrateInvokes = 0;
let userWrapper = null;
let userLayout = null;
let container = null;
let customHydrateRoot = null;
const App = function () {
  var _window, _window2;
  let appWrapper =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let layout =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  userWrapper = appWrapper;
  userLayout = layout;
  const app = process.env.KOTII_APP_META;
  const effectsStore =
    (_window = window) !== null &&
    _window !== void 0 &&
    _window.__KOTII_EFFECTS_STATE__
      ? JSON.parse(window.__KOTII_EFFECTS_STATE__)
      : null;
  const authUser =
    (_window2 = window) !== null &&
    _window2 !== void 0 &&
    _window2.__KOTII_AUTH_USER__
      ? JSON.parse(window.__KOTII_AUTH_USER__)
      : null;
  let { type, stateVendor = null } = app;
  if (type !== "ssr") {
    if (stateVendor && stateVendor === "redux") {
      const store = createReduxStore();
      return appSpaWithRedux({
        appWrapper,
        layout,
        store,
        effectsStore,
        authUser,
      });
    }
    return appSpa({
      appWrapper,
      layout,
      effectsStore,
      authUser,
    });
  } else {
    if (stateVendor && stateVendor === "redux") {
      const store = createReduxStore(window.__PRELOADED_STATE__);
      return appWithRedux({
        appWrapper,
        layout,
        store,
        effectsStore,
        authUser,
      });
    }
    return appNormal({
      appWrapper,
      layout,
      effectsStore,
      authUser,
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
    effectsStore,
    authUser,
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  if (isServer) {
    return /*#__PURE__*/ React.createElement(
      Provider,
      {
        store: store,
      },
      /*#__PURE__*/ React.createElement(
        AppProvider,
        {
          appWrapper: appWrapper,
          layout: layout,
          effectsStore: effectsStore,
        },
        /*#__PURE__*/ React.createElement(AppGeneric, {
          isServer: true,
          goodies: goodies,
          authUser: authUser,
        })
      )
    );
  }
  hydrateInvokes++;
  container = !container ? document.getElementById("root") : container;
  if (customHydrateRoot) {
    return customHydrateRoot.render(
      /*#__PURE__*/ React.createElement(
        Provider,
        {
          store: store,
        },
        /*#__PURE__*/ React.createElement(
          AppProvider,
          {
            appWrapper: appWrapper,
            layout: layout,
            effectsStore: effectsStore,
          },
          /*#__PURE__*/ React.createElement(AppGeneric, {
            authUser: authUser,
          })
        )
      )
    );
  } else {
    customHydrateRoot = hydrateRoot(
      container,
      /*#__PURE__*/ React.createElement(
        Provider,
        {
          store: store,
        },
        /*#__PURE__*/ React.createElement(
          AppProvider,
          {
            appWrapper: appWrapper,
            layout: layout,
            effectsStore: effectsStore,
          },
          /*#__PURE__*/ React.createElement(AppGeneric, {
            authUser: authUser,
          })
        )
      )
    );
  }
};
const AppGeneric = (props) => {
  const { appWrapper } = useAppContext();
  const { isServer = false, goodies = {}, authUser = null } = props;
  const AppWrapper = appWrapper;
  return appWrapper
    ? /*#__PURE__*/ React.createElement(
        AuthProvider,
        {
          authUser: authUser,
        },
        /*#__PURE__*/ React.createElement(
          AppWrapper,
          null,
          !isServer
            ? /*#__PURE__*/ React.createElement(ClientRoutes, {
                goodies: goodies,
              })
            : /*#__PURE__*/ React.createElement(RoutesAsServerRoutes, {
                goodies: goodies,
              })
        )
      )
    : !isServer
    ? /*#__PURE__*/ React.createElement(
        AuthProvider,
        {
          authUser: authUser,
        },
        /*#__PURE__*/ React.createElement(ClientRoutes, null)
      )
    : /*#__PURE__*/ React.createElement(
        AuthProvider,
        {
          authUser: authUser,
        },
        /*#__PURE__*/ React.createElement(RoutesAsServerRoutes, null)
      );
};
const appNormal = function () {
  let {
    appWrapper,
    layout,
    isServer = false,
    effectsStore,
    authUser,
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  if (isServer) {
    return /*#__PURE__*/ React.createElement(
      AppProvider,
      {
        appWrapper: appWrapper,
        layout: layout,
        effectsStore: effectsStore,
      },
      /*#__PURE__*/ React.createElement(AppGeneric, {
        authUser: authUser,
      })
    );
  }
  container = !container ? document.getElementById("root") : container;
  hydrateRoot(
    document.getElementById("root"),
    /*#__PURE__*/ React.createElement(
      AppProvider,
      {
        appWrapper: appWrapper,
        layout: layout,
        effectsStore: effectsStore,
      },
      /*#__PURE__*/ React.createElement(AppGeneric, {
        authUser: authUser,
      })
    )
  );
};
const appSpa = function () {
  let { appWrapper, layout, effectsStore, authUser } =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  const root = createRoot(document.getElementById("root"));
  root.render(
    /*#__PURE__*/ React.createElement(
      StrictMode,
      null,
      /*#__PURE__*/ React.createElement(
        AppProvider,
        {
          appWrapper: appWrapper,
          layout: layout,
          effectsStore: effectsStore,
        },
        /*#__PURE__*/ React.createElement(AppGeneric, {
          authUser: authUser,
        })
      )
    )
  );
};
const appSpaWithRedux = function () {
  let { appWrapper, layout, store, effectsStore, authUser } =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  const root = createRoot(document.getElementById("root"));
  root.render(
    /*#__PURE__*/ React.createElement(
      StrictMode,
      null,
      /*#__PURE__*/ React.createElement(
        Provider,
        {
          store: store,
        },
        /*#__PURE__*/ React.createElement(
          AppProvider,
          {
            appWrapper: appWrapper,
            layout: layout,
            effectsStore: effectsStore,
          },
          /*#__PURE__*/ React.createElement(AppGeneric, {
            authUser: authUser,
          })
        )
      )
    )
  );
};
const ServerApp = function () {
  let {
    appWrapper = null,
    layout = null,
    goodies = null,
    storeFromSource = null,
    effectsStore,
    authUser = null,
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  const store = !storeFromSource ? createReduxStore() : storeFromSource;
  const existsMeta = fs.existsSync(
    "".concat(process.cwd()).concat(path.sep, "app.manifest.json")
  );
  if (!existsMeta)
    throw new Error("This project is missing app.manifest.json, please add it");
  const meta = JSON.parse(
    fs.readFileSync(
      "".concat(process.cwd()).concat(path.sep, "app.manifest.json")
    )
  );
  const { app } = meta;
  const { stateVendor = null } = app;
  if (stateVendor && stateVendor === "redux") {
    return appWithRedux({
      appWrapper,
      layout,
      store,
      isServer: true,
      goodies,
      effectsStore,
      authUser,
    });
  }
  return appNormal({
    appWrapper,
    layout,
    isServer: true,
    goodies,
    effectsStore,
    authUser,
  });
};
if (import.meta.webpackHot) {
  import.meta.webpackHot.accept("./build.js", (er) => {
    App(userWrapper, userLayout);
  });
}
export {
  Head,
  Image,
  Svg,
  useAppContext,
  useUniversalEffect,
} from "../react-components-pruned/index.js";
export { ServerApp };
export default App;
