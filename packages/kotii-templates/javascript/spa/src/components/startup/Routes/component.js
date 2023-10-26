import React from "react";
import { Switch } from "react-router-dom";
import Public from "../Public/component.js";
// import { publicRoutes, privateRoutes } from "AppRoutes";
import { createRouterComponents, getPages } from "Config";

const Routes = (props) => {
  let mapsOfComps = createRouterComponents(getPages());
  console.log("THE ROUTES OBJECT", mapsOfComps);

  return (
    <Switch>
      {mapsOfComps.map((r, i) => {
        return (
          <Public
            {...props}
            exact
            path={r.path}
            component={r.component}
            key={i}
          />
        );
      })}
    </Switch>
  );
};

export default Routes;
