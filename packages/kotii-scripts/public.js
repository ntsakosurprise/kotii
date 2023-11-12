import { PropTypes } from "prop-types";
import React from "react";
import { Route } from "react-router-dom";

// import { Footer, Header } from "Layouts";

const Public = ({ component: Component, ...rest }) => {
  //   console.log("testHEADER");
  //   console.log(Header);

  return (
    <>
      {/* <Header /> */}
      {/* <Hero /> */}
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
      {/* <Fero /> */}
      {/* <Footer /> */}
    </>
  );
};

Public.propTypes = {
  component: PropTypes.element.isRequired,
};

export default Public;
