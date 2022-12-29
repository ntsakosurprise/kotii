/* eslint-disable react/prop-types */
import React from "react";
import { StyledMarkdown } from "../StyledMarkdown";

const MarkdownElement = ({ children, setCustom = false }) => {
  if (setCustom) return <>{children}</>;
  return (
    <>
      <StyledMarkdown>{children}</StyledMarkdown>
    </>
  );
};

export default MarkdownElement;
