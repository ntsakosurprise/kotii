import { Heading as Gheading } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedHeading = styled.div<PageHeaderProps>``;

const Heading: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedHeading>
      <Gheading {...props} />
    </WrappedHeading>
  );
};

export default Heading;
