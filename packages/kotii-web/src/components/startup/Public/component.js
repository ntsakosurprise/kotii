import React from "react";
import { Route } from "react-router-dom";

import { Header, Footer } from "Layouts";

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
