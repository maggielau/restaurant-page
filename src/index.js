import loadStory from './story.js';
import loadHomepage from './homepage.js';
import loadHero from './homehero.js';
import loadContact from './contact.js';
import loadMenu from './menu.js';


loadHomepage();

//event listeners for links
var homeLink = document.getElementById("Home");
homeLink.addEventListener("click", () => loadHero());

var menuLink = document.getElementById("Menu");
menuLink.addEventListener("click", () => loadMenu());

var menuButtonLink = document.getElementById("heroButton");
menuButtonLink.addEventListener("click", () => loadMenu());


var storyLink = document.getElementById("Our Story");
storyLink.addEventListener("click", () => loadStory());

var contactLink = document.getElementById("Contact Us");
contactLink.addEventListener("click", () => loadContact());