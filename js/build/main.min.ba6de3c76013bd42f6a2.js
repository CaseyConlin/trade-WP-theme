/******/ (() => { // webpackBootstrap
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!************************!*\
  !*** ./js/src/main.js ***!
  \************************/
const navSearchButton = document.querySelector(".search-button");
const searchButtonHandler = e => {
  const navField = document.querySelector(".search-in-nav");
  if (!navField.classList.contains("search-in-nav-show")) {
    e.preventDefault();
    navField.classList.toggle("search-in-nav-show");
  }
};
navSearchButton.addEventListener("click", searchButtonHandler);
const navBar = document.querySelector(".navbar");
const customHeader = document.querySelector("#wp-custom-header");
const navLogo = document.querySelector(".navbar-brand");
const navBarStick = () => {
  console.log(window.scrollY);
  if (window.scrollY > 19) {
    navBar.classList.add("sticky-top");
    navBar.classList.remove("navbar-push-down");
    navLogo.classList.add("logo-sticky-top");
    customHeader.classList.add("header-sticky-offset");
  } else {
    navBar.classList.remove("sticky-top");
    navBar.classList.add("navbar-push-down");
    navLogo.classList.remove("logo-sticky-top");
    customHeader.classList.remove("header-sticky-offset");
  }
};
if (document.querySelector(".home")) {
  window.onscroll = navBarStick;
}
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!***************************!*\
  !*** ./css/src/main.scss ***!
  \***************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=main.min.ba6de3c76013bd42f6a2.js.map