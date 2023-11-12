import React from "react";
import Routes from "../Routes/component.js";

const Root = () => {
  // console.log("The pages", getPages());
  console.log("THE PAGES ROUTES", Routes);
  return (
    <div>
      <p>THE footer Comp</p>

      <Routes />
      <p>TEH HEADER IN FOOTER</p>
    </div>
  );
};

export default Root;
