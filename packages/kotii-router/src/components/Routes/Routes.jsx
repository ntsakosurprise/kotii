/* eslint-disable react/prop-types */
import React, { useContext, useEffect } from "react";
import Redirect from "../Redirect/index.jsx";
import {
  cleanRouteUrl,
  matchParams,
  matchRoute,
  matchRouteQuery,
  navigate,
} from "../../utils/index.js";
import { KotiiRouterContenxt } from "../Router/Router.jsx";
import { useAuth } from "kotii-auth";
const Routes = ({ children, routes = null, suspense = null }) => {
  const {
    setParams,
    basePath,
    navigateByReplace,
    ssrPath,
    setQueryParams,
    urlSegments,
  } = useContext(KotiiRouterContenxt);
  console.log("AUTH RENDER ORDER", useAuth());
  const { user } = useAuth() || null;

  let currentPath = urlSegments.path;
  let elementToRender = null;
  let ChildElementToRender = null;
  let theParams = null;
  let SuspenseComponent = suspense;
  useEffect(() => {
    if (theParams) {
      theParams?.route ? setQueryParams(theParams) : setParams(theParams);
    }
  }, []);

  let appRoutes = children || routes;
  for (let childIndex = 0; childIndex < appRoutes.length; childIndex++) {
    if (elementToRender) break;
    let child = appRoutes[childIndex];
    const { path } = child?.props || child;
    const fullUrl = cleanRouteUrl(`${basePath}/${path}`);

    const matchedRoute = matchRoute(fullUrl, currentPath);

    if (matchedRoute) {
      if (!user && child?.isPrivate) return <Redirect to={"/login"} />;

      const match =
        urlSegments?.queryString && urlSegments.queryString.trim()
          ? matchRouteQuery(fullUrl, urlSegments.queryString)
          : matchParams(fullUrl, currentPath);
      theParams = match?.params ? (match?.route ? match : match.params) : null;
      ChildElementToRender = child?.props ? child : child.component;

      elementToRender = (
        <KotiiRouterContenxt.Provider
          value={{
            // path: currentPath,
            navigate,
            navigateByReplace,
            setParams,
            params: theParams?.route ? null : theParams,
            setQueryParams,
            queryParams: theParams?.route ? theParams : null,
            basePath: fullUrl,
            ssrPath,
            urlSegments,
          }}
        >
          {SuspenseComponent ? (
            <SuspenseComponent fallback={<div>Component is Loading</div>}>
              <ChildElementToRender />
            </SuspenseComponent>
          ) : (
            <ChildElementToRender />
          )}

          {child?.children && child.children && (
            <Routes routes={child.children} suspense={suspense} />
          )}
        </KotiiRouterContenxt.Provider>
      );

      break;
    }
  }

  return elementToRender;
};

export default Routes;
