/* eslint-disable react/prop-types */
import React from "react";
import { StyledMarkdown } from "../StyledMarkdown";

const MarkdownElement = ({ children }) => {
  return <StyledMarkdown>{children}</StyledMarkdown>;
};

export default MarkdownElement;
