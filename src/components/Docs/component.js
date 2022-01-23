import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/component";
import DocsMain from "../DocsMain/component";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const Docs = ({ children, mdContent = {} }) => {
  console.log("docs.md;;", mdContent);
  return (
    <>
      <Sidebar />
      <DocsMain>
        <ReactMarkdown
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
          children={mdContent.md}
          className="markdown"
        />
        {/* {children} */}
      </DocsMain>
    </>
  );
};

export default Docs;
