import React, { ReactNode } from "react";
import styled from "styled-components";

type CircleProps = {
  name?: string;
  children?: ReactNode;
};

const StyledCircle = styled("div")(() => ({
  width: "100px",
  height: "100px",
  background: "red",
  borderRadius: "50%",
}));

const Circle: React.FC<CircleProps> = ({ name, children, ...props }) => {
  return <StyledCircle>{children ? children : null}</StyledCircle>;
};

export default Circle;
