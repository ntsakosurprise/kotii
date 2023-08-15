import { Box as Gbox } from "grommet";
import React from "react";
import styled from "styled-components";
//import { BoxProps } from "./types";
import { BaseProps } from "../../../types";

const WrappedBox = styled.div<BaseProps>``;

const Box: React.FC<BaseProps> = ({ pad, direction, children, ...props }) => {
  return (
    <WrappedBox>
      <Gbox direction={direction} pad={pad} {...props}>
        {children}
      </Gbox>
    </WrappedBox>
  );
};

export default Box;
