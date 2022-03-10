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
    heroButton.setAttribute("id", "heroButton");
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

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadMenu)
/* harmony export */ });
/* harmony import */ var _images_app1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/app1.jpg */ "./src/images/app1.jpg");
/* harmony import */ var _images_app2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/app2.jpg */ "./src/images/app2.jpg");
/* harmony import */ var _images_app3_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/app3.jpg */ "./src/images/app3.jpg");
/* harmony import */ var _images_main1_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/main1.jpg */ "./src/images/main1.jpg");
/* harmony import */ var _images_main2_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/main2.jpg */ "./src/images/main2.jpg");
/* harmony import */ var _images_main3_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/main3.jpg */ "./src/images/main3.jpg");
/* harmony import */ var _images_main4_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/main4.jpg */ "./src/images/main4.jpg");
/* harmony import */ var _images_main5_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/main5.jpg */ "./src/images/main5.jpg");
/* harmony import */ var _images_main6_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/main6.jpg */ "./src/images/main6.jpg");
/* harmony import */ var _images_dessert1_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/dessert1.jpg */ "./src/images/dessert1.jpg");
/* harmony import */ var _images_dessert2_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/dessert2.jpg */ "./src/images/dessert2.jpg");
/* harmony import */ var _images_dessert3_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/dessert3.jpg */ "./src/images/dessert3.jpg");














function loadMenu() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    const menu = document.createElement('div');
    menu.className = "menu";
    menu.id = "menu";

    const h1 = document.createElement('h1');
    h1.innerText = "Menu";
    menu.appendChild(h1);

    //Appetizers
    const appSection = document.createElement('div');
    appSection.className = "menuSection";
    appSection.id = "appSection";

    const apph3 = document.createElement('h3');
    apph3.innerText = "Appetizers"
    appSection.appendChild(apph3);

    const appGrid = document.createElement('div');
    appGrid.className = "menuGrid";

    const app1 = document.createElement('div');
    app1.className = "gridElement";
    const app1pic = new Image();
    app1pic.src = _images_app1_jpg__WEBPACK_IMPORTED_MODULE_0__;
    app1.appendChild(app1pic);
    app1.append("Burrata Cheese");
    appGrid.appendChild(app1);

    const app2 = document.createElement('div');
    app2.className = "gridElement";
    const app2pic = new Image();
    app2pic.src = _images_app2_jpg__WEBPACK_IMPORTED_MODULE_1__;
    app2.appendChild(app2pic);
    app2.append("Seared Tuna Sashimi");
    appGrid.appendChild(app2);

    const app3 = document.createElement('div');
    app3.className = "gridElement";
    const app3pic = new Image();
    app3pic.src = _images_app3_jpg__WEBPACK_IMPORTED_MODULE_2__;
    app3.appendChild(app3pic);
    app3.append("Walnut Stuffed Figs");
    appGrid.appendChild(app3);

    appSection.appendChild(appGrid);
    menu.appendChild(appSection);
    

    //Mains
    const mainSection = document.createElement('div');
    mainSection.className = "menuSection";
    mainSection.id = "mainSection";

    const mainh3 = document.createElement('h3');
    mainh3.innerText = "Mains"
    mainSection.appendChild(mainh3);

    const mainGrid = document.createElement('div');
    mainGrid.className = "menuGrid";

    const main1 = document.createElement('div');
    main1.className = "gridElement";
    const main1pic = new Image();
    main1pic.src = _images_main1_jpg__WEBPACK_IMPORTED_MODULE_3__;
    main1.appendChild(main1pic);
    main1.append("Pan-Grilled Trout");
    mainGrid.appendChild(main1);

    const main2 = document.createElement('div');
    main2.className = "gridElement";
    const main2pic = new Image();
    main2pic.src = _images_main2_jpg__WEBPACK_IMPORTED_MODULE_4__;
    main2.appendChild(main2pic);
    main2.append("Braised Beef Cheeks");
    mainGrid.appendChild(main2);

    const main3 = document.createElement('div');
    main3.className = "gridElement";
    const main3pic = new Image();
    main3pic.src = _images_main3_jpg__WEBPACK_IMPORTED_MODULE_5__;
    main3.appendChild(main3pic);
    main3.append("Farmer's Cobb Salad");
    mainGrid.appendChild(main3);

    const main4 = document.createElement('div');
    main4.className = "gridElement";
    const main4pic = new Image();
    main4pic.src = _images_main4_jpg__WEBPACK_IMPORTED_MODULE_6__;
    main4.appendChild(main4pic);
    main4.append("Pasta a la Bacon");
    mainGrid.appendChild(main4);

    const main5 = document.createElement('div');
    main5.className = "gridElement";
    const main5pic = new Image();
    main5pic.src = _images_main5_jpg__WEBPACK_IMPORTED_MODULE_7__;
    main5.appendChild(main5pic);
    main5.append("Wild Rabbit Ratatouille");
    mainGrid.appendChild(main5);

    const main6 = document.createElement('div');
    main6.className = "gridElement";
    const main6pic = new Image();
    main6pic.src = _images_main6_jpg__WEBPACK_IMPORTED_MODULE_8__;
    main6.appendChild(main6pic);
    main6.append("Shrimp Confit");
    mainGrid.appendChild(main6);

    
    mainSection.appendChild(mainGrid);
    menu.appendChild(mainSection);

    //Dessers
    const dessertSection = document.createElement('div');
    dessertSection.className = "menuSection";
    dessertSection.id = "dessertSection";

    const desserth3 = document.createElement('h3');
    desserth3.innerText = "Desserts"
    dessertSection.appendChild(desserth3);

    const dessertGrid = document.createElement('div');
    dessertGrid.className = "menuGrid";

    const dessert1 = document.createElement('div');
    dessert1.className = "gridElement";
    const dessert1pic = new Image();
    dessert1pic.src = _images_dessert1_jpg__WEBPACK_IMPORTED_MODULE_9__;
    dessert1.appendChild(dessert1pic);
    dessert1.append("Vanilla Caramel Brownie");
    dessertGrid.appendChild(dessert1);

    const dessert2 = document.createElement('div');
    dessert2.className = "gridElement";
    const dessert2pic = new Image();
    dessert2pic.src = _images_dessert2_jpg__WEBPACK_IMPORTED_MODULE_10__;
    dessert2.appendChild(dessert2pic);
    dessert2.append("Fresh Berry Crepes");
    dessertGrid.appendChild(dessert2);

    const dessert3 = document.createElement('div');
    dessert3.className = "gridElement";
    const dessert3pic = new Image();
    dessert3pic.src = _images_dessert3_jpg__WEBPACK_IMPORTED_MODULE_11__;
    dessert3.appendChild(dessert3pic);
    dessert3.append("Hazelnut Chocolate Cake");
    dessertGrid.appendChild(dessert3);

    dessertSection.appendChild(dessertGrid);
    menu.appendChild(dessertSection);


    container.appendChild(menu);

    return;
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

/***/ "./src/images/app1.jpg":
/*!*****************************!*\
  !*** ./src/images/app1.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59eb670f6da0bd8f8231.jpg";

/***/ }),

/***/ "./src/images/app2.jpg":
/*!*****************************!*\
  !*** ./src/images/app2.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "40efd6932b59ce7d7424.jpg";

/***/ }),

/***/ "./src/images/app3.jpg":
/*!*****************************!*\
  !*** ./src/images/app3.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fd690b7e8c415c0e5a50.jpg";

/***/ }),

/***/ "./src/images/dessert1.jpg":
/*!*********************************!*\
  !*** ./src/images/dessert1.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "22247cc643a5838004fe.jpg";

/***/ }),

/***/ "./src/images/dessert2.jpg":
/*!*********************************!*\
  !*** ./src/images/dessert2.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1c08d5e2db2ace818174.jpg";

/***/ }),

/***/ "./src/images/dessert3.jpg":
/*!*********************************!*\
  !*** ./src/images/dessert3.jpg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eed5e16f861de586d84e.jpg";

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

module.exports = __webpack_require__.p + "270c7d9632b997652153.jpg";

/***/ }),

/***/ "./src/images/logo.svg":
/*!*****************************!*\
  !*** ./src/images/logo.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "9ef0c19a47cc488845d5.svg";

/***/ }),

/***/ "./src/images/main1.jpg":
/*!******************************!*\
  !*** ./src/images/main1.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e0ecdd41367411b00d3.jpg";

/***/ }),

/***/ "./src/images/main2.jpg":
/*!******************************!*\
  !*** ./src/images/main2.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cc86052b84277c32f4d3.jpg";

/***/ }),

/***/ "./src/images/main3.jpg":
/*!******************************!*\
  !*** ./src/images/main3.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "440a31d1b5c77860d5e8.jpg";

/***/ }),

/***/ "./src/images/main4.jpg":
/*!******************************!*\
  !*** ./src/images/main4.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "17de94bf2a5603d08624.jpg";

/***/ }),

/***/ "./src/images/main5.jpg":
/*!******************************!*\
  !*** ./src/images/main5.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "eb2bc07c57ec4a0cc692.jpg";

/***/ }),

/***/ "./src/images/main6.jpg":
/*!******************************!*\
  !*** ./src/images/main6.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4bad5fd67682abf8bd2a.jpg";

/***/ }),

/***/ "./src/images/story1.jpg":
/*!*******************************!*\
  !*** ./src/images/story1.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "371bfd606a289cfdfa6b.jpg";

/***/ }),

/***/ "./src/images/story2.jpg":
/*!*******************************!*\
  !*** ./src/images/story2.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7679b262fdc7294a9ba.jpg";

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
/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./menu.js */ "./src/menu.js");







(0,_homepage_js__WEBPACK_IMPORTED_MODULE_1__["default"])();

//event listeners for links
var homeLink = document.getElementById("Home");
homeLink.addEventListener("click", () => (0,_homehero_js__WEBPACK_IMPORTED_MODULE_2__["default"])());

var menuLink = document.getElementById("Menu");
menuLink.addEventListener("click", () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"])());

var menuButtonLink = document.getElementById("heroButton");
menuButtonLink.addEventListener("click", () => (0,_menu_js__WEBPACK_IMPORTED_MODULE_4__["default"])());


var storyLink = document.getElementById("Our Story");
storyLink.addEventListener("click", () => (0,_story_js__WEBPACK_IMPORTED_MODULE_0__["default"])());

var contactLink = document.getElementById("Contact Us");
contactLink.addEventListener("click", () => (0,_contact_js__WEBPACK_IMPORTED_MODULE_3__["default"])());
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSw0Q0FBNEMsdURBQVcsSSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21laGVyby5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaG9tZXBhZ2UuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL3N0b3J5LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZENvbnRhY3QoKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhaW5lclwiKTtcblxuICAgIGNvbnRhaW5lci5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgbGV0IGhvdXJzVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0YWJsZScpO1xuICAgIGxldCBob3VycyA9IFtcbiAgICAgICAge2RheTogXCJNb25cIiwgb3BIb3VyczogXCIxMWFtIHRvIDlwbVwifSxcbiAgICAgICAge2RheTogXCJUdWVcIiwgb3BIb3VyczogXCJDbG9zZWRcIn0sXG4gICAgICAgIHtkYXk6IFwiV2VkXCIsIG9wSG91cnM6IFwiQ2xvc2VkXCJ9LFxuICAgICAgICB7ZGF5OiBcIlRodVwiLCBvcEhvdXJzOiBcIjExYW0gdG8gOXBtXCJ9LFxuICAgICAgICB7ZGF5OiBcIkZyaVwiLCBvcEhvdXJzOiBcIjlhbSB0byAxMXBtXCJ9LFxuICAgICAgICB7ZGF5OiBcIlNhdFwiLCBvcEhvdXJzOiBcIjlhbSB0byAxMXBtXCJ9LFxuICAgICAgICB7ZGF5OiBcIlN1blwiLCBvcEhvdXJzOiBcIjlhbSB0byA5cG1cIn1cbiAgICBdO1xuXG4gICAgY29uc3QgY29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNvbnRhY3QuY2xhc3NOYW1lID0gXCJjb250YWN0XCI7XG4gICAgY29udGFjdC5pZCA9IFwiY29udGFjdFwiO1xuXG4gICAgY29uc3QgaDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICAgIGgxLmlubmVyVGV4dCA9IFwiQ29udGFjdCBVc1wiO1xuICAgIGNvbnRhY3QuYXBwZW5kQ2hpbGQoaDEpO1xuXG4gICAgY29uc3QgaG91cnNoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaG91cnNoNC5pbm5lclRleHQgPSBcIkhvdXJzXCJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGhvdXJzaDQpO1xuICAgIGNvbnN0IGhvdXJzaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgZ2VuZXJhdGVIb3Vyc1RhYmxlKGhvdXJzVGFibGUsIGhvdXJzKTtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGhvdXJzVGFibGUpO1xuXG5cbiAgICBjb25zdCBwaG9uZWg0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDQnKTtcbiAgICBwaG9uZWg0LmlubmVyVGV4dCA9IFwiUGhvbmUgTnVtYmVyXCJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKHBob25laDQpO1xuICAgIGNvbnN0IHBob25laDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgcGhvbmVoNS5pbm5lclRleHQgPSBcIjU1NS01NTUtNTU1NVwiXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChwaG9uZWg1KTtcblxuICAgIGNvbnN0IGVtYWlsaDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIGVtYWlsaDQuaW5uZXJUZXh0ID0gXCJFbWFpbFwiXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChlbWFpbGg0KTtcbiAgICBjb25zdCBlbWFpbGg1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgIGVtYWlsaDUuaW5uZXJUZXh0ID0gXCJpbmZvQGJhc2lsc3Jlc3RhdXJhbnQuY29tXCJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGVtYWlsaDUpO1xuXG4gICAgY29uc3QgbG9jYXRpb25oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgbG9jYXRpb25oNC5pbm5lclRleHQgPSBcIkxvY2F0aW9uXCJcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKGxvY2F0aW9uaDQpO1xuICAgIGNvbnN0IGxvY2F0aW9uaDUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgbG9jYXRpb25oNS5pbm5lclRleHQgPSBcIjE1ODQgRmFrZSBTdC4sIE51bGwgQ2l0eSwgVW5rbm93biBOQVwiXG4gICAgY29udGFjdC5hcHBlbmRDaGlsZChsb2NhdGlvbmg1KTtcbiAgICBjb25zdCBtYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYXAuY2xhc3NOYW1lID0gXCJtYXBcIjtcbiAgICBtYXAuaW5uZXJIVE1MID0gYDxpZnJhbWUgc3JjPVwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL2VtYmVkP3BiPSExbTE4ITFtMTIhMW0zITFkNjA2Ljg2ODg1NjY1NzE4OTkhMmQtNzkuMzgwNDA4NDQzNTAxNyEzZDQzLjY1MjkzMTU2MzQ2ODY5ITJtMyExZjAhMmYwITNmMCEzbTIhMWkxMDI0ITJpNzY4ITRmMTMuMSEzbTMhMW0yITFzMHg4ODJiMzRjYjUwN2JlYjAxJTNBMHgxZjc5ZWU2NDNmZWQ0ZjBjITJzRG93bnRvd24lMjBUb3JvbnRvJTJDJTIwVG9yb250byUyQyUyME9OITVlMCEzbTIhMXNlbiEyc2NhITR2MTY0Njg2Nzk4Mjk0NyE1bTIhMXNlbiEyc2NhXCIgd2lkdGg9XCI2MDBcIiBoZWlnaHQ9XCI0NTBcIiBzdHlsZT1cImJvcmRlcjowO1wiIGFsbG93ZnVsbHNjcmVlbj1cIlwiIGxvYWRpbmc9XCJsYXp5XCI+PC9pZnJhbWU+YDtcbiAgICBjb250YWN0LmFwcGVuZENoaWxkKG1hcCk7XG5cblxuXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGFjdCk7XG5cbiAgICByZXR1cm47XG5cbn1cblxuZnVuY3Rpb24gZ2VuZXJhdGVIb3Vyc1RhYmxlKHRhYmxlLCBkYXRhKSB7XG4gICAgZm9yIChsZXQgZWxlbWVudCBvZiBkYXRhKSB7XG4gICAgICBsZXQgcm93ID0gdGFibGUuaW5zZXJ0Um93KCk7XG4gICAgICBmb3IgKGxldCBrZXkgaW4gZWxlbWVudCkge1xuICAgICAgICBsZXQgY2VsbCA9IHJvdy5pbnNlcnRDZWxsKCk7XG4gICAgICAgIGxldCB0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoZWxlbWVudFtrZXldKTtcbiAgICAgICAgY2VsbC5hcHBlbmRDaGlsZCh0ZXh0KTtcbiAgICAgIH1cbiAgICB9XG4gIH0iLCJpbXBvcnQgaGVyb1Bob3RvIGZyb20gJy4vaW1hZ2VzL2hlcm9waG90by5qcGcnO1xuaW1wb3J0IGZhcm1JbWcgZnJvbSAnLi9pbWFnZXMvZmFybS5zdmcnO1xuaW1wb3J0IGhlYXJ0SW1nIGZyb20gJy4vaW1hZ2VzL2hlYXJ0LnN2Zyc7XG5pbXBvcnQgd2luZUltZyBmcm9tICcuL2ltYWdlcy93aW5lLnN2Zyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIZXJvKCkge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIC8vaGVyb1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBjb25zdCBoZXJvcGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBoZXJvcGhvdG8uc3JjID0gaGVyb1Bob3RvO1xuICAgIGhlcm9waG90by5hbHQgPSBcIlJlc3RhdXJhbnQgaGVybyBiYW5uZXIgcGhvdG9cIjtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9waG90byk7XG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvVGV4dCcpO1xuICAgIGhlcm9UZXh0LmlubmVySFRNTCA9IGA8aDE+RGVsaWNpb3VzIEZvb2QsXG4gICAgICAgIDxicj5RdWFsaXR5IEluZ3JlZGllbnRzLFxuICAgICAgICA8YnI+RmFybSB0byBUYWJsZTwvaDE+YDtcbiAgICBjb25zdCBoZXJvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGVyb0J1dHRvbi5pbm5lclRleHQgPSBcIkV4cGxvcmUgTWVudVwiO1xuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9CdXR0b24pO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIC8vcXVvdGVcbiAgICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHF1b3RlLmNsYXNzTGlzdC5hZGQoJ3F1b3RlJyk7XG4gICAgcXVvdGUuaW5uZXJIVE1MID0gYDxoMz5EZWxpY2lvdXMgaGVhbHRoeSBtZWFsczxicj5NYWRlIHdpdGggdGhlIGZyZXNoZXN0IG9mIGluZ3JlZGllbnRzPC9oMz5gO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChxdW90ZSk7XG5cbiAgICAvL2ZlYXR1cmVzXG4gICAgY29uc3QgZmVhdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlcy5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlcycpO1xuICAgIGNvbnN0IGZlYXR1cmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZTEuY2xhc3NMaXN0LmFkZCgnZmVhdHVyZScpO1xuICAgIGNvbnN0IGZhcm0gPSBuZXcgSW1hZ2UoKTtcbiAgICBmYXJtLnNyYyA9IGZhcm1JbWc7XG4gICAgZmFybS5hbHQgPSBcIkZhcm0gSWNvblwiO1xuICAgIGZlYXR1cmUxLmFwcGVuZENoaWxkKGZhcm0pO1xuICAgIGNvbnN0IGZhcm1oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZmFybWg0LmlubmVyVGV4dCA9IFwiRmFybSBGcmVzaFwiO1xuICAgIGZlYXR1cmUxLmFwcGVuZENoaWxkKGZhcm1oNCk7XG4gICAgZmVhdHVyZTEuYXBwZW5kKFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIik7XG4gICAgY29uc3QgZmVhdHVyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlMi5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlJyk7XG4gICAgY29uc3QgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFydC5zcmMgPSBoZWFydEltZztcbiAgICBoZWFydC5hbHQgPSBcIkhlYXJ0IEljb25cIjtcbiAgICBmZWF0dXJlMi5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgY29uc3QgaGVhcnRoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhcnRoNC5pbm5lclRleHQgPSBcIkhlYWx0aHkgRm9vZFwiO1xuICAgIGZlYXR1cmUyLmFwcGVuZENoaWxkKGhlYXJ0aDQpO1xuICAgIGZlYXR1cmUyLmFwcGVuZChcIk51bGxhbSB0ZW1wdXMgdXQgZXJhdCB2ZWwgZmVybWVudHVtLiBNb3JiaSB2ZW5lbmF0aXMgcGhhcmV0cmEgbWF1cmlzLlwiKTtcbiAgICBjb25zdCBmZWF0dXJlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmUzLmNsYXNzTGlzdC5hZGQoJ2ZlYXR1cmUnKTtcbiAgICBjb25zdCB3aW5lID0gbmV3IEltYWdlKCk7XG4gICAgd2luZS5zcmMgPSB3aW5lSW1nO1xuICAgIHdpbmUuYWx0ID0gXCJXaW5lIEljb25cIjtcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZCh3aW5lKTtcbiAgICBjb25zdCB3aW5laDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHdpbmVoNC5pbm5lclRleHQgPSBcIldpbmUgUGFpcmluZ3NcIjtcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZCh3aW5laDQpO1xuICAgIGZlYXR1cmUzLmFwcGVuZChcIkZ1c2NlIGRpYW0gYXVndWUsIHBvcnR0aXRvciBhIHBvcnR0aXRvciBldCwgZmluaWJ1cyBhdCBhdWd1ZS5cIik7XG5cblxuICAgIGZlYXR1cmVzLmFwcGVuZENoaWxkKGZlYXR1cmUxKTtcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZWF0dXJlMik7XG4gICAgZmVhdHVyZXMuYXBwZW5kQ2hpbGQoZmVhdHVyZTMpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZlYXR1cmVzKTtcblxuXG4gICAgcmV0dXJuO1xuXG59IiwiaW1wb3J0IGxvZ29JbWcgZnJvbSAnLi9pbWFnZXMvbG9nby5zdmcnO1xuaW1wb3J0IGhlcm9QaG90byBmcm9tICcuL2ltYWdlcy9oZXJvcGhvdG8uanBnJztcbmltcG9ydCBmYXJtSW1nIGZyb20gJy4vaW1hZ2VzL2Zhcm0uc3ZnJztcbmltcG9ydCBoZWFydEltZyBmcm9tICcuL2ltYWdlcy9oZWFydC5zdmcnO1xuaW1wb3J0IHdpbmVJbWcgZnJvbSAnLi9pbWFnZXMvd2luZS5zdmcnO1xuaW1wb3J0IGdpdGh1YkltZyBmcm9tICcuL2ltYWdlcy9naXRodWItbWFyay1zbWFsbC5zdmcnO1xuaW1wb3J0IGxvYWRIZXJvIGZyb20gJy4vaG9tZWhlcm8uanMnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRIb21lcGFnZSgpIHtcbiAgICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuXG4gICAgY29uc3Qgd2luZG93ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgd2luZG93LmNsYXNzTGlzdC5hZGQoJ3dpbmRvdycpO1xuXG4gICAgd2luZG93LmFwcGVuZENoaWxkKGxvYWRIZWFkZXIoKSk7XG4gICAgd2luZG93LmFwcGVuZENoaWxkKGxvYWRIb21lQ29udGFpbmVyKCkpO1xuICAgIHdpbmRvdy5hcHBlbmRDaGlsZChsb2FkRm9vdGVyKCkpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZCh3aW5kb3cpO1xuICAgIGNvbnN0IGJyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnInKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJyKTtcbn1cblxuZnVuY3Rpb24gbG9hZEhlYWRlcigpIHtcbiAgICBcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZWFkZXIuY2xhc3NMaXN0LmFkZCgnaGVhZGVyJyk7XG5cbiAgICAvL0xvZ28gYW5kIFJlc3RhdXJhbnQgTmFtZVxuICAgIGNvbnN0IGxvZ29EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBsb2dvRGl2LmNsYXNzTGlzdC5hZGQoXCJsb2dvXCIpO1xuICAgIGNvbnN0IGxvZ28gPSBuZXcgSW1hZ2UoKTtcbiAgICBsb2dvLnNyYyA9IGxvZ29JbWc7XG4gICAgbG9nby5hbHQgPSBcIlJlc3RhdXJhbnQgTG9nb1wiO1xuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQobG9nbyk7XG4gICAgY29uc3QgaDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGgyLmlubmVyVGV4dCA9IFwiQmFzaWwnc1wiO1xuICAgIGxvZ29EaXYuYXBwZW5kQ2hpbGQoaDIpO1xuICAgIGhlYWRlci5hcHBlbmRDaGlsZChsb2dvRGl2KTtcblxuXG4gICAgLy9OYXZpZ2F0aW9uIGxpbmtzXG4gICAgY29uc3QgbmF2TGlzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3VsJyk7XG4gICAgbmF2TGlzdC5jbGFzc0xpc3QuYWRkKFwibmF2TGlzdFwiKTtcbiAgICBjb25zdCBsaW5rTGlzdCA9IFtcIkhvbWVcIiwgXCJNZW51XCIsIFwiT3VyIFN0b3J5XCIsIFwiQ29udGFjdCBVc1wiXTtcbiAgICBmb3IgKGNvbnN0IGxpbmsgb2YgbGlua0xpc3QpIHtcbiAgICAgICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuXG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIiNcIik7XG4gICAgICAgIGEuc2V0QXR0cmlidXRlKFwiaWRcIiwgbGluayk7XG4gICAgICAgIGEuaW5uZXJUZXh0ID0gbGluaztcblxuICAgICAgICBsaS5hcHBlbmRDaGlsZChhKTtcblxuICAgICAgICBuYXZMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICB9XG4gICAgaGVhZGVyLmFwcGVuZENoaWxkKG5hdkxpc3QpO1xuXG4gICAgcmV0dXJuIGhlYWRlcjtcblxufVxuXG5mdW5jdGlvbiBsb2FkSG9tZUNvbnRhaW5lciAoKSB7XG5cbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY29udGFpbmVyJyk7XG4gICAgY29udGFpbmVyLmlkID0gXCJjb250YWluZXJcIjtcblxuICAgIC8vaGVyb1xuICAgIGNvbnN0IGhlcm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvLmNsYXNzTGlzdC5hZGQoJ2hlcm8nKTtcbiAgICBjb25zdCBoZXJvcGhvdG8gPSBuZXcgSW1hZ2UoKTtcbiAgICBoZXJvcGhvdG8uc3JjID0gaGVyb1Bob3RvO1xuICAgIGhlcm9waG90by5hbHQgPSBcIlJlc3RhdXJhbnQgaGVybyBiYW5uZXIgcGhvdG9cIjtcbiAgICBoZXJvLmFwcGVuZENoaWxkKGhlcm9waG90byk7XG4gICAgY29uc3QgaGVyb1RleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBoZXJvVGV4dC5jbGFzc0xpc3QuYWRkKCdoZXJvVGV4dCcpO1xuICAgIGhlcm9UZXh0LmlubmVySFRNTCA9IGA8aDE+RGVsaWNpb3VzIEZvb2QsXG4gICAgICAgIDxicj5RdWFsaXR5IEluZ3JlZGllbnRzLFxuICAgICAgICA8YnI+RmFybSB0byBUYWJsZTwvaDE+YDtcbiAgICBjb25zdCBoZXJvQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgaGVyb0J1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImhlcm9CdXR0b25cIik7XG4gICAgaGVyb0J1dHRvbi5pbm5lclRleHQgPSBcIkV4cGxvcmUgTWVudVwiO1xuICAgIGhlcm9UZXh0LmFwcGVuZENoaWxkKGhlcm9CdXR0b24pO1xuICAgIGhlcm8uYXBwZW5kQ2hpbGQoaGVyb1RleHQpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChoZXJvKTtcblxuICAgIC8vcXVvdGVcbiAgICBjb25zdCBxdW90ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHF1b3RlLmNsYXNzTGlzdC5hZGQoJ3F1b3RlJyk7XG4gICAgcXVvdGUuaW5uZXJIVE1MID0gYDxoMz5EZWxpY2lvdXMgaGVhbHRoeSBtZWFsczxicj5NYWRlIHdpdGggdGhlIGZyZXNoZXN0IG9mIGluZ3JlZGllbnRzPC9oMz5gO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChxdW90ZSk7XG5cbiAgICAvL2ZlYXR1cmVzXG4gICAgY29uc3QgZmVhdHVyZXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlcy5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlcycpO1xuICAgIGNvbnN0IGZlYXR1cmUxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZmVhdHVyZTEuY2xhc3NMaXN0LmFkZCgnZmVhdHVyZScpO1xuICAgIGNvbnN0IGZhcm0gPSBuZXcgSW1hZ2UoKTtcbiAgICBmYXJtLnNyYyA9IGZhcm1JbWc7XG4gICAgZmFybS5hbHQgPSBcIkZhcm0gSWNvblwiO1xuICAgIGZlYXR1cmUxLmFwcGVuZENoaWxkKGZhcm0pO1xuICAgIGNvbnN0IGZhcm1oNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgZmFybWg0LmlubmVyVGV4dCA9IFwiRmFybSBGcmVzaFwiO1xuICAgIGZlYXR1cmUxLmFwcGVuZENoaWxkKGZhcm1oNCk7XG4gICAgZmVhdHVyZTEuYXBwZW5kKFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdC5cIik7XG4gICAgY29uc3QgZmVhdHVyZTIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBmZWF0dXJlMi5jbGFzc0xpc3QuYWRkKCdmZWF0dXJlJyk7XG4gICAgY29uc3QgaGVhcnQgPSBuZXcgSW1hZ2UoKTtcbiAgICBoZWFydC5zcmMgPSBoZWFydEltZztcbiAgICBoZWFydC5hbHQgPSBcIkhlYXJ0IEljb25cIjtcbiAgICBmZWF0dXJlMi5hcHBlbmRDaGlsZChoZWFydCk7XG4gICAgY29uc3QgaGVhcnRoNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2g0Jyk7XG4gICAgaGVhcnRoNC5pbm5lclRleHQgPSBcIkhlYWx0aHkgRm9vZFwiO1xuICAgIGZlYXR1cmUyLmFwcGVuZENoaWxkKGhlYXJ0aDQpO1xuICAgIGZlYXR1cmUyLmFwcGVuZChcIk51bGxhbSB0ZW1wdXMgdXQgZXJhdCB2ZWwgZmVybWVudHVtLiBNb3JiaSB2ZW5lbmF0aXMgcGhhcmV0cmEgbWF1cmlzLlwiKTtcbiAgICBjb25zdCBmZWF0dXJlMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGZlYXR1cmUzLmNsYXNzTGlzdC5hZGQoJ2ZlYXR1cmUnKTtcbiAgICBjb25zdCB3aW5lID0gbmV3IEltYWdlKCk7XG4gICAgd2luZS5zcmMgPSB3aW5lSW1nO1xuICAgIHdpbmUuYWx0ID0gXCJXaW5lIEljb25cIjtcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZCh3aW5lKTtcbiAgICBjb25zdCB3aW5laDQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoNCcpO1xuICAgIHdpbmVoNC5pbm5lclRleHQgPSBcIldpbmUgUGFpcmluZ3NcIjtcbiAgICBmZWF0dXJlMy5hcHBlbmRDaGlsZCh3aW5laDQpO1xuICAgIGZlYXR1cmUzLmFwcGVuZChcIkZ1c2NlIGRpYW0gYXVndWUsIHBvcnR0aXRvciBhIHBvcnR0aXRvciBldCwgZmluaWJ1cyBhdCBhdWd1ZS5cIik7XG5cblxuICAgIGZlYXR1cmVzLmFwcGVuZENoaWxkKGZlYXR1cmUxKTtcbiAgICBmZWF0dXJlcy5hcHBlbmRDaGlsZChmZWF0dXJlMik7XG4gICAgZmVhdHVyZXMuYXBwZW5kQ2hpbGQoZmVhdHVyZTMpO1xuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGZlYXR1cmVzKTtcblxuICAgIHJldHVybiBjb250YWluZXI7XG5cbn1cblxuZnVuY3Rpb24gbG9hZEZvb3RlciAoKSB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuXG4gICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBhLnNldEF0dHJpYnV0ZShcImhyZWZcIiwgXCJodHRwczovL2dpdGh1Yi5jb20vbWFnZ2llbGF1XCIpO1xuICAgIGEuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuXG4gICAgY29uc3QgZ2l0TG9nbyA9IG5ldyBJbWFnZSgpO1xuICAgIGdpdExvZ28uc3JjID0gZ2l0aHViSW1nO1xuICAgIGdpdExvZ28uYWx0ID0gXCJNYWdnaWUncyBHaXRodWJcIjtcblxuICAgIGEuYXBwZW5kQ2hpbGQoZ2l0TG9nbyk7XG5cbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoYSk7XG4gICAgZm9vdGVyLmFwcGVuZChcIk1hZ2dpZSBMYXVcIik7XG5cbiAgICByZXR1cm4gZm9vdGVyO1xuXG5cbn1cblxuIiwiaW1wb3J0IGFwcDFJbWcgZnJvbSAnLi9pbWFnZXMvYXBwMS5qcGcnO1xuaW1wb3J0IGFwcDJJbWcgZnJvbSAnLi9pbWFnZXMvYXBwMi5qcGcnO1xuaW1wb3J0IGFwcDNJbWcgZnJvbSAnLi9pbWFnZXMvYXBwMy5qcGcnO1xuaW1wb3J0IG1haW4xSW1nIGZyb20gJy4vaW1hZ2VzL21haW4xLmpwZyc7XG5pbXBvcnQgbWFpbjJJbWcgZnJvbSAnLi9pbWFnZXMvbWFpbjIuanBnJztcbmltcG9ydCBtYWluM0ltZyBmcm9tICcuL2ltYWdlcy9tYWluMy5qcGcnO1xuaW1wb3J0IG1haW40SW1nIGZyb20gJy4vaW1hZ2VzL21haW40LmpwZyc7XG5pbXBvcnQgbWFpbjVJbWcgZnJvbSAnLi9pbWFnZXMvbWFpbjUuanBnJztcbmltcG9ydCBtYWluNkltZyBmcm9tICcuL2ltYWdlcy9tYWluNi5qcGcnO1xuaW1wb3J0IGRlc3NlcnQxSW1nIGZyb20gJy4vaW1hZ2VzL2Rlc3NlcnQxLmpwZyc7XG5pbXBvcnQgZGVzc2VydDJJbWcgZnJvbSAnLi9pbWFnZXMvZGVzc2VydDIuanBnJztcbmltcG9ydCBkZXNzZXJ0M0ltZyBmcm9tICcuL2ltYWdlcy9kZXNzZXJ0My5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRNZW51KCkge1xuXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIik7XG5cbiAgICBjb250YWluZXIuaW5uZXJIVE1MID0gXCJcIjtcblxuICAgIGNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtZW51LmNsYXNzTmFtZSA9IFwibWVudVwiO1xuICAgIG1lbnUuaWQgPSBcIm1lbnVcIjtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS5pbm5lclRleHQgPSBcIk1lbnVcIjtcbiAgICBtZW51LmFwcGVuZENoaWxkKGgxKTtcblxuICAgIC8vQXBwZXRpemVyc1xuICAgIGNvbnN0IGFwcFNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBTZWN0aW9uLmNsYXNzTmFtZSA9IFwibWVudVNlY3Rpb25cIjtcbiAgICBhcHBTZWN0aW9uLmlkID0gXCJhcHBTZWN0aW9uXCI7XG5cbiAgICBjb25zdCBhcHBoMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gzJyk7XG4gICAgYXBwaDMuaW5uZXJUZXh0ID0gXCJBcHBldGl6ZXJzXCJcbiAgICBhcHBTZWN0aW9uLmFwcGVuZENoaWxkKGFwcGgzKTtcblxuICAgIGNvbnN0IGFwcEdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHBHcmlkLmNsYXNzTmFtZSA9IFwibWVudUdyaWRcIjtcblxuICAgIGNvbnN0IGFwcDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHAxLmNsYXNzTmFtZSA9IFwiZ3JpZEVsZW1lbnRcIjtcbiAgICBjb25zdCBhcHAxcGljID0gbmV3IEltYWdlKCk7XG4gICAgYXBwMXBpYy5zcmMgPSBhcHAxSW1nO1xuICAgIGFwcDEuYXBwZW5kQ2hpbGQoYXBwMXBpYyk7XG4gICAgYXBwMS5hcHBlbmQoXCJCdXJyYXRhIENoZWVzZVwiKTtcbiAgICBhcHBHcmlkLmFwcGVuZENoaWxkKGFwcDEpO1xuXG4gICAgY29uc3QgYXBwMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFwcDIuY2xhc3NOYW1lID0gXCJncmlkRWxlbWVudFwiO1xuICAgIGNvbnN0IGFwcDJwaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBhcHAycGljLnNyYyA9IGFwcDJJbWc7XG4gICAgYXBwMi5hcHBlbmRDaGlsZChhcHAycGljKTtcbiAgICBhcHAyLmFwcGVuZChcIlNlYXJlZCBUdW5hIFNhc2hpbWlcIik7XG4gICAgYXBwR3JpZC5hcHBlbmRDaGlsZChhcHAyKTtcblxuICAgIGNvbnN0IGFwcDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBhcHAzLmNsYXNzTmFtZSA9IFwiZ3JpZEVsZW1lbnRcIjtcbiAgICBjb25zdCBhcHAzcGljID0gbmV3IEltYWdlKCk7XG4gICAgYXBwM3BpYy5zcmMgPSBhcHAzSW1nO1xuICAgIGFwcDMuYXBwZW5kQ2hpbGQoYXBwM3BpYyk7XG4gICAgYXBwMy5hcHBlbmQoXCJXYWxudXQgU3R1ZmZlZCBGaWdzXCIpO1xuICAgIGFwcEdyaWQuYXBwZW5kQ2hpbGQoYXBwMyk7XG5cbiAgICBhcHBTZWN0aW9uLmFwcGVuZENoaWxkKGFwcEdyaWQpO1xuICAgIG1lbnUuYXBwZW5kQ2hpbGQoYXBwU2VjdGlvbik7XG4gICAgXG5cbiAgICAvL01haW5zXG4gICAgY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluU2VjdGlvbi5jbGFzc05hbWUgPSBcIm1lbnVTZWN0aW9uXCI7XG4gICAgbWFpblNlY3Rpb24uaWQgPSBcIm1haW5TZWN0aW9uXCI7XG5cbiAgICBjb25zdCBtYWluaDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMycpO1xuICAgIG1haW5oMy5pbm5lclRleHQgPSBcIk1haW5zXCJcbiAgICBtYWluU2VjdGlvbi5hcHBlbmRDaGlsZChtYWluaDMpO1xuXG4gICAgY29uc3QgbWFpbkdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluR3JpZC5jbGFzc05hbWUgPSBcIm1lbnVHcmlkXCI7XG5cbiAgICBjb25zdCBtYWluMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4xLmNsYXNzTmFtZSA9IFwiZ3JpZEVsZW1lbnRcIjtcbiAgICBjb25zdCBtYWluMXBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW4xcGljLnNyYyA9IG1haW4xSW1nO1xuICAgIG1haW4xLmFwcGVuZENoaWxkKG1haW4xcGljKTtcbiAgICBtYWluMS5hcHBlbmQoXCJQYW4tR3JpbGxlZCBUcm91dFwiKTtcbiAgICBtYWluR3JpZC5hcHBlbmRDaGlsZChtYWluMSk7XG5cbiAgICBjb25zdCBtYWluMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW4yLmNsYXNzTmFtZSA9IFwiZ3JpZEVsZW1lbnRcIjtcbiAgICBjb25zdCBtYWluMnBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW4ycGljLnNyYyA9IG1haW4ySW1nO1xuICAgIG1haW4yLmFwcGVuZENoaWxkKG1haW4ycGljKTtcbiAgICBtYWluMi5hcHBlbmQoXCJCcmFpc2VkIEJlZWYgQ2hlZWtzXCIpO1xuICAgIG1haW5HcmlkLmFwcGVuZENoaWxkKG1haW4yKTtcblxuICAgIGNvbnN0IG1haW4zID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbWFpbjMuY2xhc3NOYW1lID0gXCJncmlkRWxlbWVudFwiO1xuICAgIGNvbnN0IG1haW4zcGljID0gbmV3IEltYWdlKCk7XG4gICAgbWFpbjNwaWMuc3JjID0gbWFpbjNJbWc7XG4gICAgbWFpbjMuYXBwZW5kQ2hpbGQobWFpbjNwaWMpO1xuICAgIG1haW4zLmFwcGVuZChcIkZhcm1lcidzIENvYmIgU2FsYWRcIik7XG4gICAgbWFpbkdyaWQuYXBwZW5kQ2hpbGQobWFpbjMpO1xuXG4gICAgY29uc3QgbWFpbjQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBtYWluNC5jbGFzc05hbWUgPSBcImdyaWRFbGVtZW50XCI7XG4gICAgY29uc3QgbWFpbjRwaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBtYWluNHBpYy5zcmMgPSBtYWluNEltZztcbiAgICBtYWluNC5hcHBlbmRDaGlsZChtYWluNHBpYyk7XG4gICAgbWFpbjQuYXBwZW5kKFwiUGFzdGEgYSBsYSBCYWNvblwiKTtcbiAgICBtYWluR3JpZC5hcHBlbmRDaGlsZChtYWluNCk7XG5cbiAgICBjb25zdCBtYWluNSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW41LmNsYXNzTmFtZSA9IFwiZ3JpZEVsZW1lbnRcIjtcbiAgICBjb25zdCBtYWluNXBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW41cGljLnNyYyA9IG1haW41SW1nO1xuICAgIG1haW41LmFwcGVuZENoaWxkKG1haW41cGljKTtcbiAgICBtYWluNS5hcHBlbmQoXCJXaWxkIFJhYmJpdCBSYXRhdG91aWxsZVwiKTtcbiAgICBtYWluR3JpZC5hcHBlbmRDaGlsZChtYWluNSk7XG5cbiAgICBjb25zdCBtYWluNiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG1haW42LmNsYXNzTmFtZSA9IFwiZ3JpZEVsZW1lbnRcIjtcbiAgICBjb25zdCBtYWluNnBpYyA9IG5ldyBJbWFnZSgpO1xuICAgIG1haW42cGljLnNyYyA9IG1haW42SW1nO1xuICAgIG1haW42LmFwcGVuZENoaWxkKG1haW42cGljKTtcbiAgICBtYWluNi5hcHBlbmQoXCJTaHJpbXAgQ29uZml0XCIpO1xuICAgIG1haW5HcmlkLmFwcGVuZENoaWxkKG1haW42KTtcblxuICAgIFxuICAgIG1haW5TZWN0aW9uLmFwcGVuZENoaWxkKG1haW5HcmlkKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKG1haW5TZWN0aW9uKTtcblxuICAgIC8vRGVzc2Vyc1xuICAgIGNvbnN0IGRlc3NlcnRTZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzc2VydFNlY3Rpb24uY2xhc3NOYW1lID0gXCJtZW51U2VjdGlvblwiO1xuICAgIGRlc3NlcnRTZWN0aW9uLmlkID0gXCJkZXNzZXJ0U2VjdGlvblwiO1xuXG4gICAgY29uc3QgZGVzc2VydGgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDMnKTtcbiAgICBkZXNzZXJ0aDMuaW5uZXJUZXh0ID0gXCJEZXNzZXJ0c1wiXG4gICAgZGVzc2VydFNlY3Rpb24uYXBwZW5kQ2hpbGQoZGVzc2VydGgzKTtcblxuICAgIGNvbnN0IGRlc3NlcnRHcmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzc2VydEdyaWQuY2xhc3NOYW1lID0gXCJtZW51R3JpZFwiO1xuXG4gICAgY29uc3QgZGVzc2VydDEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNzZXJ0MS5jbGFzc05hbWUgPSBcImdyaWRFbGVtZW50XCI7XG4gICAgY29uc3QgZGVzc2VydDFwaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZXNzZXJ0MXBpYy5zcmMgPSBkZXNzZXJ0MUltZztcbiAgICBkZXNzZXJ0MS5hcHBlbmRDaGlsZChkZXNzZXJ0MXBpYyk7XG4gICAgZGVzc2VydDEuYXBwZW5kKFwiVmFuaWxsYSBDYXJhbWVsIEJyb3duaWVcIik7XG4gICAgZGVzc2VydEdyaWQuYXBwZW5kQ2hpbGQoZGVzc2VydDEpO1xuXG4gICAgY29uc3QgZGVzc2VydDIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkZXNzZXJ0Mi5jbGFzc05hbWUgPSBcImdyaWRFbGVtZW50XCI7XG4gICAgY29uc3QgZGVzc2VydDJwaWMgPSBuZXcgSW1hZ2UoKTtcbiAgICBkZXNzZXJ0MnBpYy5zcmMgPSBkZXNzZXJ0MkltZztcbiAgICBkZXNzZXJ0Mi5hcHBlbmRDaGlsZChkZXNzZXJ0MnBpYyk7XG4gICAgZGVzc2VydDIuYXBwZW5kKFwiRnJlc2ggQmVycnkgQ3JlcGVzXCIpO1xuICAgIGRlc3NlcnRHcmlkLmFwcGVuZENoaWxkKGRlc3NlcnQyKTtcblxuICAgIGNvbnN0IGRlc3NlcnQzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGVzc2VydDMuY2xhc3NOYW1lID0gXCJncmlkRWxlbWVudFwiO1xuICAgIGNvbnN0IGRlc3NlcnQzcGljID0gbmV3IEltYWdlKCk7XG4gICAgZGVzc2VydDNwaWMuc3JjID0gZGVzc2VydDNJbWc7XG4gICAgZGVzc2VydDMuYXBwZW5kQ2hpbGQoZGVzc2VydDNwaWMpO1xuICAgIGRlc3NlcnQzLmFwcGVuZChcIkhhemVsbnV0IENob2NvbGF0ZSBDYWtlXCIpO1xuICAgIGRlc3NlcnRHcmlkLmFwcGVuZENoaWxkKGRlc3NlcnQzKTtcblxuICAgIGRlc3NlcnRTZWN0aW9uLmFwcGVuZENoaWxkKGRlc3NlcnRHcmlkKTtcbiAgICBtZW51LmFwcGVuZENoaWxkKGRlc3NlcnRTZWN0aW9uKTtcblxuXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuXG4gICAgcmV0dXJuO1xufSIsImltcG9ydCBzdG9yeUltZzEgZnJvbSAnLi9pbWFnZXMvc3RvcnkxLmpwZyc7XG5pbXBvcnQgc3RvcnlJbWcyIGZyb20gJy4vaW1hZ2VzL3N0b3J5Mi5qcGcnO1xuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGxvYWRTdG9yeSgpIHtcblxuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpO1xuXG4gICAgY29udGFpbmVyLmlubmVySFRNTCA9IFwiXCI7XG5cbiAgICBjb25zdCBzdG9yeSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0b3J5LmNsYXNzTmFtZSA9IFwic3RvcnlcIjtcbiAgICBzdG9yeS5pZCA9IFwic3RvcnlcIjtcblxuICAgIGNvbnN0IGgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgICBoMS5pbm5lclRleHQgPSBcIk91ciBTdG9yeVwiO1xuICAgIHN0b3J5LmFwcGVuZENoaWxkKGgxKTtcblxuICAgIGNvbnN0IHN0b3J5MSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0b3J5MS5pZCA9IFwic3RvcnkxXCI7XG4gICAgY29uc3Qgc3RvcnkxcGljID0gbmV3IEltYWdlKCk7XG4gICAgc3RvcnkxcGljLnNyYyA9IHN0b3J5SW1nMTtcbiAgICBzdG9yeTFwaWMuYWx0ID0gXCJSZXN0YXVyYW50IHByZXBcIjtcbiAgICBzdG9yeTEuYXBwZW5kQ2hpbGQoc3RvcnkxcGljKTtcbiAgICBjb25zdCBzdG9yeTF0ZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIHN0b3J5MXRleHQudGV4dENvbnRlbnQgPSBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNjaW5nIGVsaXQuIE5hbSBvZGlvIGVyb3MsIHNvZGFsZXMgc2VkIGNvbW1vZG8gcXVpcywgdmVzdGlidWx1bSB2aXRhZSBsZWN0dXMuIE51bmMgYXQgaXBzdW0gdGVsbHVzLiBNYWVjZW5hcyBtb2xsaXMgdWxsYW1jb3JwZXIgbmlzaSwgdmVsIGxhb3JlZXQgdXJuYSBjb25kaW1lbnR1bSB1dC4gVmVzdGlidWx1bSBhIHVybmEgYW50ZS4gU2VkIHBoYXJldHJhIHBvcnR0aXRvciBsYWN1cyBzaXQgYW1ldCBwb3N1ZXJlLiBNb3JiaSB2ZWwgZHVpIGF1Z3VlLiBRdWlzcXVlIGFudGUgbnVsbGEsIG1hbGVzdWFkYSBldCBzb2RhbGVzIGF0LCBjb25kaW1lbnR1bSBldSB0ZWxsdXMuIEluIGNvbnZhbGxpcyBuaXNpIG5vbiBkdWkgZmF1Y2lidXMsIGEgZ3JhdmlkYSBzZW0gYWxpcXVldC5cIlxuICAgIHN0b3J5MS5hcHBlbmRDaGlsZChzdG9yeTF0ZXh0KTtcblxuICAgIGNvbnN0IHN0b3J5MiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHN0b3J5Mi5pZCA9IFwic3RvcnkyXCI7XG4gICAgY29uc3Qgc3RvcnkycGljID0gbmV3IEltYWdlKCk7XG4gICAgc3RvcnkycGljLnNyYyA9IHN0b3J5SW1nMjtcbiAgICBzdG9yeTJwaWMuYWx0ID0gXCJGYXJtIEluZ3JlZGllbnRzXCI7XG4gICAgY29uc3Qgc3RvcnkydGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzdG9yeTJ0ZXh0LnRleHRDb250ZW50ID0gXCJFdGlhbSBldCBmZXJtZW50dW0gZGlhbSwgdml0YWUgdmVuZW5hdGlzIGVyYXQuIFByYWVzZW50IGxhY2luaWEgZmVsaXMgaW4gc29kYWxlcyBmZXVnaWF0LiBQZWxsZW50ZXNxdWUgZmVybWVudHVtIG9kaW8gZWdldCBjb21tb2RvIHRyaXN0aXF1ZS4gSW50ZWdlciBwb3J0YSB0b3J0b3IgZWxlbWVudHVtIHNhZ2l0dGlzIG9ybmFyZS4gRnVzY2UgaW1wZXJkaWV0IGx1Y3R1cyBhY2N1bXNhbi4gTW9yYmkgdmVoaWN1bGEgbWF1cmlzIHNpdCBhbWV0IHJpc3VzIHZ1bHB1dGF0ZSBkaWduaXNzaW0uIE51bmMgaWFjdWxpcyB0dXJwaXMgYSBlZ2VzdGFzIGltcGVyZGlldC5cIlxuICAgIHN0b3J5Mi5hcHBlbmRDaGlsZChzdG9yeTJ0ZXh0KTtcbiAgICBzdG9yeTIuYXBwZW5kQ2hpbGQoc3RvcnkycGljKTtcblxuXG4gICAgc3RvcnkuYXBwZW5kKHN0b3J5MSk7XG4gICAgc3RvcnkuYXBwZW5kKHN0b3J5Mik7XG4gICAgXG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc3RvcnkpO1xuXG4gICAgcmV0dXJuO1xuXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IGxvYWRTdG9yeSBmcm9tICcuL3N0b3J5LmpzJztcbmltcG9ydCBsb2FkSG9tZXBhZ2UgZnJvbSAnLi9ob21lcGFnZS5qcyc7XG5pbXBvcnQgbG9hZEhlcm8gZnJvbSAnLi9ob21laGVyby5qcyc7XG5pbXBvcnQgbG9hZENvbnRhY3QgZnJvbSAnLi9jb250YWN0LmpzJztcbmltcG9ydCBsb2FkTWVudSBmcm9tICcuL21lbnUuanMnO1xuXG5cbmxvYWRIb21lcGFnZSgpO1xuXG4vL2V2ZW50IGxpc3RlbmVycyBmb3IgbGlua3NcbnZhciBob21lTGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiSG9tZVwiKTtcbmhvbWVMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkSGVybygpKTtcblxudmFyIG1lbnVMaW5rID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJNZW51XCIpO1xubWVudUxpbmsuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGxvYWRNZW51KCkpO1xuXG52YXIgbWVudUJ1dHRvbkxpbmsgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlcm9CdXR0b25cIik7XG5tZW51QnV0dG9uTGluay5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gbG9hZE1lbnUoKSk7XG5cblxudmFyIHN0b3J5TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiT3VyIFN0b3J5XCIpO1xuc3RvcnlMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkU3RvcnkoKSk7XG5cbnZhciBjb250YWN0TGluayA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiQ29udGFjdCBVc1wiKTtcbmNvbnRhY3RMaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBsb2FkQ29udGFjdCgpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=