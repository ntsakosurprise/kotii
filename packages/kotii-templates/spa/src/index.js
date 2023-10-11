import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./app";

if (typeof window !== "undefined") {
  const root = createRoot(document.getElementById("root"));
  root.render(
    <StrictMode>
      <Home />
    </StrictMode>
  );
}