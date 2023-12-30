import { TextArea as GtextArea } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedTextArea = styled.div<PageHeaderProps>``;

const TextArea: React.FC<PageHeaderProps> = ({
  testID = "",
  options,
  ...props
}) => {
  return (
    <WrappedTextArea options={options} data-testid={testID}>
      <GtextArea {...props} />
    </WrappedTextArea>
  );
};

export default TextArea;
