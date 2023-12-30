import { RangeInput as GrangeInput } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedRangeInput = styled.div<PageHeaderProps>``;

const RangeInput: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedRangeInput data-testid={testID}>
      <GrangeInput {...props} />
    </WrappedRangeInput>
  );
};

export default RangeInput;
