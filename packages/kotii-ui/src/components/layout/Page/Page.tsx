import { Page as Gpage } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageProps } from "./types";

const WrappedPage = styled.div<PageProps>``;

const Page: React.FC<PageProps> = ({ children, ...props }) => {
  return (
    <WrappedPage data-testid={testID}>
      <Gpage {...props}>{children}</Gpage>
    </WrappedPage>
  );
};

export default Page;
