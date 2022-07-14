import React from "react";
//import HeroText from "./hero_text";

const DocsMain = ({ children }) => {
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
      {/* <HeroText /> */}
      {children}
    </main>
  );
};

export default DocsMain;
