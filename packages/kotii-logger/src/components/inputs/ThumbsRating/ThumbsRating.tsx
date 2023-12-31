import { ThumbsRating as GthumbsRating } from "grommet";
import React from "react";
import styled from "styled-components";
// import { BoxProps } from "./types";
//import { BaseProps } from "../../../types";
import { PageHeaderProps } from "./types";

const WrappedThumbsRating = styled.div<PageHeaderProps>``;

const ThumbsRating: React.FC<PageHeaderProps> = ({
  testID = "",
  name,
  ...props
}) => {
  return (
    <WrappedThumbsRating name={name} data-testid={testID}>
      <GthumbsRating {...props} name={name} />
    </WrappedThumbsRating>
  );
};

export default ThumbsRating;
