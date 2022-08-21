/* eslint-disable react/display-name */
import { docs } from "Markdowns/intro/TES.md";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import createTextEditor from "./altedit";
import Preview from "./preview";
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
  const [liveEdit, setLiveEditor] = useState(false);
  const [textEditor, setTextEditor] = useState(null);

  let previewRef = React.createRef();

  const toggleSource = () => {
    setSourceShow(!showSource);
  };
  const setLiveEdit = () => {
    setLiveEditor(!liveEdit);
  };

  useEffect(() => {
    console.log("Dependecy changed");
    setTextEditor(createTextEditor(previewRef));
  }, [liveEdit]);

  console.log("the LIVE EDIT;;", liveEdit);

  return (
    <Sandbox>
      <ShowCase>
        {liveEdit ? (
          <Preview ref={(elem) => (previewRef = elem)} />
        ) : (
          <SampleDemo />
        )}
        {/* <Preview ref={previewRef} /> */}
      </ShowCase>
      <DemoToolbar
        toggleSource={toggleSource}
        liveEdit={setLiveEdit}
        docs={docs}
      />
      <DemoSource
        showSource={showSource}
        docs={docs}
        liveEdit={liveEdit}
        textEditor={textEditor}
      />
    </Sandbox>
  );
};

export default Demo;
