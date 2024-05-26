import { Main as Gmain } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { MainProps } from "./types";

const WrappedMain = styled.div<MainProps>``;

const Grid: React.FC<MainProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedMain data-testid={testID}>
      <Gmain {...props} />
    </WrappedMain>
  );
};

export default Grid;
