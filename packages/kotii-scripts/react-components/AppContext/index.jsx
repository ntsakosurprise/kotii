import React from "react";

const AppContext = React.createContext(null);

const AppProvider = (props) => {
  const { layout, appWrapper } = props;
  const effectsStore =
    typeof window !== "undefined"
      ? JSON.parse(window.__KOTII_EFFECTS_STATE__)
      : props.effectsStore;
  typeof window !== "undefined" ? delete window.__KOTII_EFFECTS_STATE__ : null;
  effectsStore["isFirstTimeRun"] = true;

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
