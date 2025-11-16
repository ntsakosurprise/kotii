import { Toolbar as Gtoolbar } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedToolbar = styled.div<PageHeaderProps>``;

const Toolbar: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedToolbar data-testid={testID}>
      <Gtoolbar {...props} />
    </WrappedToolbar>
  );
};

export default Toolbar;
