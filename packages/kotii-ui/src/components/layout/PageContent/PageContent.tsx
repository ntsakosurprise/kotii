import { PageContent as GpageContent } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageProps } from "./types";

const WrappedPageContent = styled.div<PageProps>``;

const PageContent: React.FC<PageProps> = ({
  testID = "",
  children,
  ...props
}) => {
  return (
    <WrappedPageContent data-testid={testID}>
      <GpageContent {...props}>{children}</GpageContent>
    </WrappedPageContent>
  );
};

export default PageContent;
