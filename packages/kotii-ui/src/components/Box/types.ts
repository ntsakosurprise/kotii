import React from "react";
import { backgroundAltType, backgroundType, borderType } from "../../types";
export interface BoxProps {
  direction?: "row" | "column";
  pad?: string;
  border?: borderType | boolean;
  size?: "small" | "medium" | "large";
  background?: string | backgroundType | backgroundAltType;
  a11yTitle?: string;
  elevation?: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  align?: "start" | "center" | "end" | "baseline" | "stretch";
  alignContent?: "start" | "center" | "end" | "around" | "stretch" | "between";
  alignSelf?: "start" | "center" | "end" | "baseline" | "stretch";
  animation?:
    | "fadeIn"
    | "fadeOut"
    | "jiggle"
    | "pulse"
    | "rotateLeft"
    | "rotateRight"
    | "slideUp"
    | "slideDown"
    | "slideLeft"
    | "slideRight"
    | "zoomIn"
    | "zoomOut";
  basis?:
    | "xxsmall"
    | "xsmall"
    | "small"
    | "medium"
    | "large"
    | "xlarge"
    | "xxlarge"
    | "full"
    | "1/2"
    | "1/3"
    | "2/3"
    | "1/4"
    | "2/4"
    | "3/4"
    | "auto";
  as?: React.ComponentType<any>;
  fill?: "horizontal" | "vertical" | boolean;
  flex?: "grow" | "shrink" | { grow: number; shrink: number };
  children: React.ReactNode;
  focusIndicator?: boolean;
  gap?: "none" | "xsmall" | "small" | "medium" | "large" | "xlarge";
  height?: typeof tShirtSizes;
}

const tShirtSizes = `"xxsmall"|"xsmall"|"small"|"medium"|"large"|"xlarge"|"xxlarge"
`;
