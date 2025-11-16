import { Accordion as Gaccordion } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedAccordion = styled.div<PageHeaderProps>``;

const Accordion: React.FC<PageHeaderProps> = ({
  testID = "",
  children,
  ...props
}) => {
  return (
    <WrappedAccordion data-testid={testID}>
      <Gaccordion {...props}>{children}</Gaccordion>
    </WrappedAccordion>
  );
};

export default Accordion;
