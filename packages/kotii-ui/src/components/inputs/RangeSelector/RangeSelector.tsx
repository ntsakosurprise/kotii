import { RangeSelector as GrangeSelector } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedRangeSelector = styled.div<PageHeaderProps>``;

const RangeSelector: React.FC<PageHeaderProps> = ({
  testID = "",
  ...props
}) => {
  return (
    <WrappedRangeSelector>
      <GrangeSelector {...props} />
    </WrappedRangeSelector>
  );
};

export default RangeSelector;
