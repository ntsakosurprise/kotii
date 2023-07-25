import { Box as Gbox } from "grommet";
import React from "react";
import styled from "styled-components";
import { BoxProps } from "./types";

const WrappedBox = styled.div<BoxProps>``;

const Box: React.FC<BoxProps> = ({ pad, direction, children, ...props }) => {
  return (
    <WrappedBox>
      <Gbox direction={direction} pad={pad} {...props}>
        {children}
      </Gbox>
    </WrappedBox>
  );
};

export default Box;
