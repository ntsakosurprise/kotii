import { Header as Gheader } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
import { BaseProps } from "../../../types";

const WrappedHeader = styled.div<BaseProps>``;
const Header: React.FC<BaseProps> = ({
  // pad,
  // direction,
  children,
  ...props
}) => {
  return (
    <WrappedHeader>
      <Gheader {...props}>{children}</Gheader>
    </WrappedHeader>
  );
};

export default Header;
