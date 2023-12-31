import { Card as Gcard } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
import { CardProps } from "./types";

const WrappedCard = styled.div<CardProps>``;

const Box: React.FC<CardProps> = ({
  testID = "",
  pad,
  direction,
  children,
  ...props
}) => {
  return (
    <WrappedCard data-testid={testID}>
      <Gcard direction={direction} pad={pad} {...props}>
        {children}
      </Gcard>
    </WrappedCard>
  );
};

export default Box;
