/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import * as __WEBPACK_EXTERNAL_MODULE_kotii_auth_2e667cda__ from "kotii-auth";
import * as __WEBPACK_EXTERNAL_MODULE_kotii_head_657cbe76__ from "kotii-head";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
/******/ var __webpack_modules__ = ({

/***/ "./src/components/Link/Link.jsx"
/*!**************************************!*\
  !*** ./src/components/Link/Link.jsx ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ \"./src/utils/index.js\");\nfunction _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }\n/* eslint-disable no-unused-vars */\n/* eslint-disable react/prop-types */\n;\n\nconst Link = ({\n  to,\n  routeState = {},\n  isAbsolute = false,\n  children,\n  ...props\n}) => {\n  const handleOnclick = e => {\n    e.preventDefault();\n    (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.navigate)(to, routeState);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"a\", _extends({\n    href: to,\n    onClick: handleOnclick\n  }, props), children);\n  //   return (\n  //     <a href={!isAbsolute ? `#${to}` : to} onClick={handleOnclick} {...props}>\n  //       {children}\n  //     </a>\n  //   );\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);\n\n//# sourceURL=webpack://kotii-router/./src/components/Link/Link.jsx?\n}");

/***/ },

/***/ "./src/components/Redirect/Redirect.jsx"
/*!**********************************************!*\
  !*** ./src/components/Redirect/Redirect.jsx ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n/* eslint-disable react/prop-types */\n\n\nconst Redirect = ({\n  to\n}) => {\n  const {\n    navigateByReplace\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    navigateByReplace(to);\n  }, [to, navigateByReplace]);\n  return null;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Redirect);\n\n//# sourceURL=webpack://kotii-router/./src/components/Redirect/Redirect.jsx?\n}");

/***/ },

/***/ "./src/components/Redirect/index.jsx"
/*!*******************************************!*\
  !*** ./src/components/Redirect/index.jsx ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Redirect_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Redirect.jsx */ \"./src/components/Redirect/Redirect.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Redirect_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Redirect/index.jsx?\n}");

/***/ },

/***/ "./src/components/Route/Route.jsx"
/*!****************************************!*\
  !*** ./src/components/Route/Route.jsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* eslint-disable react/prop-types */\n\nconst Route = ({\n  component: Component,\n  children\n}) => {\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(Component, null), children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Route);\n\n//# sourceURL=webpack://kotii-router/./src/components/Route/Route.jsx?\n}");

/***/ },

/***/ "./src/components/Router/Router.jsx"
/*!******************************************!*\
  !*** ./src/components/Router/Router.jsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   KotiiRouterContenxt: () => (/* binding */ KotiiRouterContenxt),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/index.js */ \"./src/utils/index.js\");\n\n\nconst KotiiRouterContenxt = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();\n\n// eslint-disable-next-line react/prop-types\nconst Router = ({\n  children,\n  ssrPath = \"/\"\n}) => {\n  const [urlSegments, setUrlSegments] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getUrlSegements)(ssrPath));\n  const [params, setParams] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  const [queryParams, setQueryParams] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({});\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    const onPopState = () => {\n      setUrlSegments((0,_utils_index_js__WEBPACK_IMPORTED_MODULE_1__.getUrlSegements)());\n    };\n    window.addEventListener(\"popstate\", onPopState);\n    return () => window.removeEventListener(\"popstate\", onPopState);\n  }, []);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(KotiiRouterContenxt.Provider, {\n    value: {\n      // path: urlSegments.path,\n      navigate: _utils_index_js__WEBPACK_IMPORTED_MODULE_1__.navigate,\n      navigateByReplace: _utils_index_js__WEBPACK_IMPORTED_MODULE_1__.navigateByReplace,\n      setParams,\n      params,\n      setQueryParams,\n      queryParams,\n      basePath: \"\",\n      urlSegments,\n      ssrPath\n    }\n  }, children);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Router);\n\n//# sourceURL=webpack://kotii-router/./src/components/Router/Router.jsx?\n}");

/***/ },

/***/ "./src/components/Routes/Routes.jsx"
/*!******************************************!*\
  !*** ./src/components/Routes/Routes.jsx ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _Redirect_index_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Redirect/index.jsx */ \"./src/components/Redirect/index.jsx\");\n/* harmony import */ var _matchRoutes_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./matchRoutes.jsx */ \"./src/components/Routes/matchRoutes.jsx\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/index.js */ \"./src/utils/index.js\");\n/* harmony import */ var _Router_Router_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n/* harmony import */ var kotii_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! kotii-auth */ \"kotii-auth\");\n/* harmony import */ var kotii_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! kotii-head */ \"kotii-head\");\n/* eslint-disable no-unused-vars */\n/* eslint-disable react/prop-types */\n\n\n\n\n\n\n\nconst Routes = ({\n  children,\n  routes = null,\n  suspense = null\n}) => {\n  const {\n    setParams,\n    basePath,\n    navigateByReplace,\n    ssrPath,\n    setQueryParams,\n    urlSegments\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_4__.KotiiRouterContenxt);\n  // const [matched, setMatched] = useState(null);\n\n  const user = (0,kotii_auth__WEBPACK_IMPORTED_MODULE_5__.useAuth)()?.user ?? null;\n  const collectedHead = (0,kotii_head__WEBPACK_IMPORTED_MODULE_6__.useHead)();\n  console.log(\"THE COLLECTED HEAD\", collectedHead);\n  let currentPath = urlSegments.path;\n  // let elementToRender = null;\n  // let ChildElementToRender = null;\n  let theParams = null;\n  let SuspenseComponent = suspense;\n  // let appRoutes = children || routes;\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (theParams) {\n      theParams?.route ? setQueryParams(theParams) : setParams(theParams);\n    }\n  }, []);\n\n  // useLayoutEffect(() => {\n  //   const randomString = generateRandomString(30);\n  //   console.log(\"THE APP HAS REPAINTED\", randomString);\n  //   // console.log(\"THE SUKU LIBRARY\", suku);\n  //   // const head = suku.get_document_head();\n  //   // console.log(\"DOCUMENT HEAD\", head);\n  //   // suku.get_document_head().title = randomString;\n  //   console.log(\"THE COLLECTED HEAD\", collectedHead);\n\n  //   document.title = \"THIS IS MY NEW TITLE\";\n  // }, [currentPath]);\n\n  const matched = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(() => {\n    return (0,_matchRoutes_jsx__WEBPACK_IMPORTED_MODULE_2__.matchRoutes)({\n      routes: children || routes,\n      currentPath,\n      basePath,\n      urlSegments,\n      user\n    });\n  }, [children, routes, currentPath, basePath, urlSegments, user]);\n  // useEffect(() => {\n  //   if (!matched) return;\n  //   console.log(\"USE LAYOUT EFFECT RUN\", matched, collectedHead);\n  //   const routeHeads = collectedHead?.renderToStatic(\n  //     collectedHead.getEntries()\n  //   );\n  //   console.log(\"THE RESOLVED HEAD\", routeHeads);\n  //   // const resolved = useCompileKotiiHead(routeHeads);\n  //   applyHead(routeHeads);\n  // }, [matched, collectedHead]);\n\n  // for (let childIndex = 0; childIndex < appRoutes.length; childIndex++) {\n  //   if (elementToRender) break;\n  //   let child = appRoutes[childIndex];\n  //   const { path } = child?.props || child;\n  //   const fullUrl = cleanRouteUrl(`${basePath}/${path}`);\n\n  //   const matchedRoute = matchRoute(fullUrl, currentPath);\n\n  //   if (matchedRoute) {\n  //     if (!user && child?.isPrivate) return <Redirect to={\"/login\"} />;\n\n  //     const match =\n  //       urlSegments?.queryString && urlSegments.queryString.trim()\n  //         ? matchRouteQuery(fullUrl, urlSegments.queryString)\n  //         : matchParams(fullUrl, currentPath);\n  //     theParams = match?.params ? (match?.route ? match : match.params) : null;\n  //     ChildElementToRender = child?.props ? child : child.component;\n\n  //     elementToRender = (\n  //       <KotiiRouterContenxt.Provider\n  //         value={{\n  //           // path: currentPath,\n  //           navigate,\n  //           navigateByReplace,\n  //           setParams,\n  //           params: theParams?.route ? null : theParams,\n  //           setQueryParams,\n  //           queryParams: theParams?.route ? theParams : null,\n  //           basePath: fullUrl,\n  //           ssrPath,\n  //           urlSegments,\n  //         }}\n  //       >\n  //         {SuspenseComponent ? (\n  //           <SuspenseComponent fallback={<div>Component is Loading</div>}>\n  //             <ChildElementToRender />\n  //           </SuspenseComponent>\n  //         ) : (\n  //           <ChildElementToRender />\n  //         )}\n\n  //         {child?.children && child.children && (\n  //           <Routes routes={child.children} suspense={suspense} />\n  //         )}\n  //       </KotiiRouterContenxt.Provider>\n  //     );\n\n  //     break;\n  //   }\n  // }\n\n  if (!matched) return null;\n  if (matched.redirect) return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_Redirect_index_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    to: matched.redirect\n  });\n  const RouteComponent = matched.route?.props ? matched.route : matched.route.component;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_4__.KotiiRouterContenxt.Provider, {\n    value: {\n      navigate: _utils_index_js__WEBPACK_IMPORTED_MODULE_3__.navigate,\n      navigateByReplace,\n      setParams,\n      params: matched.params?.route ? null : matched.params,\n      setQueryParams,\n      queryParams: matched.params?.route ? matched.params : null,\n      basePath: matched.fullUrl,\n      ssrPath,\n      urlSegments\n    }\n  }, SuspenseComponent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(SuspenseComponent, {\n    fallback: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(\"div\", null, \"Component is Loading\")\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(RouteComponent, null)) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(RouteComponent, null), matched.route?.children && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(Routes, {\n    routes: matched.route.children,\n    suspense: suspense\n  }));\n\n  // return elementToRender;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Routes);\n\n//# sourceURL=webpack://kotii-router/./src/components/Routes/Routes.jsx?\n}");

/***/ },

/***/ "./src/components/Routes/matchRoutes.jsx"
/*!***********************************************!*\
  !*** ./src/components/Routes/matchRoutes.jsx ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   matchRoutes: () => (/* binding */ matchRoutes)\n/* harmony export */ });\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../utils/index.js */ \"./src/utils/index.js\");\n\nfunction matchRoutes({\n  routes,\n  currentPath,\n  basePath,\n  urlSegments,\n  user\n}) {\n  for (const route of routes) {\n    const {\n      path\n    } = route?.props || route;\n    const fullUrl = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.cleanRouteUrl)(`${basePath}/${path}`);\n    if (!(0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.matchRoute)(fullUrl, currentPath)) continue;\n    if (!user && route?.isPrivate) {\n      return {\n        redirect: \"/login\"\n      };\n    }\n    const match = urlSegments?.queryString?.trim() ? (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.matchRouteQuery)(fullUrl, urlSegments.queryString) : (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_0__.matchParams)(fullUrl, currentPath);\n    return {\n      route,\n      fullUrl,\n      params: match?.params ? match?.route ? match : match.params : null\n    };\n  }\n  return null;\n}\n\n//# sourceURL=webpack://kotii-router/./src/components/Routes/matchRoutes.jsx?\n}");

/***/ },

/***/ "kotii-auth"
/*!*****************************!*\
  !*** external "kotii-auth" ***!
  \*****************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_kotii_auth_2e667cda__;

/***/ },

/***/ "kotii-head"
/*!*****************************!*\
  !*** external "kotii-head" ***!
  \*****************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_kotii_head_657cbe76__;

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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Link: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Link),\n/* harmony export */   Redirect: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Redirect),\n/* harmony export */   Route: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Route),\n/* harmony export */   Router: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Router),\n/* harmony export */   Routes: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.Routes),\n/* harmony export */   useLocation: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useLocation),\n/* harmony export */   useMatch: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useMatch),\n/* harmony export */   useNavigate: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useNavigate),\n/* harmony export */   useParams: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useParams),\n/* harmony export */   useRedirect: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useRedirect),\n/* harmony export */   useRoute: () => (/* reexport safe */ _src_index_js__WEBPACK_IMPORTED_MODULE_0__.useRoute)\n/* harmony export */ });\n/* harmony import */ var _src_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/index.js */ \"./src/index.js\");\n\n\n\n//# sourceURL=webpack://kotii-router/./index.js?\n}");

/***/ },

/***/ "./src/components/Link/index.js"
/*!**************************************!*\
  !*** ./src/components/Link/index.js ***!
  \**************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Link_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link.jsx */ \"./src/components/Link/Link.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Link_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Link/index.js?\n}");

/***/ },

/***/ "./src/components/Route/index.js"
/*!***************************************!*\
  !*** ./src/components/Route/index.js ***!
  \***************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Route_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Route.jsx */ \"./src/components/Route/Route.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Route_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Route/index.js?\n}");

/***/ },

/***/ "./src/components/Router/index.js"
/*!****************************************!*\
  !*** ./src/components/Router/index.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Router_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Router_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Router/index.js?\n}");

/***/ },

/***/ "./src/components/Router/useParams.js"
/*!********************************************!*\
  !*** ./src/components/Router/useParams.js ***!
  \********************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useParams: () => (/* binding */ useParams)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\nconst useParams = () => {\n  const params = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return params;\n};\n\n//# sourceURL=webpack://kotii-router/./src/components/Router/useParams.js?\n}");

/***/ },

/***/ "./src/components/Routes/index.js"
/*!****************************************!*\
  !*** ./src/components/Routes/index.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Routes_jsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Routes.jsx */ \"./src/components/Routes/Routes.jsx\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_Routes_jsx__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-router/./src/components/Routes/index.js?\n}");

/***/ },

/***/ "./src/components/index.js"
/*!*********************************!*\
  !*** ./src/components/index.js ***!
  \*********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Link: () => (/* reexport safe */ _Link_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Redirect: () => (/* reexport safe */ _Redirect_index_jsx__WEBPACK_IMPORTED_MODULE_5__[\"default\"]),\n/* harmony export */   Route: () => (/* reexport safe */ _Route_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   Router: () => (/* reexport safe */ _Router_index_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   Routes: () => (/* reexport safe */ _Routes_index_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   useParams: () => (/* reexport safe */ _Router_useParams_js__WEBPACK_IMPORTED_MODULE_3__.useParams)\n/* harmony export */ });\n/* harmony import */ var _Link_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Link/index.js */ \"./src/components/Link/index.js\");\n/* harmony import */ var _Route_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Route/index.js */ \"./src/components/Route/index.js\");\n/* harmony import */ var _Router_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Router/index.js */ \"./src/components/Router/index.js\");\n/* harmony import */ var _Router_useParams_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Router/useParams.js */ \"./src/components/Router/useParams.js\");\n/* harmony import */ var _Routes_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Routes/index.js */ \"./src/components/Routes/index.js\");\n/* harmony import */ var _Redirect_index_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Redirect/index.jsx */ \"./src/components/Redirect/index.jsx\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://kotii-router/./src/components/index.js?\n}");

/***/ },

/***/ "./src/hooks/index.js"
/*!****************************!*\
  !*** ./src/hooks/index.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useLocation: () => (/* reexport safe */ _useLocation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   useMatch: () => (/* reexport safe */ _useMatch_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]),\n/* harmony export */   useNavigate: () => (/* reexport safe */ _useNavigate_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]),\n/* harmony export */   useParams: () => (/* reexport safe */ _useParams_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]),\n/* harmony export */   useRedirect: () => (/* reexport safe */ _useRedirect_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]),\n/* harmony export */   useRoute: () => (/* reexport safe */ _useRoute_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _useLocation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useLocation.js */ \"./src/hooks/useLocation.js\");\n/* harmony import */ var _useMatch_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useMatch.js */ \"./src/hooks/useMatch.js\");\n/* harmony import */ var _useNavigate_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useNavigate.js */ \"./src/hooks/useNavigate.js\");\n/* harmony import */ var _useParams_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useParams.js */ \"./src/hooks/useParams.js\");\n/* harmony import */ var _useRedirect_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useRedirect.js */ \"./src/hooks/useRedirect.js\");\n/* harmony import */ var _useRoute_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useRoute.js */ \"./src/hooks/useRoute.js\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://kotii-router/./src/hooks/index.js?\n}");

/***/ },

/***/ "./src/hooks/useLocation.js"
/*!**********************************!*\
  !*** ./src/hooks/useLocation.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    path,\n    hash,\n    search\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return {\n    pathname: path,\n    search,\n    hash\n  };\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useLocation.js?\n}");

/***/ },

/***/ "./src/hooks/useMatch.js"
/*!*******************************!*\
  !*** ./src/hooks/useMatch.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n/* harmony import */ var _utils_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils/index.js */ \"./src/utils/index.js\");\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    path: currentPath\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  // const match = matchRoutePattern;\n\n  return matchRoute => {\n    let match = (0,_utils_index_js__WEBPACK_IMPORTED_MODULE_2__.matchParams)(matchRoute, currentPath);\n    return match;\n  };\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useMatch.js?\n}");

/***/ },

/***/ "./src/hooks/useNavigate.js"
/*!**********************************!*\
  !*** ./src/hooks/useNavigate.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    navigate\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return navigate;\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useNavigate.js?\n}");

/***/ },

/***/ "./src/hooks/useParams.js"
/*!********************************!*\
  !*** ./src/hooks/useParams.js ***!
  \********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    params\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return params;\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useParams.js?\n}");

/***/ },

/***/ "./src/hooks/useRedirect.js"
/*!**********************************!*\
  !*** ./src/hooks/useRedirect.js ***!
  \**********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    navigateByReplace\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return navigateByReplace;\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useRedirect.js?\n}");

/***/ },

/***/ "./src/hooks/useRoute.js"
/*!*******************************!*\
  !*** ./src/hooks/useRoute.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var _components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Router/Router.jsx */ \"./src/components/Router/Router.jsx\");\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n  const {\n    queryParams\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_components_Router_Router_jsx__WEBPACK_IMPORTED_MODULE_1__.KotiiRouterContenxt);\n  return {\n    route: queryParams?.route || null,\n    query: queryParams?.params || null\n  };\n});\n\n//# sourceURL=webpack://kotii-router/./src/hooks/useRoute.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Link: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Link),\n/* harmony export */   Redirect: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Redirect),\n/* harmony export */   Route: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Route),\n/* harmony export */   Router: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Router),\n/* harmony export */   Routes: () => (/* reexport safe */ _components_index_js__WEBPACK_IMPORTED_MODULE_0__.Routes),\n/* harmony export */   useLocation: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useLocation),\n/* harmony export */   useMatch: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useMatch),\n/* harmony export */   useNavigate: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useNavigate),\n/* harmony export */   useParams: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useParams),\n/* harmony export */   useRedirect: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useRedirect),\n/* harmony export */   useRoute: () => (/* reexport safe */ _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__.useRoute)\n/* harmony export */ });\n/* harmony import */ var _components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/index.js */ \"./src/components/index.js\");\n/* harmony import */ var _hooks_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hooks/index.js */ \"./src/hooks/index.js\");\n\n// import { resolveHead } from \"./utils/index.js\";\n\n\n\n//# sourceURL=webpack://kotii-router/./src/index.js?\n}");

/***/ },

/***/ "./src/utils/index.js"
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   cleanRouteUrl: () => (/* binding */ cleanRouteUrl),\n/* harmony export */   extractPathFromString: () => (/* binding */ extractPathFromString),\n/* harmony export */   generateRandomString: () => (/* binding */ generateRandomString),\n/* harmony export */   getUrlSegements: () => (/* binding */ getUrlSegements),\n/* harmony export */   matchParams: () => (/* binding */ matchParams),\n/* harmony export */   matchRoute: () => (/* binding */ matchRoute),\n/* harmony export */   matchRouteQuery: () => (/* binding */ matchRouteQuery),\n/* harmony export */   navigate: () => (/* binding */ navigate),\n/* harmony export */   navigateByReplace: () => (/* binding */ navigateByReplace)\n/* harmony export */ });\n// import suku from \"suku\";\n\nconst extractPathFromString = pathString => {\n  if (pathString.indexOf(\"#\") === 0) {\n    return pathString.slice(1);\n  }\n  return pathString;\n};\nconst cleanRouteUrl = pathString => {\n  return pathString.replace(/\\/+/g, \"/\").replace(/\\/$/, \"\") || \"/\";\n};\nconst navigate = (to, routeState = {}) => {\n  window.history.pushState(routeState, \"\", to);\n  const navEvent = new PopStateEvent(\"popstate\");\n  window.dispatchEvent(navEvent);\n};\nconst navigateByReplace = (to, routeState = {}) => {\n  window.history.replaceState(routeState, \"\", to);\n  const navEvent = new PopStateEvent(\"popstate\");\n  window.dispatchEvent(navEvent);\n};\nconst matchParams = (routeComponentPath, currentPath) => {\n  // if (routeComponentPath === currentPath) return true;\n\n  const routeSegments = routeComponentPath.split(\"/\").filter(Boolean);\n  const currentSegments = currentPath.split(\"/\").filter(Boolean);\n  let params = null;\n  for (let i = 0; i < routeSegments.length; i++) {\n    const routeSegment = routeSegments[i];\n    const currentSegment = currentSegments[i];\n    if (routeSegment.startsWith(\":\")) {\n      if (!params) params = {};\n      const paramName = routeSegment.slice(1);\n      params[paramName] = currentSegment;\n    } else if (routeSegment !== currentSegment) {\n      return null;\n    }\n  }\n  return {\n    params\n  };\n};\nconst matchRouteQuery = (route, queryStringSet) => {\n  // if (routeComponentPath === currentPath) return true;\n\n  const queryString = queryStringSet.slice(1, queryStringSet.length);\n  let queryParams = {};\n  if (queryString) {\n    let params = new URLSearchParams(queryString);\n    for (const [key, value] of params.entries()) {\n      queryParams[key] = value;\n    }\n  } else {\n    return null;\n  }\n  return {\n    route,\n    params: queryParams\n  };\n};\nconst getUrlSegements = (url = \"\") => {\n  if (typeof window != \"undefined\") {\n    return {\n      path: window.location.pathname || \"\",\n      queryString: window.location.search || \"\",\n      hash: window.location.hash || \"\",\n      state: window.history.state || {}\n    };\n  } else {\n    return {\n      path: url,\n      queryString: \"\",\n      hash: \"\",\n      state: \"\"\n    };\n  }\n};\nconst matchRoute = (routeComponentPath, currentPath) => {\n  // if (routeComponentPath === currentPath) return true;\n\n  const routeSegments = routeComponentPath.split(\"/\").filter(Boolean);\n  const currentSegments = currentPath.split(\"/\").filter(Boolean);\n  let colonIndex = -1;\n  if (routeSegments.length === currentSegments.length) {\n    if (routeComponentPath === currentPath) return true;\n    colonIndex = routeComponentPath.indexOf(\":\");\n    if (!colonIndex) return false;\n    let sliceFromFirstParam = routeComponentPath.slice(0, colonIndex);\n    if (currentPath.indexOf(sliceFromFirstParam) >= 0) return true;\n    return false;\n  }\n  return false;\n};\n// export const applyHead = (head) => {\n//   console.log(\"Head object for Suku to update\", head);\n//   // let document = suku.get_document_head();\n//   console.log(\"THE DOCUMENT HEAD\", document, \"SUKU\", suku);\n//   if (head?.title) document.title = head.title;\n//   console.log(\"CURRENT HEAD VALUE\", document.title);\n// };\n// export const resolveHead = (headers) => {\n//   console.log(\"THE HEADER IN RESOLVE\", headers);\n//   const currentHead = headers[0] ?? {\n//     title: null,\n//     metas: [],\n//     links: {},\n//   };\n\n//   return currentHead;\n// };\nconst generateRandomString = length => {\n  const characters = \"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\";\n  let result = \"\";\n  for (let i = 0; i < length; i++) {\n    const randomIndex = Math.floor(Math.random() * characters.length);\n    result += characters[randomIndex];\n  }\n  return result;\n};\n\n//# sourceURL=webpack://kotii-router/./src/utils/index.js?\n}");

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
/******/ const __webpack_exports__Link = __webpack_exports__.Link;
/******/ const __webpack_exports__Redirect = __webpack_exports__.Redirect;
/******/ const __webpack_exports__Route = __webpack_exports__.Route;
/******/ const __webpack_exports__Router = __webpack_exports__.Router;
/******/ const __webpack_exports__Routes = __webpack_exports__.Routes;
/******/ const __webpack_exports__useLocation = __webpack_exports__.useLocation;
/******/ const __webpack_exports__useMatch = __webpack_exports__.useMatch;
/******/ const __webpack_exports__useNavigate = __webpack_exports__.useNavigate;
/******/ const __webpack_exports__useParams = __webpack_exports__.useParams;
/******/ const __webpack_exports__useRedirect = __webpack_exports__.useRedirect;
/******/ const __webpack_exports__useRoute = __webpack_exports__.useRoute;
/******/ export { __webpack_exports__Link as Link, __webpack_exports__Redirect as Redirect, __webpack_exports__Route as Route, __webpack_exports__Router as Router, __webpack_exports__Routes as Routes, __webpack_exports__useLocation as useLocation, __webpack_exports__useMatch as useMatch, __webpack_exports__useNavigate as useNavigate, __webpack_exports__useParams as useParams, __webpack_exports__useRedirect as useRedirect, __webpack_exports__useRoute as useRoute };
/******/ 
