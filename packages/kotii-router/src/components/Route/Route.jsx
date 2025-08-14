import React from "react";

const Route = ({ component: Component, path }) => {
  return <Component />;
  //   const { path: navPath, seParams } = useContext(KotiiRouterContenxt);
  //   const matchedRoute = matchRoutePattern(path, navPath);
  //   if (matchedRoute) {
  //     seParams(matchedRoute.params);
  //     return <Component />;
  //   }
  //   return null;
};

export default Route;
