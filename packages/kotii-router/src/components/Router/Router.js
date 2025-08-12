import React, { createContext, useEffect, useState } from "react";
import { extractPathFromString } from "../../utils";

export const KotiiRouterContenxt = createContext();
const Router = ({ children }) => {
  const [cleanPath, setPath] = useState(
    extractPathFromString(window.location.hash) || "/"
  );

  useEffect(() => {
    const onChangeOfHash = () => {
      setPath(extractPathFromString(window.location.hash || "/"));
    };
    window.addEventListener("hashchange", onChangeOfHash);
    return () => window.removeEventListener("hashchange", onChangeOfHash);
  }, []);

  return (
    <KotiiRouterContenxt.Provider value={{ path: cleanPath, navigate }}>
      {children}
    </KotiiRouterContenxt.Provider>
  );
};

export default Router;

export const navigate = (to) => {
  window.location.hash = to;
};
