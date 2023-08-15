import { Collapsible as Gcollapsible } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedCollapsible = styled.div<PageHeaderProps>``;

const Collapsible: React.FC<PageHeaderProps> = ({ children, ...props }) => {
  return (
    <WrappedCollapsible>
      <Gcollapsible {...props}>{children}</Gcollapsible>
    </WrappedCollapsible>
  );
};

export default Collapsible;
