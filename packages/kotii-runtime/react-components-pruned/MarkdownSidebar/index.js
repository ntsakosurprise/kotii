import styled from "kotii-styled";
import PropTypes from "prop-types";
const Sidebar = styled("div")(() => {
  return {
    width: "18%",
    order: -1,
    height: "100vh"
  };
});
const StickyContent = styled("section")(() => ({
  position: "fixed",
  top: "100px"
}));
const createTableOfContents = () => {
  return /*#__PURE__*/React.createElement(StickyContent, null, /*#__PURE__*/React.createElement("p", null, "I AM THE P"));
};
const MarkdownSidebar = _ref => {
  let {
    toc
  } = _ref;
  return /*#__PURE__*/React.createElement(Sidebar, null, createTableOfContents(toc));
};
MarkdownSidebar.propTypes = {
  toc: PropTypes.array.isRequired
};
export default MarkdownSidebar;