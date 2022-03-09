/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/homehero.js":
/*!*************************!*\
  !*** ./src/homehero.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHero)
/* harmony export */ });
/* harmony import */ var _images_herophoto_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/herophoto.jpg */ "./src/images/herophoto.jpg");
/* harmony import */ var _images_farm_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/farm.svg */ "./src/images/farm.svg");
/* harmony import */ var _images_heart_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/heart.svg */ "./src/images/heart.svg");
/* harmony import */ var _images_wine_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/wine.svg */ "./src/images/wine.svg");





function loadHero() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    //hero
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const herophoto = new Image();
    herophoto.src = _images_herophoto_jpg__WEBPACK_IMPORTED_MODULE_0__;
    herophoto.alt = "Restaurant hero banner photo";
    hero.appendChild(herophoto);
    const heroText = document.createElement('div');
    heroText.classList.add('heroText');
    heroText.innerHTML = `<h1>Delicious Food,
        <br>Quality Ingredients,
        <br>Farm to Table</h1>`;
    const heroButton = document.createElement('button');
    heroButton.innerText = "Explore Menu";
    heroText.appendChild(heroButton);
    hero.appendChild(heroText);
    container.appendChild(hero);

    //quote
    const quote = document.createElement('div');
    quote.classList.add('quote');
    quote.innerHTML = `<h3>Delicious healthy meals<br>Made with the freshest of ingredients</h3>`;
    container.appendChild(quote);

    //features
    const features = document.createElement('div');
    features.classList.add('features');
    const feature1 = document.createElement('div');
    feature1.classList.add('feature');
    const farm = new Image();
    farm.src = _images_farm_svg__WEBPACK_IMPORTED_MODULE_1__;
    farm.alt = "Farm Icon";
    feature1.appendChild(farm);
    const farmh4 = document.createElement('h4');
    farmh4.innerText = "Farm Fresh";
    feature1.appendChild(farmh4);
    feature1.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    const feature2 = document.createElement('div');
    feature2.classList.add('feature');
    const heart = new Image();
    heart.src = _images_heart_svg__WEBPACK_IMPORTED_MODULE_2__;
    heart.alt = "Heart Icon";
    feature2.appendChild(heart);
    const hearth4 = document.createElement('h4');
    hearth4.innerText = "Healthy Food";
    feature2.appendChild(hearth4);
    feature2.append("Nullam tempus ut erat vel fermentum. Morbi venenatis pharetra mauris.");
    const feature3 = document.createElement('div');
    feature3.classList.add('feature');
    const wine = new Image();
    wine.src = _images_wine_svg__WEBPACK_IMPORTED_MODULE_3__;
    wine.alt = "Wine Icon";
    feature3.appendChild(wine);
    const wineh4 = document.createElement('h4');
    wineh4.innerText = "Wine Pairings";
    feature3.appendChild(wineh4);
    feature3.append("Fusce diam augue, porttitor a porttitor et, finibus at augue.");


    features.appendChild(feature1);
    features.appendChild(feature2);
    features.appendChild(feature3);

    container.appendChild(features);


    return;

}

/***/ }),

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadHomepage)
/* harmony export */ });
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/logo.svg */ "./src/images/logo.svg");
/* harmony import */ var _images_herophoto_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/herophoto.jpg */ "./src/images/herophoto.jpg");
/* harmony import */ var _images_farm_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/farm.svg */ "./src/images/farm.svg");
/* harmony import */ var _images_heart_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/heart.svg */ "./src/images/heart.svg");
/* harmony import */ var _images_wine_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/wine.svg */ "./src/images/wine.svg");
/* harmony import */ var _images_github_mark_small_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/github-mark-small.svg */ "./src/images/github-mark-small.svg");
/* harmony import */ var _homehero_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homehero.js */ "./src/homehero.js");









function loadHomepage() {
    const content = document.getElementById("content");

    const window = document.createElement('div');
    window.classList.add('window');

    window.appendChild(loadHeader());
    window.appendChild(loadHomeContainer());
    window.appendChild(loadFooter());

    content.appendChild(window);
    const br = document.createElement('br');
    content.appendChild(br);
}

function loadHeader() {
    
    const header = document.createElement('div');
    header.classList.add('header');

    //Logo and Restaurant Name
    const logoDiv = document.createElement('div');
    logoDiv.classList.add("logo");
    const logo = new Image();
    logo.src = _images_logo_svg__WEBPACK_IMPORTED_MODULE_0__;
    logo.alt = "Restaurant Logo";
    logoDiv.appendChild(logo);
    const h2 = document.createElement('h2');
    h2.innerText = "Basil's";
    logoDiv.appendChild(h2);
    header.appendChild(logoDiv);


    //Navigation links
    const navList = document.createElement('ul');
    navList.classList.add("navList");
    const linkList = ["Home", "Menu", "Our Story", "Contact Us"];
    for (const link of linkList) {
        const li = document.createElement('li');
        const a = document.createElement('a');

        a.setAttribute("href", "#");
        a.setAttribute("id", link);
        a.innerText = link;

        li.appendChild(a);

        navList.appendChild(li);
    }
    header.appendChild(navList);

    return header;

}

function loadHomeContainer () {

    const container = document.createElement('div');
    container.classList.add('container');
    container.id = "container";

    //hero
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const herophoto = new Image();
    herophoto.src = _images_herophoto_jpg__WEBPACK_IMPORTED_MODULE_1__;
    herophoto.alt = "Restaurant hero banner photo";
    hero.appendChild(herophoto);
    const heroText = document.createElement('div');
    heroText.classList.add('heroText');
    heroText.innerHTML = `<h1>Delicious Food,
        <br>Quality Ingredients,
        <br>Farm to Table</h1>`;
    const heroButton = document.createElement('button');
    heroButton.innerText = "Explore Menu";
    heroText.appendChild(heroButton);
    hero.appendChild(heroText);
    container.appendChild(hero);

    //quote
    const quote = document.createElement('div');
    quote.classList.add('quote');
    quote.innerHTML = `<h3>Delicious healthy meals<br>Made with the freshest of ingredients</h3>`;
    container.appendChild(quote);

    //features
    const features = document.createElement('div');
    features.classList.add('features');
    const feature1 = document.createElement('div');
    feature1.classList.add('feature');
    const farm = new Image();
    farm.src = _images_farm_svg__WEBPACK_IMPORTED_MODULE_2__;
    farm.alt = "Farm Icon";
    feature1.appendChild(farm);
    const farmh4 = document.createElement('h4');
    farmh4.innerText = "Farm Fresh";
    feature1.appendChild(farmh4);
    feature1.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    const feature2 = document.createElement('div');
    feature2.classList.add('feature');
    const heart = new Image();
    heart.src = _images_heart_svg__WEBPACK_IMPORTED_MODULE_3__;
    heart.alt = "Heart Icon";
    feature2.appendChild(heart);
    const hearth4 = document.createElement('h4');
    hearth4.innerText = "Healthy Food";
    feature2.appendChild(hearth4);
    feature2.append("Nullam tempus ut erat vel fermentum. Morbi venenatis pharetra mauris.");
    const feature3 = document.createElement('div');
    feature3.classList.add('feature');
    const wine = new Image();
    wine.src = _images_wine_svg__WEBPACK_IMPORTED_MODULE_4__;
    wine.alt = "Wine Icon";
    feature3.appendChild(wine);
    const wineh4 = document.createElement('h4');
    wineh4.innerText = "Wine Pairings";
    feature3.appendChild(wineh4);
    feature3.append("Fusce diam augue, porttitor a porttitor et, finibus at augue.");


    features.appendChild(feature1);
    features.appendChild(feature2);
    features.appendChild(feature3);

    container.appendChild(features);

    return container;

}

function loadFooter () {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const a = document.createElement('a');
    a.setAttribute("href", "https://github.com/maggielau");
    a.setAttribute("target", "_blank");

    const gitLogo = new Image();
    gitLogo.src = _images_github_mark_small_svg__WEBPACK_IMPORTED_MODULE_5__;
    gitLogo.alt = "Maggie's Github";

    a.appendChild(gitLogo);

    footer.appendChild(a);
    footer.append("Maggie Lau");

    return footer;


}



/***/ }),

/***/ "./src/story.js":
/*!**********************!*\
  !*** ./src/story.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadStory)
/* harmony export */ });
function loadStory() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    const story = document.createElement('div');
    story.className = "story";
    story.id = "story";

    story.append("Our Story Div");

    container.appendChild(story);

    return;

}

/***/ }),

/***/ "./src/images/farm.svg":
/*!*****************************!*\
  !*** ./src/images/farm.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "07563dcc40fd74840616.svg";

/***/ }),

/***/ "./src/images/github-mark-small.svg":
/*!******************************************!*\
  !*** ./src/images/github-mark-small.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b1db274a828883878cc3.svg";

/***/ }),

/***/ "./src/images/heart.svg":
/*!******************************!*\
  !*** ./src/images/heart.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6fe591d42e09ee1ef9bd.svg";

/***/ }),

/***/ "./src/images/herophoto.jpg":
/*!**********************************!*\
  !*** ./src/images/herophoto.jpg ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "266993fb3f57f0551eb5.jpg";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ef0c19a47cc488845d5.svg";

/***/ }),

/***/ "./src/images/wine.svg":
/*!*****************************!*\
  !*** ./src/images/wine.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "696478191f5da8b367fe.svg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _story_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./story.js */ "./src/story.js");
/* harmony import */ var _homepage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homepage.js */ "./src/homepage.js");
/* harmony import */ var _homehero_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homehero.js */ "./src/homehero.js");




(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

//event listeners for links
var homeLink = document.getElementById("Home");
homeLink.addEventListener("click", () => (0,_homehero_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

var menuLink = document.getElementById("Menu");
menuLink.addEventListener("click", () => console.log("clicked menu"));

var storyLink = document.getElementById("Our Story");
storyLink.addEventListener("click", () => (0,_story_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

var contactLink = document.getElementById("Contact Us");
contactLink.addEventListener("click", () => console.log("clicked contact"));
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVaO0FBQ0E7QUFDQSx5Q0FBeUMsd0RBQVE7O0FBRWpEO0FBQ0E7O0FBRUE7QUFDQSwwQ0FBMEMscURBQVM7O0FBRW5EO0FBQ0EsNEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZWhlcm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWVwYWdlLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdG9yeS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBoZXJvUGhvdG8gZnJvbSAnLi9pbWFnZXMvaGVyb3Bob3RvLmpwZyc7XG5pbXBvcnQgZmFybUltZyBmcm9tICcuL2ltYWdlcy9mYXJtLnN2Zyc7XG5pbXBvcnQgaGVhcnRJbWcgZnJvbSAnLi9pbWFnZXMvaGVhcnQuc3ZnJztcbmltcG9ydCB3aW5lSW1nIGZyb20gJy4vaW1hZ2VzL3dpbmUuc3ZnJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhlcm8oKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgLy9oZXJvXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIGNvbnN0IGhlcm9waG90byA9IG5ldyBJbWFnZSgpO1xuICAgIGhlcm9waG90by5zcmMgPSBoZXJvUGhvdG87XG4gICAgaGVyb3Bob3RvLmFsdCA9IFwiUmVzdGF1cmFudCBoZXJvIGJhbm5lciBwaG90b1wiO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb3Bob3RvKTtcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2hlcm9UZXh0Jyk7XG4gICAgaGVyb1RleHQuaW5uZXJIVE1MID0gYDxoMT5EZWxpY2lvdXMgRm9vZCxcbiAgICAgICAgPGJyPlF1YWxpdHkgSW5ncmVkaWVudHMsXG4gICAgICAgIDxicj5GYXJtIHRvIFRhYmxlPC9oMT5gO1xuICAgIGNvbnN0IGhlcm9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoZXJvQnV0dG9uLmlubmVyVGV4dCA9IFwiRXhwbG9yZSBNZW51XCI7XG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb0J1dHRvbik7XG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gICAgLy9xdW90ZVxuICAgIGNvbnN0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKTtcbiAgICBxdW90ZS5pbm5lckhUTUwgPSBgPGgzPkRlbGljaW91cyBoZWFsdGh5IG1lYWxzPGJyPk1hZGUgd2l0aCB0aGUgZnJlc2hlc3Qgb2YgaW5ncmVkaWVudHM8L2gzPmA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHF1b3RlKTtcblxuICAgIC8vZmVhdHVyZXNcbiAgICBjb25zdCBmZWF0dXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVzLmNsYXNzTGlzdC5hZGQoJ2ZlYXR1cmVzJyk7XG4gICAgY29uc3QgZmVhdHVyZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlMS5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlJyk7XG4gICAgY29uc3QgZmFybSA9IG5ldyBJbWFnZSgpO1xuICAgIGZhcm0uc3JjID0gZmFybUltZztcbiAgICBmYXJtLmFsdCA9IFwiRmFybSBJY29uXCI7XG4gICAgZmVhdHVyZTEuYXBwZW5kQ2hpbGQoZmFybSk7XG4gICAgY29uc3QgZmFybWg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmYXJtaDQuaW5uZXJUZXh0ID0gXCJGYXJtIEZyZXNoXCI7XG4gICAgZmVhdHVyZTEuYXBwZW5kQ2hpbGQoZmFybWg0KTtcbiAgICBmZWF0dXJlMS5hcHBlbmQoXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlwiKTtcbiAgICBjb25zdCBmZWF0dXJlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmUyLmNsYXNzTGlzdC5hZGQoJ2ZlYXR1cmUnKTtcbiAgICBjb25zdCBoZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgIGhlYXJ0LnNyYyA9IGhlYXJ0SW1nO1xuICAgIGhlYXJ0LmFsdCA9IFwiSGVhcnQgSWNvblwiO1xuICAgIGZlYXR1cmUyLmFwcGVuZENoaWxkKGhlYXJ0KTtcbiAgICBjb25zdCBoZWFydGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBoZWFydGg0LmlubmVyVGV4dCA9IFwiSGVhbHRoeSBGb29kXCI7XG4gICAgZmVhdHVyZTIuYXBwZW5kQ2hpbGQoaGVhcnRoNCk7XG4gICAgZmVhdHVyZTIuYXBwZW5kKFwiTnVsbGFtIHRlbXB1cyB1dCBlcmF0IHZlbCBmZXJtZW50dW0uIE1vcmJpIHZlbmVuYXRpcyBwaGFyZXRyYSBtYXVyaXMuXCIpO1xuICAgIGNvbnN0IGZlYXR1cmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZTMuY2xhc3NMaXN0LmFkZCgnZmVhdHVyZScpO1xuICAgIGNvbnN0IHdpbmUgPSBuZXcgSW1hZ2UoKTtcbiAgICB3aW5lLnNyYyA9IHdpbmVJbWc7XG4gICAgd2luZS5hbHQgPSBcIldpbmUgSWNvblwiO1xuICAgIGZlYXR1cmUzLmFwcGVuZENoaWxkKHdpbmUpO1xuICAgIGNvbnN0IHdpbmVoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgd2luZWg0LmlubmVyVGV4dCA9IFwiV2luZSBQYWlyaW5nc1wiO1xuICAgIGZlYXR1cmUzLmFwcGVuZENoaWxkKHdpbmVoNCk7XG4gICAgZmVhdHVyZTMuYXBwZW5kKFwiRnVzY2UgZGlhbSBhdWd1ZSwgcG9ydHRpdG9yIGEgcG9ydHRpdG9yIGV0LCBmaW5pYnVzIGF0IGF1Z3VlLlwiKTtcblxuXG4gICAgZmVhdHVyZXMuYXBwZW5kQ2hpbGQoZmVhdHVyZTEpO1xuICAgIGZlYXR1cmVzLmFwcGVuZENoaWxkKGZlYXR1cmUyKTtcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZWF0dXJlMyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZXMpO1xuXG5cbiAgICByZXR1cm47XG5cbn0iLCJpbXBvcnQgbG9nb0ltZyBmcm9tICcuL2ltYWdlcy9sb2dvLnN2Zyc7XG5pbXBvcnQgaGVyb1Bob3RvIGZyb20gJy4vaW1hZ2VzL2hlcm9waG90by5qcGcnO1xuaW1wb3J0IGZhcm1JbWcgZnJvbSAnLi9pbWFnZXMvZmFybS5zdmcnO1xuaW1wb3J0IGhlYXJ0SW1nIGZyb20gJy4vaW1hZ2VzL2hlYXJ0LnN2Zyc7XG5pbXBvcnQgd2luZUltZyBmcm9tICcuL2ltYWdlcy93aW5lLnN2Zyc7XG5pbXBvcnQgZ2l0aHViSW1nIGZyb20gJy4vaW1hZ2VzL2dpdGh1Yi1tYXJrLXNtYWxsLnN2Zyc7XG5pbXBvcnQgbG9hZEhlcm8gZnJvbSAnLi9ob21laGVyby5qcyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZEhvbWVwYWdlKCkge1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICBjb25zdCB3aW5kb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB3aW5kb3cuY2xhc3NMaXN0LmFkZCgnd2luZG93Jyk7XG5cbiAgICB3aW5kb3cuYXBwZW5kQ2hpbGQobG9hZEhlYWRlcigpKTtcbiAgICB3aW5kb3cuYXBwZW5kQ2hpbGQobG9hZEhvbWVDb250YWluZXIoKSk7XG4gICAgd2luZG93LmFwcGVuZENoaWxkKGxvYWRGb290ZXIoKSk7XG5cbiAgICBjb250ZW50LmFwcGVuZENoaWxkKHdpbmRvdyk7XG4gICAgY29uc3QgYnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdicicpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnIpO1xufVxuXG5mdW5jdGlvbiBsb2FkSGVhZGVyKCkge1xuICAgIFxuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlYWRlci5jbGFzc0xpc3QuYWRkKCdoZWFkZXInKTtcblxuICAgIC8vTG9nbyBhbmQgUmVzdGF1cmFudCBOYW1lXG4gICAgY29uc3QgbG9nb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGxvZ29EaXYuY2xhc3NMaXN0LmFkZChcImxvZ29cIik7XG4gICAgY29uc3QgbG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGxvZ28uc3JjID0gbG9nb0ltZztcbiAgICBsb2dvLmFsdCA9IFwiUmVzdGF1cmFudCBMb2dvXCI7XG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZChsb2dvKTtcbiAgICBjb25zdCBoMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gyJyk7XG4gICAgaDIuaW5uZXJUZXh0ID0gXCJCYXNpbCdzXCI7XG4gICAgbG9nb0Rpdi5hcHBlbmRDaGlsZChoMik7XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKGxvZ29EaXYpO1xuXG5cbiAgICAvL05hdmlnYXRpb24gbGlua3NcbiAgICBjb25zdCBuYXZMaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndWwnKTtcbiAgICBuYXZMaXN0LmNsYXNzTGlzdC5hZGQoXCJuYXZMaXN0XCIpO1xuICAgIGNvbnN0IGxpbmtMaXN0ID0gW1wiSG9tZVwiLCBcIk1lbnVcIiwgXCJPdXIgU3RvcnlcIiwgXCJDb250YWN0IFVzXCJdO1xuICAgIGZvciAoY29uc3QgbGluayBvZiBsaW5rTGlzdCkge1xuICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG5cbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIFwiI1wiKTtcbiAgICAgICAgYS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBsaW5rKTtcbiAgICAgICAgYS5pbm5lclRleHQgPSBsaW5rO1xuXG4gICAgICAgIGxpLmFwcGVuZENoaWxkKGEpO1xuXG4gICAgICAgIG5hdkxpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgIH1cbiAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobmF2TGlzdCk7XG5cbiAgICByZXR1cm4gaGVhZGVyO1xuXG59XG5cbmZ1bmN0aW9uIGxvYWRIb21lQ29udGFpbmVyICgpIHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdjb250YWluZXInKTtcbiAgICBjb250YWluZXIuaWQgPSBcImNvbnRhaW5lclwiO1xuXG4gICAgLy9oZXJvXG4gICAgY29uc3QgaGVybyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm8uY2xhc3NMaXN0LmFkZCgnaGVybycpO1xuICAgIGNvbnN0IGhlcm9waG90byA9IG5ldyBJbWFnZSgpO1xuICAgIGhlcm9waG90by5zcmMgPSBoZXJvUGhvdG87XG4gICAgaGVyb3Bob3RvLmFsdCA9IFwiUmVzdGF1cmFudCBoZXJvIGJhbm5lciBwaG90b1wiO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb3Bob3RvKTtcbiAgICBjb25zdCBoZXJvVGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGhlcm9UZXh0LmNsYXNzTGlzdC5hZGQoJ2hlcm9UZXh0Jyk7XG4gICAgaGVyb1RleHQuaW5uZXJIVE1MID0gYDxoMT5EZWxpY2lvdXMgRm9vZCxcbiAgICAgICAgPGJyPlF1YWxpdHkgSW5ncmVkaWVudHMsXG4gICAgICAgIDxicj5GYXJtIHRvIFRhYmxlPC9oMT5gO1xuICAgIGNvbnN0IGhlcm9CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBoZXJvQnV0dG9uLmlubmVyVGV4dCA9IFwiRXhwbG9yZSBNZW51XCI7XG4gICAgaGVyb1RleHQuYXBwZW5kQ2hpbGQoaGVyb0J1dHRvbik7XG4gICAgaGVyby5hcHBlbmRDaGlsZChoZXJvVGV4dCk7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGhlcm8pO1xuXG4gICAgLy9xdW90ZVxuICAgIGNvbnN0IHF1b3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgcXVvdGUuY2xhc3NMaXN0LmFkZCgncXVvdGUnKTtcbiAgICBxdW90ZS5pbm5lckhUTUwgPSBgPGgzPkRlbGljaW91cyBoZWFsdGh5IG1lYWxzPGJyPk1hZGUgd2l0aCB0aGUgZnJlc2hlc3Qgb2YgaW5ncmVkaWVudHM8L2gzPmA7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHF1b3RlKTtcblxuICAgIC8vZmVhdHVyZXNcbiAgICBjb25zdCBmZWF0dXJlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmVzLmNsYXNzTGlzdC5hZGQoJ2ZlYXR1cmVzJyk7XG4gICAgY29uc3QgZmVhdHVyZTEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlMS5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlJyk7XG4gICAgY29uc3QgZmFybSA9IG5ldyBJbWFnZSgpO1xuICAgIGZhcm0uc3JjID0gZmFybUltZztcbiAgICBmYXJtLmFsdCA9IFwiRmFybSBJY29uXCI7XG4gICAgZmVhdHVyZTEuYXBwZW5kQ2hpbGQoZmFybSk7XG4gICAgY29uc3QgZmFybWg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBmYXJtaDQuaW5uZXJUZXh0ID0gXCJGYXJtIEZyZXNoXCI7XG4gICAgZmVhdHVyZTEuYXBwZW5kQ2hpbGQoZmFybWg0KTtcbiAgICBmZWF0dXJlMS5hcHBlbmQoXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzY2luZyBlbGl0LlwiKTtcbiAgICBjb25zdCBmZWF0dXJlMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmUyLmNsYXNzTGlzdC5hZGQoJ2ZlYXR1cmUnKTtcbiAgICBjb25zdCBoZWFydCA9IG5ldyBJbWFnZSgpO1xuICAgIGhlYXJ0LnNyYyA9IGhlYXJ0SW1nO1xuICAgIGhlYXJ0LmFsdCA9IFwiSGVhcnQgSWNvblwiO1xuICAgIGZlYXR1cmUyLmFwcGVuZENoaWxkKGhlYXJ0KTtcbiAgICBjb25zdCBoZWFydGg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBoZWFydGg0LmlubmVyVGV4dCA9IFwiSGVhbHRoeSBGb29kXCI7XG4gICAgZmVhdHVyZTIuYXBwZW5kQ2hpbGQoaGVhcnRoNCk7XG4gICAgZmVhdHVyZTIuYXBwZW5kKFwiTnVsbGFtIHRlbXB1cyB1dCBlcmF0IHZlbCBmZXJtZW50dW0uIE1vcmJpIHZlbmVuYXRpcyBwaGFyZXRyYSBtYXVyaXMuXCIpO1xuICAgIGNvbnN0IGZlYXR1cmUzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZTMuY2xhc3NMaXN0LmFkZCgnZmVhdHVyZScpO1xuICAgIGNvbnN0IHdpbmUgPSBuZXcgSW1hZ2UoKTtcbiAgICB3aW5lLnNyYyA9IHdpbmVJbWc7XG4gICAgd2luZS5hbHQgPSBcIldpbmUgSWNvblwiO1xuICAgIGZlYXR1cmUzLmFwcGVuZENoaWxkKHdpbmUpO1xuICAgIGNvbnN0IHdpbmVoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgd2luZWg0LmlubmVyVGV4dCA9IFwiV2luZSBQYWlyaW5nc1wiO1xuICAgIGZlYXR1cmUzLmFwcGVuZENoaWxkKHdpbmVoNCk7XG4gICAgZmVhdHVyZTMuYXBwZW5kKFwiRnVzY2UgZGlhbSBhdWd1ZSwgcG9ydHRpdG9yIGEgcG9ydHRpdG9yIGV0LCBmaW5pYnVzIGF0IGF1Z3VlLlwiKTtcblxuXG4gICAgZmVhdHVyZXMuYXBwZW5kQ2hpbGQoZmVhdHVyZTEpO1xuICAgIGZlYXR1cmVzLmFwcGVuZENoaWxkKGZlYXR1cmUyKTtcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZWF0dXJlMyk7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZmVhdHVyZXMpO1xuXG4gICAgcmV0dXJuIGNvbnRhaW5lcjtcblxufVxuXG5mdW5jdGlvbiBsb2FkRm9vdGVyICgpIHtcbiAgICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmb290ZXIuY2xhc3NMaXN0LmFkZCgnZm9vdGVyJyk7XG5cbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcImh0dHBzOi8vZ2l0aHViLmNvbS9tYWdnaWVsYXVcIik7XG4gICAgYS5zZXRBdHRyaWJ1dGUoXCJ0YXJnZXRcIiwgXCJfYmxhbmtcIik7XG5cbiAgICBjb25zdCBnaXRMb2dvID0gbmV3IEltYWdlKCk7XG4gICAgZ2l0TG9nby5zcmMgPSBnaXRodWJJbWc7XG4gICAgZ2l0TG9nby5hbHQgPSBcIk1hZ2dpZSdzIEdpdGh1YlwiO1xuXG4gICAgYS5hcHBlbmRDaGlsZChnaXRMb2dvKTtcblxuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChhKTtcbiAgICBmb290ZXIuYXBwZW5kKFwiTWFnZ2llIExhdVwiKTtcblxuICAgIHJldHVybiBmb290ZXI7XG5cblxufVxuXG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBsb2FkU3RvcnkoKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgY29uc3Qgc3RvcnkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBzdG9yeS5jbGFzc05hbWUgPSBcInN0b3J5XCI7XG4gICAgc3RvcnkuaWQgPSBcInN0b3J5XCI7XG5cbiAgICBzdG9yeS5hcHBlbmQoXCJPdXIgU3RvcnkgRGl2XCIpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0b3J5KTtcblxuICAgIHJldHVybjtcblxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBsb2FkU3RvcnkgZnJvbSAnLi9zdG9yeS5qcyc7XG5pbXBvcnQgbG9hZEhvbWVwYWdlIGZyb20gJy4vaG9tZXBhZ2UuanMnO1xuaW1wb3J0IGxvYWRIZXJvIGZyb20gJy4vaG9tZWhlcm8uanMnO1xuXG5sb2FkSG9tZXBhZ2UoKTtcblxuLy9ldmVudCBsaXN0ZW5lcnMgZm9yIGxpbmtzXG52YXIgaG9tZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkhvbWVcIik7XG5ob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9hZEhlcm8oKSk7XG5cbnZhciBtZW51TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWVudVwiKTtcbm1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcImNsaWNrZWQgbWVudVwiKSk7XG5cbnZhciBzdG9yeUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk91ciBTdG9yeVwiKTtcbnN0b3J5TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9hZFN0b3J5KCkpO1xuXG52YXIgY29udGFjdExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNvbnRhY3QgVXNcIik7XG5jb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gY29uc29sZS5sb2coXCJjbGlja2VkIGNvbnRhY3RcIikpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==