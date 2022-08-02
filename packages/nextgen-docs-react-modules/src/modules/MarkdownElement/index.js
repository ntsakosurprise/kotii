import React from "react";
import { styled } from "styled-components";

const StyledMarkdown = styled("div")(() => ({
  "& h1": {},
}));

const MarkdownElement = () => {
  return (
    <>
      <StyledMarkdown />
    </>
  );
};

export default MarkdownElement;
