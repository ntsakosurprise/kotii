/* eslint-disable react/prop-types */
import { Footer, Header } from "Layouts";
import React from "react";

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
