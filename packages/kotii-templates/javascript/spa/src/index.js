import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./app";
if (module.hot) {
  module.hot.accept();
}
if (typeof window !== "undefined") {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <Home />
    </StrictMode>
  );
}
