import { Clock as Gclock } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedClock = styled.div<PageHeaderProps>``;

const Clock: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedClock>
      <Gclock {...props} />
    </WrappedClock>
  );
};

export default Clock;
