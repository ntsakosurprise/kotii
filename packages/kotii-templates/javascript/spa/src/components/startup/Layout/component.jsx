/* eslint-disable react/prop-types */
import React from "react";
import { Footer, Header } from "../../../components/layout/index.jsx";

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
