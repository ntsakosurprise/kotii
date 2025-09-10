/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import PropTypes from "prop-types";
import React from "react";
import { StyledMarkdown } from "../StyledMarkdown";

const MarkdownElement = ({ children, setCustom = false, htmlString }) => {
  if (setCustom) return <>{children}</>;
  return (
    <>
      <StyledMarkdown>
        {children ? children : <div>{parse(htmlString)}</div>}
      </StyledMarkdown>
    </>
  );
};

MarkdownElement.propTypes = {
  children: PropTypes.element,
  setCustom: PropTypes.bool,
  htmlString: PropTypes.string,
};

export default MarkdownElement;
