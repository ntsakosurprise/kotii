import { Card as Gcard } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
import { BaseProps } from "../../../types";

const WrappedCard = styled.div<BaseProps>``;

const Box: React.FC<BaseProps> = ({ pad, direction, children, ...props }) => {
  return (
    <WrappedCard>
      <Gcard direction={direction} pad={pad} {...props}>
        {children}
      </Gcard>
    </WrappedCard>
  );
};

export default Box;
