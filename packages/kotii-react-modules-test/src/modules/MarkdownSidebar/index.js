import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Sidebar = styled("div")(() => {
  return { width: "18%", order: -1, height: "100vh" };
});
const StickyContent = styled("section")(() => ({
  position: "fixed",
  top: "100px",
}));

const createTableOfContents = () => {
  return (
    <StickyContent>
      <p>I AM THE P</p>
    </StickyContent>
  );
};
const MarkdownSidebar = ({ toc }) => {
  return <Sidebar>{createTableOfContents(toc)}</Sidebar>;
};

MarkdownSidebar.propTypes = {
  toc: PropTypes.array.isRequired,
};

export default MarkdownSidebar;
