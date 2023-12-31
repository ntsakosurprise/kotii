import { Nav as Gnav } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { NavProps } from "./types";

const WrappedNav = styled.div<NavProps>``;

const Nav: React.FC<NavProps> = ({ testID = "", children, ...props }) => {
  return (
    <WrappedNav data-testid={testID}>
      <Gnav {...props}>{children}</Gnav>
    </WrappedNav>
  );
};

export default Nav;
