/* eslint-disable no-unused-vars */
// import INTRO from "Markdowns/intro/INTRO.md";
import { Docs } from "Modules";
import React from "react";

const Introduction = () => {
  // const mdContent = useLoadMD({ fileName: INTRO });

  return <Docs mdContent={{ test: "Hi" }} />;
};

export { Introduction };
