import { DataTableColumns as GdataTableColumns } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataTableColumns = styled.div<PageHeaderProps>``;

const DataTableColumns: React.FC<PageHeaderProps> = ({
  testID = "",
  drop,
  options,
  ...props
}) => {
  return (
    <WrappedDataTableColumns options={options} drop data-testid={testID}>
      <GdataTableColumns {...props} drop options={options} />
    </WrappedDataTableColumns>
  );
};

export default DataTableColumns;
