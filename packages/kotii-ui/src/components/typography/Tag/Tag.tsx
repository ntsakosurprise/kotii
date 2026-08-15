import { Tag } from "grommet";
import React from "react";
import styled from "kotii-styled";

import { PageHeaderProps } from "./types";

const WrappedTag = styled.div<PageHeaderProps>``;

const TAG: React.FC<PageHeaderProps> = ({
  testID = "",
  value,
  children,
  color, // 1. Pull color out here so it isn't included in ...props
  ...props
}) => {
  // 2. Resolve the color safely if it's an object, or fall back to a default string if Grommet requires it
  const resolvedColor = typeof color === "object" ? color.light : color;

  return (
    <WrappedTag value={value} data-testid={testID} color={color}>
      {/* 3. Pass the safely resolved color string to Grommet's Tag */}
      <Tag value={value} color={resolvedColor as any} {...props} />
    </WrappedTag>
  );
};

export default TAG;
