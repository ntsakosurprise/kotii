/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/localStorage/index.js":
/*!***********************************!*\
  !*** ./src/localStorage/index.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromStorage: () => (/* reexport safe */ _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.getFromStorage),
/* harmony export */   isItemInStorage: () => (/* reexport safe */ _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.isItemInStorage),
/* harmony export */   removeFromStorage: () => (/* reexport safe */ _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.removeFromStorage),
/* harmony export */   setInStorage: () => (/* reexport safe */ _localStorage_js__WEBPACK_IMPORTED_MODULE_0__.setInStorage)
/* harmony export */ });
/* harmony import */ var _localStorage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage.js */ "./src/localStorage/localStorage.js");



/***/ }),

/***/ "./src/localStorage/localStorage.js":
/*!******************************************!*\
  !*** ./src/localStorage/localStorage.js ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromStorage: () => (/* binding */ getFromStorage),
/* harmony export */   isItemInStorage: () => (/* binding */ isItemInStorage),
/* harmony export */   removeFromStorage: () => (/* binding */ removeFromStorage),
/* harmony export */   setInStorage: () => (/* binding */ setInStorage)
/* harmony export */ });
const setInStorage = async (key, value) => {
  if (!window || window === "undefined") return false;
  localStorage.setItem(key, JSON.stringify(value));
  if (getFromStorage(key)) return true;
  return false;
};
const getFromStorage = async key => {
  if (!window || window === "undefined") return false;
  let foundItem = key ? localStorage.getItem(key) : null;
  if (!foundItem) return null;
  if (!foundItem) return null;
  if (foundItem === "undefined") return null;
  if (typeof foundItem === "object" && Object.keys(foundItem).length === 0) return null;
  return JSON.parse(foundItem);
};
const removeFromStorage = async key => {
  // console.log("Removing Key from storage;;;", key);
  if (!window || window === "undefined") return false;
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

/***/ }),

/***/ "./src/textManipulations/index.js":
/*!****************************************!*\
  !*** ./src/textManipulations/index.js ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

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
var __webpack_exports__ = {};
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

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7O0FDRGlDO0FBSUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb3RpaS11dGlscy8uL3NyYy9sb2NhbFN0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvLi9zcmMvbG9jYWxTdG9yYWdlL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy8uL3NyYy90ZXh0TWFuaXB1bGF0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tvdGlpLXV0aWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldEZyb21TdG9yYWdlLFxuICByZW1vdmVGcm9tU3RvcmFnZSxcbiAgc2V0SW5TdG9yYWdlLFxuICBpc0l0ZW1JblN0b3JhZ2UsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5qc1wiO1xuXG5leHBvcnQgeyBzZXRJblN0b3JhZ2UsIGdldEZyb21TdG9yYWdlLCByZW1vdmVGcm9tU3RvcmFnZSwgaXNJdGVtSW5TdG9yYWdlIH07XG4iLCJleHBvcnQgY29uc3Qgc2V0SW5TdG9yYWdlID0gYXN5bmMgKGtleSwgdmFsdWUpID0+IHtcbiAgaWYgKCF3aW5kb3cgfHwgd2luZG93ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XG4gIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcbiAgaWYgKGdldEZyb21TdG9yYWdlKGtleSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0RnJvbVN0b3JhZ2UgPSBhc3luYyAoa2V5KSA9PiB7XG4gIGlmICghd2luZG93IHx8IHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICBsZXQgZm91bmRJdGVtID0ga2V5ID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA6IG51bGw7XG4gIGlmICghZm91bmRJdGVtKSByZXR1cm4gbnVsbDtcbiAgaWYgKCFmb3VuZEl0ZW0pIHJldHVybiBudWxsO1xuICBpZiAoZm91bmRJdGVtID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiBmb3VuZEl0ZW0gPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXMoZm91bmRJdGVtKS5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIG51bGw7XG5cbiAgcmV0dXJuIEpTT04ucGFyc2UoZm91bmRJdGVtKTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVGcm9tU3RvcmFnZSA9IGFzeW5jIChrZXkpID0+IHtcbiAgLy8gY29uc29sZS5sb2coXCJSZW1vdmluZyBLZXkgZnJvbSBzdG9yYWdlOzs7XCIsIGtleSk7XG4gIGlmICghd2luZG93IHx8IHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICBpZiAoIWdldEZyb21TdG9yYWdlKGtleSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNJdGVtSW5TdG9yYWdlID0gYXN5bmMgKGtleSkgPT4ge1xuICBpZiAoYXdhaXQgZ2V0RnJvbVN0b3JhZ2Uoa2V5KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAodGV4dCkgPT4ge1xuICByZXR1cm4gYCR7dGV4dC5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpfSR7dGV4dC5zbGljZSgxKX1gO1xufTtcblxuY29uc3QgY2FwaXRhbGl6ZUxhc3RMZXR0ZXIgPSAodGV4dCkgPT4ge1xuICByZXR1cm4gYCR7dGV4dC5zbGljZSgwLCB0ZXh0Lmxlbmd0aCAtIDEpfSR7dGV4dFxuICAgIC5zbGljZSh0ZXh0Lmxlbmd0aCAtIDEpXG4gICAgLnRvTG93ZXJDYXNlKCl9YDtcbn07XG5leHBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsIGNhcGl0YWxpemVMYXN0TGV0dGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7XG4gIGdldEZyb21TdG9yYWdlLFxuICByZW1vdmVGcm9tU3RvcmFnZSxcbiAgc2V0SW5TdG9yYWdlLFxuICBpc0l0ZW1JblN0b3JhZ2UsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZS9pbmRleC5qc1wiO1xuaW1wb3J0IHtcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxuICBjYXBpdGFsaXplTGFzdExldHRlcixcbn0gZnJvbSBcIi4vdGV4dE1hbmlwdWxhdGlvbnMvaW5kZXguanNcIjtcblxuZXhwb3J0IHtcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxuICBjYXBpdGFsaXplTGFzdExldHRlcixcbiAgZ2V0RnJvbVN0b3JhZ2UsXG4gIHNldEluU3RvcmFnZSxcbiAgcmVtb3ZlRnJvbVN0b3JhZ2UsXG4gIGlzSXRlbUluU3RvcmFnZSxcbn07XG4iXSwibmFtZXMiOlsiZ2V0RnJvbVN0b3JhZ2UiLCJyZW1vdmVGcm9tU3RvcmFnZSIsInNldEluU3RvcmFnZSIsImlzSXRlbUluU3RvcmFnZSIsImtleSIsInZhbHVlIiwid2luZG93IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJmb3VuZEl0ZW0iLCJnZXRJdGVtIiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsInBhcnNlIiwicmVtb3ZlSXRlbSIsImNhcGl0YWxpemVGaXJzdExldHRlciIsInRleHQiLCJzbGljZSIsInRvVXBwZXJDYXNlIiwiY2FwaXRhbGl6ZUxhc3RMZXR0ZXIiLCJ0b0xvd2VyQ2FzZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9