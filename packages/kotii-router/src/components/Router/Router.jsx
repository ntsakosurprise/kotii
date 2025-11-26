import React, { createContext, useEffect, useState } from "react";
import {
  getUrlSegements,
  navigate,
  navigateByReplace,
} from "../../utils/index.js";

export const KotiiRouterContenxt = createContext();

// eslint-disable-next-line react/prop-types
const Router = ({ children, ssrPath = "/" }) => {
  const [urlSegments, setUrlSegments] = useState(getUrlSegements(ssrPath));

  const [params, setParams] = useState({});
  const [queryParams, setQueryParams] = useState({});

  useEffect(() => {
    const onPopState = () => {
      setUrlSegments(getUrlSegements());
    };
    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
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
