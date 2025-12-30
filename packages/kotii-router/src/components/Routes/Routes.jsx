/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useMemo,
  useState,
} from "react";
import Redirect from "../Redirect/index.jsx";
import { matchRoutes } from "./matchRoutes.jsx";
import suku from "suku";
import {
  // cleanRouteUrl,
  // matchParams,
  // matchRoute,
  // matchRouteQuery,
  navigate,
  // generateRandomString,
  applyHead,
  resolveHead,
} from "../../utils/index.js";

import { KotiiRouterContenxt } from "../Router/Router.jsx";
import { useAuth } from "kotii-auth";
import { useHead } from "kotii-head";

const Routes = ({ children, routes = null, suspense = null }) => {
  const {
    setParams,
    basePath,
    navigateByReplace,
    ssrPath,
    setQueryParams,
    urlSegments,
  } = useContext(KotiiRouterContenxt);
  // const [matched, setMatched] = useState(null);

  const user = useAuth()?.user ?? null;
  const collectedHead = useHead();
  console.log("THE COLLECTED HEAD", collectedHead);

  let currentPath = urlSegments.path;
  // let elementToRender = null;
  // let ChildElementToRender = null;
  let theParams = null;
  let SuspenseComponent = suspense;
  // let appRoutes = children || routes;
  useEffect(() => {
    if (theParams) {
      theParams?.route ? setQueryParams(theParams) : setParams(theParams);
    }
  }, []);

  // useLayoutEffect(() => {
  //   const randomString = generateRandomString(30);
  //   console.log("THE APP HAS REPAINTED", randomString);
  //   // console.log("THE SUKU LIBRARY", suku);
  //   // const head = suku.get_document_head();
  //   // console.log("DOCUMENT HEAD", head);
  //   // suku.get_document_head().title = randomString;
  //   console.log("THE COLLECTED HEAD", collectedHead);

  //   document.title = "THIS IS MY NEW TITLE";
  // }, [currentPath]);

  const matched = useMemo(() => {
    return matchRoutes({
      routes: children || routes,
      currentPath,
      basePath,
      urlSegments,
      user,
    });
  }, [children, routes, currentPath, basePath, urlSegments, user]);
  useEffect(() => {
    if (!matched) return;
    console.log("USE LAYOUT EFFECT RUN", matched, collectedHead);
    const routeHead = matched.route?.head;
    // const resolved = resolveHead({
    //   routeHead,
    //   componentHead: collectedHead,
    // });

    // applyHead(resolved);
  }, [matched, collectedHead]);

  // for (let childIndex = 0; childIndex < appRoutes.length; childIndex++) {
  //   if (elementToRender) break;
  //   let child = appRoutes[childIndex];
  //   const { path } = child?.props || child;
  //   const fullUrl = cleanRouteUrl(`${basePath}/${path}`);

  //   const matchedRoute = matchRoute(fullUrl, currentPath);

  //   if (matchedRoute) {
  //     if (!user && child?.isPrivate) return <Redirect to={"/login"} />;

  //     const match =
  //       urlSegments?.queryString && urlSegments.queryString.trim()
  //         ? matchRouteQuery(fullUrl, urlSegments.queryString)
  //         : matchParams(fullUrl, currentPath);
  //     theParams = match?.params ? (match?.route ? match : match.params) : null;
  //     ChildElementToRender = child?.props ? child : child.component;

  //     elementToRender = (
  //       <KotiiRouterContenxt.Provider
  //         value={{
  //           // path: currentPath,
  //           navigate,
  //           navigateByReplace,
  //           setParams,
  //           params: theParams?.route ? null : theParams,
  //           setQueryParams,
  //           queryParams: theParams?.route ? theParams : null,
  //           basePath: fullUrl,
  //           ssrPath,
  //           urlSegments,
  //         }}
  //       >
  //         {SuspenseComponent ? (
  //           <SuspenseComponent fallback={<div>Component is Loading</div>}>
  //             <ChildElementToRender />
  //           </SuspenseComponent>
  //         ) : (
  //           <ChildElementToRender />
  //         )}

  //         {child?.children && child.children && (
  //           <Routes routes={child.children} suspense={suspense} />
  //         )}
  //       </KotiiRouterContenxt.Provider>
  //     );

  //     break;
  //   }
  // }

  if (!matched) return null;
  if (matched.redirect) return <Redirect to={matched.redirect} />;

  const RouteComponent = matched.route?.props
    ? matched.route
    : matched.route.component;

  return (
    <KotiiRouterContenxt.Provider
      value={{
        navigate,
        navigateByReplace,
        setParams,
        params: matched.params?.route ? null : matched.params,
        setQueryParams,
        queryParams: matched.params?.route ? matched.params : null,
        basePath: matched.fullUrl,
        ssrPath,
        urlSegments,
      }}
    >
      {SuspenseComponent ? (
        <SuspenseComponent fallback={<div>Component is Loading</div>}>
          <RouteComponent />
        </SuspenseComponent>
      ) : (
        <RouteComponent />
      )}

      {matched.route?.children && (
        <Routes routes={matched.route.children} suspense={suspense} />
      )}
    </KotiiRouterContenxt.Provider>
  );

  // return elementToRender;
};

export default Routes;
