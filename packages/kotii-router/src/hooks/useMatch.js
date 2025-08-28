import { useContext } from "react";
import { KotiiRouterContenxt } from "../components/Router/Router.jsx";
import { matchRoutePattern } from "../utils/index.js";

export default () => {
  console.log("THE MATCH ROUT");
  const { path: currentPath } = useContext(KotiiRouterContenxt);
  // const match = matchRoutePattern;

  return (matchRoute) => {
    let match = matchRoutePattern(matchRoute, currentPath);
    return match;
  };
};
