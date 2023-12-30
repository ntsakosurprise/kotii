import { Sidebar } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { SidebarProps } from "./types";

const WrappedSideBar = styled.div<SidebarProps>``;

const SideBar: React.FC<SidebarProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedSideBar data-testid={testID}>
      <Sidebar {...props} />
    </WrappedSideBar>
  );
};

export default SideBar;
