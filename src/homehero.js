import heroPhoto from './images/herophoto.jpg';
import farmImg from './images/farm.svg';
import heartImg from './images/heart.svg';
import wineImg from './images/wine.svg';
import loadMenu from './menu.js';

export default function loadHero() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    //hero
    const hero = document.createElement('div');
    hero.classList.add('hero');
    const herophoto = new Image();
    herophoto.src = heroPhoto;
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
    farm.src = farmImg;
    farm.alt = "Farm Icon";
    feature1.appendChild(farm);
    const farmh4 = document.createElement('h4');
    farmh4.innerText = "Farm Fresh";
    feature1.appendChild(farmh4);
    feature1.append("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    const feature2 = document.createElement('div');
    feature2.classList.add('feature');
    const heart = new Image();
    heart.src = heartImg;
    heart.alt = "Heart Icon";
    feature2.appendChild(heart);
    const hearth4 = document.createElement('h4');
    hearth4.innerText = "Healthy Food";
    feature2.appendChild(hearth4);
    feature2.append("Nullam tempus ut erat vel fermentum. Morbi venenatis pharetra mauris.");
    const feature3 = document.createElement('div');
    feature3.classList.add('feature');
    const wine = new Image();
    wine.src = wineImg;
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

    var menuButtonLink = document.getElementById("heroButton");
    menuButtonLink.addEventListener("click", () => loadMenu());


    return;

}