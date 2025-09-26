import React from "react";

const AuthContext = React.createContext(null);

const AuthProvider = ({}) => {
  return (
    <AuthContext.Provider
      value={{ appName: "", layout, appWrapper, effectsStore }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAppContext = () => {
  return React.useContext(AppContext);
};
