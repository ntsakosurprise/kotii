import React from "react";
import styled from "styled-components";
import Image from "../Image";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedSvg = styled.div<PageHeaderProps>``;

const Svg: React.FC<PageHeaderProps> = ({ src, ...props }) => {
  return (
    <WrappedSvg>
      <Image src={src} {...props} />
    </WrappedSvg>
  );
};

export default Svg;
