import { DataSummary as GdataSummary } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataSummary = styled.div<PageHeaderProps>``;

const DataSummary: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedDataSummary>
      <GdataSummary {...props} />
    </WrappedDataSummary>
  );
};

export default DataSummary;
