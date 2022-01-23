import React, { useEffect, useState } from "react";
import Sidebar from "../Sidebar/component";
import DocsMain from "../DocsMain/component";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

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
          skipHtml={true}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  children={String(children).replace(/\n$/, "")}
                  style={dracula}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                />
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              );
            },
          }}
        />
        {/* {children} */}
      </DocsMain>
    </>
  );
};

export default Docs;
