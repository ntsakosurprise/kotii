import React, { createContext, useEffect, useState } from "react";
import { extractPathFromString, navigate } from "../../utils/index.js";

export const KotiiRouterContenxt = createContext();

const Router = ({ children, ssrPath = "/" }) => {
  console.log("ROUTER RUNS");
  const [cleanPath, setPath] = useState(
    extractPathFromString(
      typeof window !== "undefined" ? window.location.pathname : ssrPath
    ) || "/"
  );
  const urlHashSegment =
    typeof window !== "undefined" ? window.location.hash : "";
  const urlSearchSegment =
    typeof window !== "undefined" ? window.location.search : "";
  const [params, setParams] = useState({});

  // const setParams = (params) => {
  //   setRouteParams(params);
  // };

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
      value={{
        path: cleanPath,
        navigate,
        setParams,
        params,
        basePath: "",
        hash: urlHashSegment,
        search: urlSearchSegment,
      }}
    >
      {children}
    </KotiiRouterContenxt.Provider>
  );
};

export default Router;
