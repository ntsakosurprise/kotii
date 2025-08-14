import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.tsx";
import { matchRoutePattern } from "../utils/index.js";

export default useMatch = (matchRoute) => {
  const { path: currentPath } = useContext(KotiiRouterContenxt);
  const match = matchRoutePattern(matchRoute, currentPath);
  return match;
};
