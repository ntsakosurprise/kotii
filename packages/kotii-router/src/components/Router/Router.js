import React, { createContext, useEffect, useState } from "react";
import { extractPathFromString, navigate } from "../../utils";

export const KotiiRouterContenxt = createContext();

const Router = ({ children }) => {
  const [cleanPath, setPath] = useState(
    extractPathFromString(window.location.hash) || "/"
  );
  const [params, setRouteParams] = useState({});

  const setParams = (params) => {
    setRouteParams(params);
  };

  useEffect(() => {
    const onPopState = () => {
      setPath(extractPathFromString(window.location.pathname || "/"));
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
    // const onChangeOfHash = () => {
    //   setPath(extractPathFromString(window.location.hash || "/"));
    // };
    // window.addEventListener("hashchange", onChangeOfHash);
    // return () => window.removeEventListener("hashchange", onChangeOfHash);
  }, []);

  return (
    <KotiiRouterContenxt.Provider
      value={{ path: cleanPath, navigate, setParams, params }}
    >
      {children}
    </KotiiRouterContenxt.Provider>
  );
};

export default Router;
