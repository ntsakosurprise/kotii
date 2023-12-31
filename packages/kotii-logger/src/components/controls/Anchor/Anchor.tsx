import { Anchor as Ganchor } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedAnchor = styled.div<PageHeaderProps>``;

const Anchor: React.FC<PageHeaderProps> = ({
  testID = "",
  children,
  ...props
}) => {
  return (
    <WrappedAnchor data-testid={testID}>
      <Ganchor {...props}>{children}</Ganchor>
    </WrappedAnchor>
  );
};

export default Anchor;
