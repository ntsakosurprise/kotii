/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import HeadContext from "../HeadContext/index.jsx";
export default ({ children, context }) => {
  return (
    <HeadContext.Provider value={context}>{children}</HeadContext.Provider>
  );
};
