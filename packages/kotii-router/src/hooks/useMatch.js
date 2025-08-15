import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.jsx";
import { matchRoutePattern } from "../utils/index.js";

export default (matchRoute) => {
  const { path: currentPath } = useContext(KotiiRouterContenxt);
  const match = matchRoutePattern(matchRoute, currentPath);
  return match;
};
