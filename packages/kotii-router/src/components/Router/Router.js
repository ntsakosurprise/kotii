import React, { createContext, useEffect, useState } from "react";
import { extractPathFromString, navigate } from "../../utils";

export const KotiiRouterContenxt = createContext();

const Router = ({ children }) => {
  const [cleanPath, setPath] = useState(
    extractPathFromString(window.location.hash) || "/"
  );
  const [params, setRouteParams] = useState(null);

  const setParams = (params) => {
    setRouteParams(params);
  };

  useEffect(() => {
    const onChangeOfHash = () => {
      setPath(extractPathFromString(window.location.hash || "/"));
    };
    window.addEventListener("hashchange", onChangeOfHash);
    return () => window.removeEventListener("hashchange", onChangeOfHash);
  }, []);

  return (
    <KotiiRouterContenxt.Provider
      value={{ path: cleanPath, navigate, setParams }}
    >
      {children}
    </KotiiRouterContenxt.Provider>
  );
};

export const useParams = () => {};

export default Router;
