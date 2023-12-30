import { Tag } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedTag = styled.div<PageHeaderProps>``;

const TAG: React.FC<PageHeaderProps> = ({
  testID = "",
  value,
  children,
  ...props
}) => {
  return (
    <WrappedTag value={value}>
      <Tag value={value} {...props} />
    </WrappedTag>
  );
};

export default TAG;
