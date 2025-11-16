/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/localStorage/index.js":
/*!***********************************!*\
  !*** ./src/localStorage/index.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromStorage: () => (/* reexport safe */ _localStorage__WEBPACK_IMPORTED_MODULE_0__.getFromStorage),
/* harmony export */   removeFromStorage: () => (/* reexport safe */ _localStorage__WEBPACK_IMPORTED_MODULE_0__.removeFromStorage),
/* harmony export */   setInStorage: () => (/* reexport safe */ _localStorage__WEBPACK_IMPORTED_MODULE_0__.setInStorage)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage/localStorage.js");



/***/ }),

/***/ "./src/localStorage/localStorage.js":
/*!******************************************!*\
  !*** ./src/localStorage/localStorage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getFromStorage: () => (/* binding */ getFromStorage),
/* harmony export */   removeFromStorage: () => (/* binding */ removeFromStorage),
/* harmony export */   setInStorage: () => (/* binding */ setInStorage)
/* harmony export */ });
const setInStorage = (key, value) => {
  // console.log("GETTING KEY valuePairs;;;", key);
  // console.log("KEY VALUE;;;", value);
  localStorage.setItem(key, JSON.stringify(value));
  if (getFromStorage(key)) return true;
  return false;
};
const getFromStorage = key => {
  // console.log("GETFROM STORAGE;;;", key);
  // console.log("Get from Storage;;;", localStorage.getItem(key));
  let foundItem = key ? localStorage.getItem(key) : null;
  if (!foundItem) return null;
  if (!foundItem) return null;
  if (foundItem === "undefined") return null;
  if (typeof foundItem === "object" && Object.keys(foundItem).length === 0) return null;
  // console.log("JSON PARSED ITEM;;;", JSON.parse(foundItem));
  return JSON.parse(foundItem);
};
const removeFromStorage = key => {
  // console.log("Removing Key from storage;;;", key);
  localStorage.removeItem(key);
  if (!getFromStorage(key)) return true;
  return false;
};

/***/ }),

/***/ "./src/textManipulations/index.js":
/*!****************************************!*\
  !*** ./src/textManipulations/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   capitalizeFirstLetter: () => (/* binding */ capitalizeFirstLetter),
/* harmony export */   capitalizeLastLetter: () => (/* binding */ capitalizeLastLetter)
/* harmony export */ });
const capitalizeFirstLetter = text => {
  console.log("The text Uppercasing;;;", text);
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};
const capitalizeLastLetter = text => {
  console.log("The text Lowercasing;;;", text);
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
/* harmony export */   capitalizeFirstLetter: () => (/* reexport safe */ _textManipulations_index__WEBPACK_IMPORTED_MODULE_1__.capitalizeFirstLetter),
/* harmony export */   capitalizeLastLetter: () => (/* reexport safe */ _textManipulations_index__WEBPACK_IMPORTED_MODULE_1__.capitalizeLastLetter),
/* harmony export */   getFromStorage: () => (/* reexport safe */ _localStorage__WEBPACK_IMPORTED_MODULE_0__.getFromStorage),
/* harmony export */   removeFromStorage: () => (/* reexport safe */ _localStorage__WEBPACK_IMPORTED_MODULE_0__.removeFromStorage),
/* harmony export */   setInStorage: () => (/* reexport safe */ _localStorage__WEBPACK_IMPORTED_MODULE_0__.setInStorage)
/* harmony export */ });
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./localStorage */ "./src/localStorage/index.js");
/* harmony import */ var _textManipulations_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./textManipulations/index */ "./src/textManipulations/index.js");



})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguY2pzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXdCOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pqQixNQUFNRSxZQUFZLEdBQUdBLENBQUNDLEdBQUcsRUFBRUMsS0FBSyxLQUFLO0VBQzFDO0VBQ0E7RUFDQUMsWUFBWSxDQUFDQyxPQUFPLENBQUNILEdBQUcsRUFBRUksSUFBSSxDQUFDQyxTQUFTLENBQUNKLEtBQUssQ0FBQyxDQUFDO0VBQ2hELElBQUlKLGNBQWMsQ0FBQ0csR0FBRyxDQUFDLEVBQUUsT0FBTyxJQUFJO0VBQ3BDLE9BQU8sS0FBSztBQUNkLENBQUM7QUFFTSxNQUFNSCxjQUFjLEdBQUlHLEdBQUcsSUFBSztFQUNyQztFQUNBO0VBQ0EsSUFBSU0sU0FBUyxHQUFHTixHQUFHLEdBQUdFLFlBQVksQ0FBQ0ssT0FBTyxDQUFDUCxHQUFHLENBQUMsR0FBRyxJQUFJO0VBQ3RELElBQUksQ0FBQ00sU0FBUyxFQUFFLE9BQU8sSUFBSTtFQUMzQixJQUFJLENBQUNBLFNBQVMsRUFBRSxPQUFPLElBQUk7RUFDM0IsSUFBSUEsU0FBUyxLQUFLLFdBQVcsRUFBRSxPQUFPLElBQUk7RUFDMUMsSUFBSSxPQUFPQSxTQUFTLEtBQUssUUFBUSxJQUFJRSxNQUFNLENBQUNDLElBQUksQ0FBQ0gsU0FBUyxDQUFDLENBQUNJLE1BQU0sS0FBSyxDQUFDLEVBQ3RFLE9BQU8sSUFBSTtFQUNiO0VBQ0EsT0FBT04sSUFBSSxDQUFDTyxLQUFLLENBQUNMLFNBQVMsQ0FBQztBQUM5QixDQUFDO0FBRU0sTUFBTVIsaUJBQWlCLEdBQUlFLEdBQUcsSUFBSztFQUN4QztFQUNBRSxZQUFZLENBQUNVLFVBQVUsQ0FBQ1osR0FBRyxDQUFDO0VBQzVCLElBQUksQ0FBQ0gsY0FBYyxDQUFDRyxHQUFHLENBQUMsRUFBRSxPQUFPLElBQUk7RUFDckMsT0FBTyxLQUFLO0FBQ2QsQ0FBQyxDOzs7Ozs7Ozs7Ozs7Ozs7QUMxQkQsTUFBTWEscUJBQXFCLEdBQUlDLElBQUksSUFBSztFQUN0Q0MsT0FBTyxDQUFDQyxHQUFHLENBQUMseUJBQXlCLEVBQUVGLElBQUksQ0FBQztFQUM1QyxPQUFPLEdBQUdBLElBQUksQ0FBQ0csS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsR0FBR0osSUFBSSxDQUFDRyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUU7QUFDNUQsQ0FBQztBQUVELE1BQU1FLG9CQUFvQixHQUFJTCxJQUFJLElBQUs7RUFDckNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLHlCQUF5QixFQUFFRixJQUFJLENBQUM7RUFDNUMsT0FBTyxHQUFHQSxJQUFJLENBQUNHLEtBQUssQ0FBQyxDQUFDLEVBQUVILElBQUksQ0FBQ0osTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHSSxJQUFJLENBQzVDRyxLQUFLLENBQUNILElBQUksQ0FBQ0osTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUN0QlUsV0FBVyxDQUFDLENBQUMsRUFBRTtBQUNwQixDQUFDOzs7Ozs7O1VDVkQ7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z3QjtBQUlXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8va290aWktdXRpbHMvLi9zcmMvbG9jYWxTdG9yYWdlL2luZGV4LmpzIiwid2VicGFjazovL2tvdGlpLXV0aWxzLy4vc3JjL2xvY2FsU3RvcmFnZS9sb2NhbFN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvLi9zcmMvdGV4dE1hbmlwdWxhdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2tvdGlpLXV0aWxzL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8va290aWktdXRpbHMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9rb3RpaS11dGlscy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBnZXRGcm9tU3RvcmFnZSxcbiAgcmVtb3ZlRnJvbVN0b3JhZ2UsXG4gIHNldEluU3RvcmFnZSxcbn0gZnJvbSBcIi4vbG9jYWxTdG9yYWdlXCI7XG5cbmV4cG9ydCB7IHNldEluU3RvcmFnZSwgZ2V0RnJvbVN0b3JhZ2UsIHJlbW92ZUZyb21TdG9yYWdlIH07XG4iLCJleHBvcnQgY29uc3Qgc2V0SW5TdG9yYWdlID0gKGtleSwgdmFsdWUpID0+IHtcbiAgLy8gY29uc29sZS5sb2coXCJHRVRUSU5HIEtFWSB2YWx1ZVBhaXJzOzs7XCIsIGtleSk7XG4gIC8vIGNvbnNvbGUubG9nKFwiS0VZIFZBTFVFOzs7XCIsIHZhbHVlKTtcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCBKU09OLnN0cmluZ2lmeSh2YWx1ZSkpO1xuICBpZiAoZ2V0RnJvbVN0b3JhZ2Uoa2V5KSkgcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXRGcm9tU3RvcmFnZSA9IChrZXkpID0+IHtcbiAgLy8gY29uc29sZS5sb2coXCJHRVRGUk9NIFNUT1JBR0U7OztcIiwga2V5KTtcbiAgLy8gY29uc29sZS5sb2coXCJHZXQgZnJvbSBTdG9yYWdlOzs7XCIsIGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSkpO1xuICBsZXQgZm91bmRJdGVtID0ga2V5ID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KSA6IG51bGw7XG4gIGlmICghZm91bmRJdGVtKSByZXR1cm4gbnVsbDtcbiAgaWYgKCFmb3VuZEl0ZW0pIHJldHVybiBudWxsO1xuICBpZiAoZm91bmRJdGVtID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm4gbnVsbDtcbiAgaWYgKHR5cGVvZiBmb3VuZEl0ZW0gPT09IFwib2JqZWN0XCIgJiYgT2JqZWN0LmtleXMoZm91bmRJdGVtKS5sZW5ndGggPT09IDApXG4gICAgcmV0dXJuIG51bGw7XG4gIC8vIGNvbnNvbGUubG9nKFwiSlNPTiBQQVJTRUQgSVRFTTs7O1wiLCBKU09OLnBhcnNlKGZvdW5kSXRlbSkpO1xuICByZXR1cm4gSlNPTi5wYXJzZShmb3VuZEl0ZW0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZUZyb21TdG9yYWdlID0gKGtleSkgPT4ge1xuICAvLyBjb25zb2xlLmxvZyhcIlJlbW92aW5nIEtleSBmcm9tIHN0b3JhZ2U7OztcIiwga2V5KTtcbiAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oa2V5KTtcbiAgaWYgKCFnZXRGcm9tU3RvcmFnZShrZXkpKSByZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcbiIsImNvbnN0IGNhcGl0YWxpemVGaXJzdExldHRlciA9ICh0ZXh0KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIHRleHQgVXBwZXJjYXNpbmc7OztcIiwgdGV4dCk7XG4gIHJldHVybiBgJHt0ZXh0LnNsaWNlKDAsIDEpLnRvVXBwZXJDYXNlKCl9JHt0ZXh0LnNsaWNlKDEpfWA7XG59O1xuXG5jb25zdCBjYXBpdGFsaXplTGFzdExldHRlciA9ICh0ZXh0KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwiVGhlIHRleHQgTG93ZXJjYXNpbmc7OztcIiwgdGV4dCk7XG4gIHJldHVybiBgJHt0ZXh0LnNsaWNlKDAsIHRleHQubGVuZ3RoIC0gMSl9JHt0ZXh0XG4gICAgLnNsaWNlKHRleHQubGVuZ3RoIC0gMSlcbiAgICAudG9Mb3dlckNhc2UoKX1gO1xufTtcbmV4cG9ydCB7IGNhcGl0YWxpemVGaXJzdExldHRlciwgY2FwaXRhbGl6ZUxhc3RMZXR0ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZ2V0RnJvbVN0b3JhZ2UsXG4gIHJlbW92ZUZyb21TdG9yYWdlLFxuICBzZXRJblN0b3JhZ2UsXG59IGZyb20gXCIuL2xvY2FsU3RvcmFnZVwiO1xuaW1wb3J0IHtcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxuICBjYXBpdGFsaXplTGFzdExldHRlcixcbn0gZnJvbSBcIi4vdGV4dE1hbmlwdWxhdGlvbnMvaW5kZXhcIjtcblxuZXhwb3J0IHtcbiAgY2FwaXRhbGl6ZUZpcnN0TGV0dGVyLFxuICBjYXBpdGFsaXplTGFzdExldHRlcixcbiAgZ2V0RnJvbVN0b3JhZ2UsXG4gIHNldEluU3RvcmFnZSxcbiAgcmVtb3ZlRnJvbVN0b3JhZ2UsXG59O1xuIl0sIm5hbWVzIjpbImdldEZyb21TdG9yYWdlIiwicmVtb3ZlRnJvbVN0b3JhZ2UiLCJzZXRJblN0b3JhZ2UiLCJrZXkiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZm91bmRJdGVtIiwiZ2V0SXRlbSIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJwYXJzZSIsInJlbW92ZUl0ZW0iLCJjYXBpdGFsaXplRmlyc3RMZXR0ZXIiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsInNsaWNlIiwidG9VcHBlckNhc2UiLCJjYXBpdGFsaXplTGFzdExldHRlciIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==