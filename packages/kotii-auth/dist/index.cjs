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

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),\n/* harmony export */   useAuth: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useAuth)\n/* harmony export */ });\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n\n\n\n//# sourceURL=webpack://kotii-auth/./index.js?\n}");

/***/ }),

/***/ "./src/components/AuthContext/index.jsx":
/*!**********************************************!*\
  !*** ./src/components/AuthContext/index.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable react/prop-types */\n\n\nconst AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(null);\nconst AuthProvider = ({\n  defaultUser = null,\n  children,\n  onLogin = () => {},\n  onLoginOut = () => {}\n}) => {\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultUser);\n  const authLogin = authUser => setUser(authUser);\n  const authLogout = () => setUser(null);\n  const runOnLogin = () => {\n    onLogin();\n  };\n  const runOnLogout = () => {\n    onLoginOut();\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (!user) runOnLogout();\n    runOnLogin();\n  }, [user]);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(AuthContext.Provider, {\n    value: {\n      login: authLogin,\n      user,\n      logout: authLogout\n    }\n  }, children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);\nconst useAuth = () => {\n  return react__WEBPACK_IMPORTED_MODULE_0___default().useContext(AuthContext);\n};\n\n//# sourceURL=webpack://kotii-auth/./src/components/AuthContext/index.jsx?\n}");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* reexport safe */ _AuthContext_index_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   useAuth: () => (/* reexport safe */ _AuthContext_index_jsx__WEBPACK_IMPORTED_MODULE_0__.useAuth)\n/* harmony export */ });\n/* harmony import */ var _AuthContext_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthContext/index.jsx */ \"./src/components/AuthContext/index.jsx\");\n\n\n\n//# sourceURL=webpack://kotii-auth/./src/components/index.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),\n/* harmony export */   useAuth: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.useAuth)\n/* harmony export */ });\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\n\n// import {\n//   useLocation,\n//   useMatch,\n//   useNavigate,\n//   useParams,\n//   useRedirect,\n//   useRoute,\n// } from \"./hooks/index.js\";\n\n\n\n//# sourceURL=webpack://kotii-auth/./src/index.js?\n}");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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