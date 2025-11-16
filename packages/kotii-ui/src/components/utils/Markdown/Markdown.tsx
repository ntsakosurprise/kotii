import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedMarkdown = styled.div<PageHeaderProps>``;

const Markdown: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return <WrappedMarkdown data-testid={testID} />;
};

export default Markdown;
