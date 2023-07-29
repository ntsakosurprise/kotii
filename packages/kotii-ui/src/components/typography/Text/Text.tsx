import { Text as Gtext } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedText = styled.div<PageHeaderProps>``;

const Text: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedText>
      <Gtext {...props} />
    </WrappedText>
  );
};

export default Text;
