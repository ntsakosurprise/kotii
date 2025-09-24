/* eslint-disable no-unused-vars */
// import { useLoadMD } from "Hooks";
import { markdownData } from "Markdowns/intro/intro.md";
import React from "react";

const Introduction = () => {
  // const mdContent = useLoadMD({
  //   fileName: require("Markdowns/intro/INTRO.md"),
  // });
  console.log("the docs;;;", markdownData);
  return (
    <>
      <p>Test</p>
    </>
  );

  // return <DocsComponent mdContent={{ md: docs.content }} />;
};

export { Introduction };
