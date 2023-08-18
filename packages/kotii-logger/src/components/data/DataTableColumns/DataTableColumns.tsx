import { DataTableColumns as GdataTableColumns } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataTableColumns = styled.div<PageHeaderProps>``;

const DataTableColumns: React.FC<PageHeaderProps> = ({
  drop,
  options,
  ...props
}) => {
  return (
    <WrappedDataTableColumns options={options} drop>
      <GdataTableColumns {...props} drop options={options} />
    </WrappedDataTableColumns>
  );
};

export default DataTableColumns;
