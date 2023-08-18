import React, { ReactNode } from "react";
import styled from "styled-components";
import { useKotiiTheme } from "../../../context";
import { createJSCSSSchema } from "../helpers";
import { Shapes } from "../types";

interface ShapeProps extends Shapes {
  name?: string;
  children?: ReactNode;
}

const StyledShape = styled("div")((props) => {
  const styles = createJSCSSSchema(props, "oval");
  console.log("The SHAPE STYLES:Rectangle", styles);
  return { ...styles };
});

const Oval: React.FC<ShapeProps> = ({ name, children, ...props }) => {
  const { theme, themes, changeTheme, themeMode = "dark" } = useKotiiTheme();
  const newProps = { ...props, themeMode };
  return (
    <StyledShape {...newProps} theme={theme}>
      {children ? children : null}
    </StyledShape>
  );
};

export default Oval;
