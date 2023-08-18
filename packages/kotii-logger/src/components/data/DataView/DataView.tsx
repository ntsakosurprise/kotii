import { DataView as GdataView } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDataView = styled.div<PageHeaderProps>``;

const DataView: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedDataView>
      <GdataView {...props} />
    </WrappedDataView>
  );
};

export default DataView;
