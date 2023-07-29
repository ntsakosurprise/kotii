import { Grid as Ggrid } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedGrid = styled.div<PageHeaderProps>``;

const Grid: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedGrid>
      <Ggrid {...props} />
    </WrappedGrid>
  );
};

export default Grid;
