/* eslint-disable react/prop-types */
import { GlobalStyle } from "AppGlobals";
import React from "react";

const Root = (props) => {
  return (
    <>
      <GlobalStyle />
      {props.children}
    </>
  );
};

export default Root;
