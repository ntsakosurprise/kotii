import React from "react";
import styled from "kotii-styled";
import { useKotiiTheme } from "../../../context/";
import { Shapes } from "../types";
import { createJSCSSSchema } from "../helpers";

interface SquareProps extends Shapes {
  name?: string;
}

// 1. Define the props that the StyledShape component actually accepts
interface StyledShapeProps {
  theme?: any;
  themeMode?: string;
  name?: string;
  "data-testid"?: string;
  children?: React.ReactNode;
  [key: string]: any; // Allows other dynamic properties spread from Shapes
}

// 2. Explicitly type the styled factory function with <StyledShapeProps>
// Alternative generic syntax structure
const StyledShape = styled<any>("div")((props: any) => {
  console.log("The PROPS", props);
  const shapeName = props?.name || "shape";
  const styles = createJSCSSSchema(props, "clip-path", shapeName);
  console.log("The SHAPE STYLES", styles);
  return { ...styles };
});

const Shape: React.FC<SquareProps> = ({
  testID = "",
  children,
  name,
  ...props
}) => {
  const { theme, themes, changeTheme, themeMode = "dark" } = useKotiiTheme();
  const newProps = { ...props, themeMode };
  console.log("ChangeThemeMode", changeTheme);

  return (
    <StyledShape {...newProps} theme={theme} name={name} data-testid={testID}>
      {children ? children : null}
    </StyledShape>
  );
};

export default Shape;
