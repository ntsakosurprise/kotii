/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import * as __WEBPACK_EXTERNAL_MODULE_html_react_parser_3af9c4b2__ from "html-react-parser";
import * as __WEBPACK_EXTERNAL_MODULE_kotii_languages_da793f07__ from "kotii-languages";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ "./src/components/MarkdownAd/index.jsx"
/*!*********************************************!*\
  !*** ./src/components/MarkdownAd/index.jsx ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n\n\nconst MarkdownAd = ({\n  children\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(\"div\", null, children);\n};\nMarkdownAd.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].element\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownAd);\n\n//# sourceURL=webpack://kotii-markdown-render/./src/components/MarkdownAd/index.jsx?\n}");

/***/ },

/***/ "./src/components/MarkdownElement/index.jsx"
/*!**************************************************!*\
  !*** ./src/components/MarkdownElement/index.jsx ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var _StyledMarkdown_index_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../StyledMarkdown/index.jsx */ \"./src/components/StyledMarkdown/index.jsx\");\n/* eslint-disable react/react-in-jsx-scope */\n/* eslint-disable react/prop-types */\n// import parse from \"html-react-parser\";\n\n\n\nconst MarkdownElement = ({\n  children,\n  setCustom = false,\n  htmlString\n}) => {\n  console.log(\"MARKDOWN ELEMENT WITH PROPS\", children, setCustom, htmlString);\n  if (setCustom) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Fragment, null, children);\n  console.log(\"NOT SET CUSTOM, PASSING OVER\");\n  try {\n    const rendered = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_StyledMarkdown_index_jsx__WEBPACK_IMPORTED_MODULE_2__.StyledMarkdown, null, children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n      dangerouslySetInnerHTML: {\n        __html: htmlString\n      }\n    })));\n    console.log(\"THE RENDERED HTML\", rendered);\n  } catch (error) {\n    console.log(\"ERROR PARSING HTML\", error);\n  }\n  console.log(\"STYLED MARKDOWN RESULTS\");\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_StyledMarkdown_index_jsx__WEBPACK_IMPORTED_MODULE_2__.StyledMarkdown, null, children ? children : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", {\n    dangerouslySetInnerHTML: {\n      __html: htmlString\n    }\n  })));\n};\nMarkdownElement.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].element,\n  setCustom: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].bool,\n  htmlString: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].string\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownElement);\n\n//# sourceURL=webpack://kotii-markdown-render/./src/components/MarkdownElement/index.jsx?\n}");

/***/ },

/***/ "./src/components/MarkdownRender/index.jsx"
/*!*************************************************!*\
  !*** ./src/components/MarkdownRender/index.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var kotii_languages__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kotii-languages */ \"kotii-languages\");\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! kotii-styled */ \"prop-types\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _MarkdownAd_index_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../MarkdownAd/index.jsx */ \"./src/components/MarkdownAd/index.jsx\");\n/* harmony import */ var _MarkdownVideo_index_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../MarkdownVideo/index.jsx */ \"./src/components/MarkdownVideo/index.jsx\");\n/* harmony import */ var _StandardComponent_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../StandardComponent/index.jsx */ \"./src/components/StandardComponent/index.jsx\");\n/* harmony import */ var _MarkdownElement_index_jsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../MarkdownElement/index.jsx */ \"./src/components/MarkdownElement/index.jsx\");\n/* eslint-disable no-unused-vars */\n/* eslint-disable react/prop-types */\n// eslint-disable unused-imports/no-unused-imports */\n\n\n\n\n\n// import MarkdownHeader from \"../MarkdownHeader/index.js\";\n\n\n\nconst MarkdownRenderCanvas = (0,prop_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\")(() => ({\n  width: \"100%\",\n  display: \"flex\",\n  flexDirection: \"column\"\n  // overflow: \"hidden\",\n}));\nconst MarkdownContentArea = (0,prop_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\")(() => ({\n  width: \"100%\",\n  display: \"flex\",\n  flexDirection: \"row\"\n  // top: \"100px\",\n  // position: \"relative\",\n}));\nconst MainArea = (0,prop_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"div\")(() => ({\n  width: \"60%\",\n  order: 1\n}));\nconst TestDemo = () => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(\"div\", null, \"I am the Demo\");\n};\nconst getSetLanguageContent = (contents, setLanguage) => {\n  let content = [];\n  contents.forEach(element => {\n    if (element.locale.toLowerCase() === setLanguage.toLowerCase()) content = element;\n  });\n  return content;\n};\nconst getLanguagePosts = (routes, setLanguage) => {\n  let posts = [];\n  routes.forEach(element => {\n    element.markdownData.forEach(languageItem => {\n      if (languageItem.locale.toLowerCase() === setLanguage.toLowerCase()) {\n        posts.push({\n          ...languageItem.parsedMarkdown.metaDataKeys,\n          path: element.path\n        });\n      }\n    });\n  });\n  return posts;\n};\n\n// const capitalizeFirstLetter = (text) => {\n//   console.log(\"The text Uppercasing;;;\", text);\n//   return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;\n// };\n\nconst isHtmlString = itemChecked => {\n  if (typeof itemChecked === \"string\" && itemChecked.length) return true;\n  return false;\n};\nconst getHtmlBody = itemChecked => {\n  if (typeof itemChecked === \"string\" && itemChecked.length) return itemChecked;\n  return null;\n};\nconst markdownComponentType = (mkComponent, index, options) => {\n  const {\n    languagePosts: posts,\n    markdownComponents,\n    markdownHtmlBody: body,\n    post: currentPost\n  } = options;\n  console.log(\"THE MARKDOWN COMPONENT\", mkComponent, markdownComponents, posts);\n  const componentType = Object.keys(mkComponent)[0];\n  const currentComponent = Object.entries(markdownComponents).find(([key, value]) => {\n    if (value.pathID === mkComponent[componentType]) return value;\n  })[1];\n  const isServer = typeof window != \"undefined\" ? false : true;\n  console.log(\"THE CURRENT COMPONENT\", currentComponent);\n  const ComponentInContext = currentComponent.component;\n  console.log(\"THE COMPONENT IN CONTEXT\", ComponentInContext);\n  switch (componentType) {\n    case \"demo\":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(TestDemo, {\n        key: index,\n        posts: posts,\n        post: currentPost\n      });\n    case \"component\":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(ComponentInContext, {\n        posts: posts,\n        post: currentPost\n      });\n    case \"video\":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(_MarkdownVideo_index_jsx__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(ComponentInContext, {\n        posts: posts,\n        post: currentPost\n      }));\n    case \"ad\":\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(_MarkdownAd_index_jsx__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        key: index\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(ComponentInContext, {\n        posts: posts,\n        post: currentPost\n      }));\n    default:\n      return null;\n  }\n};\nconst MarkdownRender = ({\n  markdownData,\n  markdownComponents,\n  routes = null\n}) => {\n  console.log(\"MARKDOWN RENDER PROPS: docs\", markdownData);\n  console.log(\"MARKDODWN RENDER PROPS: modules\", markdownComponents);\n  const {\n    language\n  } = (0,kotii_languages__WEBPACK_IMPORTED_MODULE_0__.useLanguage)();\n  const englishContent = getSetLanguageContent(markdownData, language);\n  const languagePosts = getLanguagePosts(routes, language);\n  console.log(\"THE ENGLISH CONTENT\", englishContent);\n  const {\n    fileName,\n    parsedMarkdown\n  } = englishContent;\n  const {\n    html,\n    toc,\n    metaDataKeys\n  } = parsedMarkdown;\n  const {\n    useCustomRender = false\n  } = metaDataKeys;\n  const markdownHtmlBody = getHtmlBody(html);\n  const componentsOptions = {\n    languagePosts,\n    markdownComponents,\n    markdownHtmlBody,\n    useCustomRender,\n    post: metaDataKeys\n  };\n  console.log(\"THE PARSED MARKDOWN\", parsedMarkdown);\n  console.log(\"Kotii-markdown set Language:::\", language, react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].lazy, toc);\n\n  // console.log(\"Filename;;;\", fileName);\n  // console.log(\"html\", html);\n  if (useCustomRender) {\n    return html.map((markdownHtmlItem, i) => {\n      if (!isHtmlString(markdownHtmlItem)) {\n        return markdownComponentType(markdownHtmlItem, i, componentsOptions);\n      }\n      return null;\n    });\n  }\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(MarkdownRenderCanvas, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(MarkdownContentArea, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(MainArea, null, html.map((markdownHtmlItem, i) => {\n    if (isHtmlString(markdownHtmlItem)) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__[\"default\"].createElement(_MarkdownElement_index_jsx__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n      htmlString: markdownHtmlItem,\n      key: i\n    });\n    return markdownComponentType(markdownHtmlItem, markdownComponents, i, languagePosts);\n  }))));\n};\nMarkdownRender.propTypes = {\n  markdownData: prop_types__WEBPACK_IMPORTED_MODULE_1__[\"default\"].array.isRequired\n  // markdownComponents: PropTypes.object.isRequired,\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownRender);\n\n//# sourceURL=webpack://kotii-markdown-render/./src/components/MarkdownRender/index.jsx?\n}");

/***/ },

/***/ "./src/components/MarkdownVideo/index.jsx"
/*!************************************************!*\
  !*** ./src/components/MarkdownVideo/index.jsx ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n\n\nconst MarkdownVideo = ({\n  children,\n  isNotChildVideo = false\n}) => {\n  console.log(\"THE CHILDREN\", children, isNotChildVideo);\n  if (isNotChildVideo) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(\"video\", null, children);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(\"div\", null, children);\n};\nMarkdownVideo.propTypes = {\n  children: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].element,\n  isNotChildVideo: prop_types__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bool\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MarkdownVideo);\n\n//# sourceURL=webpack://kotii-markdown-render/./src/components/MarkdownVideo/index.jsx?\n}");

/***/ },

/***/ "./src/components/StandardComponent/index.jsx"
/*!****************************************************!*\
  !*** ./src/components/StandardComponent/index.jsx ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var kotii_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* eslint-disable react/prop-types */\n\n\n\nconst StyledStandardComponent = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(\"div\")(() => ({\n  width: \"100%\"\n}));\nconst StandardComponent = ({\n  children\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(StyledStandardComponent, null, children);\n};\nStandardComponent.propTypes = {\n  children: kotii_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].element.isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StandardComponent);\n\n//# sourceURL=webpack://kotii-markdown-render/./src/components/StandardComponent/index.jsx?\n}");

/***/ },

/***/ "./src/components/StyledMarkdown/index.jsx"
/*!*************************************************!*\
  !*** ./src/components/StyledMarkdown/index.jsx ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   StyledMarkdown: () => (/* binding */ StyledMarkdown)\n/* harmony export */ });\n/* harmony import */ var kotii_styled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kotii-styled */ \"prop-types\");\n\nconst GoogleFonts = kotii_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div`\n  @import url(\"https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap\");\n  @import url(\"https://fonts.googleapis.com/css2?family=Pangolin&display=swap\");\n`;\nconst StyledMarkdown = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(GoogleFonts)(() => ({\n  fontFamily: '\"Roboto\", sans-serif',\n  \"& h1\": {\n    color: \"red\",\n    margin: \"10px 0\",\n    fontSize: \"3rem\",\n    lineHeight: \"3.5rem\",\n    fontWeight: 900\n  },\n  \"& h1, h2, h3, h4, h5, h6\": {\n    textTransform: \"capitalize\"\n  },\n  \"& table\": {\n    minWidth: \"600px\",\n    border: \"2px solid #2a2f36\",\n    margin: \"20px auto\",\n    width: \"100%\",\n    borderSpacing: \"0\",\n    borderCollapse: \"collapse\",\n    backgroundColor: \"#fff\"\n  },\n  \"& table thead\": {\n    background: \"#2a2f36\",\n    color: \"#fff\",\n    textAlign: \"left\",\n    fontWeight: 600\n  },\n  \"& table thead th\": {\n    fontWeight: 600\n  },\n  \"& table td,\\ntable th\": {\n    padding: \"10px\",\n    fontSize: \"16px\",\n    fontWeight: 400\n  },\n  \"& table tr:nth-child(2n)\": {\n    background: \"#f5f7fa\"\n  },\n  \"& pre\": {\n    // background: \"#eee\",\n    //background: \"#001E3C;\",\n    background: \"#20354A\",\n    // borderLeft: \"5px solid #9684A3\",\n    borderRadius: \"10px\",\n    padding: \"10px\",\n    letterSpacing: \".5px\",\n    fontSize: \"10pt\",\n    // color: \"#96b38a\",\n    color: \"white\",\n    fontWeight: \"bold\"\n  },\n  // \"& pre::-webkit-scrollbar\": {\n  //   backgroundColor: \"#DED7E6\",\n  //   height: \"10px\",\n  // },\n  // \"& pre::-webkit-scrollbar-thumb\": {\n  //   background: \"#9684A3\",\n  //   borderTopRightRadius: \"10px\",\n  // },\n\n  \"& pre code\": {\n    display: \"block\",\n    background: \"none\",\n    whiteSpace: \"pre\",\n    WebkitOverflowScrolling: \"touch\",\n    overflowX: \"scroll\",\n    maxWidth: \"100%\",\n    minWidth: \"100px\",\n    padding: \"0\",\n    fontSize: \"15px\",\n    fontFamily: \"MyFancyCustomFont, monospace\"\n  },\n  \"& code\": {\n    fontFamily: \"MyFancyCustomFont, monospace\",\n    fontSize: \"inherit\"\n  },\n  \"& ol\": {\n    margin: \"0 0 1em 0\",\n    padding: \"0\",\n    counterReset: \"li\",\n    listStyle: \"none\"\n  },\n  \"& ol li\": {\n    display: \"block\",\n    overflow: \"hidden\",\n    position: \"relative\",\n    paddingLeft: \"50px\",\n    minHeight: \"35px\",\n    margin: \"10px 0px\",\n    paddingTop: \"4px\"\n  },\n  \"& ol li:before\": {\n    position: \"absolute\",\n    top: \"0px\",\n    left: \"0px\",\n    border: \"1px solid #000\",\n    backgroundColor: \"#d5d5d5\",\n    borderRadius: \"50%\",\n    width: \"30px\",\n    height: \"30px\",\n    lineHeight: \"30px\",\n    textAlign: \"center\",\n    fontSize: \"12px\",\n    fontWeight: 700,\n    color: \"#000\",\n    content: \"counter(li)\",\n    counterIncrement: \"li\"\n  },\n  \"& ul li\": {\n    color: \"green\",\n    listStyle: \"none\",\n    position: \"relative\",\n    paddingLeft: \"50px\",\n    lineHeight: 2,\n    fontSize: \"16px\"\n  },\n  \"& ul li:before\": {\n    position: \"absolute\",\n    left: \"0\",\n    color: \"red\",\n    fontSize: \"32px\",\n    content: '\"\\\\f111\"'\n  },\n  \"p > code,\\nli > code,\\ndd > code,\\ntd > code\": {\n    background: \"#ffeff0\",\n    wordWrap: \"break-word\",\n    boxDecorationBreak: \"clone\",\n    padding: \".1rem .3rem .2rem\",\n    borderRadius: \".2rem\"\n  },\n  // \"& ul li.two:before\": { content: '\"\\\\f00c\"' },\n  // \"& ul li.three:before\": { content: '\"\\\\f10c\"' },\n  // \"& ul li.four:before\": { content: '\"\\\\f004\"' },\n  // \"& ul li.five:before\": { content: '\"\\\\f1e2\"' },\n  // \"& ul li.six:before\": { content: '\"\\\\f0e7\"' },\n  // \"& ul li:hover:before\": { color: \"#fff\" },\n  \"& p\": {\n    textAlign: \"justify\",\n    hyphens: \"auto\"\n    // fontFamily: '\"Pangolin\", sans-serif',\n  },\n  \"& p:first-of-type\": {\n    fontSize: \"1.1rem\"\n  },\n  \"& p:first-of-type:first-letter\": {\n    fontSize: \"2.2rem\",\n    fontWeight: \"bold\",\n    float: \"left\",\n    display: \"inline-block\",\n    marginTop: \"0.5rem\",\n    paddingRight: \"0.15rem\",\n    color: \"white\",\n    backgroundColor: \"red\",\n    padding: \"1.2rem 0.5rem\",\n    marginRight: \"0.5rem\"\n  },\n  \"& p:first-of-type:first-line\": {\n    fontWeight: \"bold\"\n  },\n  \"& blockquote\": {\n    fontSize: \"1.4em\",\n    width: \"60%\",\n    margin: \"50px auto\",\n    fontFamily: \"Open Sans\",\n    fontStyle: \"italic\",\n    color: \"#555555\",\n    padding: \"1.2em 30px 1.2em 75px\",\n    borderLeft: \"8px solid #78C0A8\",\n    lineHeight: 1.6,\n    position: \"relative\",\n    background: \"#EDEDED\"\n  },\n  \"& blockquote::before\": {\n    fontFamily: \"Arial\",\n    content: '\"\\\\201C\"',\n    color: \"#78C0A8\",\n    fontSize: \"4em\",\n    position: \"absolute\",\n    left: \"10px\",\n    top: \"-10px\"\n  },\n  \"& blockquote::after\": {\n    content: \"''\"\n  },\n  \"& blockquote span\": {\n    display: \"block\",\n    color: \"#333333\",\n    fontStyle: \"normal\",\n    fontWeight: \"bold\",\n    marginTop: \"1em\"\n  }\n}));\n\n\n//# sourceURL=webpack://kotii-markdown-render/./src/components/StyledMarkdown/index.jsx?\n}");

/***/ },

/***/ "prop-types"
/*!************************************!*\
  !*** external "html-react-parser" ***!
  \************************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_html_react_parser_3af9c4b2__;

/***/ },

/***/ "kotii-languages"
/*!**********************************!*\
  !*** external "kotii-languages" ***!
  \**********************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_kotii_languages_da793f07__;

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "react" ***!
  \************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ },

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MarkdownRender: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownRender)\n/* harmony export */ });\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n\n\n\n//# sourceURL=webpack://kotii-markdown-render/./index.js?\n}");

/***/ },

/***/ "./src/components/index.js"
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MarkdownRender: () => (/* reexport safe */ _MarkdownRender_index_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _MarkdownRender_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MarkdownRender/index.jsx */ \"./src/components/MarkdownRender/index.jsx\");\n\n\n\n//# sourceURL=webpack://kotii-markdown-render/./src/components/index.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MarkdownRender: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.MarkdownRender)\n/* harmony export */ });\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\n\n\n\n//# sourceURL=webpack://kotii-markdown-render/./src/index.js?\n}");

/***/ }

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ const __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	const cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	const module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	if (!(moduleId in __webpack_modules__)) {
/******/ 		delete __webpack_module_cache__[moduleId];
/******/ 		const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 		e.code = 'MODULE_NOT_FOUND';
/******/ 		throw e;
/******/ 	}
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		if(Array.isArray(definition)) {
/******/ 			var i = 0;
/******/ 			while(i < definition.length) {
/******/ 				var key = definition[i++];
/******/ 				var binding = definition[i++];
/******/ 				if(!__webpack_require__.o(exports, key)) {
/******/ 					if(binding === 0) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 					} else {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 					}
/******/ 				} else if(binding === 0) { i++; }
/******/ 			}
/******/ 		} else {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.hasOwn(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ })();
/******/ 
/************************************************************************/
/******/ 
/******/ // startup
/******/ // Load entry module and return exports
/******/ // This entry module can't be inlined because the eval devtool is used.
/******/ let __webpack_exports__ = __webpack_require__("./index.js");
/******/ const __webpack_exports__MarkdownRender = __webpack_exports__.MarkdownRender;
/******/ export { __webpack_exports__MarkdownRender as MarkdownRender };
/******/ 
