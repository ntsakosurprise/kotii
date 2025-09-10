import PropTypes from "prop-types";
import React from "react";

const MarkdownVideo = ({ children, isNotChildVideo = false }) => {
  if (isNotChildVideo) return <video>{children}</video>;
  return <div>{children}</div>;
};

MarkdownVideo.propTypes = {
  children: PropTypes.element,
  isNotChildVideo: PropTypes.bool,
};

export default MarkdownVideo;
