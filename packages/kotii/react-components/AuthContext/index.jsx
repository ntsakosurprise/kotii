import React, { useState } from "react";

const AuthContext = React.createContext(null);

const AuthProvider = ({ defaultUser, children }) => {
  const [user, setUser] = useState(defaultUser);
  const authLogin = (authUser) => setUser(authUser);
  const authLogout = () => setUser(null);
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
