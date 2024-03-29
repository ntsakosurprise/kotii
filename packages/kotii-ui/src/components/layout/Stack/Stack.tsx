import { Stack as Gstack } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedStack = styled.div<PageHeaderProps>``;

const Stack: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedStack data-testid={testID}>
      <Gstack {...props} />
    </WrappedStack>
  );
};

export default Stack;
