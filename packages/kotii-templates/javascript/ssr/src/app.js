import { GlobalStyle } from "AppGlobals";
import React from "react";
import { Root } from "Startup";
console.log("ROOT", Root);
// export { Root };

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Root />
    </>
  );
};
