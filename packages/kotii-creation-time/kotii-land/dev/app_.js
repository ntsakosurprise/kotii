/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import fs from "fs";
import { loggas, logger } from "kotii-logger";
import path from "path";
import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { AppProvider, useAppContext } from "kotii-components";

import { ClientRoutes, RoutesAsServerRoutes } from "@kotii/dev";
import { AuthProvider } from "kotii-auth";
import { OptionalDynamiceReduxWrapper } from "@kotii/dev";
import { createReduxStore } from "./index.js";

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
  const store = window.__PRELOADED_STATE__;

  return kotiiApp({
    appWrapper,
    layout,
    store,
    isServer: true,
    effectsStore,
    authUser,
    reduxEnabled: stateVendor && stateVendor === "redux" ? true : false,
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
const ServerApp = ({
  appWrapper = null,
  layout = null,
  goodies = null,
  storeFromSource = null,
  effectsStore,
  authUser = null,
  reduxResources = null,
} = props) => {
  const store = storeFromSource;
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
    reduxResources,
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
const AppGeneric = (props) => {
  console.log("THE APP GENERIC. Server", RoutesAsServerRoutes);
  console.log("THE APP GENERIC. Client", ClientRoutes);
  const { appWrapper } = useAppContext();
  const { isServer = false, goodies = {}, authUser = null } = props;
  const AppWrapper = appWrapper;
  console.log("THE APP GENERIC. props ", props);

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
const KotiiMainApp = (props) => {
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
    reduxResources,
  } = props;

  return (
    <StrictMode>
      <OptionalDynamiceReduxWrapper
        enabled={reduxEnabled}
        preloadState={store}
        isStoreCreated={isStoreCreated}
        reduxResources={reduxResources}
      >
        <AppProvider
          appWrapper={appWrapper}
          layout={layout}
          effectsStore={effectsStore}
        >
          <AppGeneric
            isServer={isServer}
            goodies={goodies}
            authUser={authUser}
          />
        </AppProvider>
      </OptionalDynamiceReduxWrapper>
    </StrictMode>
  );
};
const kotiiApp = ({
  appWrapper,
  layout,
  store,
  isServer = false,
  goodies = null,
  effectsStore,
  authUser,
  isStoreCreated,
  reduxEnabled,
  reduxResources,
} = props) => {
  if (isServer) {
    return (
      <KotiiMainApp
        appWrapper={appWrapper}
        layout={layout}
        effectsStore={effectsStore}
        authUser={authUser}
        store={store}
        goodies={goodies}
        reduxEnabled={reduxEnabled}
        isStoreCreated={isStoreCreated}
        reduxResources={reduxResources}
        isServer={isServer}
      />
    );
  }
  hydrateInvokes++;
  container = !container ? document.getElementById("root") : container;

  if (customHydrateRoot) {
    return customHydrateRoot.render(
      <KotiiMainApp
        appWrapper={appWrapper}
        layout={layout}
        effectsStore={effectsStore}
        authUser={authUser}
        store={store}
        goodies={goodies}
      />
    );
  } else {
    customHydrateRoot = hydrateRoot(
      container,
      <KotiiMainApp
        appWrapper={appWrapper}
        layout={layout}
        effectsStore={effectsStore}
        authUser={authUser}
        store={store}
        goodies={goodies}
      />
    );
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
} from "kotii-components";
export { ServerApp };
export default App;
