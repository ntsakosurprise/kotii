/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import React from "react";
import { lazyLoad, LazySuspense } from "kotii-lazy";

// loadReduxServer.js (ESM)
export async function loadReduxServer() {
  try {
    const reactRedux = await import("react-redux");
    const kotiiDev = await import("@kotii/_internal/land");

    return {
      Provider: reactRedux.Provider,
      createReduxStore: kotiiDev.createReduxStore,
    };
  } catch (err) {
    if ((err?.message || "").includes("react-redux")) {
      throw new Error(
        'React-Redux is required but not installed. Please run "npm install react-redux".'
      );
    }
    if ((err?.message || "").includes("@kotii/_internal/land")) {
      throw new Error(
        'Your Redux store module ("@kotii/_internal/land") could not be loaded.'
      );
    }
    throw err;
  }
}

function ServerReduxWrapper({
  preloadState,
  isStoreCreated,
  reduxResources,
  children,
}) {
  // Dynamic import on server, but not lazy inside React components
  console.log("Server Redux Wrapper", preloadState, isStoreCreated);
  const { Provider } = reduxResources;

  // const store = createReduxStore(preloadState, isStoreCreated);

  return <Provider store={preloadState}>{children}</Provider>;
}

export const OptionalDynamiceReduxWrapper = ({
  enabled,
  preloadState,
  children,
  isStoreCreated = false,
  reduxResources,
}) => {
  console.log("THE PASSED PROPS", enabled, preloadState, children);
  if (!enabled) return children;

  console.log("SERVER REDUX RESPONSE");
  if (isStoreCreated)
    return (
      <ServerReduxWrapper
        preloadState={preloadState}
        isStoreCreated={isStoreCreated}
        reduxResources={reduxResources}
      >
        {children}
      </ServerReduxWrapper>
    );

  let ReduxWrapper;
  try {
    ReduxWrapper = lazyLoad(async () => {
      let Provider;
      let createReduxStore;

      try {
        ({ Provider } = await import("react-redux"));
      } catch (e) {
        throw new Error(
          'React-Redux is required but not installed. Please run "npm install react-redux".'
        );
      }

      try {
        ({ createReduxStore } = await import("@kotii/_internal/land"));
      } catch (e) {
        throw new Error(
          'Your Redux store module ("app_redux.js") could not be loaded.'
        );
      }

      const store = createReduxStore(preloadState, isStoreCreated);

      return {
        default: ({ children }) => (
          <Provider store={store}>{children}</Provider>
        ),
      };
    });
  } catch (e) {
    throw e;
  }

  return (
    <LazySuspense fallback={null}>
      <ReduxWrapper>{children}</ReduxWrapper>
    </LazySuspense>
  );
};
