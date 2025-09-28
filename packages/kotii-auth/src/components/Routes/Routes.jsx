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
import { useAuth } from "../AuthContext/index.jsx";
const Routes = ({ children, routes = null, suspense = null }) => {
  console.log("THE VALUE OF ROUTES OBJECT", routes);
  const {
    setParams,
    basePath,
    navigateByReplace,
    ssrPath,
    setQueryParams,
    urlSegments,
  } = useContext(KotiiRouterContenxt);
  const { user } = useAuth();

  console.log("THE USER", user);
  console.log("THE ROUTES COMPONENT:url", urlSegments);

  let currentPath = urlSegments.path;
  let elementToRender = null;
  let ChildElementToRender = null;
  let theParams = null;
  let SuspenseComponent = suspense;
  useEffect(() => {
    console.log("URL SEGMENT HAS CHANGED");
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
    console.log(
      "THE FULL URL INDEX",
      fullUrl,
      currentPath.indexOf("?"),
      currentPath
    );
    // const match =
    //   urlSegments?.queryString && urlSegments.queryString.trim()
    //     ? matchRouteQuery(fullUrl, currentPath)
    //     : matchRoutePattern(fullUrl, currentPath);
    const matchedRoute = matchRoute(fullUrl, currentPath);

    if (matchedRoute) {
      console.log("REACT CHILD ELEMENT", matchedRoute, child);
      if (!user && child?.isPrivate) return <Redirect to={"/login"} />;

      const match =
        urlSegments?.queryString && urlSegments.queryString.trim()
          ? matchRouteQuery(fullUrl, urlSegments.queryString)
          : matchParams(fullUrl, currentPath);
      theParams = match?.params ? (match?.route ? match : match.params) : null;
      ChildElementToRender = child?.props ? child : child.component;

      console.log("IMPRESSIVE", child?.children, child);
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

      // theParams = match.params
    }
  }

  // React.Children.forEach(children, (child) => {
  //   console.log("REACT CHILD ELEMENT",child.props.path)
  //   if (elementToRender) return;

  //   const { path } = child.props;
  //   const match = matchRoutePattern(path, currentPath);

  //   if (match) {
  //     console.log("REACT CHILD ELEMENT",match)
  //     elementToRender = child;
  //    theParams = match?.params ? match.params: null;

  //     // theParams = match.params

  //   }
  // });

  return elementToRender;
};

export default Routes;
