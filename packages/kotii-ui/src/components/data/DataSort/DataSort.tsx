import { DataSort as GdataSort } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataSort = styled.div<PageHeaderProps>``;

const DataSort: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedDataSort>
      <GdataSort {...props} />
    </WrappedDataSort>
  );
};

export default DataSort;
