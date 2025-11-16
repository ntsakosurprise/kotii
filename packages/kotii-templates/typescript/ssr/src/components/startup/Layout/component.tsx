/* eslint-disable react/prop-types */
//@ts-nocheck
import React from "react";
import { Footer, Header } from "../../layout/index.tsx";

const Layout = (props) => {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
