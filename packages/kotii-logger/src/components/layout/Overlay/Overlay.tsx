import { Layer } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedPage = styled.div<PageHeaderProps>``;

const Overlay: React.FC<PageHeaderProps> = ({ testID = "", ...props }) => {
  return (
    <WrappedPage>
      <Layer {...props} />
    </WrappedPage>
  );
};

export default Overlay;
