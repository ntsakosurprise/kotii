/* eslint-disable react/display-name */
/* eslint-disable react/prop-types */
import React from "react";
import { initialHead } from "../HeadContext/index.jsx";
import HeadContext from "../HeadContext/index.jsx";
export default ({ children, context }) => {
  let theContext = context ?? initialHead;
  return (
    <HeadContext.Provider value={theContext}>{children}</HeadContext.Provider>
  );
};
