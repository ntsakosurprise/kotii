/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import React from "react";
import { lazyLoad } from "kotii-lazy";

// // loadReduxServer.js (ESM)
// export async function loadReduxServer() {
//   try {
//     const reactRedux = await import("react-redux");
//     const kotiiDev = await import("@kotii/_internal/land");

//     return {
//       Provider: reactRedux.Provider,
//       createReduxStore: kotiiDev.createReduxStore,
//     };
//   } catch (err) {
//     if ((err?.message || "").includes("react-redux")) {
//       throw new Error(
//         'React-Redux is required but not installed. Please run "npm install react-redux".'
//       );
//     }
//     if ((err?.message || "").includes("@kotii/_internal/land")) {
//       throw new Error(
//         'Your Redux store module ("@kotii/_internal/land") could not be loaded.'
//       );
//     }
//     throw err;
//   }
// }

// function ServerReduxWrapper({
//   preloadState,
//   isStoreCreated,
//   reduxResources,
//   children,
// }) {
//   // Dynamic import on server, but not lazy inside React components
//   console.log("Server Redux Wrapper", preloadState, isStoreCreated);
//   const { Provider } = reduxResources;

//   // const store = createReduxStore(preloadState, isStoreCreated);

//   return <Provider store={preloadState}>{children}</Provider>;
// }
const isServer = typeof window == "undefined" ? true : false;
export async function loadRedux() {
  console.log("THE LOAD REDUX", isServer);
  try {
    const reactRedux = await import("react-redux");
    const kotiiDev = await import("@kotii/_internal/land");
    const { thunk } = await import("redux-thunk");
    const reduxFuncs = await import("redux");
    const { reducers } = await import(
      "/kotii-user-land-aliase/src/store/index"
    );

    return {
      Provider: reactRedux.Provider,
      createReduxStore: kotiiDev.createReduxStore,
      reduxThunk: thunk,
      reactRedux,
      reducers,
      reduxFuncs,
    };
  } catch (err) {
    console.log("THE LOAD REDUX ERROR", err);
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

// export default async function OptionalDynamiceReduxWrapper({
//   enabled,
//   preloadState,
//   children,
//   isStoreCreated = false,
// }) {
//   console.log("THE PASSED PROPS", enabled, preloadState, children);
//   if (!enabled) return children;
//   // let isServer = typeof window == "undefined" ? true : false;

//   console.log("SERVER REDUX RESPONSE");
//   // if (isStoreCreated && isServer)
//   //   return (
//   //     <ServerReduxWrapper
//   //       preloadState={preloadState}
//   //       isStoreCreated={isStoreCreated}
//   //       reduxResources={reduxResources}
//   //     >
//   //       {children}
//   //     </ServerReduxWrapper>
//   //   );

//   try {
//     // let Provider;
//     // let createReduxStore;

//     const { createReduxStore, Provider } = await loadRedux();
//     const store = !isServer
//       ? createReduxStore(preloadState, isStoreCreated)
//       : preloadState;

//     return <Provider store={store}>{children}</Provider>;
//   } catch (e) {
//     console.log("THE WAS AN ERROR LOADING REDUX");
//     throw e;
//   }
// }

export const OptionalDynamiceReduxWrapperLazy = lazyLoad(async () => {
  // const { Provider } = await import("react-redux");
  // const { createReduxStore } = await import("@kotii/_internal/land");
  const { Provider, createReduxStore, reduxThunk, reducers, reduxFuncs } =
    await loadRedux();

  return {
    default: ({ enabled, preloadState, isStoreCreated, children } = props) => {
      console.log("OPTIONAL COMPONENT", enabled, preloadState, isStoreCreated);
      if (!enabled) return children;
      const store = !isServer
        ? createReduxStore(preloadState, reducers, reduxFuncs, reduxThunk)
        : preloadState;
      console.log("THE COMPONENT PROVIDER", store);

      return <Provider store={store}>{children}</Provider>;
    },
  };
});
