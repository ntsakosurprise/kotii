import React from "react";

const Route = ({ component: Component, children }) => {
  console.log("THE ROUTE CHILDREN", children);
  return (
    <>
      <Component />
      {children}
    </>
  );
  //   const { path: navPath, seParams } = useContext(KotiiRouterContenxt);
  //   const matchedRoute = matchRoutePattern(path, navPath);
  //   if (matchedRoute) {
  //     seParams(matchedRoute.params);
  //     return <Component />;
  //   }
  //   return null;
};

export default Route;
