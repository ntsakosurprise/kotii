import { Carousel as Gcarousel } from "grommet";
import React from "react";
import styled from "styled-components";

// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedCarousel = styled.div<PageHeaderProps>``;

const Carousel: React.FC<PageHeaderProps> = ({ ...props }) => {
  return (
    <WrappedCarousel>
      <Gcarousel {...props} />
    </WrappedCarousel>
  );
};

export default Carousel;
