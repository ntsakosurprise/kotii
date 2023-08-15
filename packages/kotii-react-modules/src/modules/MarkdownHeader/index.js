import { LanguageSwitcher, useLanguage } from "kotii-languages";
import { ThemeSwitcher, useKotiiTheme } from "kotii-theme";
import { Button } from "kotii-ui";

import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";

const Header = styled("header")((theme) => {
  return {
    width: "100%",
    position: "fixed",
    height: "100px",
    backgroundColor: theme.backgroundColor,
    top: 0,
    zIndex: 2,
    display: "flex",
    flexDirection: "row",
  };
});
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
  const { theme, grommetTheme } = useKotiiTheme();
  console.log("THE CURRENT THEME IN REACT-MODULES;", grommetTheme);
  console.log("THEMEBACKGROUND;;;", theme.backgroundColor);
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
        <Button text="I'm a Kotii-ui-button" />
      </div>
      <div style={{ width: "300px", display: "flex" }}>
        <ThemeSwitcher />
      </div>
    </Header>
  );
};

MarkdownHeader.propTypes = {
  toc: PropTypes.array,
};

export default MarkdownHeader;
