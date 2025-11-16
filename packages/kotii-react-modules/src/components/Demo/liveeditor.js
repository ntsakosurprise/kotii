/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import React, { useState } from "react";
import styled from "styled-components";

const CodeContainer = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justify: "flex-start",
  alignContent: "center",
}));

const Toolbar = styled("div")(() => ({
  position: "relative",
  backgroundColor: "#4aa3a3",
  padding: "4px 4px 3px 3px",
  border: "1px solid #1d2f2f",
  fontFamily: "Russo One",
  fontSize: "15px",
}));
const TextArea = styled("textarea")(() => ({
  //   background: "#78ad72",
  border: "1px solid #6f9a6a",
  boxSizing: "border-box",
  color: "#3a4a38",
  fontFamily: "'VT323', monospace",
  fontSize: "1.15rem",
  minWidth: "100%",
  outline: "none",
  padding: "7px",
  //   resize: "none",
  transition: "background, border 100ms ease-out",
  "&::selection": {
    color: "#78ad72",
    background: "#1c211b",
  },
  "&:focus": {
    border: "7px solid #3a4a38",
    color: "#1c211b",
  },
  minHeight: "200px",
  marginBottom: "-5px",
  resize: "vertical",
  paddingLeft: "5px",
  paddingTop: "5px",
  borderRadius: "10px",
}));

const codeTest = `
import styled from "styled-components";
import SampleDemo from "./sample";
const TestComp = ()=>{
    console.log('IAM ACORN',styled)
    return<div style={{color:"red"}}>I'm the test comp</div>
  }
   function Test(){

    return <><SampleDemo /> <TestComp/> </>
   }

   <Test />
  `;

const codeTest2 = `import React from 'react'
  import SampleDemo from './sample'
  
  const ShowSample = ()=>{
  
    return <SampleDemo />
  }
  <ShowSample />
  
  `;
function LiveEditor({ content, textEditor }) {
  const [currentCode, setCurrentCode] = useState(codeTest2);
  const updatePreview = ({ target: { value } }) => {
    setCurrentCode(value);
    console.log("THE TEXTEDITOR;;;", textEditor);
    textEditor.run(value);
  };
  return (
    <CodeContainer>
      {/* <Toolbar>Editor</Toolbar> */}
      <TextArea onChange={updatePreview} value={currentCode}></TextArea>
    </CodeContainer>
  );
}

export default LiveEditor;
