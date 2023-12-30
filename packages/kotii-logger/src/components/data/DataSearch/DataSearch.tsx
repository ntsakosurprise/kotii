import { DataSearch as GdataSearch } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataSearch = styled.div<PageHeaderProps>``;

const DataSearch: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedDataSearch data-testid={testID}>
      <GdataSearch {...props} />
    </WrappedDataSearch>
  );
};

export default DataSearch;
