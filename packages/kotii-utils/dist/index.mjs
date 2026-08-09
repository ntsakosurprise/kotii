/******/ var __webpack_modules__ = ({

/***/ "./src/localStorage/index.js"
/*!***********************************!*\
  !*** ./src/localStorage/index.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromStorage: () => (/* reexport safe */ _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage),
/* harmony export */   isItemInStorage: () => (/* reexport safe */ _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.isItemInStorage),
/* harmony export */   removeFromStorage: () => (/* reexport safe */ _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.removeFromStorage),
/* harmony export */   setInStorage: () => (/* reexport safe */ _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setInStorage)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage/localStorage.js");



/***/ },

/***/ "./src/localStorage/localStorage.js"
/*!******************************************!*\
  !*** ./src/localStorage/localStorage.js ***!
  \******************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromStorage: () => (/* binding */ getFromStorage),
/* harmony export */   isItemInStorage: () => (/* binding */ isItemInStorage),
/* harmony export */   removeFromStorage: () => (/* binding */ removeFromStorage),
/* harmony export */   setInStorage: () => (/* binding */ setInStorage)
/* harmony export */ });
const setInStorage = async (key, value) => {
  if (typeof window == "undefined") return false;
  localStorage.setItem(key, JSON.stringify(value));
  if (getFromStorage(key)) return true;
  return false;
};
const getFromStorage = async key => {
  if (typeof window == "undefined") return false;
  let foundItem = key ? localStorage.getItem(key) : null;
  if (!foundItem) return null;
  if (!foundItem) return null;
  if (foundItem === "undefined") return null;
  if (typeof foundItem === "object" && Object.keys(foundItem).length === 0) return null;
  return JSON.parse(foundItem);
};
const removeFromStorage = async key => {
  // console.log("Removing Key from storage;;;", key);
  if (typeof window == "undefined") return false;
  localStorage.removeItem(key);
  if (!getFromStorage(key)) return true;
  return false;
};
const isItemInStorage = async key => {
  if (await getFromStorage(key)) {
    return true;
  }
  return false;
};

/***/ },

/***/ "./src/textManipulations/index.js"
/*!****************************************!*\
  !*** ./src/textManipulations/index.js ***!
  \****************************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   capitalizeLastLetter: () => (/* binding */ capitalizeLastLetter)
/* harmony export */ });
const capitalizeFirstLetter = text => {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};
const capitalizeLastLetter = text => {
  return `${text.slice(0, text.length - 1)}${text.slice(text.length - 1).toLowerCase()}`;
};


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
let __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalizeFirstLetter: () => (/* reexport safe */ _textManipulations_index_js__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter),
/* harmony export */   capitalizeLastLetter: () => (/* reexport safe */ _textManipulations_index_js__WEBPACK_IMPORTED_MODULE_1__.capitalizeLastLetter),
/* harmony export */   getFromStorage: () => (/* reexport safe */ _localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage),
/* harmony export */   isItemInStorage: () => (/* reexport safe */ _localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.isItemInStorage),
/* harmony export */   removeFromStorage: () => (/* reexport safe */ _localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.removeFromStorage),
/* harmony export */   setInStorage: () => (/* reexport safe */ _localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__.setInStorage)
/* harmony export */ });
/* harmony import */ var _localStorage_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage/index.js */ "./src/localStorage/index.js");
/* harmony import */ var _textManipulations_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textManipulations/index.js */ "./src/textManipulations/index.js");



})();

const __webpack_exports__capitalizeFirstLetter = __webpack_exports__.capitalizeFirstLetter;
const __webpack_exports__capitalizeLastLetter = __webpack_exports__.capitalizeLastLetter;
const __webpack_exports__getFromStorage = __webpack_exports__.getFromStorage;
const __webpack_exports__isItemInStorage = __webpack_exports__.isItemInStorage;
const __webpack_exports__removeFromStorage = __webpack_exports__.removeFromStorage;
const __webpack_exports__setInStorage = __webpack_exports__.setInStorage;
export { __webpack_exports__capitalizeFirstLetter as capitalizeFirstLetter, __webpack_exports__capitalizeLastLetter as capitalizeLastLetter, __webpack_exports__getFromStorage as getFromStorage, __webpack_exports__isItemInStorage as isItemInStorage, __webpack_exports__removeFromStorage as removeFromStorage, __webpack_exports__setInStorage as setInStorage };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qyx3Q0FBd0M7VUFDbEY7VUFDQTtVQUNBO1VBQ0EsRTs7Ozs7VUN0QkEsd0Y7Ozs7O1VDQUE7VUFDQTtVQUNBO1VBQ0EsdURBQXVELGlCQUFpQjtVQUN4RTtVQUNBLGdEQUFnRCxhQUFhO1VBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0RpQztBQUlLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va290aWktdXRpbHMvLi9zcmMvbG9jYWxTdG9yYWdlL2luZGV4LmpzIiwid2VicGFjazovL2tvdGlpLXV0aWxzLy4vc3JjL2xvY2FsU3RvcmFnZS9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvLi9zcmMvdGV4dE1hbmlwdWxhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tvdGlpLXV0aWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRGcm9tU3RvcmFnZSxcbiAgcmVtb3ZlRnJvbVN0b3JhZ2UsXG4gIHNldEluU3RvcmFnZSxcbiAgaXNJdGVtSW5TdG9yYWdlLFxufSBmcm9tIFwiLi9sb2NhbFN0b3JhZ2UuanNcIjtcblxuZXhwb3J0IHsgc2V0SW5TdG9yYWdlLCBnZXRGcm9tU3RvcmFnZSwgcmVtb3ZlRnJvbVN0b3JhZ2UsIGlzSXRlbUluU3RvcmFnZSB9O1xuIiwiZXhwb3J0IGNvbnN0IHNldEluU3RvcmFnZSA9IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICBpZiAoZ2V0RnJvbVN0b3JhZ2Uoa2V5KSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGcm9tU3RvcmFnZSA9IGFzeW5jIChrZXkpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICBsZXQgZm91bmRJdGVtID0ga2V5ID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA6IG51bGw7XG4gIGlmICghZm91bmRJdGVtKSByZXR1cm4gbnVsbDtcbiAgaWYgKCFmb3VuZEl0ZW0pIHJldHVybiBudWxsO1xuICBpZiAoZm91bmRJdGVtID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiBmb3VuZEl0ZW0gPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXMoZm91bmRJdGVtKS5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoZm91bmRJdGVtKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tU3RvcmFnZSA9IGFzeW5jIChrZXkpID0+IHtcbiAgLy8gY29uc29sZS5sb2coXCJSZW1vdmluZyBLZXkgZnJvbSBzdG9yYWdlOzs7XCIsIGtleSk7XG4gIGlmICh0eXBlb2Ygd2luZG93ID09IFwidW5kZWZpbmVkXCIpIHJldHVybiBmYWxzZTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgaWYgKCFnZXRGcm9tU3RvcmFnZShrZXkpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGlzSXRlbUluU3RvcmFnZSA9IGFzeW5jIChrZXkpID0+IHtcbiAgaWYgKGF3YWl0IGdldEZyb21TdG9yYWdlKGtleSkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwiY29uc3QgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyID0gKHRleHQpID0+IHtcbiAgcmV0dXJuIGAke3RleHQuc2xpY2UoMCwgMSkudG9VcHBlckNhc2UoKX0ke3RleHQuc2xpY2UoMSl9YDtcbn07XG5cbmNvbnN0IGNhcGl0YWxpemVMYXN0TGV0dGVyID0gKHRleHQpID0+IHtcbiAgcmV0dXJuIGAke3RleHQuc2xpY2UoMCwgdGV4dC5sZW5ndGggLSAxKX0ke3RleHRcbiAgICAuc2xpY2UodGV4dC5sZW5ndGggLSAxKVxuICAgIC50b0xvd2VyQ2FzZSgpfWA7XG59O1xuZXhwb3J0IHsgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLCBjYXBpdGFsaXplTGFzdExldHRlciB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxuY29uc3QgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRjb25zdCBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0Y29uc3QgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRpZiAoIShtb2R1bGVJZCBpbiBfX3dlYnBhY2tfbW9kdWxlc19fKSkge1xuXHRcdGRlbGV0ZSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRcdGNvbnN0IGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgbW9kdWxlSWQgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyL3ZhbHVlIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRpZihBcnJheS5pc0FycmF5KGRlZmluaXRpb24pKSB7XG5cdFx0dmFyIGkgPSAwO1xuXHRcdHdoaWxlKGkgPCBkZWZpbml0aW9uLmxlbmd0aCkge1xuXHRcdFx0dmFyIGtleSA9IGRlZmluaXRpb25baSsrXTtcblx0XHRcdHZhciBiaW5kaW5nID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRcdGlmKGJpbmRpbmcgPT09IDApIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiBkZWZpbml0aW9uW2krK10gfSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGJpbmRpbmcgfSk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZihiaW5kaW5nID09PSAwKSB7IGkrKzsgfVxuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGdldEZyb21TdG9yYWdlLFxuICByZW1vdmVGcm9tU3RvcmFnZSxcbiAgc2V0SW5TdG9yYWdlLFxuICBpc0l0ZW1JblN0b3JhZ2UsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xuaW1wb3J0IHtcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxuICBjYXBpdGFsaXplTGFzdExldHRlcixcbn0gZnJvbSBcIi4vdGV4dE1hbmlwdWxhdGlvbnMvaW5kZXguanNcIjtcblxuZXhwb3J0IHtcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxuICBjYXBpdGFsaXplTGFzdExldHRlcixcbiAgZ2V0RnJvbVN0b3JhZ2UsXG4gIHNldEluU3RvcmFnZSxcbiAgcmVtb3ZlRnJvbVN0b3JhZ2UsXG4gIGlzSXRlbUluU3RvcmFnZSxcbn07XG4iXSwibmFtZXMiOlsiZ2V0RnJvbVN0b3JhZ2UiLCJyZW1vdmVGcm9tU3RvcmFnZSIsInNldEluU3RvcmFnZSIsImlzSXRlbUluU3RvcmFnZSIsImtleSIsInZhbHVlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3VuZEl0ZW0iLCJnZXRJdGVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhcnNlIiwicmVtb3ZlSXRlbSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInRleHQiLCJzbGljZSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZUxhc3RMZXR0ZXIiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=