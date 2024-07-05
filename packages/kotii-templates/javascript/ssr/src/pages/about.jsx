import { Head } from "kotii-scripts";
import React from "react";
import "../styles/color.less";
const About = () => {
  console.log("THE ABOUT PAGE");
  return (
    <div>
      <Head title={"About page kotii"} />
      <p className="green">Im the ABOUT pageZ</p>
    </div>
  );
};

export default About;
