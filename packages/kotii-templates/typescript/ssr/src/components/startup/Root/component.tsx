/* eslint-disable react/prop-types */
// @ts-nocheck
import { GlobalStyle } from "AppGlobals";
import React from "react";

const Root = (props) => {
  return (
    <div>
      <GlobalStyle />
      {props.children}
    </div>
  );
};

export default Root;
