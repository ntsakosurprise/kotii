import React, { useContext } from "react";
import { matchRoutePattern } from "../../utils/index.js";
import { KotiiRouterContenxt } from "../Router/Router.js";

const Route = ({ component: Component, path }) => {
  const { path: navPath, seParams } = useContext(KotiiRouterContenxt);
  const matchedRoute = matchRoutePattern(path, navPath);
  if (matchedRoute) {
    seParams(matchedRoute.params);
    return <Component />;
  }
  return null;
};

export default Route;
