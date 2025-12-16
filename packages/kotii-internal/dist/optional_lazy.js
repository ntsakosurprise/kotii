import { lazyLoad } from "kotii-lazy";
import React from "react";
export const OptionalDynamiceReduxWrapperLazy = lazyLoad(async () => {
  const {
    Provider
  } = await import("react-redux");
  const {
    createReduxStore
  } = await import("@kotii/_internal/land");
  return {
    default: _ref => {
      let {
        enabled,
        preloadState,
        isStoreCreated,
        children
      } = _ref;
      if (!enabled) return children;
      const store = createReduxStore(preloadState, isStoreCreated);
      return /*#__PURE__*/React.createElement(Provider, {
        store: store
      }, children);
    }
  };
});