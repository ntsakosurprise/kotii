import { Main as Gmain } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedMain = styled.div<PageHeaderProps>``;

const Grid: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedMain>
      <Gmain {...props} />
    </WrappedMain>
  );
};

export default Grid;
