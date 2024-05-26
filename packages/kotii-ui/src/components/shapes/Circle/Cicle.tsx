import React, { ReactNode } from "react";
import styled from "styled-components";
import { useKotiiTheme } from "../../../context/";
import { createJSCSSSchema } from "../helpers";
import { Shapes } from "../types";

interface CircleProps extends Shapes {
  name?: string;
  children?: ReactNode;
}

const StyledCircle = styled("div")((props) => {
  const styles = createJSCSSSchema(props, "circle");
  console.log("The SHAPE STYLES", styles);
  return { ...styles };
});

const Circle: React.FC<CircleProps> = ({
  testID = "",
  name,
  children,
  ...props
}) => {
  const { theme, themes, changeTheme, themeMode = "dark" } = useKotiiTheme();
  const newProps = { ...props, themeMode };
  return (
    <StyledCircle {...newProps} theme={theme} data-testid={testID}>
      {children ? children : null}
    </StyledCircle>
  );
};

export default Circle;
