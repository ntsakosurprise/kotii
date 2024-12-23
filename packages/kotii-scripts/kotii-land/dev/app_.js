import fs from "fs";
import path from "path";
import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AppProvider, useAppContext } from "../../react-components/index.jsx";
import createReduxStore from "./app_redux.js";
import { ClientRoutes, RoutesAsServerRoutes } from "./build.js";
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
  const effectsStore = JSON.parse(window.__KOTII_EFFECTS_STATE__);

  console.log("THE PROCESS.BROWSER.ENVS", process.env);

  let { type, stateVendor = null } = app;
  if (type !== "ssr") {
    console.log("NOT SSR", stateVendor);
    if (stateVendor && stateVendor === "redux") {
      const store = createReduxStore();
      return appSpaWithRedux({ appWrapper, layout, store, effectsStore });
    }
    return appSpa({ appWrapper, layout, effectsStore });
  } else {
    if (stateVendor && stateVendor === "redux") {
      console.log("TYPE IS SSR");
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
  console.log("APP WITH REDUX", appWrapper, layout, store, isServer);
  if (isServer) {
    console.log("IT IS RENDERING FOR SERVER", isServer);
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
    console.log(
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
  console.log("APP NORMARL IS RUNNING");
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
  console.log("APP SPA IS RUNNING");

  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <AppProvider appWrapper={appWrapper} layout={layout}>
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
  console.log("APP SPA WITH REDUX RUNNING");

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
  console.log("THE GOODIES FROM SERVER", goodies);
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
  console.log("SERVER META", meta);

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
  console.log("THE META.HOT");
  import.meta.webpackHot.accept("./build.js", (er) => {
    console.log("THE HOT ERROR", er);
    console.log("THE CUSTOM", customHydrateRoot, userLayout, userWrapper);
    App(userWrapper, userLayout);
  });
}

export {
  Head,
  useAppContext,
  useUniversalEffect,
} from "../../react-components/index.jsx";
export { ServerApp };
export default App;
