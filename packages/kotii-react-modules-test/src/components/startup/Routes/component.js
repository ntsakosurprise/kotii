import { publicRoutes } from "AppRoutes";
import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Public from "../Public/component";

class Routes extends Component {
  render() {
    console.log("publicRoutes;;", publicRoutes);
    return (
      <Switch>
        {publicRoutes.map((r, i) => {
          return (
            <Public
              {...this.props}
              exact
              path={r.path}
              component={r.component}
              key={i}
            />
          );
        })}
      </Switch>
    );
  }
}

export default Routes;
