/* eslint-disable react/prop-types */
import React from "react";

const AppContext = React.createContext(null);

const AppProvider = (props) => {
  const { layout, appWrapper } = props;
  const effectsStore =
    typeof window !== "undefined" && window?.__KOTII_EFFECTS_STATE__
      ? JSON.parse(window.__KOTII_EFFECTS_STATE__)
      : props?.effectsStore
      ? props.effectsStore
      : null;
  typeof window !== "undefined" && window?.__KOTII_EFFECTS_STATE__
    ? delete window.__KOTII_EFFECTS_STATE__
    : null;
  // effectsStore["isFirstTimeRun"] = true;

  return (
    <AppContext.Provider
      value={{ appName: "", layout, appWrapper, effectsStore }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useAppContext = () => {
  return React.useContext(AppContext);
};
