/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["nextgen-docs-markdown"] = factory();
	else
		root["nextgen-docs-markdown"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/loader.js":
/*!***********************!*\
  !*** ./lib/loader.js ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var _require = __webpack_require__(/*! ./markdownParser */ \"./lib/markdownParser.js\"),\n    parseMarkdown = _require.parseMarkdown;\n\nconsole.log(parseMarkdown); // eslint-disable-next-line no-unused-vars\n\nmodule.exports = function (source) {\n  this.getLogger(); // const reContext = this.context;\n  // const rePath = this.resourcePath;\n  // console.log(\"MarkDownFolder\", rePath);\n  //   console.log(\"the source;;\", reContext);\n\n  var docs = {\n    content: source\n  };\n  var loaded = \"\\n\\n   export const docs = \".concat(JSON.stringify(docs, null, 2), \"\\n  \\n  \");\n  return loaded;\n};\n\n//# sourceURL=webpack://nextgen-docs-markdown/./lib/loader.js?");

/***/ }),

/***/ "./lib/markdownParser.js":
/*!*******************************!*\
  !*** ./lib/markdownParser.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"parseMarkdown\": () => (/* binding */ parseMarkdown)\n/* harmony export */ });\n/* eslint-disable no-unused-vars */\nvar extractHeader = function extractHeader(markdown) {};\n\nvar extractDescription = function extractDescription(markdown) {};\n\nvar extractContent = function extractContent(markdown) {};\n\nvar getMarkdownDemos = function getMarkdownDemos(markdown) {};\n\nvar getMarkdownComponents = function getMarkdownComponents(contentDictionary) {};\n\nvar parseMarkdown = function parseMarkdown() {};\n\n//# sourceURL=webpack://nextgen-docs-markdown/./lib/markdownParser.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./lib/loader.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});