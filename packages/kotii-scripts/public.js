import PropTypes from "prop-types";
import React from "react";
import { Route } from "react-router-dom";

// import { Footer, Header } from "Layouts";

const Public = ({ component: Component, ...rest }) => {
  //   console.log("testHEADER");
  //   console.log(Header);

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          return <Component {...props} />;
        }}
      />
    </>
  );
};

Public.propTypes = {
  component: PropTypes.func.isRequired,
};

export default Public;
