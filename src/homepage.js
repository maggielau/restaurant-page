import logoImg from './images/logo.svg';
import heroPhoto from './images/herophoto.jpg';
import farmImg from './images/farm.svg';
import heartImg from './images/heart.svg';
import wineImg from './images/wine.svg';
import githubImg from './images/github-mark-small.svg';
import loadHero from './homehero.js';


export default function loadHomepage() {
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
    logo.src = logoImg;
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

    return container;

}

function loadFooter () {
    const footer = document.createElement('div');
    footer.classList.add('footer');

    const a = document.createElement('a');
    a.setAttribute("href", "https://github.com/maggielau");
    a.setAttribute("target", "_blank");

    const gitLogo = new Image();
    gitLogo.src = githubImg;
    gitLogo.alt = "Maggie's Github";

    a.appendChild(gitLogo);

    footer.appendChild(a);
    footer.append("Maggie Lau");

    return footer;


}

