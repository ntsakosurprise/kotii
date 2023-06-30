import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const TableOfContents = styled("div")(() => {
  return { width: "15%", order: 2, paddingLeft: "3%" };
});
const StickyContent = styled("section")(() => ({
  position: "fixed",
  top: "100px",
}));
const createTableOfContents = () => {
  return (
    <StickyContent>
      {" "}
      {/* {toc.map((content, i) => {
        return <div key={i}>{content}</div>;
      })} */}
      <p>THE TOC</p>
    </StickyContent>
  );
};
const MarkdownTOC = ({ toc }) => {
  return <TableOfContents>{createTableOfContents(toc)}</TableOfContents>;
};

MarkdownTOC.propTypes = {
  toc: PropTypes.array.isRequired,
};

export default MarkdownTOC;
