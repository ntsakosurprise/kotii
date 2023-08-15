import { Sidebar } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedSideBar = styled.div<PageHeaderProps>``;

const SideBar: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedSideBar>
      <Sidebar {...props} />
    </WrappedSideBar>
  );
};

export default SideBar;
