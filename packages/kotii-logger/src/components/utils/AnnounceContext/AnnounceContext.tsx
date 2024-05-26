import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedAcontext = styled.div<PageHeaderProps>``;

const AnnounceContext: React.FC<PageHeaderProps> = ({
  testID = "",
  ...props
}) => {
  return (
    <WrappedAcontext>{/* <GannounceContext {...props} /> */}</WrappedAcontext   data-testid={testID}>
  );
};

export default AnnounceContext;
