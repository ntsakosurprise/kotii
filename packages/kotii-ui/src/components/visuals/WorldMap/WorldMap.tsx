import React from "react";
import styled from "styled-components";
//import { WorldMap as Gworldmap } from "grommet";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedMap = styled.div<PageHeaderProps>``;

const WorldMap: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedMap data-testid={testID}>
      {/* <Gworldmap {...props} /> */}
    </WrappedMap>
  );
};

export default WorldMap;
