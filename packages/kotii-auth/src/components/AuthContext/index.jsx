/* eslint-disable react/prop-types */
import React, { useState } from "react";

const onLoginActions = new Set();
const onLogoutActions = new Set();

const AuthContext = React.createContext(null);

const AuthProvider = ({
  defaultUser = null,
  children,
  onLogin = null,
  onLogout = null,
}) => {
  const [user, setUser] = useState(defaultUser);
  const authLogin = (authUser, onLoginAction = null) => {
    setUser(authUser);
    onLoginActions.forEach((afterLogin) => {
      afterLogin(authUser);
    });
    if (onLoginAction) onLoginAction();
    if (onLogin && typeof onLogin === "function") onLogin();
  };
  const authLogout = (onLogoutAction = null) => {
    setUser(null);
    onLogoutActions.forEach((afterLoginout) => {
      afterLoginout();
    });
    if (onLogoutAction) onLogoutAction();
    if (onLogout && typeof onLogout === "function") onLogout();
  };
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
export const registerOnLoginActions = (afterLoginAction) => {
  onLoginActions.add(afterLoginAction);
  return () => onLoginActions.delete(afterLoginAction);
};

export const registerOnLogoutActions = (afterLogoutAction) => {
  onLogoutActions.add(afterLogoutAction);
  return () => onLogoutActions.delete(afterLogoutAction);
};
