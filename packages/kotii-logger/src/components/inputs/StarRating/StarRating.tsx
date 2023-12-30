import { StarRating as GstarRating } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedStarRating = styled.div<PageHeaderProps>``;

const StarRating: React.FC<PageHeaderProps> = ({
  testID = "",
  name,
  ...props
}) => {
  return (
    <WrappedStarRating name={name}>
      <GstarRating {...props} name={name} />
    </WrappedStarRating>
  );
};

export default StarRating;
