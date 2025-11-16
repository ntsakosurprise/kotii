import React from "react";
import { Switch } from "react-router-dom";
import { createRouterComponents, getPages } from "../../../config";
import Public from "../Public/component";

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
