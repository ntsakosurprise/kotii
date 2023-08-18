import { Drop as Gdrop } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedDrop = styled.div<PageHeaderProps>``;

const Drop: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedDrop>
      <Gdrop {...props} />
    </WrappedDrop>
  );
};

export default Drop;
