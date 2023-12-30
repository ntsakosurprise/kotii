import { Table as Gtable } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedTable = styled.div<PageHeaderProps>``;

const Table: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedTable>
      <Gtable {...props} />
    </WrappedTable>
  );
};

export default Table;
