import { Form as Gform } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedForm = styled.div<PageHeaderProps>``;

const Form: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedForm data-testid={testID}>
      <Gform {...props} />
    </WrappedForm>
  );
};

export default Form;
