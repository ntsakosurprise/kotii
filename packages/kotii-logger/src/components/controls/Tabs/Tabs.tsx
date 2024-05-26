import { Tabs as Gtabs } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedTabs = styled.div<PageHeaderProps>``;

const Tabs: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedTabs data-testid={testID}>
      <Gtabs {...props} />
    </WrappedTabs>
  );
};

export default Tabs;
