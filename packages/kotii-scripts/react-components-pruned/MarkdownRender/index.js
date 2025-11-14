function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// eslint-disable unused-imports/no-unused-imports */
import { useLanguage } from "kotii-languages";
import { capitalizeFirstLetter } from "kotii-utils";
import PropTypes from "prop-types";
import React from "react";
import styled from "kotii-styled";
import MarkdownAd from "../MarkdownAd/index.js";
// import MarkdownHeader from "../MarkdownHeader/index.js";
import MarkdownVideo from "../MarkdownVideo/index.js";
import StandardComponent from "../StandardComponent/index.js";
import MarkdownElement from "../MarkdownElement/index.js";
const MarkdownRenderCanvas = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "column"
  // overflow: "hidden",
}));
const MarkdownContentArea = styled("div")(() => ({
  width: "100%",
  display: "flex",
  flexDirection: "row"
  // top: "100px",
  // position: "relative",
}));
const MainArea = styled("div")(() => ({
  width: "60%",
  order: 1
}));
const TestDemo = () => {
  return /*#__PURE__*/React.createElement("div", null, "I am the Demo");
};
const getSetLanguageContent = (contents, setLanguage) => {
  let content = [];
  contents.forEach(element => {
    if (element.locale.toLowerCase() === setLanguage.toLowerCase()) content = element;
  });
  return content;
};
const getLanguagePosts = (routes, setLanguage) => {
  let posts = [];
  routes.forEach(element => {
    element.markdownData.forEach(languageItem => {
      if (languageItem.locale.toLowerCase() === setLanguage.toLowerCase()) {
        posts.push(_objectSpread(_objectSpread({}, languageItem.parsedMarkdown.metaDataKeys), {}, {
          path: element.path
        }));
      }
    });
  });
  return posts;
};

// const capitalizeFirstLetter = (text) => {
//   console.log("The text Uppercasing;;;", text);
//   return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
// };

const isHtmlString = itemChecked => {
  if (typeof itemChecked === "string" && itemChecked.length) return true;
  return false;
};
const getHtmlBody = itemChecked => {
  if (typeof itemChecked === "string" && itemChecked.length) return itemChecked;
  return null;
};
const markdownComponentType = (mkComponent, index, options) => {
  const {
    languagePosts: posts,
    markdownComponents,
    markdownHtmlBody: body,
    post: currentPost
  } = options;
  console.log("THE MARKDOWN COMPONENT", mkComponent, markdownComponents, posts);
  const componentType = Object.keys(mkComponent)[0];
  const currentComponent = Object.entries(markdownComponents).find(_ref => {
    let [key, value] = _ref;
    if (value.pathID === mkComponent[componentType]) return value;
  })[1];
  const isServer = typeof window != "undefined" ? false : true;
  console.log("THE CURRENT COMPONENT", currentComponent);
  const ComponentInContext = currentComponent.component;
  console.log("THE COMPONENT IN CONTEXT", ComponentInContext);
  switch (componentType) {
    case "demo":
      return /*#__PURE__*/React.createElement(TestDemo, {
        key: index,
        posts: posts,
        post: currentPost
      });
    case "component":
      return /*#__PURE__*/React.createElement(ComponentInContext, {
        posts: posts,
        post: currentPost
      });
    case "video":
      return /*#__PURE__*/React.createElement(MarkdownVideo, {
        key: index
      }, /*#__PURE__*/React.createElement(ComponentInContext, {
        posts: posts,
        post: currentPost
      }));
    case "ad":
      return /*#__PURE__*/React.createElement(MarkdownAd, {
        key: index
      }, /*#__PURE__*/React.createElement(ComponentInContext, {
        posts: posts,
        post: currentPost
      }));
    default:
      return null;
  }
};
const MarkdownRender = _ref2 => {
  let {
    markdownData,
    markdownComponents,
    routes = null
  } = _ref2;
  console.log("MARKDOWN RENDER PROPS: docs", markdownData);
  console.log("MARKDODWN RENDER PROPS: modules", markdownComponents);
  const {
    language
  } = useLanguage();
  const englishContent = getSetLanguageContent(markdownData, language);
  const languagePosts = getLanguagePosts(routes, language);
  console.log("THE ENGLISH CONTENT", englishContent);
  const {
    fileName,
    parsedMarkdown
  } = englishContent;
  const {
    html,
    toc,
    metaDataKeys
  } = parsedMarkdown;
  const {
    useCustomRender = false
  } = metaDataKeys;
  const markdownHtmlBody = getHtmlBody(html);
  const componentsOptions = {
    languagePosts,
    markdownComponents,
    markdownHtmlBody,
    useCustomRender,
    post: metaDataKeys
  };
  console.log("THE PARSED MARKDOWN", parsedMarkdown);
  console.log("Kotii-markdown set Language:::", language, React.lazy, toc);

  // console.log("Filename;;;", fileName);
  // console.log("html", html);
  if (useCustomRender) {
    return html.map((markdownHtmlItem, i) => {
      if (!isHtmlString(markdownHtmlItem)) {
        return markdownComponentType(markdownHtmlItem, i, componentsOptions);
      }
      return null;
    });
  }
  return /*#__PURE__*/React.createElement(MarkdownRenderCanvas, null, /*#__PURE__*/React.createElement(MarkdownContentArea, null, /*#__PURE__*/React.createElement(MainArea, null, html.map((markdownHtmlItem, i) => {
    if (isHtmlString(markdownHtmlItem)) return /*#__PURE__*/React.createElement(MarkdownElement, {
      htmlString: markdownHtmlItem,
      key: i
    });
    return markdownComponentType(markdownHtmlItem, markdownComponents, i, languagePosts);
  }))));
};
MarkdownRender.propTypes = {
  markdownData: PropTypes.array.isRequired
  // markdownComponents: PropTypes.object.isRequired,
};
export default MarkdownRender;