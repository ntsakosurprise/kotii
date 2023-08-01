import { SelectMultiple as GrangeSelectMultiple } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedSelectMultiple = styled.div<PageHeaderProps>``;

const SelectMultiple: React.FC<PageHeaderProps> = ({ options, ...props }) => {
  return (
    <WrappedSelectMultiple options={options}>
      <GrangeSelectMultiple {...props} options={options} />
    </WrappedSelectMultiple>
  );
};

export default SelectMultiple;
