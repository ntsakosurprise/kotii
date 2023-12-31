import { Chart as Gchart } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedChart = styled.div<PageHeaderProps>``;

const Chart: React.FC<PageHeaderProps> = ({
  testID = "",
  values,
  ...props
}) => {
  return (
    <WrappedChart values={values} data-testid={testID}>
      <Gchart {...props} values={values} />
    </WrappedChart>
  );
};

export default Chart;
