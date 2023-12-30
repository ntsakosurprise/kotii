import { MaskedInput as GmaskedInput } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedMaskedInput = styled.div<PageHeaderProps>``;

const MaskedInput: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedMaskedInput>
      <GmaskedInput {...props} />
    </WrappedMaskedInput>
  );
};

export default MaskedInput;
