import { Page as Gpage } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
import { BaseProps } from "../../../types";

const WrappedPage = styled.div<BaseProps>``;

const Page: React.FC<BaseProps> = ({ pad, direction, children, ...props }) => {
  return (
    <WrappedPage>
      <Gpage direction={direction} pad={pad} {...props}>
        {children}
      </Gpage>
    </WrappedPage>
  );
};

export default Page;
