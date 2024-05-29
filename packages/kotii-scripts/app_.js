import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";

import createReduxStore from "./app_redux.js";
// import ClientRoutes, { RoutesAsServerRoutes } from "./build.js";
import { ClientRoutes, RoutesAsServerRoutes } from "./build.js";
import { AppProvider, useAppContext } from "./react-components/index.jsx";
const App = (appWrapper = null, layout = null) => {
  import("./manifest.js").then((importedManifest) => {
    let meta = importedManifest.meta;
    import("./build.js").then((importedBuild) => {
      // const ClientRoutes = importedBuild.ClientRoutes;
      const { app } = meta;
      const { stateVendor = null, type } = app;

      if (type !== "ssr") {
        if (stateVendor && stateVendor === "redux") {
          const store = createReduxStore(window.__PRELOADED_STATE__);
          return appSpaWithRedux(appWrapper, layout, store);
        }
        return appSpa(appWrapper, layout);
      } else {
        if (stateVendor && stateVendor === "redux") {
          const store = createReduxStore(window.__PRELOADED_STATE__);
          return appWithRedux(appWrapper, layout, store);
        }
        return appNormal(appWrapper, layout);
      }
    });
  });
};
const appWithRedux = (appWrapper, layout, store, isServer = false) => {
  if (isServer)
    return (
      <Provider store={store}>
        <AppProvider appWrapper={appWrapper} layout={layout}>
          <AppGeneric isServer={true} />
        </AppProvider>
      </Provider>
    );

  hydrateRoot(
    document.getElementById("root"),
    <Provider store={store}>
      <AppProvider appWrapper={appWrapper} layout={layout}>
        <AppGeneric />
      </AppProvider>
    </Provider>
  );
};

const AppGeneric = (props) => {
  const { appWrapper } = useAppContext();
  const { isServer = false } = props;
  const AppWrapper = appWrapper;

  return appWrapper ? (
    <AppWrapper>
      {!isServer ? <ClientRoutes /> : <RoutesAsServerRoutes />}
    </AppWrapper>
  ) : !isServer ? (
    <ClientRoutes />
  ) : (
    <RoutesAsServerRoutes />
  );
};

const appNormal = (appWrapper, layout) => {
  hydrateRoot(
    document.getElementById("root"),
    <AppProvider appWrapper={appWrapper} layout={layout}>
      <AppGeneric />
    </AppProvider>
  );
};

const appSpa = (appWrapper, layout) => {
  if (typeof window !== "undefined") {
    const root = createRoot(document.getElementById("root"));
    root.render(
      <StrictMode>
        <AppProvider appWrapper={appWrapper} layout={layout}>
          <AppGeneric />
        </AppProvider>
      </StrictMode>
    );
  }
};

const appSpaWithRedux = (appWrapper, layout, store) => {
  if (typeof window !== "undefined") {
    const root = createRoot(document.getElementById("root"));
    root.render(
      <StrictMode>
        <Provider store={store}>
          <AppProvider appWrapper={appWrapper} layout={layout}>
            <AppGeneric />
          </AppProvider>
        </Provider>
      </StrictMode>
    );
  }
};

const ServerApp = (
  appWrapper = null,
  layout = null,
  storeFromSource = null
) => {
  const store = !storeFromSource ? createReduxStore() : storeFromSource;
  import("./manifest.js").then((importedManifest) => {
    let meta = importedManifest.meta;
    import("./build.js").then((importedBuild) => {
      // const ClientRoutes = importedBuild.ClientRoutes;
      const { app } = meta;
      const { stateVendor = null, type } = app;

      if (stateVendor && stateVendor === "redux") {
        console.log("THE STATE VENDOR IS IS REDUX");
        return appWithRedux(appWrapper, layout, store, true);
      }
      return appNormal(appWrapper, layout, store);
    });
  });
};
export { Head } from "./react-components/index.jsx";
export { ServerApp };
export default App;
