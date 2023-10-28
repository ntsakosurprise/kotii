import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./app.js";
// if (module.hot) {
//   module.hot.accept();
// }
if (typeof window !== "undefined") {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
