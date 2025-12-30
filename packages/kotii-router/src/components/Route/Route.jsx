/* eslint-disable react/prop-types */
import React from "react";

const Route = ({ component: Component, children }) => {
  return (
    <>
      <Component />
      {children}
    </>
  );
};

export default Route;
