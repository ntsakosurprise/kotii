/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
import * as __WEBPACK_EXTERNAL_MODULE_i18next__ from "i18next";
import * as __WEBPACK_EXTERNAL_MODULE_kotii_styled_838abc27__ from "kotii-styled";
import * as __WEBPACK_EXTERNAL_MODULE_kotii_utils_24956f7f__ from "kotii-utils";
import * as __WEBPACK_EXTERNAL_MODULE_react__ from "react";
import * as __WEBPACK_EXTERNAL_MODULE_react_i18next_31085753__ from "react-i18next";
/******/ var __webpack_modules__ = ({

/***/ "i18next"
/*!**************************!*\
  !*** external "i18next" ***!
  \**************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_i18next__;

/***/ },

/***/ "kotii-styled"
/*!*******************************!*\
  !*** external "kotii-styled" ***!
  \*******************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_kotii_styled_838abc27__;

/***/ },

/***/ "kotii-utils"
/*!******************************!*\
  !*** external "kotii-utils" ***!
  \******************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_kotii_utils_24956f7f__;

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "react" ***!
  \************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ },

/***/ "react-i18next"
/*!********************************!*\
  !*** external "react-i18next" ***!
  \********************************/
(module) {

module.exports = __WEBPACK_EXTERNAL_MODULE_react_i18next_31085753__;

/***/ },

/***/ "./src/components/LanguageSwitcher/index.js"
/*!**************************************************!*\
  !*** ./src/components/LanguageSwitcher/index.js ***!
  \**************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _switcher_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switcher.js */ \"./src/components/LanguageSwitcher/switcher.js\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_switcher_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-languages/./src/components/LanguageSwitcher/index.js?\n}");

/***/ },

/***/ "./src/components/LanguageSwitcher/switcher.js"
/*!*****************************************************!*\
  !*** ./src/components/LanguageSwitcher/switcher.js ***!
  \*****************************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var kotii_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kotii-utils */ \"kotii-utils\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var kotii_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! kotii-styled */ \"kotii-styled\");\n/* harmony import */ var _context_language_provider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../context/language-provider.js */ \"./src/context/language-provider.js\");\n// eslint-disable unused-imports/no-unused-imports */\n// import { Box, Button, Heading, Paragraph } from \"grommet\";\n\n\n// import { AiTwotoneCopyrightCircle as Circle } from \"react-icons/ai\";\n// import { BsFillMoonStarsFill as MoonIcon } from \"react-icons/bs\";\n// import { RiArrowDropDownLine as DropdownIcon } from \"react-icons\";\n\n\n\n// import { themes } from \"../../config/themes\";\n\n// const options = [\n//   { value: \"en\", label: \"English\" },\n//   { value: \"ts\", label: \"Tsonga\" },\n//   { value: \"ve\", label: \"Venda\" },\n// ];\n\n/**\n * Hook that alerts clicks outside of the passed ref\n */\n// const rotate = keyframes`\n//  from {\n//    transform: rotate(0deg);\n//  }\n\n//  to {\n//    transform: rotate(360deg);\n//  }\n// `;\n\nconst downOutAnimation = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_2__.keyframes)` \n0% {\n  transform: translateZ(-50px) transLateY(20px);\n  opacity: 0\n}\n40% {\n  opacity: 0.2\n}\n60%{ opacity: 0.5}\n80% {\n  transform: translateZ(-10px) transLateY(0px);\n  opacity: .8\n}\n100% {\n  transform: translateZ(0px) transLateY(0px);\n  opacity: 1\n}\n`;\nfunction useOutsideAlerter(ref, closeOnOutside) {\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    /**\n     * Alert if clicked on outside of element\n     */\n    function handleClickOutside(event) {\n      if (ref.current && !ref.current.contains(event.target)) {\n        // alert(\"You clicked outside of me!\");\n        closeOnOutside(false);\n      }\n    }\n    // Bind the event listener\n    document.addEventListener(\"mousedown\", handleClickOutside);\n    return () => {\n      // Unbind the event listener on clean up\n      document.removeEventListener(\"mousedown\", handleClickOutside);\n    };\n  }, [ref]);\n}\nconst ThemeSelector = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"button\")(() => {\n  return {\n    color: \"green\",\n    cursor: \"pointer\",\n    \"&:hover\": {\n      color: \"black\"\n    },\n    backgroundColor: \"rgb(205 186 159)\",\n    borderRadius: \"8px\",\n    display: \"flex\",\n    flexDirection: \"row\",\n    justifyContent: \"space-between\",\n    \"min-width\": \"80px\",\n    height: \"25px\",\n    alignItems: \"center\"\n  };\n});\nconst LanguageText = kotii_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].span`\n color: white,\n font-size: 20px\n`;\nconst DropWithAnim = kotii_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"].div`\n  animation-name: ${downOutAnimation};\n  animation-duration: 2s;\n  animation-iteration-count: 1;\n`;\nconst ThemeDropDown = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(DropWithAnim)(() => {\n  return {\n    position: \"relative\",\n    opacity: 1\n  };\n});\nconst List = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"ul\")(props => {\n  return {\n    margin: 0,\n    padding: \"15px\",\n    display: \"flex\",\n    flexDirection: \"column\",\n    justifyContent: \"center\",\n    alignItems: \"center\",\n    borderRadius: \"5px\",\n    backgroundColor: \"black\",\n    position: \"absolute\",\n    top: \"5px\",\n    width: props?.width ? props?.width : \"150px\"\n  };\n});\nconst ListItem = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"li\")(() => {\n  return {\n    margin: 0,\n    marginBottom: \"5px\",\n    padding: 0,\n    display: \"flex\",\n    flexDirection: \"row\",\n    justifyContent: \"space-between\",\n    alignItems: \"left\",\n    width: \"100%\"\n  };\n});\nconst SwitcherText = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\")(() => {\n  return {\n    color: \"green\",\n    cursor: \"pointer\"\n  };\n});\nconst SwitcherTypo = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"p\")({\n  flexGrow: 2,\n  display: \"flex\",\n  flexDirection: \"row\",\n  gap: 10,\n  cursor: \"pointer\"\n});\nconst Circle = (0,kotii_styled__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\"div\")(props => {\n  const {\n    width = 20\n  } = props;\n  return {\n    width: width,\n    height: width,\n    borderRadius: \"50%\",\n    backgroundColor: \"#ac5e5e;\",\n    display: \"flex\",\n    alignItems: \"center\",\n    justifyContent: \"center\"\n  };\n});\nconst LanguageSwitcher = () => {\n  const {\n    changeCurrentLanguage,\n    getLanguageNames,\n    languageName\n  } = (0,_context_language_provider_js__WEBPACK_IMPORTED_MODULE_3__.useLanguage)();\n  console.log(\"REACT.C\", react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].Children);\n  // const [selectedOption, setSelectedOption] = useState(language);\n  // const [selectedLanguageName, setSelectedLanguageName] = useState(null);\n  const [showLanguages, setShowLanguages] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n  const [options, setOptions] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n  const wrapperRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n  useOutsideAlerter(wrapperRef, setShowLanguages);\n  const switchLanguage = (value, lb) => {\n    console.log(\"the props;;\", value);\n    changeCurrentLanguage(value, lb);\n    // setSelectedOption(value);\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(() => {\n    setOptions([...getLanguageNames().map(lag => {\n      return {\n        value: lag.locale,\n        label: (0,kotii_utils__WEBPACK_IMPORTED_MODULE_0__.capitalizeFirstLetter)(lag.name)\n      };\n    })]);\n  }, []);\n  const showUpdatedLanguages = () => {\n    setShowLanguages(!showLanguages);\n  };\n  const activateTheme = (eve, label) => {\n    const setValue = eve.target.attributes.value.nodeValue;\n    // console.log(\"SWITCH ACTIVATE\", eve.target.attributes.value.nodeValue);\n    console.log(\"setItem\", setValue);\n    setShowLanguages(!showLanguages);\n    switchLanguage(setValue, label);\n    //setCheckedItem(setValue);\n  };\n  const getListItems = items => {\n    return items.map((it, ix) => {\n      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(ListItem, {\n        key: ix\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(SwitcherTypo, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(Circle, {\n        style: {\n          color: \"black\",\n          textAlign: \"center\",\n          fontSize: \"14px\"\n        }\n      }, it.value), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(SwitcherText, {\n        value: it.value,\n        onClick: eve => {\n          activateTheme(eve, it.label);\n        }\n      }, it.label)));\n    });\n  };\n  if (options.length === 0) return null;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(\"div\", {\n    style: {\n      position: \"relative\",\n      zIndex: 1\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(ThemeSelector, {\n    onClick: showUpdatedLanguages\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(LanguageText, null, languageName)), showLanguages ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(ThemeDropDown, {\n    ref: wrapperRef\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__[\"default\"].createElement(List, {\n    width: 150\n  }, getListItems(options))) : null);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LanguageSwitcher);\n\n//# sourceURL=webpack://kotii-languages/./src/components/LanguageSwitcher/switcher.js?\n}");

/***/ },

/***/ "./src/config/config.js"
/*!******************************!*\
  !*** ./src/config/config.js ***!
  \******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLanguages: () => (/* binding */ addLanguages),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   getDefaultLocale: () => (/* binding */ getDefaultLocale),\n/* harmony export */   initialize: () => (/* binding */ initialize),\n/* harmony export */   removeDefaultLanguage: () => (/* binding */ removeDefaultLanguage),\n/* harmony export */   setLanguages: () => (/* binding */ setLanguages)\n/* harmony export */ });\n/* harmony import */ var i18next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! i18next */ \"i18next\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n\n\nconst initialize = () => {\n  // i18n.use(initReactI18next).init({\n  //   fallbackLng: \"en\",\n  //   lng: \"ts\",\n  //   resources: {\n  //     en: {\n  //       translations: require(\"./locales/en/translations.json\"),\n  //     },\n  //     ts: {\n  //       translations: require(\"./locales/ts/translations.json\"),\n  //     },\n  //   },\n  //   ns: [\"translations\"],\n  //   defaultNS: \"translations\",\n  // });\n  // i18n.languages = [\"en\", \"ts\"];\n};\nconst addLanguages = langs => {\n  console.log(\"The langs to ADDLANGUAGES\", langs);\n  const locales = [];\n  langs.forEach(element => {\n    console.log(\"forEACHELEMENT\");\n    const {\n      locale,\n      trans\n    } = element;\n    console.log(\"THE LOCALE\", locale);\n    console.log(\"'trans\", trans);\n    console.log(\"JSONSTRINGIFIED;;;\", JSON.stringify(trans));\n    i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addResourceBundle(locale, \"translations\", trans, false, false);\n    locales.push(locale);\n  });\n  setLanguages(locales);\n};\nconst setLanguages = lngs => {\n  console.log(\"Set languages\", lngs);\n  i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadLanguages(lngs).then(loaded => {\n    console.log(\"All at once languages\", loaded);\n    console.log(\"i18n languages\", i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].languages);\n    i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].language = [...lngs];\n    console.log(\"i18n after update\", i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].languages);\n  }).catch(err => {\n    console.log(\"Loading new Languages has failed\", err);\n  });\n  // lngs.forEach((lng) => {\n  //   i18n.loadLanguages(lng, (err, t) => {\n  //     if (err) {\n  //       console.log(\"There was an error adding values\", err);\n  //     }\n  //     console.log(\"SetLanguage T\", t);\n  //     console.log(\"New Languages Locales Added\");\n  //   });\n  // });\n\n  //console.log(\"i18n languages\", i18n.languages);\n};\n// i18n.use(initReactI18next).init({ resources: {} });\ni18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].use(react_i18next__WEBPACK_IMPORTED_MODULE_1__.initReactI18next).init({\n  fallbackLng: \"en\",\n  lng: \"en\",\n  debug: true,\n  resources: {},\n  keySeparator: \".\",\n  ns: [\"translations\"],\n  defaultNS: \"translations\"\n}, () => {\n  console.log(\"Translations have been loaded\");\n});\nconst getDefaultLocale = () => {\n  return {\n    locale: \"en\",\n    label: \"English\"\n  };\n};\nconst removeDefaultLanguage = (translations, languagesSet) => {\n  let defaultLanguage = \"en\";\n  let isRemoveDefaultLangauge = false;\n  translations.forEach(trans => {\n    if (trans.locale.toLowerCase() === defaultLanguage) isRemoveDefaultLangauge = true;\n  });\n  if (isRemoveDefaultLangauge) i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeResourceBundle(defaultLanguage, \"translations\");\n  languagesSet(true);\n};\n\n//i18n.languages = [\"en\", \"ts\", \"ve\"];\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (i18next__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack://kotii-languages/./src/config/config.js?\n}");

/***/ },

/***/ "./src/config/index.js"
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addLanguages: () => (/* reexport safe */ _config_js__WEBPACK_IMPORTED_MODULE_0__.addLanguages),\n/* harmony export */   initialize: () => (/* reexport safe */ _config_js__WEBPACK_IMPORTED_MODULE_0__.initialize),\n/* harmony export */   removeDefaultLanguage: () => (/* reexport safe */ _config_js__WEBPACK_IMPORTED_MODULE_0__.removeDefaultLanguage),\n/* harmony export */   setLanguages: () => (/* reexport safe */ _config_js__WEBPACK_IMPORTED_MODULE_0__.setLanguages)\n/* harmony export */ });\n/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config.js */ \"./src/config/config.js\");\n\n\n\n//# sourceURL=webpack://kotii-languages/./src/config/index.js?\n}");

/***/ },

/***/ "./src/context/language-provider.js"
/*!******************************************!*\
  !*** ./src/context/language-provider.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: () => (/* binding */ LanguageProvider),\n/* harmony export */   useLanguage: () => (/* binding */ useLanguage)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-i18next */ \"react-i18next\");\n/* harmony import */ var _config_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../config/index.js */ \"./src/config/index.js\");\n/* harmony import */ var _config_config_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config/config.js */ \"./src/config/config.js\");\n/* eslint-disable no-unused-vars */\n/* eslint-disable react/prop-types */\n// import i18next from \"i18next\";\n\n\n\n/* eslint-disable no-unused-vars */\n// import { config } from \"../config/index\";\n\nconst LanguageContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createContext(null);\n//console.log(config);\n\n// export const LanguageProvider = (props) => {\n//   const { t, i18n } = useTranslation();\n//   const [language, setCurrentLanguage] = useState(\n//     props.language || i18n.language\n//   );\n\n//   const { children, ln, translations } = props;\n//   const [updateLanguages, setUpdateLanguages] = useState(null);\n//   const [languageName, setLanguageName] = useState(\"english\");\n//   //const [languagesSet, setLanguagesSet] = useState(false);\n\n//   // console.log(\"the children;;\", ln);\n//   console.log(\"PROVIDER TRANSLATIONS\", props);\n//   console.log(\"children\", children);\n//   console.log(\"ln\", ln);\n\n//   initialize();\n\n//   useEffect(() => {\n//     addLanguages(translations);\n//     //removeDefaultLanguage(translations, setLanguagesSet);\n//     setUpdateLanguages(translations);\n//   }, []);\n\n//   useEffect(() => {\n//     console.log(\"UpdateLanguages updated\", updateLanguages);\n//     console.log(\"NewLanguages;;;\", i18n.languages);\n//   }, [updateLanguages]);\n\n//   const changeCurrentLanguage = (language, langName) => {\n//     setLanguageName(langName);\n//     i18n.changeLanguage(language, () => {\n//       setCurrentLanguage(language);\n//     });\n//   };\n//   const getLanguageNames = () => {\n//     return translations.map((trans) => {\n//       return { name: trans.label, locale: trans.locale };\n//     });\n//   };\n//   const get = (message = \"\") => {\n//     console.log(\"GET MESSAGE;;;\", message);\n//     console.log(t);\n//     return t(message);\n//   };\n\n//   //if (!languagesSet) return null;\n\n//   return (\n//     <LanguageContext.Provider\n//       value={{\n//         language,\n//         changeCurrentLanguage,\n//         get,\n//         getLanguageNames,\n//         languageName,\n//         translations,\n//         setCurrentLanguage,\n//       }}\n//     >\n//       {children}\n//     </LanguageContext.Provider>\n//   );\n// };\n\nconst LanguageProvider = ({\n  children,\n  ln = \"en\",\n  translations\n}) => {\n  const {\n    t,\n    i18n\n  } = (0,react_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)();\n\n  // Load translations synchronously\n  translations.forEach(({\n    locale,\n    trans\n  }) => {\n    if (!i18n.hasResourceBundle(locale, \"translations\")) {\n      i18n.addResourceBundle(locale, \"translations\", trans);\n    }\n  });\n\n  // Set language BEFORE render\n  if (i18n.language !== ln) {\n    i18n.changeLanguage(ln);\n  }\n  const changeCurrentLanguage = language => {\n    i18n.changeLanguage(language);\n  };\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createElement(LanguageContext.Provider, {\n    value: {\n      get: t,\n      language: i18n.language,\n      changeCurrentLanguage,\n      getLanguageNames: () => translations.map(({\n        label,\n        locale\n      }) => ({\n        name: label,\n        locale\n      }))\n    }\n  }, children);\n};\nconst useLanguage = () => react__WEBPACK_IMPORTED_MODULE_0__[\"default\"].useContext(LanguageContext);\n\n//# sourceURL=webpack://kotii-languages/./src/context/language-provider.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   LanguageProvider: () => (/* reexport safe */ _context_language_provider_js__WEBPACK_IMPORTED_MODULE_1__.LanguageProvider),\n/* harmony export */   LanguageSwitcher: () => (/* reexport safe */ _components_LanguageSwitcher_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   useLanguage: () => (/* reexport safe */ _context_language_provider_js__WEBPACK_IMPORTED_MODULE_1__.useLanguage)\n/* harmony export */ });\n/* harmony import */ var _components_LanguageSwitcher_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/LanguageSwitcher/index.js */ \"./src/components/LanguageSwitcher/index.js\");\n/* harmony import */ var _context_language_provider_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./context/language-provider.js */ \"./src/context/language-provider.js\");\n/* eslint-disable react/no-unescaped-entities */\n\n\n\n\n\n//# sourceURL=webpack://kotii-languages/./src/index.js?\n}");

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
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ const __webpack_exports__LanguageProvider = __webpack_exports__.LanguageProvider;
/******/ const __webpack_exports__LanguageSwitcher = __webpack_exports__.LanguageSwitcher;
/******/ const __webpack_exports__useLanguage = __webpack_exports__.useLanguage;
/******/ export { __webpack_exports__LanguageProvider as LanguageProvider, __webpack_exports__LanguageSwitcher as LanguageSwitcher, __webpack_exports__useLanguage as useLanguage };
/******/ 
