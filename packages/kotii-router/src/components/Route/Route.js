import React, { useContext } from "react";
import { KotiiRouterContenxt } from "../Router/Router.js";

const Route = ({ component: Component, path }) => {
  const { path: navPath } = useContext(KotiiRouterContenxt);
  if (navPath === path) {
    return <Component />;
  }
  return null;
};

export default Route;
