import { Keyboard as Gkeyboard } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedKeyboard = styled.div<PageHeaderProps>``;

const Keyboard: React.FC<PageHeaderProps> = ({
  testID = "",
  children,
  ...props
}) => {
  return (
    <WrappedKeyboard>
      <Gkeyboard {...props}>{children}</Gkeyboard>
    </WrappedKeyboard>
  );
};

export default Keyboard;
