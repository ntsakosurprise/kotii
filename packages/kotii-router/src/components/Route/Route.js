import React, { useContext } from "react";
import { matchRoutePattern } from "../../utils/index.js";
import { KotiiRouterContenxt } from "../Router/Router.js";

const Route = ({ component: Component, path }) => {
  const { path: navPath } = useContext(KotiiRouterContenxt);
  const isRouteMatched = matchRoutePattern(path, navPath);
  if (isRouteMatched) {
    return <Component />;
  }
  return null;
};

export default Route;
