/* eslint-disable react/display-name */
import { docs } from "Markdowns/intro/TES.md";
import React, { useState } from "react";
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
  const [showSource, setSourceShow] = useState(false);
  const [liveEdit, setLiveEditor] = useState(true);
  const toggleSource = () => {
    setSourceShow(!showSource);
  };
  const setLiveEdit = () => {
    setLiveEditor(!liveEdit);
  };

  return (
    <Sandbox>
      <ShowCase>
        <SampleDemo />
      </ShowCase>
      <DemoToolbar
        toggleSource={toggleSource}
        liveEdit={setLiveEdit}
        docs={docs}
      />
      <DemoSource showSource={showSource} docs={docs} liveEdit={liveEdit} />
    </Sandbox>
  );
};

export default Demo;
