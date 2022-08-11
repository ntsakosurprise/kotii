/* eslint-disable react/prop-types */

import React from "react";
import styled from "styled-components";
// import DocsComponent from "../DocsComponent/component";
import { StyledMarkdown } from "../StyledMarkdown";
const prism = require("prismjs");
require("prismjs/components/prism-jsx");

const LiveEditor = styled("div")(() => ({
  background: "#20354A",
  width: "100%",
  color: "green",
}));

const DemoSource = ({ showSource, docs, liveEdit }) => {
  console.log("docs;;;", docs);
  console.log("liveedit;;;", liveEdit);
  if (!showSource) return null;
  if (liveEdit)
    return (
      <LiveEditor>
        <p>I am the LiveEditor</p>
      </LiveEditor>
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
