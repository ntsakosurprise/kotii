import { CheckBox as GcheckBox } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedCheckBox = styled.div<PageHeaderProps>``;

const CheckBox: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedCheckBox>
      <GcheckBox {...props} />
    </WrappedCheckBox>
  );
};

export default CheckBox;
