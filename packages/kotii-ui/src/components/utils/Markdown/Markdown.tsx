import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedMarkdown = styled.div<PageHeaderProps>``;

const Markdown: React.FC<PageHeaderProps> = ({ ...props }) => {
  return <WrappedMarkdown>{/* <Gmarkdown {...props} /> */}</WrappedMarkdown>;
};

export default Markdown;
