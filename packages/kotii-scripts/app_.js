import React from "react";
import { hydrateRoot } from "react-dom/client";
import { Provider } from "react-redux";
import createReduxStore from "./app_redux.js";
// import ClientRoutes, { RoutesAsServerRoutes } from "./build.js";
import { ClientRoutes, RoutesAsServerRoutes } from "./build.js";
import { AppProvider } from "./react-components/index.jsx";
const App = (appWrapper = null, layout = null) => {
  import("./manifest.js").then((importedManifest) => {
    let meta = importedManifest.meta;
    import("./build.js").then((importedBuild) => {
      // const ClientRoutes = importedBuild.ClientRoutes;
      const { app } = meta;
      const { stateVendor = null, type } = app;
      if (stateVendor && stateVendor === "redux") {
        return appWithRedux(appWrapper, layout);
      }

      appNormal(appWrapper, layout);

      if (appWrapper || layout) {
        if (typeof window !== "undefined") {
          const AppWrapper = appWrapper;
          //   const Layout = props.layout;
          if (appWrapper && layout) {
            const Layout = layout;
            hydrateRoot(
              document.getElementById("root"),
              <Provider store={store}>
                <AppWrapper>
                  <ClientRoutes layout={Layout} />
                </AppWrapper>
              </Provider>
            );
          } else {
            const Layout = layout;
            hydrateRoot(
              document.getElementById("root"),
              <Provider store={store}>
                <AppWrapper>
                  <ClientRoutes layout={Layout} />
                </AppWrapper>
              </Provider>
            );
            // root.render(
            //   <StrictMode>
            //     <AppWrapper>
            //       <Routes layout={Layout} />
            //     </AppWrapper>
            //   </StrictMode>
            // );
          }
        }
      } else {
        if (typeof window !== "undefined") {
          if (meta?.app?.type !== "ssr") {
            return <ClientRoutes />;
          } else {
            hydrateRoot(document.getElementById("root"), <ClientRoutes />);
          }
        }
      }
    });
  });
};
const appWithRedux = (appWrapper, layout) => {
  const store = createReduxStore(window.__PRELOADED_STATE__);
  let AppWrapper = appWrapper;
  hydrateRoot(
    document.getElementById("root"),
    <Provider store={store}>
      <AppProvider appWrapper={appWrapper} layout={layout}>
        {appWrapper ? (
          <AppWrapper>
            <ClientRoutes />
          </AppWrapper>
        ) : (
          <ClientRoutes />
        )}
      </AppProvider>
    </Provider>
  );
};

const appNormal = (appWrapper, layout) => {
  let AppWrapper = appWrapper;
  hydrateRoot(
    document.getElementById("root"),
    <AppProvider appWrapper={appWrapper} layout={layout}>
      {appWrapper ? (
        <AppWrapper>
          <ClientRoutes />
        </AppWrapper>
      ) : (
        <ClientRoutes />
      )}
    </AppProvider>
  );
};

const ServerApp = (
  appWrapper = null,
  layout = null,
  storeFromSource = null
) => {
  const store = !storeFromSource ? createReduxStore() : storeFromSource;
  if (appWrapper || layout) {
    if (appWrapper && layout) {
      const AppWrapper = appWrapper;
      const Layout = layout;
      return (
        <Provider store={store}>
          <AppWrapper>
            <RoutesAsServerRoutes layout={Layout} />
          </AppWrapper>
        </Provider>
      );
    } else {
      const AppWrapper = appWrapper;
      const Layout = layout;
      if (AppWrapper) {
        return (
          <Provider store={store}>
            <AppWrapper>
              <RoutesAsServerRoutes />
            </AppWrapper>
          </Provider>
        );
      } else {
        return (
          <Provider store={store}>
            <RoutesAsServerRoutes layout={Layout} />
          </Provider>
        );
      }
    }
  } else {
    return (
      <Provider store={store}>
        <RoutesAsServerRoutes />
      </Provider>
    );
  }
};
export { Head } from "./react-components/index.jsx";
export { ServerApp };
export default App;
