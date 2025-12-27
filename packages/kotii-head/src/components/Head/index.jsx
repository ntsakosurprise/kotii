/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useHead } from "../HeadProvider/index.jsx";

import React from "react";

const Head = ({ title = "", metas = [], links = [], scripts = [] }) => {
  const headContext = useHead();

  if (headContext.push) {
    headContext.push({
      title,
      metas,
      links,
      scripts,
    });
  }
  return null;
};

export default Head;
