import { DataFilter as GdataFilter } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataFilter = styled.div<PageHeaderProps>``;

const DataFilter: React.FC<PageHeaderProps> = ({
  testID = "",
  property,
  ...props
}) => {
  return (
    <WrappedDataFilter property={property} data-testid={testID}>
      <GdataFilter {...props} property={property} />
    </WrappedDataFilter>
  );
};

export default DataFilter;
