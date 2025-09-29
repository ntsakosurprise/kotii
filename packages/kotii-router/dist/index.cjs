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

/***/ "../../node_modules/.pnpm/kotii-auth@file+packages+kotii-auth+kotii-auth-0.0.0.tgz_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/kotii-auth/dist/index.mjs":
/*!****************************************************************************************************************************************************************************!*\
  !*** ../../node_modules/.pnpm/kotii-auth@file+packages+kotii-auth+kotii-auth-0.0.0.tgz_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/kotii-auth/dist/index.mjs ***!
  \****************************************************************************************************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{var react__WEBPACK_IMPORTED_MODULE_0___namespace_cache;\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthProvider: () => (/* binding */ __webpack_exports__AuthProvider),\n/* harmony export */   useAuth: () => (/* binding */ __webpack_exports__useAuth)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/*\n * ATTENTION: The \"eval\" devtool has been used (maybe by default in mode: \"development\").\n * This devtool is neither made for production nor for readable output files.\n * It uses \"eval()\" calls to create a separate source file in the browser devtools.\n * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)\n * or disable the default devtool with \"devtool: false\".\n * If you are looking for production-ready output files, see mode: \"production\" (https://webpack.js.org/configuration/mode/).\n */\n\n/******/ var __webpack_modules__ = ({\n\n/***/ \"./index.js\":\n/*!******************!*\\\n  !*** ./index.js ***!\n  \\******************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\neval(\"{__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   AuthProvider: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),\\n/* harmony export */   useAuth: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useAuth)\\n/* harmony export */ });\\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \\\"./src/index.js\\\");\\n\\n\\n\\n//# sourceURL=webpack://kotii-auth/./index.js?\\n}\");\n\n/***/ }),\n\n/***/ \"./src/components/AuthContext/index.jsx\":\n/*!**********************************************!*\\\n  !*** ./src/components/AuthContext/index.jsx ***!\n  \\**********************************************/\n/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {\n\neval(\"{__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   \\\"default\\\": () => (__WEBPACK_DEFAULT_EXPORT__),\\n/* harmony export */   useAuth: () => (/* binding */ useAuth)\\n/* harmony export */ });\\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \\\"react\\\");\\n/* eslint-disable react/prop-types */\\n\\nconst AuthContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].createContext(null);\\nconst AuthProvider = ({\\n  defaultUser = null,\\n  children\\n}) => {\\n  const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultUser);\\n  const authLogin = (authUser, onLogin = null) => {\\n    setUser(authUser);\\n    if (onLogin) onLogin();\\n  };\\n  const authLogout = (onLogout = null) => {\\n    setUser(null);\\n    if (onLogout) onLogout();\\n  };\\n  // const runOnLogin = () => {\\n  //   onLogin();\\n  // };\\n  // const runOnLogout = () => {\\n  //   onLoginOut();\\n  // };\\n\\n  // useEffect(() => {\\n  //   if (!user) runOnLogout();\\n  // }, [user]);\\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].createElement(AuthContext.Provider, {\\n    value: {\\n      login: authLogin,\\n      user,\\n      logout: authLogout\\n    }\\n  }, children);\\n};\\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);\\nconst useAuth = () => {\\n  return react__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"].useContext(AuthContext);\\n};\\n\\n//# sourceURL=webpack://kotii-auth/./src/components/AuthContext/index.jsx?\\n}\");\n\n/***/ }),\n\n/***/ \"./src/components/index.js\":\n/*!*********************************!*\\\n  !*** ./src/components/index.js ***!\n  \\*********************************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\neval(\"{__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   AuthProvider: () => (/* reexport safe */ _AuthContext_index_jsx__WEBPACK_IMPORTED_MODULE_0__[\\\"default\\\"]),\\n/* harmony export */   useAuth: () => (/* reexport safe */ _AuthContext_index_jsx__WEBPACK_IMPORTED_MODULE_0__.useAuth)\\n/* harmony export */ });\\n/* harmony import */ var _AuthContext_index_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthContext/index.jsx */ \\\"./src/components/AuthContext/index.jsx\\\");\\n\\n\\n\\n//# sourceURL=webpack://kotii-auth/./src/components/index.js?\\n}\");\n\n/***/ }),\n\n/***/ \"./src/index.js\":\n/*!**********************!*\\\n  !*** ./src/index.js ***!\n  \\**********************/\n/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {\n\neval(\"{__webpack_require__.r(__webpack_exports__);\\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\\n/* harmony export */   AuthProvider: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.AuthProvider),\\n/* harmony export */   useAuth: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.useAuth)\\n/* harmony export */ });\\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ \\\"./src/components/index.js\\\");\\n\\n// import {\\n//   useLocation,\\n//   useMatch,\\n//   useNavigate,\\n//   useParams,\\n//   useRedirect,\\n//   useRoute,\\n// } from \\\"./hooks/index.js\\\";\\n\\n\\n\\n//# sourceURL=webpack://kotii-auth/./src/index.js?\\n}\");\n\n/***/ }),\n\n/***/ \"react\":\n/*!************************!*\\\n  !*** external \"react\" ***!\n  \\************************/\n/***/ ((module) => {\n\nmodule.exports = /*#__PURE__*/ (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache || (react__WEBPACK_IMPORTED_MODULE_0___namespace_cache = __webpack_require__.t(react__WEBPACK_IMPORTED_MODULE_0__, 2)));\n\n/***/ })\n\n/******/ });\n/************************************************************************/\n/******/ // The module cache\n/******/ var __webpack_module_cache__ = {};\n/******/ \n/******/ // The require function\n/******/ function __nested_webpack_require_5615__(moduleId) {\n/******/ \t// Check if module is in cache\n/******/ \tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \tif (cachedModule !== undefined) {\n/******/ \t\treturn cachedModule.exports;\n/******/ \t}\n/******/ \t// Create a new module (and put it into the cache)\n/******/ \tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t// no module.id needed\n/******/ \t\t// no module.loaded needed\n/******/ \t\texports: {}\n/******/ \t};\n/******/ \n/******/ \t// Execute the module function\n/******/ \t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_5615__);\n/******/ \n/******/ \t// Return the exports of the module\n/******/ \treturn module.exports;\n/******/ }\n/******/ \n/************************************************************************/\n/******/ /* webpack/runtime/define property getters */\n/******/ (() => {\n/******/ \t// define getter functions for harmony exports\n/******/ \t__nested_webpack_require_5615__.d = (exports, definition) => {\n/******/ \t\tfor(var key in definition) {\n/******/ \t\t\tif(__nested_webpack_require_5615__.o(definition, key) && !__nested_webpack_require_5615__.o(exports, key)) {\n/******/ \t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t}\n/******/ \t\t}\n/******/ \t};\n/******/ })();\n/******/ \n/******/ /* webpack/runtime/hasOwnProperty shorthand */\n/******/ (() => {\n/******/ \t__nested_webpack_require_5615__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))\n/******/ })();\n/******/ \n/******/ /* webpack/runtime/make namespace object */\n/******/ (() => {\n/******/ \t// define __esModule on exports\n/******/ \t__nested_webpack_require_5615__.r = (exports) => {\n/******/ \t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t}\n/******/ \t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t};\n/******/ })();\n/******/ \n/************************************************************************/\n/******/ \n/******/ // startup\n/******/ // Load entry module and return exports\n/******/ // This entry module can't be inlined because the eval devtool is used.\n/******/ var __nested_webpack_exports__ = __nested_webpack_require_5615__(\"./index.js\");\n/******/ const __webpack_exports__AuthProvider = __nested_webpack_exports__.AuthProvider;\n/******/ const __webpack_exports__useAuth = __nested_webpack_exports__.useAuth;\n/******/ \n/******/ \n\n\n//# sourceURL=webpack://kotii-router/../../node_modules/.pnpm/kotii-auth@file+packages+kotii-auth+kotii-auth-0.0.0.tgz_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/kotii-auth/dist/index.mjs?\n}");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Link: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Link),\n/* harmony export */   Redirect: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Redirect),\n/* harmony export */   Route: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Route),\n/* harmony export */   Router: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Router),\n/* harmony export */   Routes: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Routes),\n/* harmony export */   useLocation: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useLocation),\n/* harmony export */   useMatch: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useMatch),\n/* harmony export */   useNavigate: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useNavigate),\n/* harmony export */   useParams: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useParams),\n/* harmony export */   useRedirect: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useRedirect),\n/* harmony export */   useRoute: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useRoute)\n/* harmony export */ });\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n\n\n\n//# sourceURL=webpack://kotii-router/./index.js?\n}");

/***/ }),

/***/ "./src/components/Link/Link.jsx":
/*!**************************************!*\
  !*** ./src/components/Link/Link.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ \"./src/utils/index.js\");\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\n/* eslint-disable react/prop-types */\n\n\nconst Link = ({\n  to,\n  routeState = {},\n  isAbsolute = false,\n  children,\n  ...props\n}) => {\n  console.log(\"THE NAVIGATE FUNCTION\", to, isAbsolute);\n  const handleOnclick = e => {\n    console.log(\"HANDLE CLICK RUNS\", e);\n    e.preventDefault();\n    console.log(\"LINK NAVIGATION TO\", to);\n    (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.navigate)(to, routeState);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"a\", _extends({\n    href: to,\n    onClick: handleOnclick\n  }, props), children);\n  //   return (\n  //     <a href={!isAbsolute ? `#${to}` : to} onClick={handleOnclick} {...props}>\n  //       {children}\n  //     </a>\n  //   );\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);\n\n//# sourceURL=webpack://kotii-router/./src/components/Link/Link.jsx?\n}");

/***/ }),

/***/ "./src/components/Link/index.js":
/*!**************************************!*\
  !*** ./src/components/Link/index.js ***!
  \**************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Link_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link.jsx */ \"./src/components/Link/Link.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Link_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Link/index.js?\n}");

/***/ }),

/***/ "./src/components/Redirect/Redirect.jsx":
/*!**********************************************!*\
  !*** ./src/components/Redirect/Redirect.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n/* eslint-disable react/prop-types */\n\n\nconst Redirect = ({\n  to\n}) => {\n  const {\n    navigateByReplace\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    navigateByReplace(to);\n  }, [to, navigateByReplace]);\n  return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Redirect);\n\n//# sourceURL=webpack://kotii-router/./src/components/Redirect/Redirect.jsx?\n}");

/***/ }),

/***/ "./src/components/Redirect/index.jsx":
/*!*******************************************!*\
  !*** ./src/components/Redirect/index.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Redirect_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Redirect.jsx */ \"./src/components/Redirect/Redirect.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Redirect_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Redirect/index.jsx?\n}");

/***/ }),

/***/ "./src/components/Route/Route.jsx":
/*!****************************************!*\
  !*** ./src/components/Route/Route.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* eslint-disable react/prop-types */\n\nconst Route = ({\n  component: Component,\n  children\n}) => {\n  console.log(\"THE ROUTE CHILDREN\", children);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, null), children);\n  //   const { path: navPath, seParams } = useContext(KotiiRouterContenxt);\n  //   const matchedRoute = matchRoutePattern(path, navPath);\n  //   if (matchedRoute) {\n  //     seParams(matchedRoute.params);\n  //     return <Component />;\n  //   }\n  //   return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);\n\n//# sourceURL=webpack://kotii-router/./src/components/Route/Route.jsx?\n}");

/***/ }),

/***/ "./src/components/Route/index.js":
/*!***************************************!*\
  !*** ./src/components/Route/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Route_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Route.jsx */ \"./src/components/Route/Route.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Route_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Route/index.js?\n}");

/***/ }),

/***/ "./src/components/Router/Router.jsx":
/*!******************************************!*\
  !*** ./src/components/Router/Router.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   KotiiRouterContenxt: () => (/* binding */ KotiiRouterContenxt),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ \"./src/utils/index.js\");\n\n\nconst KotiiRouterContenxt = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n\n// eslint-disable-next-line react/prop-types\nconst Router = ({\n  children,\n  ssrPath = \"/\"\n}) => {\n  console.log(\"ROUTER RUNS\");\n  const [urlSegments, setUrlSegments] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getUrlSegements)(ssrPath));\n\n  // const urlHashSegment =\n  //   typeof window !== \"undefined\" ? window.location.hash : \"\";\n  // const urlSearchSegment =\n  //   typeof window !== \"undefined\" ? window.location.search : \"\";\n  const [params, setParams] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const [queryParams, setQueryParams] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n\n  // const setParams = (params) => {\n  //   setRouteParams(params);\n  // };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const onPopState = () => {\n      setUrlSegments((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getUrlSegements)());\n    };\n    window.addEventListener(\"popstate\", onPopState);\n    return () => window.removeEventListener(\"popstate\", onPopState);\n    // const onChangeOfHash = () => {\n    //   setPath(extractPathFromString(window.location.hash || \"/\"));\n    // };\n    // window.addEventListener(\"hashchange\", onChangeOfHash);\n    // return () => window.removeEventListener(\"hashchange\", onChangeOfHash);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(KotiiRouterContenxt.Provider, {\n    value: {\n      // path: urlSegments.path,\n      navigate: _utils_index_js__WEBPACK_IMPORTED_MODULE_1__.navigate,\n      navigateByReplace: _utils_index_js__WEBPACK_IMPORTED_MODULE_1__.navigateByReplace,\n      setParams,\n      params,\n      setQueryParams,\n      queryParams,\n      basePath: \"\",\n      urlSegments,\n      ssrPath\n    }\n  }, children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n//# sourceURL=webpack://kotii-router/./src/components/Router/Router.jsx?\n}");

/***/ }),

/***/ "./src/components/Router/index.js":
/*!****************************************!*\
  !*** ./src/components/Router/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Router_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Router_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Router/index.js?\n}");

/***/ }),

/***/ "./src/components/Router/useParams.js":
/*!********************************************!*\
  !*** ./src/components/Router/useParams.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useParams: () => (/* binding */ useParams)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\nconst useParams = () => {\n  const params = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return params;\n};\n\n//# sourceURL=webpack://kotii-router/./src/components/Router/useParams.js?\n}");

/***/ }),

/***/ "./src/components/Routes/Routes.jsx":
/*!******************************************!*\
  !*** ./src/components/Routes/Routes.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Redirect_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redirect/index.jsx */ \"./src/components/Redirect/index.jsx\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/index.js */ \"./src/utils/index.js\");\n/* harmony import */ var _Router_Router_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n/* harmony import */ var kotii_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! kotii-auth */ \"../../node_modules/.pnpm/kotii-auth@file+packages+kotii-auth+kotii-auth-0.0.0.tgz_react-dom@18.3.1_react@18.3.1__react@18.3.1/node_modules/kotii-auth/dist/index.mjs\");\n/* eslint-disable react/prop-types */\n\n\n\n\n\nconst Routes = ({\n  children,\n  routes = null,\n  suspense = null\n}) => {\n  console.log(\"THE VALUE OF AUTH\", kotii_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth);\n  console.log(\"THE VALUE OF ROUTES OBJECT\", routes);\n  const {\n    setParams,\n    basePath,\n    navigateByReplace,\n    ssrPath,\n    setQueryParams,\n    urlSegments\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_3__.KotiiRouterContenxt);\n  const authInfo = (0,kotii_auth__WEBPACK_IMPORTED_MODULE_4__.useAuth)();\n  const user = authInfo?.user ? authInfo.user : null;\n  console.log(\"THE USER\", user);\n  console.log(\"THE ROUTES COMPONENT:url\", urlSegments);\n  let currentPath = urlSegments.path;\n  let elementToRender = null;\n  let ChildElementToRender = null;\n  let theParams = null;\n  let SuspenseComponent = suspense;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    console.log(\"URL SEGMENT HAS CHANGED\");\n    if (theParams) {\n      theParams?.route ? setQueryParams(theParams) : setParams(theParams);\n    }\n  }, []);\n  let appRoutes = children || routes;\n  for (let childIndex = 0; childIndex < appRoutes.length; childIndex++) {\n    if (elementToRender) break;\n    let child = appRoutes[childIndex];\n    const {\n      path\n    } = child?.props || child;\n    const fullUrl = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.cleanRouteUrl)(`${basePath}/${path}`);\n    console.log(\"THE FULL URL INDEX\", fullUrl, currentPath.indexOf(\"?\"), currentPath);\n    // const match =\n    //   urlSegments?.queryString && urlSegments.queryString.trim()\n    //     ? matchRouteQuery(fullUrl, currentPath)\n    //     : matchRoutePattern(fullUrl, currentPath);\n    const matchedRoute = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.matchRoute)(fullUrl, currentPath);\n    if (matchedRoute) {\n      console.log(\"REACT CHILD ELEMENT\", matchedRoute, child);\n      if (!user && child?.isPrivate) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Redirect_index_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        to: \"/login\"\n      });\n      const match = urlSegments?.queryString && urlSegments.queryString.trim() ? (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.matchRouteQuery)(fullUrl, urlSegments.queryString) : (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.matchParams)(fullUrl, currentPath);\n      theParams = match?.params ? match?.route ? match : match.params : null;\n      ChildElementToRender = child?.props ? child : child.component;\n      console.log(\"IMPRESSIVE\", child?.children, child);\n      elementToRender = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_3__.KotiiRouterContenxt.Provider, {\n        value: {\n          // path: currentPath,\n          navigate: _utils_index_js__WEBPACK_IMPORTED_MODULE_2__.navigate,\n          navigateByReplace,\n          setParams,\n          params: theParams?.route ? null : theParams,\n          setQueryParams,\n          queryParams: theParams?.route ? theParams : null,\n          basePath: fullUrl,\n          ssrPath,\n          urlSegments\n        }\n      }, SuspenseComponent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(SuspenseComponent, {\n        fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(\"div\", null, \"Component is Loading\")\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildElementToRender, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ChildElementToRender, null), child?.children && child.children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Routes, {\n        routes: child.children,\n        suspense: suspense\n      }));\n      break;\n\n      // theParams = match.params\n    }\n  }\n\n  // React.Children.forEach(children, (child) => {\n  //   console.log(\"REACT CHILD ELEMENT\",child.props.path)\n  //   if (elementToRender) return;\n\n  //   const { path } = child.props;\n  //   const match = matchRoutePattern(path, currentPath);\n\n  //   if (match) {\n  //     console.log(\"REACT CHILD ELEMENT\",match)\n  //     elementToRender = child;\n  //    theParams = match?.params ? match.params: null;\n\n  //     // theParams = match.params\n\n  //   }\n  // });\n\n  return elementToRender;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);\n\n//# sourceURL=webpack://kotii-router/./src/components/Routes/Routes.jsx?\n}");

/***/ }),

/***/ "./src/components/Routes/index.js":
/*!****************************************!*\
  !*** ./src/components/Routes/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Routes_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routes.jsx */ \"./src/components/Routes/Routes.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Routes_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Routes/index.js?\n}");

/***/ }),

/***/ "./src/components/index.js":
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Link: () => (/* reexport safe */ _Link_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Redirect: () => (/* reexport safe */ _Redirect_index_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   Route: () => (/* reexport safe */ _Route_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Router: () => (/* reexport safe */ _Router_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   Routes: () => (/* reexport safe */ _Routes_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   useParams: () => (/* reexport safe */ _Router_useParams_js__WEBPACK_IMPORTED_MODULE_3__.useParams)\n/* harmony export */ });\n/* harmony import */ var _Link_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link/index.js */ \"./src/components/Link/index.js\");\n/* harmony import */ var _Route_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Route/index.js */ \"./src/components/Route/index.js\");\n/* harmony import */ var _Router_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Router/index.js */ \"./src/components/Router/index.js\");\n/* harmony import */ var _Router_useParams_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Router/useParams.js */ \"./src/components/Router/useParams.js\");\n/* harmony import */ var _Routes_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routes/index.js */ \"./src/components/Routes/index.js\");\n/* harmony import */ var _Redirect_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Redirect/index.jsx */ \"./src/components/Redirect/index.jsx\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://kotii-router/./src/components/index.js?\n}");

/***/ }),

/***/ "./src/hooks/index.js":
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLocation: () => (/* reexport safe */ _useLocation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   useMatch: () => (/* reexport safe */ _useMatch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   useNavigate: () => (/* reexport safe */ _useNavigate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   useParams: () => (/* reexport safe */ _useParams_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   useRedirect: () => (/* reexport safe */ _useRedirect_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   useRoute: () => (/* reexport safe */ _useRoute_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _useLocation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useLocation.js */ \"./src/hooks/useLocation.js\");\n/* harmony import */ var _useMatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMatch.js */ \"./src/hooks/useMatch.js\");\n/* harmony import */ var _useNavigate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useNavigate.js */ \"./src/hooks/useNavigate.js\");\n/* harmony import */ var _useParams_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useParams.js */ \"./src/hooks/useParams.js\");\n/* harmony import */ var _useRedirect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useRedirect.js */ \"./src/hooks/useRedirect.js\");\n/* harmony import */ var _useRoute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useRoute.js */ \"./src/hooks/useRoute.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://kotii-router/./src/hooks/index.js?\n}");

/***/ }),

/***/ "./src/hooks/useLocation.js":
/*!**********************************!*\
  !*** ./src/hooks/useLocation.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    path,\n    hash,\n    search\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return {\n    pathname: path,\n    search,\n    hash\n  };\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useLocation.js?\n}");

/***/ }),

/***/ "./src/hooks/useMatch.js":
/*!*******************************!*\
  !*** ./src/hooks/useMatch.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.js */ \"./src/utils/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  console.log(\"THE MATCH ROUT\");\n  const {\n    path: currentPath\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  // const match = matchRoutePattern;\n\n  return matchRoute => {\n    let match = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.matchParams)(matchRoute, currentPath);\n    return match;\n  };\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useMatch.js?\n}");

/***/ }),

/***/ "./src/hooks/useNavigate.js":
/*!**********************************!*\
  !*** ./src/hooks/useNavigate.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    navigate\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return navigate;\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useNavigate.js?\n}");

/***/ }),

/***/ "./src/hooks/useParams.js":
/*!********************************!*\
  !*** ./src/hooks/useParams.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    params\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return params;\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useParams.js?\n}");

/***/ }),

/***/ "./src/hooks/useRedirect.js":
/*!**********************************!*\
  !*** ./src/hooks/useRedirect.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    navigateByReplace\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return navigateByReplace;\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useRedirect.js?\n}");

/***/ }),

/***/ "./src/hooks/useRoute.js":
/*!*******************************!*\
  !*** ./src/hooks/useRoute.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    queryParams\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return {\n    route: queryParams?.route || null,\n    query: queryParams?.params || null\n  };\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useRoute.js?\n}");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Link: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Link),\n/* harmony export */   Redirect: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Redirect),\n/* harmony export */   Route: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Route),\n/* harmony export */   Router: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Router),\n/* harmony export */   Routes: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Routes),\n/* harmony export */   useLocation: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useLocation),\n/* harmony export */   useMatch: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useMatch),\n/* harmony export */   useNavigate: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useNavigate),\n/* harmony export */   useParams: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useParams),\n/* harmony export */   useRedirect: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useRedirect),\n/* harmony export */   useRoute: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useRoute)\n/* harmony export */ });\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\n/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/index.js */ \"./src/hooks/index.js\");\n\n\n\n\n//# sourceURL=webpack://kotii-router/./src/index.js?\n}");

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanRouteUrl: () => (/* binding */ cleanRouteUrl),\n/* harmony export */   extractPathFromString: () => (/* binding */ extractPathFromString),\n/* harmony export */   getUrlSegements: () => (/* binding */ getUrlSegements),\n/* harmony export */   matchParams: () => (/* binding */ matchParams),\n/* harmony export */   matchRoute: () => (/* binding */ matchRoute),\n/* harmony export */   matchRouteQuery: () => (/* binding */ matchRouteQuery),\n/* harmony export */   navigate: () => (/* binding */ navigate),\n/* harmony export */   navigateByReplace: () => (/* binding */ navigateByReplace)\n/* harmony export */ });\nconst extractPathFromString = pathString => {\n  if (pathString.indexOf(\"#\") === 0) {\n    return pathString.slice(1);\n  }\n  return pathString;\n};\nconst cleanRouteUrl = pathString => {\n  return pathString.replace(/\\/+/g, \"/\").replace(/\\/$/, \"\") || \"/\";\n};\nconst navigate = (to, routeState = {}) => {\n  //   window.location.hash = to;\n  console.log(\"GOINT TO\", to);\n  console.log(\"GOING TO STATE\", routeState);\n  window.history.pushState(routeState, \"\", to);\n  const navEvent = new PopStateEvent(\"popstate\");\n  window.dispatchEvent(navEvent);\n};\nconst navigateByReplace = (to, routeState = {}) => {\n  console.log(\"Replace URL\", to);\n  window.history.replaceState(routeState, \"\", to);\n  const navEvent = new PopStateEvent(\"popstate\");\n  window.dispatchEvent(navEvent);\n};\nconst matchParams = (routeComponentPath, currentPath) => {\n  // if (routeComponentPath === currentPath) return true;\n\n  const routeSegments = routeComponentPath.split(\"/\").filter(Boolean);\n  const currentSegments = currentPath.split(\"/\").filter(Boolean);\n  let params = null;\n  for (let i = 0; i < routeSegments.length; i++) {\n    const routeSegment = routeSegments[i];\n    const currentSegment = currentSegments[i];\n    if (routeSegment.startsWith(\":\")) {\n      if (!params) params = {};\n      const paramName = routeSegment.slice(1);\n      params[paramName] = currentSegment;\n    } else if (routeSegment !== currentSegment) {\n      return null;\n    }\n  }\n  return {\n    params\n  };\n};\nconst matchRouteQuery = (route, queryStringSet) => {\n  // if (routeComponentPath === currentPath) return true;\n\n  console.log(\"RUNNING MATCH ROUTE QUERY\", route, queryStringSet);\n  const queryString = queryStringSet.slice(1, queryStringSet.length);\n  console.log(\"THE QUERY STRING\", queryString);\n  let queryParams = {};\n  if (queryString) {\n    let params = new URLSearchParams(queryString);\n    for (const [key, value] of params.entries()) {\n      queryParams[key] = value;\n    }\n  } else {\n    return null;\n  }\n  console.log(\"MATCH QUERY ROUTE URL\", queryParams, route);\n  return {\n    route,\n    params: queryParams\n  };\n};\nconst getUrlSegements = (url = \"\") => {\n  if (typeof window != \"undefined\") {\n    return {\n      path: window.location.pathname || \"\",\n      queryString: window.location.search || \"\",\n      hash: window.location.hash || \"\",\n      state: window.history.state || {}\n    };\n  } else {\n    return {\n      path: url,\n      queryString: \"\",\n      hash: \"\",\n      state: \"\"\n    };\n  }\n};\nconst matchRoute = (routeComponentPath, currentPath) => {\n  // if (routeComponentPath === currentPath) return true;\n\n  console.log(\"MATCHING ROUTE\", routeComponentPath, currentPath);\n  const routeSegments = routeComponentPath.split(\"/\").filter(Boolean);\n  const currentSegments = currentPath.split(\"/\").filter(Boolean);\n  let colonIndex = -1;\n  console.log(\"ROUTES SEGMENTS\", routeSegments, currentSegments);\n  if (routeSegments.length === currentSegments.length) {\n    console.log(\"routes segments equals\", routeSegments === currentSegments);\n    if (routeComponentPath === currentPath) return true;\n    colonIndex = routeComponentPath.indexOf(\":\");\n    console.log(\"THE COLON INDEX\", colonIndex);\n    if (!colonIndex) return false;\n    let sliceFromFirstParam = routeComponentPath.slice(0, colonIndex);\n    console.log(\"Sliced first Param\", sliceFromFirstParam, currentPath.indexOf(sliceFromFirstParam) >= 0);\n    if (currentPath.indexOf(sliceFromFirstParam) >= 0) return true;\n    return false;\n\n    // for (let i = 0; i < routeSegments.length; i++) {\n    //   const routeSegment = routeSegments[i];\n    //   const currentSegment = currentSegments[i];\n\n    //   if (!routeSegment.startsWith(\":\") && routeSegment !== currentSegment)\n    //     return false;\n    // }\n  }\n  return false;\n};\n\n//# sourceURL=webpack://kotii-router/./src/utils/index.js?\n}");

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
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => (Object.getPrototypeOf(obj)) : (obj) => (obj.__proto__);
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; (typeof current == 'object' || typeof current == 'function') && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach((key) => (def[key] = () => (value[key])));
/******/ 			}
/******/ 			def['default'] = () => (value);
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
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