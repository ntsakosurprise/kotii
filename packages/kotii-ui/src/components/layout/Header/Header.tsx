import { Header as Gheader } from "grommet";
import React from "react";
import styled from "kotii-styled";
// import { BoxProps } from "./types";
import { KotiiThemeProvider } from "../../../context";
import { BaseProps } from "../../../types";

const WrappedHeader = styled.div<BaseProps>``;
const Header: React.FC<BaseProps> = ({
  pad,
  direction,
  children,
  ...props
}) => {
  return (
    <KotiiThemeProvider>
      <WrappedHeader>
        <Gheader>{children}</Gheader>
      </WrappedHeader>
    </KotiiThemeProvider>
  );
};

export default Header;
