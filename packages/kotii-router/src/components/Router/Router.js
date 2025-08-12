import React, { createContext, useState } from "react";
import { extractPathFromString } from "../../utils";

export const KotiiRouterContenxt = createContext();
const Router = ({ children }) => {
  const [cleanPath, setPath] = useState(
    extractPathFromString(window.location.hash) || "/"
  );

  return (
    <KotiiRouterContenxt.Provider value={{ path: cleanPath }}>
      {children}
    </KotiiRouterContenxt.Provider>
  );
};

export default Router;

export const navigate = (to) => {
  window.location.hash = to;
};
