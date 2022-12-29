import { docs } from "Markdowns/intro/TES.md";
import React from "react";
// import DocsComponent from "../DocsComponent/component";
import { StyledMarkdown } from "../StyledMarkdown";
const prism = require("prismjs");
require("prismjs/components/prism-jsx");

const DemoSource = () => {
  console.log("docs;;;", docs);
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
