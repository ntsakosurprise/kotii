import React, { useContext, useEffect } from "react";
import {
  cleanRouteUrl,
  matchRoutePattern,
  navigate,
} from "../../utils/index.js";
import { KotiiRouterContenxt } from "../Router/Router.jsx";
const Routes = ({ children }) => {
  const {
    path: currentPath,
    setParams,
    basePath,
    navigateByReplace,
    ssrPath,
  } = useContext(KotiiRouterContenxt);

  console.log("THE ROUTES COMPONENT");

  let elementToRender = null;
  let theParams = null;
  useEffect(() => {
    console.log("About to set the params", theParams);
    if (theParams) setParams(theParams);
  }, [currentPath]);

  for (let childIndex = 0; childIndex < children.length; childIndex++) {
    if (elementToRender) break;
    let child = children[childIndex];
    const { path } = child.props;
    const fullUrl = cleanRouteUrl(`${basePath}/${path}`);
    const match = matchRoutePattern(fullUrl, currentPath);

    if (match) {
      console.log("REACT CHILD ELEMENT", match);
      theParams = match?.params ? match.params : null;
      elementToRender = child;
      elementToRender = (
        <KotiiRouterContenxt.Provider
          value={{
            path: currentPath,
            navigate,
            navigateByReplace,
            setParams,
            params: theParams,
            basePath: fullUrl,
            ssrPath,
          }}
        >
          {child}
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
