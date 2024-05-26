// import { Distribution as Gdistribution } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDistribution = styled.div<PageHeaderProps>``;

const Distribution: React.FC<PageHeaderProps> = ({
  testID = "",
  values,
  ...props
}) => {
  /** To be implemented correctly */
  return <WrappedDistribution data-testid={testID} values={values} />;
};

export default Distribution;
