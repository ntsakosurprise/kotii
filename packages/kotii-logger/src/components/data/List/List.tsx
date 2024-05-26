import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedList = styled.div<PageHeaderProps>``;

const NameValueList: React.FC<PageHeaderProps> = ({
  testID = "",
  ...props
}) => {
  return <WrappedList>{/* <Glist {...props} /> */}</WrappedList   data-testid={testID}>;
};

export default NameValueList;
