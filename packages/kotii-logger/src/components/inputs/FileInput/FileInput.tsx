import { FileInput as GfileInput } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedFileInput = styled.div<PageHeaderProps>``;

const FileInput: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedFileInput>
      <GfileInput {...props} />
    </WrappedFileInput>
  );
};

export default FileInput;