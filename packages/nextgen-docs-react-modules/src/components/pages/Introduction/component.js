/* eslint-disable no-unused-vars */
// import { useLoadMD } from "Hooks";
import { docs } from "Markdowns/intro/intro.md";
import { DocsComponent } from "Modules";
import React from "react";

const Introduction = () => {
  // const mdContent = useLoadMD({
  //   fileName: require("Markdowns/intro/INTRO.md"),
  // });
  console.log("the docs;;;", docs);

  return <DocsComponent mdContent={{ md: docs.content }} />;
};

export { Introduction };
