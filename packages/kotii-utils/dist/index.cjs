/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter/value functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			if(Array.isArray(definition)) {
/******/ 				var i = 0;
/******/ 				while(i < definition.length) {
/******/ 					var key = definition[i++];
/******/ 					var binding = definition[i++];
/******/ 					if(!__webpack_require__.o(exports, key)) {
/******/ 						if(binding === 0) {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, value: definition[i++] });
/******/ 						} else {
/******/ 							Object.defineProperty(exports, key, { enumerable: true, get: binding });
/******/ 						}
/******/ 					} else if(binding === 0) { i++; }
/******/ 				}
/******/ 			} else {
/******/ 				for(var key in definition) {
/******/ 					if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 						Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 					}
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
/******/ 			if(Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
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

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTBDLHdDQUF3QztXQUNsRjtXQUNBO1dBQ0E7V0FDQSxFOzs7OztXQ3RCQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRGlDO0FBSUsiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rb3RpaS11dGlscy8uL3NyYy9sb2NhbFN0b3JhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvLi9zcmMvbG9jYWxTdG9yYWdlL2xvY2FsU3RvcmFnZS5qcyIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy8uL3NyYy90ZXh0TWFuaXB1bGF0aW9ucy9pbmRleC5qcyIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2tvdGlpLXV0aWxzLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGdldEZyb21TdG9yYWdlLFxuICByZW1vdmVGcm9tU3RvcmFnZSxcbiAgc2V0SW5TdG9yYWdlLFxuICBpc0l0ZW1JblN0b3JhZ2UsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZS5qc1wiO1xuXG5leHBvcnQgeyBzZXRJblN0b3JhZ2UsIGdldEZyb21TdG9yYWdlLCByZW1vdmVGcm9tU3RvcmFnZSwgaXNJdGVtSW5TdG9yYWdlIH07XG4iLCJleHBvcnQgY29uc3Qgc2V0SW5TdG9yYWdlID0gYXN5bmMgKGtleSwgdmFsdWUpID0+IHtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHZhbHVlKSk7XG4gIGlmIChnZXRGcm9tU3RvcmFnZShrZXkpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEZyb21TdG9yYWdlID0gYXN5bmMgKGtleSkgPT4ge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gZmFsc2U7XG4gIGxldCBmb3VuZEl0ZW0gPSBrZXkgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpIDogbnVsbDtcbiAgaWYgKCFmb3VuZEl0ZW0pIHJldHVybiBudWxsO1xuICBpZiAoIWZvdW5kSXRlbSkgcmV0dXJuIG51bGw7XG4gIGlmIChmb3VuZEl0ZW0gPT09IFwidW5kZWZpbmVkXCIpIHJldHVybiBudWxsO1xuICBpZiAodHlwZW9mIGZvdW5kSXRlbSA9PT0gXCJvYmplY3RcIiAmJiBPYmplY3Qua2V5cyhmb3VuZEl0ZW0pLmxlbmd0aCA9PT0gMClcbiAgICByZXR1cm4gbnVsbDtcblxuICByZXR1cm4gSlNPTi5wYXJzZShmb3VuZEl0ZW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21TdG9yYWdlID0gYXN5bmMgKGtleSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhcIlJlbW92aW5nIEtleSBmcm9tIHN0b3JhZ2U7OztcIiwga2V5KTtcbiAgaWYgKHR5cGVvZiB3aW5kb3cgPT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuIGZhbHNlO1xuICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICBpZiAoIWdldEZyb21TdG9yYWdlKGtleSkpIHJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59O1xuXG5leHBvcnQgY29uc3QgaXNJdGVtSW5TdG9yYWdlID0gYXN5bmMgKGtleSkgPT4ge1xuICBpZiAoYXdhaXQgZ2V0RnJvbVN0b3JhZ2Uoa2V5KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn07XG4iLCJjb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAodGV4dCkgPT4ge1xuICByZXR1cm4gYCR7dGV4dC5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpfSR7dGV4dC5zbGljZSgxKX1gO1xufTtcblxuY29uc3QgY2FwaXRhbGl6ZUxhc3RMZXR0ZXIgPSAodGV4dCkgPT4ge1xuICByZXR1cm4gYCR7dGV4dC5zbGljZSgwLCB0ZXh0Lmxlbmd0aCAtIDEpfSR7dGV4dFxuICAgIC5zbGljZSh0ZXh0Lmxlbmd0aCAtIDEpXG4gICAgLnRvTG93ZXJDYXNlKCl9YDtcbn07XG5leHBvcnQgeyBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsIGNhcGl0YWxpemVMYXN0TGV0dGVyIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG5jb25zdCBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGNvbnN0IGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHRjb25zdCBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdGlmICghKG1vZHVsZUlkIGluIF9fd2VicGFja19tb2R1bGVzX18pKSB7XG5cdFx0ZGVsZXRlIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdFx0Y29uc3QgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyBtb2R1bGVJZCArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIvdmFsdWUgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGlmKEFycmF5LmlzQXJyYXkoZGVmaW5pdGlvbikpIHtcblx0XHR2YXIgaSA9IDA7XG5cdFx0d2hpbGUoaSA8IGRlZmluaXRpb24ubGVuZ3RoKSB7XG5cdFx0XHR2YXIga2V5ID0gZGVmaW5pdGlvbltpKytdO1xuXHRcdFx0dmFyIGJpbmRpbmcgPSBkZWZpbml0aW9uW2krK107XG5cdFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdFx0aWYoYmluZGluZyA9PT0gMCkge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IGRlZmluaXRpb25baSsrXSB9KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogYmluZGluZyB9KTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIGlmKGJpbmRpbmcgPT09IDApIHsgaSsrOyB9XG5cdFx0fVxuXHR9IGVsc2Uge1xuXHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYoU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZ2V0RnJvbVN0b3JhZ2UsXG4gIHJlbW92ZUZyb21TdG9yYWdlLFxuICBzZXRJblN0b3JhZ2UsXG4gIGlzSXRlbUluU3RvcmFnZSxcbn0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlL2luZGV4LmpzXCI7XG5pbXBvcnQge1xuICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsXG4gIGNhcGl0YWxpemVMYXN0TGV0dGVyLFxufSBmcm9tIFwiLi90ZXh0TWFuaXB1bGF0aW9ucy9pbmRleC5qc1wiO1xuXG5leHBvcnQge1xuICBjYXBpdGFsaXplRmlyc3RMZXR0ZXIsXG4gIGNhcGl0YWxpemVMYXN0TGV0dGVyLFxuICBnZXRGcm9tU3RvcmFnZSxcbiAgc2V0SW5TdG9yYWdlLFxuICByZW1vdmVGcm9tU3RvcmFnZSxcbiAgaXNJdGVtSW5TdG9yYWdlLFxufTtcbiJdLCJuYW1lcyI6WyJnZXRGcm9tU3RvcmFnZSIsInJlbW92ZUZyb21TdG9yYWdlIiwic2V0SW5TdG9yYWdlIiwiaXNJdGVtSW5TdG9yYWdlIiwia2V5IiwidmFsdWUiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImZvdW5kSXRlbSIsImdldEl0ZW0iLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwicGFyc2UiLCJyZW1vdmVJdGVtIiwiY2FwaXRhbGl6ZUZpcnN0TGV0dGVyIiwidGV4dCIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplTGFzdExldHRlciIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==