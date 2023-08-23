import { Form as Gform } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedForm = styled.div<PageHeaderProps>``;

const Form: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedForm>
      <Gform {...props} />
    </WrappedForm>
  );
};

export default Form;