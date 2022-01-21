import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/component";
import DocsMain from "../DocsMain/component";
import Markdown from "markdown-to-jsx";

const Docs = ({ children, mdContent = {} }) => {
  console.log("docs.md;;", mdContent);
  return (
    <>
      <Sidebar />
      <DocsMain>
        <Markdown children={mdContent.md} />
        {/* {children} */}
      </DocsMain>
    </>
  );
};

export default Docs;
