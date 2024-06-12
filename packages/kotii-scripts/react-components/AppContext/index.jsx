import React from "react";

const AppContext = React.createContext(null);

const AppProvider = (props) => {
  const { layout, appWrapper } = props;
  return (
    <AppContext.Provider value={{ appName: "", layout, appWrapper }}>
      {props.children}
    </AppContext.Provider>
  );
};

export default AppProvider;
export const useAppContext = () => {
  return React.useContext(AppContext);
};
