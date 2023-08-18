import { InfiniteScroll as GinfiteScroll } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedInfiniteScroll = styled.div<PageHeaderProps>``;

const InfiniteScroll: React.FC<PageHeaderProps> = ({ children, ...props }) => {
  return (
    <WrappedInfiniteScroll>
      <GinfiteScroll {...props}>{children}</GinfiteScroll>
    </WrappedInfiniteScroll>
  );
};

export default InfiniteScroll;
