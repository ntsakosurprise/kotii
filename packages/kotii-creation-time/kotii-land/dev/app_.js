/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import fs from "fs";
import { loggas, logger } from "kotii-logger";
import path from "path";
import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AppProvider, useAppContext } from "../../react-components/index.jsx";
import createReduxStore from "./app_redux.js";
import { ClientRoutes, RoutesAsServerRoutes } from "./build.js";
import { AuthProvider } from "kotii-auth";

logger.setNameSpaces([
  { namespace: "app:start-client", id: "appClient" },
  { namespace: "app:start-server", id: "appServer" },
  { namespace: "app:demo", id: "app" },
]);

// import { meta } from "./manifest.js";
let hydrateInvokes = 0;
let userWrapper = null;
let userLayout = null;

let container = null;
let customHydrateRoot = null;

const App = (appWrapper = null, layout = null) => {
  userWrapper = appWrapper;
  userLayout = layout;
  const app = process.env.KOTII_APP_META;

  const effectsStore = window?.__KOTII_EFFECTS_STATE__
    ? JSON.parse(window.__KOTII_EFFECTS_STATE__)
    : null;
  const authUser = window?.__KOTII_AUTH_USER__
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
    return appSpa({ appWrapper, layout, effectsStore, authUser });
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
    return appNormal({ appWrapper, layout, effectsStore, authUser });
  }
};
const appWithRedux = ({
  appWrapper,
  layout,
  store,
  isServer = false,
  goodies = null,
  effectsStore,
  authUser,
} = props) => {
  if (isServer) {
    return (
      <Provider store={store}>
        <AppProvider
          appWrapper={appWrapper}
          layout={layout}
          effectsStore={effectsStore}
        >
          <AppGeneric isServer={true} goodies={goodies} authUser={authUser} />
        </AppProvider>
      </Provider>
    );
  }
  hydrateInvokes++;

  container = !container ? document.getElementById("root") : container;

  if (customHydrateRoot) {
    return customHydrateRoot.render(
      <Provider store={store}>
        <AppProvider
          appWrapper={appWrapper}
          layout={layout}
          effectsStore={effectsStore}
        >
          <AppGeneric authUser={authUser} />
        </AppProvider>
      </Provider>
    );
  } else {
    customHydrateRoot = hydrateRoot(
      container,
      <Provider store={store}>
        <AppProvider
          appWrapper={appWrapper}
          layout={layout}
          effectsStore={effectsStore}
        >
          <AppGeneric authUser={authUser} />
        </AppProvider>
      </Provider>
    );
  }
};

const AppGeneric = (props) => {
  const { appWrapper } = useAppContext();
  const { isServer = false, goodies = {}, authUser = null } = props;
  const AppWrapper = appWrapper;

  return appWrapper ? (
    <AuthProvider authUser={authUser}>
      <AppWrapper>
        {!isServer ? (
          <ClientRoutes goodies={goodies} />
        ) : (
          <RoutesAsServerRoutes goodies={goodies} />
        )}
      </AppWrapper>
    </AuthProvider>
  ) : !isServer ? (
    <AuthProvider authUser={authUser}>
      <ClientRoutes />
    </AuthProvider>
  ) : (
    <AuthProvider authUser={authUser}>
      <RoutesAsServerRoutes />
    </AuthProvider>
  );
};

const appNormal = ({
  appWrapper,
  layout,
  isServer = false,
  effectsStore,
  authUser,
} = props) => {
  if (isServer) {
    return (
      <AppProvider
        appWrapper={appWrapper}
        layout={layout}
        effectsStore={effectsStore}
      >
        <AppGeneric authUser={authUser} />
      </AppProvider>
    );
  }
  container = !container ? document.getElementById("root") : container;
  hydrateRoot(
    document.getElementById("root"),
    <AppProvider
      appWrapper={appWrapper}
      layout={layout}
      effectsStore={effectsStore}
    >
      <AppGeneric authUser={authUser} />
    </AppProvider>
  );
};

const appSpa = ({ appWrapper, layout, effectsStore, authUser } = props) => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <AppProvider
        appWrapper={appWrapper}
        layout={layout}
        effectsStore={effectsStore}
      >
        <AppGeneric authUser={authUser} />
      </AppProvider>
    </StrictMode>
  );
};

const appSpaWithRedux = ({
  appWrapper,
  layout,
  store,
  effectsStore,
  authUser,
} = props) => {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <Provider store={store}>
        <AppProvider
          appWrapper={appWrapper}
          layout={layout}
          effectsStore={effectsStore}
        >
          <AppGeneric authUser={authUser} />
        </AppProvider>
      </Provider>
    </StrictMode>
  );
};

const ServerApp = ({
  appWrapper = null,
  layout = null,
  goodies = null,
  storeFromSource = null,
  effectsStore,
  authUser = null,
} = props) => {
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
} from "../../react-components/index.jsx";
export { ServerApp };
export default App;
