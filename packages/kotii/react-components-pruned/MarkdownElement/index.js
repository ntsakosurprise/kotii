/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import parse from "html-react-parser";
import PropTypes from "prop-types";
import { StyledMarkdown } from "../StyledMarkdown/index.js";
const MarkdownElement = _ref => {
  let {
    children,
    setCustom = false,
    htmlString
  } = _ref;
  if (setCustom) return /*#__PURE__*/React.createElement(React.Fragment, null, children);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(StyledMarkdown, null, children ? children : /*#__PURE__*/React.createElement("div", null, parse(htmlString))));
};
MarkdownElement.propTypes = {
  children: PropTypes.element,
  setCustom: PropTypes.bool,
  htmlString: PropTypes.string
};
export default MarkdownElement;