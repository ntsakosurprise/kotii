import { AccordionPanel as GaccordionPanel } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedAccordion = styled.div<PageHeaderProps>``;

const AccordionPanel: React.FC<PageHeaderProps> = ({
  testID = "",
  children,
  ...props
}) => {
  return (
    <WrappedAccordion data-testid={testID}>
      <GaccordionPanel {...props}>{children}</GaccordionPanel>
    </WrappedAccordion>
  );
};

export default AccordionPanel;
