// import { Text as Gtext } from "grommet";
import React from "react";
import styled from "styled-components";
import CustomText from "./CustomText";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedText = styled.div<PageHeaderProps>``;

const Text: React.FC<PageHeaderProps> = ({
  testID = "",
  children,
  ...props
}) => {
  return (
    <WrappedText>
      <CustomText {...props}>{children}</CustomText>
    </WrappedText>
  );
};

export default Text;
