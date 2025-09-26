import React, { useState } from "react";

const AuthContext = React.createContext(null);

const AuthProvider = ({ defaultUser }) => {
  const [user, setUser] = useState(defaultUser);
  const authLogin = (authUser) => setUser(authUser);
  return (
    <AuthContext.Provider value={{ login: authLogin, user }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
export const useAuthContext = () => {
  return React.useContext(AuthContext);
};
