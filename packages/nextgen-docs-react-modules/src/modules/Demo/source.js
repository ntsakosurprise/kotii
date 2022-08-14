/* eslint-disable react/prop-types */

import React from "react";
//import styled from "styled-components";
// import DocsComponent from "../DocsComponent/component";
import { StyledMarkdown } from "../StyledMarkdown";
import LiveEditor from "./liveeditor";
const prism = require("prismjs");
require("prismjs/components/prism-jsx");

// const LiveEditor = styled("div")(() => ({
//   background: "#20354A",
//   width: "100%",
//   color: "green",
// }));

const DemoSource = ({ showSource, docs, liveEdit, runCode, textEditor }) => {
  console.log("docs;;;", docs);
  console.log("liveedit;;;", liveEdit);
  console.log("tHE TEXT EDITOR;;;", textEditor);
  if (!showSource) return null;
  if (liveEdit)
    return (
      <LiveEditor
        content={docs.content}
        textEditor={textEditor}
        run={runCode}
      />
    );
  return (
    <StyledMarkdown>
      <pre>
        <code
          dangerouslySetInnerHTML={{
            __html: prism.highlight(docs.content, prism.languages.jsx),
          }}
        ></code>
      </pre>
      {/* <DocsComponent mdContent={{ md: docs.content }} /> */}
    </StyledMarkdown>
  );
};

export default DemoSource;
