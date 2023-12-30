import { PageHeader as GpageHeader } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedPage = styled.div<PageHeaderProps>``;

const PageHeader: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedPage>
      <GpageHeader {...props} />
    </WrappedPage>
  );
};

export default PageHeader;
