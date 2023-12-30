import { DropButton as GdropButton } from "grommet";

import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDropButton = styled.div<PageHeaderProps>``;

const DropButton: React.FC<PageHeaderProps> = ({
  testID = "",
  dropContent,
  ...props
}) => {
  return (
    <WrappedDropButton dropContent={dropContent}>
      <GdropButton {...props} dropContent={dropContent} />
    </WrappedDropButton>
  );
};

export default DropButton;
