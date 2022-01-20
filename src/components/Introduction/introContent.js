import React from "react";
import HeroText from "./hero_text";
import { Grid } from "@mui/material";

const IntroContent = () => {
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
    </main>
  );
};

export default IntroContent;
