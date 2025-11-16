import React, { useState } from "react";
const AuthContext = /*#__PURE__*/React.createContext(null);
const AuthProvider = _ref => {
  let {
    defaultUser,
    children
  } = _ref;
  const [user, setUser] = useState(defaultUser);
  const authLogin = authUser => setUser(authUser);
  const authLogout = () => setUser(null);
  return /*#__PURE__*/React.createElement(AuthContext.Provider, {
    value: {
      login: authLogin,
      user,
      logout: authLogout
    }
  }, children);
};
export default AuthProvider;
export const useAuth = () => {
  return React.useContext(AuthContext);
};