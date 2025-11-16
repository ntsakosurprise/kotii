import React from "react";
const AppContext = /*#__PURE__*/React.createContext(null);
const AppProvider = props => {
  var _window, _window2;
  const {
    layout,
    appWrapper
  } = props;
  const effectsStore = typeof window !== "undefined" && (_window = window) !== null && _window !== void 0 && _window.__KOTII_EFFECTS_STATE__ ? JSON.parse(window.__KOTII_EFFECTS_STATE__) : props !== null && props !== void 0 && props.effectsStore ? props.effectsStore : null;
  typeof window !== "undefined" && (_window2 = window) !== null && _window2 !== void 0 && _window2.__KOTII_EFFECTS_STATE__ ? delete window.__KOTII_EFFECTS_STATE__ : null;
  // effectsStore["isFirstTimeRun"] = true;

  return /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: {
      appName: "",
      layout,
      appWrapper,
      effectsStore
    }
  }, props.children);
};
export default AppProvider;
export const useAppContext = () => {
  return React.useContext(AppContext);
};