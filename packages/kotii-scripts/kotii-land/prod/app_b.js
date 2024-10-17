import fs from "fs";
import path from "path";
import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import {
  AppProvider,
  useAppContext,
} from "../../react-components-pruned/index.js";
import createReduxStore from "./app_redux.js";
import { ClientRoutes, RoutesAsServerRoutes } from "./build_b.js";
// import { meta } from "./manifest.js";
let hydrateInvokes = 0;
let userWrapper = null;
let userLayout = null;
let container = null;
let customHydrateRoot = null;
const App = function () {
  let appWrapper =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let layout =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  userWrapper = appWrapper;
  userLayout = layout;
  const existsMeta = fs.existsSync(
    `${process.cwd()}${path.sep}app.manifest.json`
  );
  if (!existsMeta)
    throw new Error("This project is missing app.manifest.json, please add it");
  const meta = JSON.parse(
    fs.readFileSync(`${process.cwd()}${path.sep}app.manifest.json`)
  );
  const { app } = meta;
  console.log("THE APP", app);
  let { type, stateVendor = null } = app;
  if (type !== "ssr") {
    console.log("NOT SSR", stateVendor);
    if (stateVendor && stateVendor === "redux") {
      const store = createReduxStore();
      return appSpaWithRedux(appWrapper, layout, store);
    }
    return appSpa(appWrapper, layout);
  } else {
    if (stateVendor && stateVendor === "redux") {
      console.log("TYPE IS SSR");
      const store = createReduxStore(window.__PRELOADED_STATE__);
      return appWithRedux(appWrapper, layout, store);
    }
    return appNormal(appWrapper, layout);
  }
};
const appWithRedux = function (appWrapper, layout, store) {
  let isServer =
    arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  console.log("APP WITH REDUX", appWrapper, layout, store, isServer);
  if (isServer) {
    console.log("IT IS RENDERING FOR SERVER", isServer);
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
        },
        /*#__PURE__*/ React.createElement(AppGeneric, {
          isServer: true,
        })
      )
    );
  }
  hydrateInvokes++;
  console.log(" ABOUT TO HYDRATE ON THE CLIENT", document.getElementById);
  container = !container ? document.getElementById("root") : container;
  console.log("THE CONTAINER", container);
  console.log("THE CUSTOM HYDRATE ROOT", customHydrateRoot);
  console.log("HYDRATE", hydrateInvokes);
  // customHydrateRoot = hydrateRoot(
  //   container,
  //   <Provider store={store}>
  //     <AppProvider appWrapper={appWrapper} layout={layout}>
  //       <AppGeneric />
  //     </AppProvider>
  //   </Provider>
  // );
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
          },
          /*#__PURE__*/ React.createElement(AppGeneric, null)
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
          },
          /*#__PURE__*/ React.createElement(AppGeneric, null)
        )
      )
    );
    console.log(
      "CREATED HYDRATED ROOT",
      customHydrateRoot,
      customHydrateRoot.render
    );
  }
};
const AppGeneric = (props) => {
  const { appWrapper } = useAppContext();
  const { isServer = false } = props;
  const AppWrapper = appWrapper;
  return appWrapper
    ? /*#__PURE__*/ React.createElement(
        AppWrapper,
        null,
        !isServer
          ? /*#__PURE__*/ React.createElement(ClientRoutes, null)
          : /*#__PURE__*/ React.createElement(RoutesAsServerRoutes, null)
      )
    : !isServer
    ? /*#__PURE__*/ React.createElement(ClientRoutes, null)
    : /*#__PURE__*/ React.createElement(RoutesAsServerRoutes, null);
};
const appNormal = function (appWrapper, layout) {
  let isServer =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  console.log("APP NORMARL IS RUNNING");
  if (isServer) {
    return /*#__PURE__*/ React.createElement(
      AppProvider,
      {
        appWrapper: appWrapper,
        layout: layout,
      },
      /*#__PURE__*/ React.createElement(AppGeneric, null)
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
      },
      /*#__PURE__*/ React.createElement(AppGeneric, null)
    )
  );
};
const appSpa = (appWrapper, layout) => {
  console.log("APP SPA IS RUNNING");
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
        },
        /*#__PURE__*/ React.createElement(AppGeneric, null)
      )
    )
  );
};
const appSpaWithRedux = (appWrapper, layout, store) => {
  console.log("APP SPA WITH REDUX RUNNING");
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
          },
          /*#__PURE__*/ React.createElement(AppGeneric, null)
        )
      )
    )
  );
};
const ServerApp = function () {
  let appWrapper =
    arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  let layout =
    arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  let storeFromSource =
    arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  const store = !storeFromSource ? createReduxStore() : storeFromSource;
  const existsMeta = fs.existsSync(
    `${process.cwd()}${path.sep}app.manifest.json`
  );
  if (!existsMeta)
    throw new Error("This project is missing app.manifest.json, please add it");
  const meta = JSON.parse(
    fs.readFileSync(`${process.cwd()}${path.sep}app.manifest.json`)
  );
  const { app } = meta;
  const { stateVendor = null } = app;
  if (stateVendor && stateVendor === "redux") {
    return appWithRedux(appWrapper, layout, store, true);
  }
  return appNormal(appWrapper, layout, true);
};
if (import.meta.webpackHot) {
  console.log("THE META.HOT");
  import.meta.webpackHot.accept("./build.js", (er) => {
    console.log("THE HOT ERROR", er);
    console.log("THE CUSTOM", customHydrateRoot, userLayout, userWrapper);
    App(userWrapper, userLayout);
  });
}
export { Head } from "../../react-components-pruned/index.js";
export { ServerApp };
export default App;
