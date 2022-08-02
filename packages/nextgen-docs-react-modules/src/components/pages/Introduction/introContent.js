import React from "react";
import HeroText from "./hero_text";
import { Grid } from "@mui/material";

const IntroContent = ({ children }) => {
  return (
    <main
      style={{
        position: "relative",
        left: "350px",
        display: "inline-block",
        minHeight: "90vh",
        width: "70%",
      }}
    >
      <HeroText />
      {children}
    </main>
  );
};

export default IntroContent;
