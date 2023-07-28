import { PageContent as GpageContent } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageProps } from "./types";

const WrappedPageContent = styled.div<PageProps>``;

const PageContent: React.FC<PageProps> = ({ children, ...props }) => {
  return (
    <WrappedPageContent>
      <GpageContent {...props}>{children}</GpageContent>
    </WrappedPageContent>
  );
};

export default PageContent;
