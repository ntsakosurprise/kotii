/* eslint-disable react/display-name */
import React from "react";
import styled from "styled-components";
import SampleDemo from "./sample";
import { ShowCase } from "./showcase";
import DemoSource from "./source";
import DemoToolbar from "./toolbar";

const Sandbox = styled("div")(() => ({
  // backgroundColor: "red",
  // background: "#eee",
  background: "#001E3C;",
  position: "relative",
  padding: "10px",
  display: "flex",
  flexDirection: "column",
}));

const Demo = () => {
  return (
    <Sandbox>
      <ShowCase>
        <SampleDemo />
      </ShowCase>
      <DemoToolbar />
      <DemoSource />
    </Sandbox>
  );
};

export default Demo;
