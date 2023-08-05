import { Distribution as Gdistribution } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDistribution = styled.div<PageHeaderProps>``;

const Distribution: React.FC<PageHeaderProps> = ({ values, ...props }) => {
  return (
    <WrappedDistribution values={values}>
      <Gdistribution {...props} values={values} />
    </WrappedDistribution>
  );
};

export default Distribution;
