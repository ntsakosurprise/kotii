/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import React from "react";

const Preview = (props, ref) => {
  return <div ref={ref}>I am the PreviewRef</div>;
};

export default React.forwardRef(Preview);
