import React from "react";

const Image = (props) => {
  return <img src={props.src} {...props} />;
};

export default Image;
