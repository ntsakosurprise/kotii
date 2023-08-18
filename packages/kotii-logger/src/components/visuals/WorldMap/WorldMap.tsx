import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedMap = styled.div<PageHeaderProps>``;

const WorldMap: React.FC<PageHeaderProps> = ({ ...props }) => {
  return <WrappedMap>{/* <Gworldmap {...props} /> */}</WrappedMap>;
};

export default WorldMap;
