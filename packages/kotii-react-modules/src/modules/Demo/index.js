/* eslint-disable react/display-name */
// import { docs } from "Markdowns/intro/TES.md";
import { docs, modules } from "Markdowns/intro/intro.md";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import createTextEditor from "./editor";
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
  console.log("THE DEMOSOURCE;;;", docs);
  console.log("THE DEMOMODULES;;;", modules);
  const [showSource, setSourceShow] = useState(false);
  const [liveEdit, setLiveEditor] = useState(false);
  const [textEditor, setTextEditor] = useState(null);
  const { Video } = modules;

  let previewRef = React.createRef();

  const toggleSource = () => {
    setSourceShow(!showSource);
  };
  const setLiveEdit = () => {
    setLiveEditor(!liveEdit);
  };

  useEffect(() => {
    console.log("Dependecy changed");
    setTextEditor(
      createTextEditor(previewRef, React, () => {
        return React;
      })
    );
  }, [liveEdit]);

  console.log("the LIVE EDIT;;", liveEdit);

  return (
    <Sandbox>
      <Video />
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
