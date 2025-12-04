import PropTypes from "prop-types";
import React from "react";

const MarkdownAd = ({ children }) => {
  return <div>{children}</div>;
};

MarkdownAd.propTypes = {
  children: PropTypes.element,
};

export default MarkdownAd;
