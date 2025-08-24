/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ "./src/components/Suspense/Suspense.jsx":
/*!**********************************************!*\
  !*** ./src/components/Suspense/Suspense.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n\n\n// const Suspense = ({ fallback }) => {\n\n//   return (\n//     <a href={to} onClick={handleOnclick} {...props}>\n//       {children}\n//     </a>\n//   );\n// };\n\nclass Suspense extends react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      hasError: null,\n      lazyError: null\n    };\n  }\n  static getDerivedStateFromError(error) {\n    if (error instanceof Promise) {\n      return {\n        lazyError: error\n      };\n    }\n    return {\n      hasError: error\n    };\n  }\n  componentDidCatch(error) {\n    if (error instanceof Promise) {\n      this.state.lazyError.then(() => {\n        this.setState({\n          lazyError: null\n        });\n      });\n    }\n  }\n  render() {\n    if (this.state.lazyError) {\n      return this.props.fallback;\n    }\n    if (this.state.hasError) {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, \"An error occured rendering component\");\n    }\n    return this.props.children;\n  }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Suspense);\n\n//# sourceURL=webpack://kotii-lazy/./src/components/Suspense/Suspense.jsx?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LazySuspense: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.LazySuspense),\n/* harmony export */   lazyLoad: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.lazyLoad)\n/* harmony export */ });\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n\n\n\n//# sourceURL=webpack://kotii-lazy/./index.js?");

/***/ }),

/***/ "./src/components/Suspense/index.js":
/*!******************************************!*\
  !*** ./src/components/Suspense/index.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Suspense_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Suspense.jsx */ \"./src/components/Suspense/Suspense.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Suspense_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-lazy/./src/components/Suspense/index.js?");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LazySuspense: () => (/* reexport safe */ _Suspense_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Suspense_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Suspense/index.js */ \"./src/components/Suspense/index.js\");\n\n\n\n//# sourceURL=webpack://kotii-lazy/./src/components/index.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LazySuspense: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.LazySuspense),\n/* harmony export */   lazyLoad: () => (/* reexport safe */ _lazy_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\n/* harmony import */ var _lazy_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lazy/index.js */ \"./src/lazy/index.js\");\n\n\n\n\n//# sourceURL=webpack://kotii-lazy/./src/index.js?");

/***/ }),

/***/ "./src/lazy/index.js":
/*!***************************!*\
  !*** ./src/lazy/index.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (componentLoader => {\n  console.log(\"THE COMPONENT LOADER\", componentLoader);\n  let LoadedComponent = null;\n  let loadModulePromise = null;\n  async function loadModule() {\n    if (!LoadedComponent) {\n      loadModulePromise = await componentLoader();\n      LoadedComponent = loadModulePromise?.default || loadModulePromise;\n      console.log(\"THE LOADED\", loadModulePromise);\n    }\n    return LoadedComponent;\n  }\n  function Lazy() {\n    console.log(\"Lazy runs\");\n    if (!LoadedComponent) {\n      loadModulePromise = componentLoader().then(componentModule => {\n        return componentModule.default || componentModule;\n      });\n      throw loadModulePromise;\n    }\n    return /*#__PURE__*/React.createElement(LoadedComponent, null);\n  }\n  Lazy.preload = loadModule;\n  return Lazy;\n});\n\n//# sourceURL=webpack://kotii-lazy/./src/lazy/index.js?");

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
/******/ var __webpack_exports__ = __webpack_require__("./index.js");
/******/ var __webpack_exports__LazySuspense = __webpack_exports__.LazySuspense;
/******/ var __webpack_exports__lazyLoad = __webpack_exports__.lazyLoad;
/******/ export { __webpack_exports__LazySuspense as LazySuspense, __webpack_exports__lazyLoad as lazyLoad };
/******/ 
