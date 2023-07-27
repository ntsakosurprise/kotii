import { Page as Gpage, PageContent } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageProps } from "./types";

const WrappedPage = styled.div<PageProps>``;

const Page: React.FC<PageProps> = ({ children, ...props }) => {
  return (
    <WrappedPage>
      <Gpage {...props}>
        <PageContent background="red">{children}</PageContent>
      </Gpage>
    </WrappedPage>
  );
};

export default Page;
