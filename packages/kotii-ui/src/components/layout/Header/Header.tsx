import { Header as Gheader } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
import { HeaderProps } from "./types";

const WrappedHeader = styled.div<HeaderProps>``;
const Header: React.FC<HeaderProps> = ({
  // pad,
  // direction,
  testID = "",
  children,
  ...props
}) => {
  return (
    <WrappedHeader data-testid={testID}>
      <Gheader {...props}>{children}</Gheader>
    </WrappedHeader>
  );
};

export default Header;
