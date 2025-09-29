/* eslint-disable react/prop-types */
import React, { useState } from "react";

const AuthContext = React.createContext(null);

const AuthProvider = ({ defaultUser = null, children }) => {
  const [user, setUser] = useState(defaultUser);
  const authLogin = (authUser, onLogin = null) => {
    setUser(authUser);
    if (onLogin) onLogin();
  };
  const authLogout = (onLogout = null) => {
    setUser(null);
    if (onLogout) onLogout();
  };
  // const runOnLogin = () => {
  //   onLogin();
  // };
  // const runOnLogout = () => {
  //   onLoginOut();
  // };

  // useEffect(() => {
  //   if (!user) runOnLogout();
  // }, [user]);
  return (
    <AuthContext.Provider
      value={{ login: authLogin, user, logout: authLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuth = () => {
  return React.useContext(AuthContext);
};
