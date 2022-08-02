/* eslint-disable react/prop-types */
import React from "react";
import { styled } from "styled-components";

const StyledMarkdown = styled("div")(() => ({
  "& h1": {},
}));

const MarkdownElement = ({ children }) => {
  return (
    <>
      <StyledMarkdown>{children}</StyledMarkdown>
    </>
  );
};

export default MarkdownElement;
