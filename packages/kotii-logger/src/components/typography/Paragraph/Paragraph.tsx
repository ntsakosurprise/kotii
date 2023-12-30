import { Paragraph as Gparagaph } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedText = styled.div<PageHeaderProps>``;

const Paragraph: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedText>
      <Gparagaph {...props} />
    </WrappedText>
  );
};

export default Paragraph;
