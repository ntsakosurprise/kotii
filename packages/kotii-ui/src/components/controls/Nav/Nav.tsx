import { Nav as Gnav } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedNav = styled.div<PageHeaderProps>``;

const Nav: React.FC<PageHeaderProps> = ({
  testID = "",
  children,
  ...props
}) => {
  return (
    <WrappedNav>
      <Gnav {...props}>{children}</Gnav>
    </WrappedNav>
  );
};

export default Nav;
