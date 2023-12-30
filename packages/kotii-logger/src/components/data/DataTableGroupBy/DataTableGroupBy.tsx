import { DataView as GdataTableGroupBy } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataTableGBy = styled.div<PageHeaderProps>``;

const DataTableGroupBy: React.FC<PageHeaderProps> = ({
  testID = "",
  ...props
}) => {
  return (
    <WrappedDataTableGBy data-testid={testID}>
      <GdataTableGroupBy {...props} />
    </WrappedDataTableGBy>
  );
};

export default DataTableGroupBy;
