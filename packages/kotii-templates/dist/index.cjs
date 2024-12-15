/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Template: () => (/* reexport safe */ _plugins_index_js__WEBPACK_IMPORTED_MODULE_0__.Template)\n/* harmony export */ });\n/* harmony import */ var _plugins_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./plugins/index.js */ \"./plugins/index.js\");\n\n\n\n//# sourceURL=webpack://kotii-templates/./index.js?");

/***/ }),

/***/ "./plugins/index.js":
/*!**************************!*\
  !*** ./plugins/index.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Template: () => (/* reexport safe */ _template_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _template_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./template.js */ \"./plugins/template.js\");\n\n\n\n//# sourceURL=webpack://kotii-templates/./plugins/index.js?");

/***/ }),

/***/ "./plugins/template.js":
/*!*****************************!*\
  !*** ./plugins/template.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n\nclass Template {\n  constructor(pao) {\n    this.pao = pao;\n    this.templatesTypes = [\"typescript\", \"javascript\"];\n    this.templateNames = [\"spa\", \"ssr\"];\n  }\n  init() {\n    this.listens({\n      \"get-template\": this.handleGetTemplate.bind(this)\n    });\n  }\n  handleGetTemplate(data) {\n    const self = this;\n    const pao = self.pao;\n    const getWorkingFolder = pao.pa_getWorkingFolder;\n    // const getRootDir = pao.pa_getRootDir;\n    self.callback = data.callback;\n    const {\n      name,\n      type\n    } = data;\n    const sep = path__WEBPACK_IMPORTED_MODULE_0__.sep;\n    // console.log(\"THE PAO\", pao);\n    // console.log(\"THE ROOT DIR\", getRootDir(module.filename));\n    // console.log(\"THE MODULE\", __dirname);\n    // console.log(\"THE ROOT DIR\", self._getCallerFile());\n\n    if (!type || !this.templatesTypes.includes(type.toLowerCase())) {\n      throw new Error(\"The requested template type is not supported\");\n    }\n    if (!name || !this.templateNames.includes(name.toLowerCase())) {\n      throw new Error(\"The requested template name does not exist\");\n    }\n    // console.log(\"THE WORKING FOLDER\", getWorkingFolder());\n    // let workDir = getWorkingFolder();\n    // console.log(\"MODULE.FILENAME\", getRootDir);\n    console.log(\"MODULE.FILENAME\", module.filename);\n    console.log(\"MODULE.FILENAME Greater\", module.filename.indexOf(`${sep}dist`) > 0);\n    console.log(\"MODULE.FILENAME Greater equal zero\", module.filename.indexOf(`${sep}dist`) >= 0);\n    // console.log(\"MODULE.FILENAME FOLDER\", pao.pa_getRootDir(module.filename));\n    // let thisFileDir = getRootDir(module.filename);\n    let thisFileDir = path__WEBPACK_IMPORTED_MODULE_0__.dirname(module.filename);\n    console.log(\"MODULE.FILENAME: thisFileDir\", thisFileDir);\n    let templateTypeFolder = thisFileDir.indexOf(`${sep}dist`) > 0 ? path__WEBPACK_IMPORTED_MODULE_0__.resolve(thisFileDir, `..${sep}${type}`) : path__WEBPACK_IMPORTED_MODULE_0__.resolve(thisFileDir, `..${sep}${type}`);\n    let templatePath = path__WEBPACK_IMPORTED_MODULE_0__.resolve(templateTypeFolder, name);\n    let templatesPathRoot = path__WEBPACK_IMPORTED_MODULE_0__.resolve(thisFileDir, \"..\");\n    let kotiiPackages = path__WEBPACK_IMPORTED_MODULE_0__.resolve(templatesPathRoot, \"..\");\n    let kotiiMain = path__WEBPACK_IMPORTED_MODULE_0__.resolve(kotiiPackages, \"..\");\n    // console.log(\"THE THIS FILE DIR\", thisFileDir);\n\n    // console.log(\"THE DIR OUT\", templatesPathRoot);\n    // console.log(\"PACKAGES\", kotiiPackages);\n    // console.log(\"KOTII MONO\", kotiiMain);\n    self.callback({\n      templateTypeFolder,\n      templatePath,\n      templatesPathRoot,\n      kotiiPackages,\n      kotiiMain\n    });\n  }\n\n  // _getCallerFile() {\n  //   var filename;\n\n  //   var _pst = Error.prepareStackTrace;\n  //   Error.prepareStackTrace = function (err, stack) {\n  //     return stack;\n  //   };\n  //   try {\n  //     var err = new Error();\n  //     var callerfile;\n  //     var currentfile;\n\n  //     console.log(\"THE ERROR OBJECT\", err);\n  //     console.log(\"THE ERROR STACK\", err.stack);\n\n  //     currentfile = err.stack.shift().getFileName();\n\n  //     while (err.stack.length) {\n  //       callerfile = err.stack.shift().getFileName();\n\n  //       if (currentfile !== callerfile) {\n  //         filename = callerfile;\n  //         break;\n  //       }\n  //     }\n  //   } catch (err) {}\n  //   Error.prepareStackTrace = _pst;\n\n  //   return filename;\n  // }\n\n  getPackageJson() {}\n  savePackageJson() {}\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Template);\n\n//# sourceURL=webpack://kotii-templates/./plugins/template.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;