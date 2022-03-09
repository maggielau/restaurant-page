import loadStory from './story.js';
import loadHomepage from './homepage.js';
import loadHero from './homehero.js';

loadHomepage();

//event listeners for links
var homeLink = document.getElementById("Home");
homeLink.addEventListener("click", () => loadHero());

var menuLink = document.getElementById("Menu");
menuLink.addEventListener("click", () => console.log("clicked menu"));

var storyLink = document.getElementById("Our Story");
storyLink.addEventListener("click", () => loadStory());

var contactLink = document.getElementById("Contact Us");
contactLink.addEventListener("click", () => console.log("clicked contact"));