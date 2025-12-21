/* eslint-disable no-undef */
/* eslint-disable no-useless-catch */
/* eslint-disable react/prop-types */
import React from "react";
import { lazyLoad } from "kotii-lazy";
import { USER_LAND_ALIAS_REDUX } from "../user.js";
const isServer = typeof window == "undefined" ? true : false;
export async function loadRedux() {
  console.log("THE LOAD REDUX", isServer);
  try {
    const reactRedux = await import("react-redux");
    const kotiiDev = await import("kotii-internal");
    const {
      thunk
    } = await import("redux-thunk");
    const reduxFuncs = await import("redux");
    const {
      reducers
    } = await import(USER_LAND_ALIAS_REDUX);
    return {
      Provider: reactRedux.Provider,
      createReduxStore: kotiiDev.createReduxStore,
      reduxThunk: thunk,
      reactRedux,
      reducers,
      reduxFuncs
    };
  } catch (err) {
    console.log("THE LOAD REDUX ERROR", err);
    if (((err === null || err === void 0 ? void 0 : err.message) || "").includes("react-redux")) {
      throw new Error('React-Redux is required but not installed. Please run "npm install react-redux".');
    }
    if (((err === null || err === void 0 ? void 0 : err.message) || "").includes("".concat(USER_LAND_ALIAS_REDUX))) {
      throw new Error("Your Redux store module (".concat(USER_LAND_ALIAS_REDUX, ") could not be loaded."));
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
  // const { createReduxStore } = await import(`${USER_LAND_ALIAS_REDUX}`);
  const {
    Provider,
    createReduxStore,
    reduxThunk,
    reducers,
    reduxFuncs
  } = await loadRedux();
  return {
    default: function () {
      let {
        enabled,
        preloadState,
        isStoreCreated,
        children
      } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : props;
      console.log("OPTIONAL COMPONENT", enabled, preloadState, isStoreCreated);
      if (!enabled) return children;
      const store = !isServer ? createReduxStore(preloadState, reducers, reduxFuncs, reduxThunk) : preloadState;
      console.log("THE COMPONENT PROVIDER", store);
      return /*#__PURE__*/React.createElement(Provider, {
        store: store
      }, children);
    }
  };
});