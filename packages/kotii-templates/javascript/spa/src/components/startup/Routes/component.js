import React from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Public from "../Public/component.js";
// import { publicRoutes, privateRoutes } from "AppRoutes";
import { createRouterComponents, getPages } from "Config";
// import styled from "styled-components";
// const GlobalWrapper = styled("div")({
//   paddingLeft: "2%",
//   minHeight: "100vh",
//   display: "flex",
//   flexDirection: "column",
// });

const Routes = (props) => {
  let mapsOfComps = createRouterComponents(getPages());

  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default Routes;
