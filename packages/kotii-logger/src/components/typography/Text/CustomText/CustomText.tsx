import React from "react";
import { PageHeaderProps } from "../types";
import textDefaults from "./textDefaults";

import styled from "styled-components";

const Text = styled("span")((props: PageHeaderProps) => ({
  width: "100%",
  fontSize: props?.size ? props.size : textDefaults.size,
  a11yTitle: textDefaults.allyTitle,
  display: "inline-block",
  color: `${props?.color ? props.color : textDefaults.color}`,
}));

const CustomText = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default CustomText;
