import { Image as Gimage } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedImage = styled.div<PageHeaderProps>``;

const Image: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedImage>
      <Gimage {...props} />
    </WrappedImage>
  );
};

export default Image;
