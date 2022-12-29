/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import { Footer, Header } from "Layouts";
import React from "react";
import { Route } from "react-router-dom";

export default ({ component: Component, ...rest }) => {
  console.log("testHEADER");
  console.log(Header);

  return (
    <>
      <Header />
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
      <Footer />
    </>
  );
};
