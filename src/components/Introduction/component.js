import React, { Component, useEffect, useState } from "react";
import INTRO from "../../mds/intro/INTRO.md";
import TEST from "../../mds/intro/TEST.md";
import Docs from "../Docs/component";
import useLoadMD from "../../hooks/loadmd";

const Introduction = () => {
  const mdContent = useLoadMD({ fileName: TEST });
  return <Docs mdContent={mdContent} />;
};

export default Introduction;
