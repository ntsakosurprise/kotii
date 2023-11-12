/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ var __webpack_modules__ = ({

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("react-router-dom");

/***/ }),

/***/ "./build.js":
/*!******************!*\
  !*** ./build.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   mapsOfFiles: () => (/* binding */ mapsOfFiles),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   surname: () => (/* binding */ surname)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n/* harmony import */ var _public_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./public.js */ \"./public.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\n\nvar mapsOfFiles = [{\n  path: \"/test\",\n  component: function Test() {\n    return /*#__PURE__*/_react.default.createElement(\"p\", null, \"TEST Page\");\n  }\n}, {\n  path: \"/\",\n  component: function Index() {\n    return /*#__PURE__*/_react.default.createElement(Hero, null, /*#__PURE__*/_react.default.createElement(HeroText, null, \"Focus on your idea, Forget about configurations\"), \";\");\n  }\n}, {\n  path: \"/faqs\",\n  component: function Faqs() {\n    return /*#__PURE__*/_react.default.createElement(\"p\", null, \"Im the FAQS page\");\n  }\n}, {\n  path: \"/contact-us\",\n  component: function ContactUs() {\n    console.log(\"THE ABOUT PAGE\");\n    return /*#__PURE__*/_react.default.createElement(\"p\", null, \"Im the ABOUT page\");\n  }\n}, {\n  path: \"/about\",\n  component: function About() {\n    console.log(\"THE ABOUT PAGE\");\n    return /*#__PURE__*/_react.default.createElement(\"p\", null, \"Im the ABOUT page\");\n  }\n}, {\n  path: \"/todo\",\n  component: function Todo() {\n    return /*#__PURE__*/_react.default.createElement(\"p\", null, \"Im the TODO page\");\n  }\n}, {\n  path: \"/posts\",\n  component: function Posts() {\n    return /*#__PURE__*/_react.default.createElement(\"p\", null, \"Im the Posts page\");\n  }\n}, {\n  path: \"/posts/:slug\",\n  component: function AnythingSlug() {\n    return /*#__PURE__*/_react.default.createElement(\"p\", null, \"Im the AnythingSlug page\");\n  }\n}];\nvar name = \"my name is my name\";\nvar surname = \"Mashele\";\n\n\n//import Public from \"../Public/component.js\"\n\nvar Routes = function Routes(props) {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.BrowserRouter, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__.Routes, null, mapsOfFiles.map(function (r, i) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_public_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _extends({}, props, {\n      exact: true,\n      path: r.path,\n      component: r.component,\n      key: i\n    }));\n  })));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);\n\n//# sourceURL=webpack://kotii-scripts/./build.js?");

/***/ }),

/***/ "./public.js":
/*!*******************!*\
  !*** ./public.js ***!
  \*******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ \"prop-types\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\nvar _excluded = [\"component\"];\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\n\n\n// import { Footer, Header } from \"Layouts\";\n\nvar Public = function Public(_ref) {\n  var Component = _ref.component,\n    rest = _objectWithoutProperties(_ref, _excluded);\n  //   console.log(\"testHEADER\");\n  //   console.log(Header);\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__.Route, _extends({}, rest, {\n    render: function render(props) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createElement(Component, props);\n    }\n  })));\n};\nPublic.propTypes = {\n  component: prop_types__WEBPACK_IMPORTED_MODULE_0__.PropTypes.element.isRequired\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Public);\n\n//# sourceURL=webpack://kotii-scripts/./public.js?");

/***/ })

/******/ });
/************************************************************************/
/******/ // The module cache
/******/ var __webpack_module_cache__ = {};
/******/ 
/******/ // The require function
/******/ function __webpack_require__(moduleId) {
/******/ 	// Check if module is in cache
/******/ 	var cachedModule = __webpack_module_cache__[moduleId];
/******/ 	if (cachedModule !== undefined) {
/******/ 		return cachedModule.exports;
/******/ 	}
/******/ 	// Create a new module (and put it into the cache)
/******/ 	var module = __webpack_module_cache__[moduleId] = {
/******/ 		// no module.id needed
/******/ 		// no module.loaded needed
/******/ 		exports: {}
/******/ 	};
/******/ 
/******/ 	// Execute the module function
/******/ 	__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 
/******/ 	// Return the exports of the module
/******/ 	return module.exports;
/******/ }
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/******/ /* webpack/runtime/make namespace object */
/******/ (() => {
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
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
/******/ var __webpack_exports__ = __webpack_require__("./build.js");
/******/ var __webpack_exports__default = __webpack_exports__["default"];
/******/ var __webpack_exports__mapsOfFiles = __webpack_exports__.mapsOfFiles;
/******/ var __webpack_exports__name = __webpack_exports__.name;
/******/ var __webpack_exports__surname = __webpack_exports__.surname;
/******/ export { __webpack_exports__default as default, __webpack_exports__mapsOfFiles as mapsOfFiles, __webpack_exports__name as name, __webpack_exports__surname as surname };
/******/ 
