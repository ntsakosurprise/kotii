/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const MarkdownRender = ({ docs, modules }) => {
  console.log("MARKDOWN RENDER PROPS: docs", docs);
  console.log("MARKDODWN RENDER PROPS: modules", modules);
  return <div>I AM THE MARKDOWN RENDER</div>;
};

export default MarkdownRender;
