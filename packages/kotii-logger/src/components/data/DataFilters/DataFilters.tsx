import { DataFilters as GdataFilters } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataFilters = styled.div<PageHeaderProps>``;

const DataFilters: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedDataFilters>
      <GdataFilters {...props} />
    </WrappedDataFilters>
  );
};

export default DataFilters;
