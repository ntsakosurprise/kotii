import { LanguageSwitcher, useLanguage } from "kotii-languages";
import { ThemeSwitcher } from "kotii-theme";
import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const List = styled("ul")(() => ({
  position: "relative",
  display: "flex",
  padding: "2px",
  flexDirection: "row",
  width: "95%",
  paddingLeft: "5px",

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
  display: "flex",
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
  // flexDirection: "column",
  alignItems: "center",
  color: "#2f3046",
  textDecoration: "none",
}));

const Header = styled("header")(() => {
  return {
    width: "100%",
    position: "fixed",
    height: "100px",
    backgroundColor: "red",
    top: 0,
    zIndex: 2,
    display: "flex",
    flexDirection: "row",
  };
});

const renderItems = (items) => {
  return items.map((ite, i) => {
    return (
      <ListItem key={i}>
        <ListLink href={`${ite.text}`}>{ite.text}</ListLink>
      </ListItem>
    );
  });
};

const MarkdownHeader = () => {
  const { get } = useLanguage();
  const listItems = [
    {
      text: `${get("navigation.home")}`,
    },
    {
      text: `${get("navigation.about")}`,
    },
    {
      text: `${get("navigation.contact")}`,
    },
    {
      text: `${get("navigation.help")}`,
    },
  ];
  return (
    <Header>
      <List>{renderItems(listItems)}</List>
      <div style={{ width: "300px", display: "flex" }}>
        <LanguageSwitcher />
      </div>
      <ThemeSwitcher />
    </Header>
  );
};

MarkdownHeader.propTypes = {
  toc: PropTypes.array,
};

export default MarkdownHeader;
