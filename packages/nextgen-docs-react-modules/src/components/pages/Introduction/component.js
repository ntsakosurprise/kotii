/* eslint-disable no-unused-vars */
import React from "react";
import useLoadMD from "../../../hooks/loadmd";
import INTRO from "../../mds/intro/INTRO.md";
import Docs from "../Docs/component";

const Introduction = () => {
  const mdContent = useLoadMD({ fileName: INTRO });
  return <Docs mdContent={mdContent} />;
};

export default Introduction;
