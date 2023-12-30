import { TextInput as GtextInput } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedTextInput = styled.div<PageHeaderProps>``;

const TextInput: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedTextInput data-testid={testID}>
      <GtextInput {...props} />
    </WrappedTextInput>
  );
};

export default TextInput;
