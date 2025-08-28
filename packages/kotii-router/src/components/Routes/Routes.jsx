import React, { useContext, useEffect } from "react";
import {
  cleanRouteUrl,
  matchRoutePattern,
  navigate,
} from "../../utils/index.js";
import { KotiiRouterContenxt } from "../Router/Router.jsx";

const Routes = ({ children, routes = null, suspense = null }) => {
  console.log("THE VALUE OF ROUTES OBJECT", routes);
  const {
    path: currentPath,
    setParams,
    basePath,
    navigateByReplace,
    ssrPath,
  } = useContext(KotiiRouterContenxt);

  console.log("THE ROUTES COMPONENT");

  let elementToRender = null;
  let ChildElementToRender = null;
  let theParams = null;
  let SuspenseComponent = suspense;
  useEffect(() => {
    console.log("About to set the params", theParams);
    if (theParams) setParams(theParams);
  }, [currentPath]);

  let appRoutes = children || routes;
  for (let childIndex = 0; childIndex < appRoutes.length; childIndex++) {
    if (elementToRender) break;
    let child = appRoutes[childIndex];
    const { path } = child?.props || child;
    const fullUrl = cleanRouteUrl(`${basePath}/${path}`);
    const match = matchRoutePattern(fullUrl, currentPath);

    if (match) {
      console.log("REACT CHILD ELEMENT", match);
      theParams = match?.params ? match.params : null;
      ChildElementToRender = child?.props ? child : child.component;

      console.log("IMPRESSIVE", child?.children, child);
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
          {SuspenseComponent ? (
            <SuspenseComponent fallback={<div>Component is Loading</div>}>
              <ChildElementToRender />
            </SuspenseComponent>
          ) : (
            <ChildElementToRender />
          )}

          {child?.children && child.children && (
            <Routes routes={child.children} suspense={suspense} />
          )}
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
