/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const MarkdownRender = ({ markdownData, markdownComponents }) => {
  console.log("MARKDOWN RENDER PROPS: docs", markdownData);
  console.log("MARKDODWN RENDER PROPS: modules", markdownComponents);
  return <div>I AM THE MARKDOWN RENDER</div>;
};

export default MarkdownRender;
