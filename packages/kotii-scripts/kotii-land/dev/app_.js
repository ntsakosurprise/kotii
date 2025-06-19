import fs from "fs";
import { loggas, logger } from "kotii-logger";
import path from "path";
import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AppProvider, useAppContext } from "../../react-components/index.jsx";
import createReduxStore from "./app_redux.js";
import { ClientRoutes, RoutesAsServerRoutes } from "./build.js";

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
  console.log("THE EFFECTSTORE RAW", window.__KOTII_EFFECTS_STATE__);
  const effectsStore = window?.__KOTII_EFFECTS_STATE__
    ? JSON.parse(window.__KOTII_EFFECTS_STATE__)
    : null;

  loggas.appClient.debug("THE PROCESS.BROWSER.ENVS", process.env);

  let { type, stateVendor = null } = app;
  if (type !== "ssr") {
    loggas.appClient.debug("NOT SSR", stateVendor);
    if (stateVendor && stateVendor === "redux") {
      const store = createReduxStore();
      return appSpaWithRedux({ appWrapper, layout, store, effectsStore });
    }
    return appSpa({ appWrapper, layout, effectsStore });
  } else {
    if (stateVendor && stateVendor === "redux") {
      loggas.appClient.debug("TYPE IS SSR");
      const store = createReduxStore(window.__PRELOADED_STATE__);
      return appWithRedux({ appWrapper, layout, store, effectsStore });
    }
    return appNormal({ appWrapper, layout, effectsStore });
  }
};
const appWithRedux = ({
  appWrapper,
  layout,
  store,
  isServer = false,
  goodies = null,
  effectsStore,
} = props) => {
  loggas.appClient.debug("APP WITH REDUX", appWrapper, layout, store, isServer);
  if (isServer) {
    return (
      <Provider store={store}>
        <AppProvider
          appWrapper={appWrapper}
          layout={layout}
          effectsStore={effectsStore}
        >
          <AppGeneric isServer={true} goodies={goodies} />
        </AppProvider>
      </Provider>
    );
  }
  hydrateInvokes++;
  loggas.appClient.debug(
    " ABOUT TO HYDRATE ON THE CLIENT",
    document.getElementById
  );
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
    return customHydrateRoot.render(
      <Provider store={store}>
        <AppProvider
          appWrapper={appWrapper}
          layout={layout}
          effectsStore={effectsStore}
        >
          <AppGeneric />
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
          <AppGeneric />
        </AppProvider>
      </Provider>
    );
    loggas.appClient.debug(
      "CREATED HYDRATED ROOT",
      customHydrateRoot,
      customHydrateRoot.render
    );
  }
};

const AppGeneric = (props) => {
  const { appWrapper } = useAppContext();
  const { isServer = false, goodies = {} } = props;
  const AppWrapper = appWrapper;

  return appWrapper ? (
    <AppWrapper>
      {!isServer ? (
        <ClientRoutes goodies={goodies} />
      ) : (
        <RoutesAsServerRoutes goodies={goodies} />
      )}
    </AppWrapper>
  ) : !isServer ? (
    <ClientRoutes />
  ) : (
    <RoutesAsServerRoutes />
  );
};

const appNormal = ({
  appWrapper,
  layout,
  isServer = false,
  effectsStore,
} = props) => {
  loggas.appClient.debug("APP NORMARL IS RUNNING");
  if (isServer) {
    return (
      <AppProvider
        appWrapper={appWrapper}
        layout={layout}
        effectsStore={effectsStore}
      >
        <AppGeneric />
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
      <AppGeneric />
    </AppProvider>
  );
};

const appSpa = ({ appWrapper, layout, effectsStore } = props) => {
  loggas.appClient.debug("APP SPA IS RUNNING");

  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <AppProvider
        appWrapper={appWrapper}
        layout={layout}
        effectsStore={effectsStore}
      >
        <AppGeneric />
      </AppProvider>
    </StrictMode>
  );
};

const appSpaWithRedux = ({
  appWrapper,
  layout,
  store,
  effectsStore,
} = props) => {
  loggas.appClient.debug("APP SPA WITH REDUX RUNNING");

  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <Provider store={store}>
        <AppProvider
          appWrapper={appWrapper}
          layout={layout}
          effectsStore={effectsStore}
        >
          <AppGeneric />
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
} = props) => {
  loggas.appServer.debug("THE GOODIES FROM SERVER", goodies);
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
  loggas.appServer.debug("SERVER META", meta);

  if (stateVendor && stateVendor === "redux") {
    return appWithRedux({
      appWrapper,
      layout,
      store,
      isServer: true,
      goodies,
      effectsStore,
    });
  }
  return appNormal({
    appWrapper,
    layout,
    isServer: true,
    goodies,
    effectsStore,
  });
};

if (import.meta.webpackHot) {
  loggas.appClient.debug("THE META.HOT");
  import.meta.webpackHot.accept("./build.js", (er) => {
    loggas.appClient.debug("THE HOT ERROR", er);
    loggas.appClient.debug(
      "THE CUSTOM",
      customHydrateRoot,
      userLayout,
      userWrapper
    );
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
