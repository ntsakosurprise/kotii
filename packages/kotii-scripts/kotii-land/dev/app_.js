import React, { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { AppProvider, useAppContext } from "../../react-components/index.jsx";
import createReduxStore from "./app_redux.js";
import { ClientRoutes, RoutesAsServerRoutes } from "./build.js";
import { meta } from "./manifest.js";
let hydrateInvokes = 0;
let userWrapper = null;
let userLayout = null;

let container = null;
let customHydrateRoot = null;

const App = (appWrapper = null, layout = null) => {
  userWrapper = appWrapper;
  userLayout = layout;
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
const appWithRedux = (appWrapper, layout, store, isServer = false) => {
  console.log("APP WITH REDUX", appWrapper, layout, store, isServer);
  if (isServer) {
    console.log("IT IS RENDERING FOR SERVER", isServer);
    return (
      <Provider store={store}>
        <AppProvider appWrapper={appWrapper} layout={layout}>
          <AppGeneric isServer={true} />
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
        <AppProvider appWrapper={appWrapper} layout={layout}>
          <AppGeneric />
        </AppProvider>
      </Provider>
    );
  } else {
    customHydrateRoot = hydrateRoot(
      container,
      <Provider store={store}>
        <AppProvider appWrapper={appWrapper} layout={layout}>
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

const appNormal = (appWrapper, layout, isServer = false) => {
  console.log("APP NORMARL IS RUNNING");
  if (isServer) {
    return (
      <AppProvider appWrapper={appWrapper} layout={layout}>
        <AppGeneric />
      </AppProvider>
    );
  }
  container = !container ? document.getElementById("root") : container;
  hydrateRoot(
    document.getElementById("root"),
    <AppProvider appWrapper={appWrapper} layout={layout}>
      <AppGeneric />
    </AppProvider>
  );
};

const appSpa = (appWrapper, layout) => {
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

const appSpaWithRedux = (appWrapper, layout, store) => {
  console.log("APP SPA WITH REDUX RUNNING");

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
};

const ServerApp = (
  appWrapper = null,
  layout = null,
  storeFromSource = null
) => {
  const store = !storeFromSource ? createReduxStore() : storeFromSource;

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

export { Head } from "../../react-components/index.jsx";
export { ServerApp };
export default App;
