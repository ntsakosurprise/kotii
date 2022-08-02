import { publicRoutes } from "AppRoutes";
import { Footer, Header } from "Layouts";
import React, { Component } from "react";
import { Switch } from "react-router-dom";
import Public from "../Public/component";

class Routes extends Component {
  render() {
    console.log("publicRoutes;;", publicRoutes);
    return (
      <Switch>
        <Header />
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
        <Footer />
      </Switch>
    );
  }
}

export default Routes;
