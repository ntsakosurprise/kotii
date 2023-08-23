import { Button as Gbutton } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedButton = styled.div<PageHeaderProps>``;

const Button: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedButton>
      <Gbutton {...props} />
    </WrappedButton>
  );
};

export default Button;