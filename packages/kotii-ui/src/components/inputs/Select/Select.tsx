import { Select as GrangeSelect } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedSelect = styled.div<PageHeaderProps>``;

const Select: React.FC<PageHeaderProps> = ({
  testID = "",
  options,
  ...props
}) => {
  return (
    <WrappedSelect options={options} data-testid={testID}>
      <GrangeSelect {...props} options={options} />
    </WrappedSelect>
  );
};

export default Select;
