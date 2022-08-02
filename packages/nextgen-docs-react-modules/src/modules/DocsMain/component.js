/* eslint-disable react/prop-types */
import React from "react";
//import HeroText from "./hero_text";
import MarkdownElement from "../MarkdownElement";

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
      <MarkdownElement>{children}</MarkdownElement>
    </main>
  );
};

export default DocsMain;
