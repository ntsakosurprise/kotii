/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable unused-imports/no-unused-imports */
import { LanguageSwitcher, useLanguage } from "kotii-languages";
import { ThemeSwitcher, useKotiiTheme } from "kotii-theme";
import { Button } from "kotii-ui";
import PropTypes from "prop-types";
import styled from "styled-components";
const Header = styled("header")(theme => {
  return {
    width: "100%",
    position: "fixed",
    height: "100px",
    backgroundColor: theme.backgroundColor,
    top: 0,
    zIndex: 2,
    display: "flex",
    flexDirection: "row"
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
      backgroundColor: "yellow"
    }
  }
}));
const ListItem = styled("li")(() => ({
  display: "flex",
  position: "relative",
  padding: "2px",
  marginBottom: "2px"
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
  textDecoration: "none"
}));
const renderItems = items => {
  return items.map((ite, i) => {
    return /*#__PURE__*/React.createElement(ListItem, {
      key: i
    }, /*#__PURE__*/React.createElement(ListLink, {
      href: "".concat(ite.text)
    }, ite.text));
  });
};
const MarkdownHeader = () => {
  const {
    get
  } = useLanguage();
  const {
    theme,
    grommetTheme
  } = useKotiiTheme();
  console.log("THE CURRENT THEME IN REACT-MODULES;", grommetTheme);
  console.log("THEMEBACKGROUND;;;", theme.backgroundColor);
  const listItems = [{
    text: "".concat(get("navigation.home"))
  }, {
    text: "".concat(get("navigation.about"))
  }, {
    text: "".concat(get("navigation.contact"))
  }, {
    text: "".concat(get("navigation.help"))
  }];
  return /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(List, null, renderItems(listItems)), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(LanguageSwitcher, null), /*#__PURE__*/React.createElement(Button, {
    text: "I'm a Kotii-ui-button"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      width: "300px",
      display: "flex"
    }
  }, /*#__PURE__*/React.createElement(ThemeSwitcher, null)));
};
MarkdownHeader.propTypes = {
  toc: PropTypes.array
};
export default MarkdownHeader;