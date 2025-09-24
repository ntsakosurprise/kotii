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

const List = styled("ul")(() => ({
  position: "relative",
  padding: "2px",
  flexDirection: "column",
  width: "95%",
  paddingLeft: "5px",
  display: "block",
  "& ul": {
    backgroundColor: "green",
    position: "relative",
    paddingLeft: "5px",
    "& ul": {
      backgroundColor: "yellow",
    },
  },
}));

const ListItem = styled("li")(() => ({
  display: "block",
  position: "relative",
  padding: "2px",
  marginBottom: "2px",
  // "&.active": {
  //   ".nav__item-icon": {
  //     marginTop: "-26px",
  //     boxShadow: "0px 0px 16px 0px #4444",
  //   },
  // ".nav__item-text": { transform: "scale(1)" },
  //},
}));

const ListLink = styled("a")(() => ({
  display: "block",
  flexDirection: "column",
  alignItems: "center",
  color: "#2f3046",
  textDecoration: "none",
}));

// const ListIcon = styled("div")(() => ({
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
//   fontSize: "1.6em",
//   backgroundColor: "#fff",
//   borderRadius: "50%",
//   height: "25px",
//   width: "25px",
//   transition: "margin-top 250ms ease-in-out, box-shadow 250ms ease-in-out",
// }));

// const ListText = styled("span")(() => ({
//   position: "absolute",
//   bottom: "0",
//   transform: "scale(0)",
//   transition: "transform 250ms ease-in-out",
// }));

const getLevelChild = (content) => {
  // if (content.children) return getLevelChild(content);
  return (
    <List>
      {content.map((it, ii) => {
        return (
          <ListItem key={ii}>
            <ListLink href={`#${it.id}`}>{it.id}</ListLink>
            {it.children && it.children.length > 0
              ? getLevelChild(it.children)
              : null}
          </ListItem>
        );
      })}
    </List>
  );
};
const createTableOfContents = (toc) => {
  return <StickyContent>{getLevelChild(toc)}</StickyContent>;
};
const MarkdownTOC = ({ toc }) => {
  return <TableOfContents>{createTableOfContents(toc)}</TableOfContents>;
};

MarkdownTOC.propTypes = {
  toc: PropTypes.array.isRequired,
};

export default MarkdownTOC;
