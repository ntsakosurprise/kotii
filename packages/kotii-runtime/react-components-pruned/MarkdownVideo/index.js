import PropTypes from "prop-types";
import React from "react";
const MarkdownVideo = _ref => {
  let {
    children,
    isNotChildVideo = false
  } = _ref;
  console.log("THE CHILDREN", children, isNotChildVideo);
  if (isNotChildVideo) return /*#__PURE__*/React.createElement("video", null, children);
  return /*#__PURE__*/React.createElement("div", null, children);
};
MarkdownVideo.propTypes = {
  children: PropTypes.element,
  isNotChildVideo: PropTypes.bool
};
export default MarkdownVideo;