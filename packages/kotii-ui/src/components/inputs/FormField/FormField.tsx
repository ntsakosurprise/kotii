import { FormField as GformField } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedFormField = styled.div<PageHeaderProps>``;

const FormField: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedFormField>
      <GformField {...props} />
    </WrappedFormField>
  );
};

export default FormField;
