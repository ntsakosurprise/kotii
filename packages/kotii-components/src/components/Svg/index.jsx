import React from "react";

const Svg = (props) => {
  const { tag = "object" } = props;
  switch (tag) {
    case "object":
      return <SvgObjectTag {...props} />;
    default:
      return <SvgIframeTag {...props} />;
  }
};

const SvgObjectTag = (props) => {
  return (
    <object
      type="image/svg+xml"
      data={props.src}
      className={props?.styles ? props.styles : ""}
      {...props}
    ></object>
  );
};
const SvgIframeTag = (props) => {
  return <iframe src={props.src} {...props} />;
};
export default Svg;
