import { Distribution as Gdistribution } from "grommet";
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
  return (
    <WrappedDistribution values={values} data-testid={testID}>
      <Gdistribution {...props} values={values} />
    </WrappedDistribution>
  );
};

export default Distribution;
