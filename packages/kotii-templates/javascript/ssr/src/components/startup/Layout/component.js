/* eslint-disable react/prop-types */
import { Footer, Header } from "Layouts";
import React from "react";

const Layout = (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
