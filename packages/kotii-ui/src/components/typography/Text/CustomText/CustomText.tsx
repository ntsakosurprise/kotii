import React from "react";
import { PageHeaderProps } from "../types";
import textDefaults from "./textDefaults";

import styled from "kotii-styled";

// 1. Pass <any> here to tell kotii-styled that this component accepts any custom props configuration
const Text = styled("span")<any>((props: any) => ({
  width: "100%",
  fontSize: props?.size ? props.size : textDefaults.size,
  a11yTitle: textDefaults.allyTitle,
  display: "inline-block",
  color: `${props?.color ? props.color : textDefaults.color}`,
}));

// 2. Keep your rigid application types enforced safely on the wrapper component
const CustomText: React.FC<PageHeaderProps> = ({ children, ...props }) => {
  return <Text {...props}>{children}</Text>;
};

export default CustomText;
