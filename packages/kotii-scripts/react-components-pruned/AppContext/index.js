import React from "react";
const AppContext = /*#__PURE__*/React.createContext(null);
const AppProvider = props => {
  const {
    layout,
    appWrapper
  } = props;
  return /*#__PURE__*/React.createElement(AppContext.Provider, {
    value: {
      appName: "",
      layout,
      appWrapper
    }
  }, props.children);
};
export default AppProvider;
export const useAppContext = () => {
  return React.useContext(AppContext);
};