import { Grid as Ggrid } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedGrid = styled.div<PageHeaderProps>``;

const Grid: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedGrid data-testid={testID}>
      <Ggrid {...props} />
    </WrappedGrid>
  );
};

export default Grid;
