/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import React from "react";
// import { lazyLoad, LazySuspense } from "kotii-lazy";

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
  try {
    const reactRedux = await import("react-redux");
    const kotiiDev = await import("@kotii/_internal/land");
    return {
      Provider: reactRedux.Provider,
      createReduxStore: kotiiDev.createReduxStore
    };
  } catch (err) {
    if (((err === null || err === void 0 ? void 0 : err.message) || "").includes("react-redux")) {
      throw new Error('React-Redux is required but not installed. Please run "npm install react-redux".');
    }
    if (((err === null || err === void 0 ? void 0 : err.message) || "").includes("@kotii/_internal/land")) {
      throw new Error('Your Redux store module ("@kotii/_internal/land") could not be loaded.');
    }
    throw err;
  }
}
export default (async function () {
  let {
    enabled,
    preloadState,
    children,
    isStoreCreated = false
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
  console.log("THE PASSED PROPS", enabled, preloadState, children);
  if (!enabled) return children;
  // let isServer = typeof window == "undefined" ? true : false;

  console.log("SERVER REDUX RESPONSE");
  // if (isStoreCreated && isServer)
  //   return (
  //     <ServerReduxWrapper
  //       preloadState={preloadState}
  //       isStoreCreated={isStoreCreated}
  //       reduxResources={reduxResources}
  //     >
  //       {children}
  //     </ServerReduxWrapper>
  //   );

  try {
    // let Provider;
    // let createReduxStore;

    const {
      createReduxStore,
      Provider
    } = await loadRedux();
    const store = !isServer ? createReduxStore(preloadState, isStoreCreated) : preloadState;
    return /*#__PURE__*/React.createElement(Provider, {
      store: store
    }, children);
  } catch (e) {
    console.log("THE WAS AN ERROR LOADING REDUX");
    throw e;
  }
});