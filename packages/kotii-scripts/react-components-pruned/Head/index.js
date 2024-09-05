import { Helmet } from "react-helmet";
import React from "react";
const Head = _ref => {
  let {
    title
  } = _ref;
  return /*#__PURE__*/React.createElement(Helmet, null, /*#__PURE__*/React.createElement("title", null, `${title}`), /*#__PURE__*/React.createElement("meta", {
    charset: "utf-8"
  }), /*#__PURE__*/React.createElement("link", {
    rel: "icon",
    href: "%PUBLIC_URL%/favicon.ico"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "theme-color",
    content: "#000000"
  }), /*#__PURE__*/React.createElement("meta", {
    name: "description",
    content: "Kotti-test website"
  }));
};
export { Helmet as HeadHelmet };
export default Head;