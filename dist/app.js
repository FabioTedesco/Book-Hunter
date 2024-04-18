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

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://progetto-js-advanced-con-webpack-e-axios/./src/scss/styles.scss?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scss/styles.scss */ \"./src/scss/styles.scss\");\n\r\n\r\nconst searchBar = document.getElementById('search-bar');\r\nconst searchBtn = document.getElementById('search-btn');\r\nconst results = document.getElementById('results');\r\n\r\n\r\nsearchBtn.addEventListener('click', searchBooks)\r\n\r\nfunction searchBooks() {\r\n  // clearResult();\r\n  fetchSubject();\r\n}\r\n\r\n\r\n// function fetchSubject(subject) {\r\n//   fetch(`https://openlibrary.org/subjects/.json?limit=16`)\r\n//    .then(response => {\r\n//       if (!response.ok) {\r\n//         throw new Error('Could not fetch resource');\r\n//       }\r\n//       return response.json();\r\n//     })\r\n//    .then(data => {\r\n//       console.log(data.works);\r\n//       getData(data);\r\n//     })\r\n//    .catch(error => console.error(error));\r\n// }\r\nfunction fetchSubject() {\r\n  const subject = searchBar.value.toLowerCase();\r\n\r\n  fetch(`https://openlibrary.org/subjects/${subject}.json?limit=16`)\r\n  .then(response => {\r\n    \r\n    if(!response.ok){\r\n      throw new Error ('could not fetch resource');\r\n    }\r\n    return response.json();\r\n  })\r\n  .then(data => {\r\n    console.log(data.works)\r\n    getData(data)\r\n  })\r\n  .catch(error => console.error(error))\r\n}\r\n\r\n\r\nfunction getData(data) {\r\n  const value = data.works;\r\n\r\n    value.forEach(item => {\r\n      createCard(item);\r\n    })\r\n}\r\n\r\n\r\nfunction createCard(item) {\r\n  const card = document.createElement('div');\r\n  card.classList.add('card');\r\n\r\n  const cover = document.createElement('img');\r\n  cover.src = `https://covers.openlibrary.org/b/id/${item.cover_id}-M.jpg`;\r\n\r\n  const littleContainer = document.createElement('div');\r\n  littleContainer.classList.add('littleContainer');\r\n\r\n  const title = document.createElement('h2');\r\n  title.textContent = item.title;\r\n\r\n  const author = document.createElement('p');\r\n  author.textContent = item.authors[0].name;\r\n\r\n  // const showMore = descriptionBtn(item.key);\r\n  const book = item.key;\r\n\r\n  results.appendChild(card);\r\n  card.appendChild(cover);\r\n  card.appendChild(littleContainer);\r\n  littleContainer.appendChild(title);\r\n  littleContainer.appendChild(author);\r\n  card.appendChild(descriptionBtn(book));\r\n}\r\n\r\nfunction descriptionBtn(book) {\r\n  const descriptionBtn = document.createElement('button');\r\n  descriptionBtn.textContent = 'Show more'\r\n  descriptionBtn.addEventListener('click', () => {\r\n    fetchDesc(book)\r\n  })\r\n\r\n  return descriptionBtn;\r\n}\r\n\r\nfunction fetchDesc(book) {\r\n\r\n  fetch(`https://openlibrary.org${book}.json`)\r\n  .then(response => {\r\n\r\n    if(!response.ok){\r\n      throw new Error ('could not fetch resource');\r\n    }\r\n    \r\n    return response.json();\r\n  })\r\n  .then(response => {\r\n    console.log('---' + response.description)\r\n  })\r\n}\n\n//# sourceURL=webpack://progetto-js-advanced-con-webpack-e-axios/./src/index.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;