import { DateInput as GdateInput } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDateInput = styled.div<PageHeaderProps>``;

const DateInput: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedDateInput>
      <GdateInput {...props} />
    </WrappedDateInput>
  );
};

export default DateInput;
