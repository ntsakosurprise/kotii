import React from "react";
import { KotiiRouterContenxt } from "../Router/Router";
const Routes = ({ children }) => {
  const { path: currentPath, setParams } = useContext(KotiiRouterContenxt);

  let elementToRender = null;

  React.Children.forEach(children, (child) => {
    if (elementToRender) return;

    const { path } = child.props;
    const match = matchPath(path, currentPath);

    if (match) {
      setParams(match.params);
      elementToRender = child;
    }
  });

  return elementToRender;
};

export default Routes;
