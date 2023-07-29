import { useKotiiTheme } from "Context";
import React from "react";
// import { GlobalStyle } from "./global.style";

// eslint-disable-next-line react/prop-types
const ThemeGlobalStyle = ({ globalStyle: GlobalStyle }) => {
  const { theme } = useKotiiTheme();
  console.log("Test Global theme", theme);
  return <GlobalStyle theme={theme} />;
};

export { ThemeGlobalStyle };
