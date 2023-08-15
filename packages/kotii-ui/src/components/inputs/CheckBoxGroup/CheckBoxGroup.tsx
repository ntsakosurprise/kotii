import { CheckBoxGroup as GcheckBoxGroup } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedCheckBox = styled.div<PageHeaderProps>``;

const CheckBoxGroup: React.FC<PageHeaderProps> = ({ options, ...props }) => {
  return (
    <WrappedCheckBox options={options}>
      <GcheckBoxGroup {...props} options={options} />
    </WrappedCheckBox>
  );
};

export default CheckBoxGroup;
