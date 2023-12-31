import { Meter as Gmeter } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedMeter = styled.div<PageHeaderProps>``;

const Chart: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedMeter data-testid={testID}>
      <Gmeter {...props} />
    </WrappedMeter>
  );
};

export default Chart;
