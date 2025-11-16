import { DataChart as GdataChart } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataChart = styled.div<PageHeaderProps>``;

const Chart: React.FC<PageHeaderProps> = ({ testID = "", data, ...props }) => {
  return (
    <WrappedDataChart data={data} data-testid={testID}>
      <GdataChart {...props} data={data} />
    </WrappedDataChart>
  );
};

export default Chart;
