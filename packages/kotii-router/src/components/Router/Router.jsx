import React, { createContext, useEffect, useState } from "react";
import {
  getUrlSegements,
  navigate,
  navigateByReplace,
} from "../../utils/index.js";

export const KotiiRouterContenxt = createContext();

// eslint-disable-next-line react/prop-types
const Router = ({ children, ssrPath = "/" }) => {
  console.log("ROUTER RUNS");

  const [urlSegments, setUrlSegments] = useState(getUrlSegements(ssrPath));

  // const urlHashSegment =
  //   typeof window !== "undefined" ? window.location.hash : "";
  // const urlSearchSegment =
  //   typeof window !== "undefined" ? window.location.search : "";
  const [params, setParams] = useState({});
  const [queryParams, setQueryParams] = useState({});

  // const setParams = (params) => {
  //   setRouteParams(params);
  // };

  useEffect(() => {
    const onPopState = () => {
      setUrlSegments(getUrlSegements());
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
        // path: urlSegments.path,
        navigate,
        navigateByReplace,
        setParams,
        params,
        setQueryParams,
        queryParams,
        basePath: "",
        urlSegments,
        ssrPath,
      }}
    >
      {children}
    </KotiiRouterContenxt.Provider>
  );
};

export default Router;
