/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { useEffect } from "react";

const AuthContext = React.createContext(null);

const AuthProvider = ({
  defaultUser = null,
  children,
  onLogin = () => {},
  onLoginOut = () => {},
}) => {
  const [user, setUser] = useState(defaultUser);
  const authLogin = (authUser) => setUser(authUser);
  const authLogout = () => setUser(null);
  const runOnLogin = () => {
    onLogin();
  };
  const runOnLogout = () => {
    onLoginOut();
  };

  useEffect(() => {
    if (!user) runOnLogout();
    runOnLogin();
  }, [user]);
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
