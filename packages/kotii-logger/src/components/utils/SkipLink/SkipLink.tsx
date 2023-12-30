import { SkipLink as GskipLink } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedSkipLink = styled.div<PageHeaderProps>``;

const SkipLink: React.FC<PageHeaderProps> = ({ testID = "", id, ...props }) => {
  return (
    <WrappedSkipLink id={id} data-testid={testID}>
      <GskipLink id={id} {...props} />
    </WrappedSkipLink>
  );
};

export default SkipLink;
