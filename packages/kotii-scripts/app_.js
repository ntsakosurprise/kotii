import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Routes from "./build.js";
// if (module.hot) {
//   module.hot.accept();
// }
const App = () => {
  if (typeof window !== "undefined") {
    const root = createRoot(document.getElementById("root"));
    root.render(
      <StrictMode>
        <Routes />
      </StrictMode>
    );
  }
};

export default App;
