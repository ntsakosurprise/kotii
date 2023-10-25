import React from "react";
import { mapsOfFiles } from "./system/maps.js";

const Home = () => {
  console.log("MAPIS", mapsOfFiles);
  return (
    <div>
      <p>I AM THE HOME ssrBased COMPONENT</p>
    </div>
  );
};

export default Home;
