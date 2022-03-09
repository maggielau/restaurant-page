/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadContact)
/* harmony export */ });
function loadContact() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    let hoursTable = document.createElement('table');
    let hours = [
        {day: "Mon", opHours: "11am to 9pm"},
        {day: "Tue", opHours: "Closed"},
        {day: "Wed", opHours: "Closed"},
        {day: "Thu", opHours: "11am to 9pm"},
        {day: "Fri", opHours: "9am to 11pm"},
        {day: "Sat", opHours: "9am to 11pm"},
        {day: "Sun", opHours: "9am to 9pm"}
    ];

    const contact = document.createElement('div');
    contact.className = "contact";
    contact.id = "contact";

    const h1 = document.createElement('h1');
    h1.innerText = "Contact Us";
    contact.appendChild(h1);

    const hoursh4 = document.createElement('h4');
    hoursh4.innerText = "Hours"
    contact.appendChild(hoursh4);
    const hoursh5 = document.createElement('span');
    generateHoursTable(hoursTable, hours);
    contact.appendChild(hoursTable);


    const phoneh4 = document.createElement('h4');
    phoneh4.innerText = "Phone Number"
    contact.appendChild(phoneh4);
    const phoneh5 = document.createElement('span');
    phoneh5.innerText = "555-555-5555"
    contact.appendChild(phoneh5);

    const emailh4 = document.createElement('h4');
    emailh4.innerText = "Email"
    contact.appendChild(emailh4);
    const emailh5 = document.createElement('span');
    emailh5.innerText = "info@basilsrestaurant.com"
    contact.appendChild(emailh5);

    const locationh4 = document.createElement('h4');
    locationh4.innerText = "Location"
    contact.appendChild(locationh4);
    const locationh5 = document.createElement('span');
    locationh5.innerText = "1584 Fake St., Null City, Unknown NA"
    contact.appendChild(locationh5);
    const map = document.createElement('div');
    map.className = "map";
    map.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d606.8688566571899!2d-79.3804084435017!3d43.65293156346869!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34cb507beb01%3A0x1f79ee643fed4f0c!2sDowntown%20Toronto%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1646867982947!5m2!1sen!2sca" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    contact.appendChild(map);




    container.appendChild(contact);

    return;

}

function generateHoursTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (let key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }

/***/ }),

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
/* harmony import */ var _images_story1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/story1.jpg */ "./src/images/story1.jpg");
/* harmony import */ var _images_story2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/story2.jpg */ "./src/images/story2.jpg");




function loadStory() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    const story = document.createElement('div');
    story.className = "story";
    story.id = "story";

    const h1 = document.createElement('h1');
    h1.innerText = "Our Story";
    story.appendChild(h1);

    const story1 = document.createElement('div');
    story1.id = "story1";
    const story1pic = new Image();
    story1pic.src = _images_story1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    story1pic.alt = "Restaurant prep";
    story1.appendChild(story1pic);
    const story1text = document.createElement('p');
    story1text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam odio eros, sodales sed commodo quis, vestibulum vitae lectus. Nunc at ipsum tellus. Maecenas mollis ullamcorper nisi, vel laoreet urna condimentum ut. Vestibulum a urna ante. Sed pharetra porttitor lacus sit amet posuere. Morbi vel dui augue. Quisque ante nulla, malesuada et sodales at, condimentum eu tellus. In convallis nisi non dui faucibus, a gravida sem aliquet."
    story1.appendChild(story1text);

    const story2 = document.createElement('div');
    story2.id = "story2";
    const story2pic = new Image();
    story2pic.src = _images_story2_jpg__WEBPACK_IMPORTED_MODULE_1__;
    story2pic.alt = "Farm Ingredients";
    const story2text = document.createElement('p');
    story2text.textContent = "Etiam et fermentum diam, vitae venenatis erat. Praesent lacinia felis in sodales feugiat. Pellentesque fermentum odio eget commodo tristique. Integer porta tortor elementum sagittis ornare. Fusce imperdiet luctus accumsan. Morbi vehicula mauris sit amet risus vulputate dignissim. Nunc iaculis turpis a egestas imperdiet."
    story2.appendChild(story2text);
    story2.appendChild(story2pic);


    story.append(story1);
    story.append(story2);
    

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

/***/ "./src/images/story1.jpg":
/*!*******************************!*\
  !*** ./src/images/story1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0499edcf4be7ba4c49c5.jpg";

/***/ }),

/***/ "./src/images/story2.jpg":
/*!*******************************!*\
  !*** ./src/images/story2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "88b3a8bc2907649c2f70.jpg";

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
/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact.js */ "./src/contact.js");





(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

//event listeners for links
var homeLink = document.getElementById("Home");
homeLink.addEventListener("click", () => (0,_homehero_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

var menuLink = document.getElementById("Menu");
menuLink.addEventListener("click", () => console.log("clicked menu"));

var storyLink = document.getElementById("Our Story");
storyLink.addEventListener("click", () => (0,_story_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

var contactLink = document.getElementById("Contact Us");
contactLink.addEventListener("click", () => (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLCtDQUFTO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMvQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ2ZtQztBQUNNO0FBQ0o7QUFDRTs7QUFFdkMsd0RBQVk7O0FBRVo7QUFDQTtBQUNBLHlDQUF5Qyx3REFBUTs7QUFFakQ7QUFDQTs7QUFFQTtBQUNBLDBDQUEwQyxxREFBUzs7QUFFbkQ7QUFDQSw0Q0FBNEMsdURBQVcsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21laGVyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0b3J5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbGV0IGhvdXJzVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIGxldCBob3VycyA9IFtcbiAgICAgICAge2RheTogXCJNb25cIiwgb3BIb3VyczogXCIxMWFtIHRvIDlwbVwifSxcbiAgICAgICAge2RheTogXCJUdWVcIiwgb3BIb3VyczogXCJDbG9zZWRcIn0sXG4gICAgICAgIHtkYXk6IFwiV2VkXCIsIG9wSG91cnM6IFwiQ2xvc2VkXCJ9LFxuICAgICAgICB7ZGF5OiBcIlRodVwiLCBvcEhvdXJzOiBcIjExYW0gdG8gOXBtXCJ9LFxuICAgICAgICB7ZGF5OiBcIkZyaVwiLCBvcEhvdXJzOiBcIjlhbSB0byAxMXBtXCJ9LFxuICAgICAgICB7ZGF5OiBcIlNhdFwiLCBvcEhvdXJzOiBcIjlhbSB0byAxMXBtXCJ9LFxuICAgICAgICB7ZGF5OiBcIlN1blwiLCBvcEhvdXJzOiBcIjlhbSB0byA5cG1cIn1cbiAgICBdO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NOYW1lID0gXCJjb250YWN0XCI7XG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLmlubmVyVGV4dCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgaG91cnNoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaG91cnNoNC5pbm5lclRleHQgPSBcIkhvdXJzXCJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGhvdXJzaDQpO1xuICAgIGNvbnN0IGhvdXJzaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZ2VuZXJhdGVIb3Vyc1RhYmxlKGhvdXJzVGFibGUsIGhvdXJzKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGhvdXJzVGFibGUpO1xuXG5cbiAgICBjb25zdCBwaG9uZWg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBwaG9uZWg0LmlubmVyVGV4dCA9IFwiUGhvbmUgTnVtYmVyXCJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBob25laDQpO1xuICAgIGNvbnN0IHBob25laDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGhvbmVoNS5pbm5lclRleHQgPSBcIjU1NS01NTUtNTU1NVwiXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZWg1KTtcblxuICAgIGNvbnN0IGVtYWlsaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGVtYWlsaDQuaW5uZXJUZXh0ID0gXCJFbWFpbFwiXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChlbWFpbGg0KTtcbiAgICBjb25zdCBlbWFpbGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVtYWlsaDUuaW5uZXJUZXh0ID0gXCJpbmZvQGJhc2lsc3Jlc3RhdXJhbnQuY29tXCJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGVtYWlsaDUpO1xuXG4gICAgY29uc3QgbG9jYXRpb25oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbG9jYXRpb25oNC5pbm5lclRleHQgPSBcIkxvY2F0aW9uXCJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGxvY2F0aW9uaDQpO1xuICAgIGNvbnN0IGxvY2F0aW9uaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbG9jYXRpb25oNS5pbm5lclRleHQgPSBcIjE1ODQgRmFrZSBTdC4sIE51bGwgQ2l0eSwgVW5rbm93biBOQVwiXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChsb2NhdGlvbmg1KTtcbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXAuY2xhc3NOYW1lID0gXCJtYXBcIjtcbiAgICBtYXAuaW5uZXJIVE1MID0gYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNjA2Ljg2ODg1NjY1NzE4OTkhMmQtNzkuMzgwNDA4NDQzNTAxNyEzZDQzLjY1MjkzMTU2MzQ2ODY5ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODJiMzRjYjUwN2JlYjAxJTNBMHgxZjc5ZWU2NDNmZWQ0ZjBjITJzRG93bnRvd24lMjBUb3JvbnRvJTJDJTIwVG9yb250byUyQyUyME9OITVlMCEzbTIhMXNlbiEyc2NhITR2MTY0Njg2Nzk4Mjk0NyE1bTIhMXNlbiEyc2NhXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWU+YDtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1hcCk7XG5cblxuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICByZXR1cm47XG5cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIb3Vyc1RhYmxlKHRhYmxlLCBkYXRhKSB7XG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XG4gICAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gZWxlbWVudCkge1xuICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCJpbXBvcnQgaGVyb1Bob3RvIGZyb20gJy4vaW1hZ2VzL2hlcm9waG90by5qcGcnO1xuaW1wb3J0IGZhcm1JbWcgZnJvbSAnLi9pbWFnZXMvZmFybS5zdmcnO1xuaW1wb3J0IGhlYXJ0SW1nIGZyb20gJy4vaW1hZ2VzL2hlYXJ0LnN2Zyc7XG5pbXBvcnQgd2luZUltZyBmcm9tICcuL2ltYWdlcy93aW5lLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIZXJvKCkge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vaGVyb1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBjb25zdCBoZXJvcGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBoZXJvcGhvdG8uc3JjID0gaGVyb1Bob3RvO1xuICAgIGhlcm9waG90by5hbHQgPSBcIlJlc3RhdXJhbnQgaGVybyBiYW5uZXIgcGhvdG9cIjtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9waG90byk7XG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvVGV4dCcpO1xuICAgIGhlcm9UZXh0LmlubmVySFRNTCA9IGA8aDE+RGVsaWNpb3VzIEZvb2QsXG4gICAgICAgIDxicj5RdWFsaXR5IEluZ3JlZGllbnRzLFxuICAgICAgICA8YnI+RmFybSB0byBUYWJsZTwvaDE+YDtcbiAgICBjb25zdCBoZXJvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGVyb0J1dHRvbi5pbm5lclRleHQgPSBcIkV4cGxvcmUgTWVudVwiO1xuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9CdXR0b24pO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIC8vcXVvdGVcbiAgICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHF1b3RlLmNsYXNzTGlzdC5hZGQoJ3F1b3RlJyk7XG4gICAgcXVvdGUuaW5uZXJIVE1MID0gYDxoMz5EZWxpY2lvdXMgaGVhbHRoeSBtZWFsczxicj5NYWRlIHdpdGggdGhlIGZyZXNoZXN0IG9mIGluZ3JlZGllbnRzPC9oMz5gO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChxdW90ZSk7XG5cbiAgICAvL2ZlYXR1cmVzXG4gICAgY29uc3QgZmVhdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlcy5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlcycpO1xuICAgIGNvbnN0IGZlYXR1cmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZTEuY2xhc3NMaXN0LmFkZCgnZmVhdHVyZScpO1xuICAgIGNvbnN0IGZhcm0gPSBuZXcgSW1hZ2UoKTtcbiAgICBmYXJtLnNyYyA9IGZhcm1JbWc7XG4gICAgZmFybS5hbHQgPSBcIkZhcm0gSWNvblwiO1xuICAgIGZlYXR1cmUxLmFwcGVuZENoaWxkKGZhcm0pO1xuICAgIGNvbnN0IGZhcm1oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZmFybWg0LmlubmVyVGV4dCA9IFwiRmFybSBGcmVzaFwiO1xuICAgIGZlYXR1cmUxLmFwcGVuZENoaWxkKGZhcm1oNCk7XG4gICAgZmVhdHVyZTEuYXBwZW5kKFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIik7XG4gICAgY29uc3QgZmVhdHVyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlMi5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlJyk7XG4gICAgY29uc3QgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFydC5zcmMgPSBoZWFydEltZztcbiAgICBoZWFydC5hbHQgPSBcIkhlYXJ0IEljb25cIjtcbiAgICBmZWF0dXJlMi5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgY29uc3QgaGVhcnRoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhcnRoNC5pbm5lclRleHQgPSBcIkhlYWx0aHkgRm9vZFwiO1xuICAgIGZlYXR1cmUyLmFwcGVuZENoaWxkKGhlYXJ0aDQpO1xuICAgIGZlYXR1cmUyLmFwcGVuZChcIk51bGxhbSB0ZW1wdXMgdXQgZXJhdCB2ZWwgZmVybWVudHVtLiBNb3JiaSB2ZW5lbmF0aXMgcGhhcmV0cmEgbWF1cmlzLlwiKTtcbiAgICBjb25zdCBmZWF0dXJlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmUzLmNsYXNzTGlzdC5hZGQoJ2ZlYXR1cmUnKTtcbiAgICBjb25zdCB3aW5lID0gbmV3IEltYWdlKCk7XG4gICAgd2luZS5zcmMgPSB3aW5lSW1nO1xuICAgIHdpbmUuYWx0ID0gXCJXaW5lIEljb25cIjtcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZCh3aW5lKTtcbiAgICBjb25zdCB3aW5laDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHdpbmVoNC5pbm5lclRleHQgPSBcIldpbmUgUGFpcmluZ3NcIjtcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZCh3aW5laDQpO1xuICAgIGZlYXR1cmUzLmFwcGVuZChcIkZ1c2NlIGRpYW0gYXVndWUsIHBvcnR0aXRvciBhIHBvcnR0aXRvciBldCwgZmluaWJ1cyBhdCBhdWd1ZS5cIik7XG5cblxuICAgIGZlYXR1cmVzLmFwcGVuZENoaWxkKGZlYXR1cmUxKTtcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZWF0dXJlMik7XG4gICAgZmVhdHVyZXMuYXBwZW5kQ2hpbGQoZmVhdHVyZTMpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZlYXR1cmVzKTtcblxuXG4gICAgcmV0dXJuO1xuXG59IiwiaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi9pbWFnZXMvbG9nby5zdmcnO1xuaW1wb3J0IGhlcm9QaG90byBmcm9tICcuL2ltYWdlcy9oZXJvcGhvdG8uanBnJztcbmltcG9ydCBmYXJtSW1nIGZyb20gJy4vaW1hZ2VzL2Zhcm0uc3ZnJztcbmltcG9ydCBoZWFydEltZyBmcm9tICcuL2ltYWdlcy9oZWFydC5zdmcnO1xuaW1wb3J0IHdpbmVJbWcgZnJvbSAnLi9pbWFnZXMvd2luZS5zdmcnO1xuaW1wb3J0IGdpdGh1YkltZyBmcm9tICcuL2ltYWdlcy9naXRodWItbWFyay1zbWFsbC5zdmcnO1xuaW1wb3J0IGxvYWRIZXJvIGZyb20gJy4vaG9tZWhlcm8uanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lcGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZG93LmNsYXNzTGlzdC5hZGQoJ3dpbmRvdycpO1xuXG4gICAgd2luZG93LmFwcGVuZENoaWxkKGxvYWRIZWFkZXIoKSk7XG4gICAgd2luZG93LmFwcGVuZENoaWxkKGxvYWRIb21lQ29udGFpbmVyKCkpO1xuICAgIHdpbmRvdy5hcHBlbmRDaGlsZChsb2FkRm9vdGVyKCkpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3aW5kb3cpO1xuICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJyKTtcbn1cblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAvL0xvZ28gYW5kIFJlc3RhdXJhbnQgTmFtZVxuICAgIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29JbWc7XG4gICAgbG9nby5hbHQgPSBcIlJlc3RhdXJhbnQgTG9nb1wiO1xuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLmlubmVyVGV4dCA9IFwiQmFzaWwnc1wiO1xuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvRGl2KTtcblxuXG4gICAgLy9OYXZpZ2F0aW9uIGxpbmtzXG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKFwibmF2TGlzdFwiKTtcbiAgICBjb25zdCBsaW5rTGlzdCA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiT3VyIFN0b3J5XCIsIFwiQ29udGFjdCBVc1wiXTtcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua0xpc3QpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgbGluayk7XG4gICAgICAgIGEuaW5uZXJUZXh0ID0gbGluaztcblxuICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcblxuICAgICAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcblxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZUNvbnRhaW5lciAoKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlkID0gXCJjb250YWluZXJcIjtcblxuICAgIC8vaGVyb1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBjb25zdCBoZXJvcGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBoZXJvcGhvdG8uc3JjID0gaGVyb1Bob3RvO1xuICAgIGhlcm9waG90by5hbHQgPSBcIlJlc3RhdXJhbnQgaGVybyBiYW5uZXIgcGhvdG9cIjtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9waG90byk7XG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvVGV4dCcpO1xuICAgIGhlcm9UZXh0LmlubmVySFRNTCA9IGA8aDE+RGVsaWNpb3VzIEZvb2QsXG4gICAgICAgIDxicj5RdWFsaXR5IEluZ3JlZGllbnRzLFxuICAgICAgICA8YnI+RmFybSB0byBUYWJsZTwvaDE+YDtcbiAgICBjb25zdCBoZXJvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGVyb0J1dHRvbi5pbm5lclRleHQgPSBcIkV4cGxvcmUgTWVudVwiO1xuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9CdXR0b24pO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIC8vcXVvdGVcbiAgICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHF1b3RlLmNsYXNzTGlzdC5hZGQoJ3F1b3RlJyk7XG4gICAgcXVvdGUuaW5uZXJIVE1MID0gYDxoMz5EZWxpY2lvdXMgaGVhbHRoeSBtZWFsczxicj5NYWRlIHdpdGggdGhlIGZyZXNoZXN0IG9mIGluZ3JlZGllbnRzPC9oMz5gO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChxdW90ZSk7XG5cbiAgICAvL2ZlYXR1cmVzXG4gICAgY29uc3QgZmVhdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlcy5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlcycpO1xuICAgIGNvbnN0IGZlYXR1cmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZTEuY2xhc3NMaXN0LmFkZCgnZmVhdHVyZScpO1xuICAgIGNvbnN0IGZhcm0gPSBuZXcgSW1hZ2UoKTtcbiAgICBmYXJtLnNyYyA9IGZhcm1JbWc7XG4gICAgZmFybS5hbHQgPSBcIkZhcm0gSWNvblwiO1xuICAgIGZlYXR1cmUxLmFwcGVuZENoaWxkKGZhcm0pO1xuICAgIGNvbnN0IGZhcm1oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZmFybWg0LmlubmVyVGV4dCA9IFwiRmFybSBGcmVzaFwiO1xuICAgIGZlYXR1cmUxLmFwcGVuZENoaWxkKGZhcm1oNCk7XG4gICAgZmVhdHVyZTEuYXBwZW5kKFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIik7XG4gICAgY29uc3QgZmVhdHVyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlMi5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlJyk7XG4gICAgY29uc3QgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFydC5zcmMgPSBoZWFydEltZztcbiAgICBoZWFydC5hbHQgPSBcIkhlYXJ0IEljb25cIjtcbiAgICBmZWF0dXJlMi5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgY29uc3QgaGVhcnRoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhcnRoNC5pbm5lclRleHQgPSBcIkhlYWx0aHkgRm9vZFwiO1xuICAgIGZlYXR1cmUyLmFwcGVuZENoaWxkKGhlYXJ0aDQpO1xuICAgIGZlYXR1cmUyLmFwcGVuZChcIk51bGxhbSB0ZW1wdXMgdXQgZXJhdCB2ZWwgZmVybWVudHVtLiBNb3JiaSB2ZW5lbmF0aXMgcGhhcmV0cmEgbWF1cmlzLlwiKTtcbiAgICBjb25zdCBmZWF0dXJlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmUzLmNsYXNzTGlzdC5hZGQoJ2ZlYXR1cmUnKTtcbiAgICBjb25zdCB3aW5lID0gbmV3IEltYWdlKCk7XG4gICAgd2luZS5zcmMgPSB3aW5lSW1nO1xuICAgIHdpbmUuYWx0ID0gXCJXaW5lIEljb25cIjtcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZCh3aW5lKTtcbiAgICBjb25zdCB3aW5laDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHdpbmVoNC5pbm5lclRleHQgPSBcIldpbmUgUGFpcmluZ3NcIjtcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZCh3aW5laDQpO1xuICAgIGZlYXR1cmUzLmFwcGVuZChcIkZ1c2NlIGRpYW0gYXVndWUsIHBvcnR0aXRvciBhIHBvcnR0aXRvciBldCwgZmluaWJ1cyBhdCBhdWd1ZS5cIik7XG5cblxuICAgIGZlYXR1cmVzLmFwcGVuZENoaWxkKGZlYXR1cmUxKTtcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZWF0dXJlMik7XG4gICAgZmVhdHVyZXMuYXBwZW5kQ2hpbGQoZmVhdHVyZTMpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZlYXR1cmVzKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG5cbn1cblxuZnVuY3Rpb24gbG9hZEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbWFnZ2llbGF1XCIpO1xuICAgIGEuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXG4gICAgY29uc3QgZ2l0TG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGdpdExvZ28uc3JjID0gZ2l0aHViSW1nO1xuICAgIGdpdExvZ28uYWx0ID0gXCJNYWdnaWUncyBHaXRodWJcIjtcblxuICAgIGEuYXBwZW5kQ2hpbGQoZ2l0TG9nbyk7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgZm9vdGVyLmFwcGVuZChcIk1hZ2dpZSBMYXVcIik7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xuXG5cbn1cblxuIiwiaW1wb3J0IHN0b3J5SW1nMSBmcm9tICcuL2ltYWdlcy9zdG9yeTEuanBnJztcbmltcG9ydCBzdG9yeUltZzIgZnJvbSAnLi9pbWFnZXMvc3RvcnkyLmpwZyc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZFN0b3J5KCkge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IHN0b3J5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RvcnkuY2xhc3NOYW1lID0gXCJzdG9yeVwiO1xuICAgIHN0b3J5LmlkID0gXCJzdG9yeVwiO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLmlubmVyVGV4dCA9IFwiT3VyIFN0b3J5XCI7XG4gICAgc3RvcnkuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3Qgc3RvcnkxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RvcnkxLmlkID0gXCJzdG9yeTFcIjtcbiAgICBjb25zdCBzdG9yeTFwaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdG9yeTFwaWMuc3JjID0gc3RvcnlJbWcxO1xuICAgIHN0b3J5MXBpYy5hbHQgPSBcIlJlc3RhdXJhbnQgcHJlcFwiO1xuICAgIHN0b3J5MS5hcHBlbmRDaGlsZChzdG9yeTFwaWMpO1xuICAgIGNvbnN0IHN0b3J5MXRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgc3RvcnkxdGV4dC50ZXh0Q29udGVudCA9IFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC4gTmFtIG9kaW8gZXJvcywgc29kYWxlcyBzZWQgY29tbW9kbyBxdWlzLCB2ZXN0aWJ1bHVtIHZpdGFlIGxlY3R1cy4gTnVuYyBhdCBpcHN1bSB0ZWxsdXMuIE1hZWNlbmFzIG1vbGxpcyB1bGxhbWNvcnBlciBuaXNpLCB2ZWwgbGFvcmVldCB1cm5hIGNvbmRpbWVudHVtIHV0LiBWZXN0aWJ1bHVtIGEgdXJuYSBhbnRlLiBTZWQgcGhhcmV0cmEgcG9ydHRpdG9yIGxhY3VzIHNpdCBhbWV0IHBvc3VlcmUuIE1vcmJpIHZlbCBkdWkgYXVndWUuIFF1aXNxdWUgYW50ZSBudWxsYSwgbWFsZXN1YWRhIGV0IHNvZGFsZXMgYXQsIGNvbmRpbWVudHVtIGV1IHRlbGx1cy4gSW4gY29udmFsbGlzIG5pc2kgbm9uIGR1aSBmYXVjaWJ1cywgYSBncmF2aWRhIHNlbSBhbGlxdWV0LlwiXG4gICAgc3RvcnkxLmFwcGVuZENoaWxkKHN0b3J5MXRleHQpO1xuXG4gICAgY29uc3Qgc3RvcnkyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc3RvcnkyLmlkID0gXCJzdG9yeTJcIjtcbiAgICBjb25zdCBzdG9yeTJwaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBzdG9yeTJwaWMuc3JjID0gc3RvcnlJbWcyO1xuICAgIHN0b3J5MnBpYy5hbHQgPSBcIkZhcm0gSW5ncmVkaWVudHNcIjtcbiAgICBjb25zdCBzdG9yeTJ0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0b3J5MnRleHQudGV4dENvbnRlbnQgPSBcIkV0aWFtIGV0IGZlcm1lbnR1bSBkaWFtLCB2aXRhZSB2ZW5lbmF0aXMgZXJhdC4gUHJhZXNlbnQgbGFjaW5pYSBmZWxpcyBpbiBzb2RhbGVzIGZldWdpYXQuIFBlbGxlbnRlc3F1ZSBmZXJtZW50dW0gb2RpbyBlZ2V0IGNvbW1vZG8gdHJpc3RpcXVlLiBJbnRlZ2VyIHBvcnRhIHRvcnRvciBlbGVtZW50dW0gc2FnaXR0aXMgb3JuYXJlLiBGdXNjZSBpbXBlcmRpZXQgbHVjdHVzIGFjY3Vtc2FuLiBNb3JiaSB2ZWhpY3VsYSBtYXVyaXMgc2l0IGFtZXQgcmlzdXMgdnVscHV0YXRlIGRpZ25pc3NpbS4gTnVuYyBpYWN1bGlzIHR1cnBpcyBhIGVnZXN0YXMgaW1wZXJkaWV0LlwiXG4gICAgc3RvcnkyLmFwcGVuZENoaWxkKHN0b3J5MnRleHQpO1xuICAgIHN0b3J5Mi5hcHBlbmRDaGlsZChzdG9yeTJwaWMpO1xuXG5cbiAgICBzdG9yeS5hcHBlbmQoc3RvcnkxKTtcbiAgICBzdG9yeS5hcHBlbmQoc3RvcnkyKTtcbiAgICBcblxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChzdG9yeSk7XG5cbiAgICByZXR1cm47XG5cbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbG9hZFN0b3J5IGZyb20gJy4vc3RvcnkuanMnO1xuaW1wb3J0IGxvYWRIb21lcGFnZSBmcm9tICcuL2hvbWVwYWdlLmpzJztcbmltcG9ydCBsb2FkSGVybyBmcm9tICcuL2hvbWVoZXJvLmpzJztcbmltcG9ydCBsb2FkQ29udGFjdCBmcm9tICcuL2NvbnRhY3QuanMnO1xuXG5sb2FkSG9tZXBhZ2UoKTtcblxuLy9ldmVudCBsaXN0ZW5lcnMgZm9yIGxpbmtzXG52YXIgaG9tZUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkhvbWVcIik7XG5ob21lTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9hZEhlcm8oKSk7XG5cbnZhciBtZW51TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiTWVudVwiKTtcbm1lbnVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBjb25zb2xlLmxvZyhcImNsaWNrZWQgbWVudVwiKSk7XG5cbnZhciBzdG9yeUxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIk91ciBTdG9yeVwiKTtcbnN0b3J5TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9hZFN0b3J5KCkpO1xuXG52YXIgY29udGFjdExpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIkNvbnRhY3QgVXNcIik7XG5jb250YWN0TGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9hZENvbnRhY3QoKSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9