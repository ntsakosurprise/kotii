import React, { useContext } from "react";
import { matchRoutePattern } from "../../utils/index.js";
import { KotiiRouterContenxt } from "../Router/Router.jsx";
const Routes = ({ children }) => {
  const { path: currentPath, setParams } = useContext(KotiiRouterContenxt);

  let elementToRender = null;

  React.Children.forEach(children, (child) => {
    if (elementToRender) return;

    const { path } = child.props;
    const match = matchRoutePattern(path, currentPath);

    if (match) {
      setParams(match.params);
      elementToRender = child;
    }
  });

  return elementToRender;
};

export default Routes;
