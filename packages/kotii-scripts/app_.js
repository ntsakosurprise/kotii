import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./build.js";
// if (module.hot) {
//   module.hot.accept();
// }
const App = (appWrapper = null, layout = null) => {
  if (appWrapper || layout) {
    if (typeof window !== "undefined") {
      const AppWrapper = appWrapper;
      //   const Layout = props.layout;
      if (appWrapper && layout) {
        const Layout = layout;
        const root = createRoot(document.getElementById("root"));
        root.render(
          <StrictMode>
            <AppWrapper>
              <Routes layout={Layout} />
            </AppWrapper>
          </StrictMode>
        );
      } else {
        const Layout = layout;
        const root = createRoot(document.getElementById("root"));
        root.render(
          <StrictMode>
            <AppWrapper>
              <Routes layout={Layout} />
            </AppWrapper>
          </StrictMode>
        );
      }
    }
  } else {
    if (typeof window !== "undefined") {
      const root = createRoot(document.getElementById("root"));
      root.render(
        <StrictMode>
          <Routes />
        </StrictMode>
      );
    }
  }
};

export default App;
