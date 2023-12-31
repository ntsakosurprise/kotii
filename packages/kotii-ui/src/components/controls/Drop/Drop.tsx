import { Drop as Gdrop } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDrop = styled.div<PageHeaderProps>``;

const Drop: React.FC<PageHeaderProps> = ({ testID = "", target, ...props }) => {
  return (
    <WrappedDrop data-testid={testID} target={target}>
      <Gdrop target={target} {...props} />
    </WrappedDrop>
  );
};

export default Drop;
