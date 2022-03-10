import app1Img from './images/app1.jpg';
import app2Img from './images/app2.jpg';
import app3Img from './images/app3.jpg';
import main1Img from './images/main1.jpg';
import main2Img from './images/main2.jpg';
import main3Img from './images/main3.jpg';
import main4Img from './images/main4.jpg';
import main5Img from './images/main5.jpg';
import main6Img from './images/main6.jpg';
import dessert1Img from './images/dessert1.jpg';
import dessert2Img from './images/dessert2.jpg';
import dessert3Img from './images/dessert3.jpg';


export default function loadMenu() {

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
    app1pic.src = app1Img;
    app1.appendChild(app1pic);
    app1.append("Burrata Cheese");
    appGrid.appendChild(app1);

    const app2 = document.createElement('div');
    app2.className = "gridElement";
    const app2pic = new Image();
    app2pic.src = app2Img;
    app2.appendChild(app2pic);
    app2.append("Seared Tuna Sashimi");
    appGrid.appendChild(app2);

    const app3 = document.createElement('div');
    app3.className = "gridElement";
    const app3pic = new Image();
    app3pic.src = app3Img;
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
    main1pic.src = main1Img;
    main1.appendChild(main1pic);
    main1.append("Pan-Grilled Trout");
    mainGrid.appendChild(main1);

    const main2 = document.createElement('div');
    main2.className = "gridElement";
    const main2pic = new Image();
    main2pic.src = main2Img;
    main2.appendChild(main2pic);
    main2.append("Braised Beef Cheeks");
    mainGrid.appendChild(main2);

    const main3 = document.createElement('div');
    main3.className = "gridElement";
    const main3pic = new Image();
    main3pic.src = main3Img;
    main3.appendChild(main3pic);
    main3.append("Farmer's Cobb Salad");
    mainGrid.appendChild(main3);

    const main4 = document.createElement('div');
    main4.className = "gridElement";
    const main4pic = new Image();
    main4pic.src = main4Img;
    main4.appendChild(main4pic);
    main4.append("Pasta a la Bacon");
    mainGrid.appendChild(main4);

    const main5 = document.createElement('div');
    main5.className = "gridElement";
    const main5pic = new Image();
    main5pic.src = main5Img;
    main5.appendChild(main5pic);
    main5.append("Wild Rabbit Ratatouille");
    mainGrid.appendChild(main5);

    const main6 = document.createElement('div');
    main6.className = "gridElement";
    const main6pic = new Image();
    main6pic.src = main6Img;
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
    dessert1pic.src = dessert1Img;
    dessert1.appendChild(dessert1pic);
    dessert1.append("Vanilla Caramel Brownie");
    dessertGrid.appendChild(dessert1);

    const dessert2 = document.createElement('div');
    dessert2.className = "gridElement";
    const dessert2pic = new Image();
    dessert2pic.src = dessert2Img;
    dessert2.appendChild(dessert2pic);
    dessert2.append("Fresh Berry Crepes");
    dessertGrid.appendChild(dessert2);

    const dessert3 = document.createElement('div');
    dessert3.className = "gridElement";
    const dessert3pic = new Image();
    dessert3pic.src = dessert3Img;
    dessert3.appendChild(dessert3pic);
    dessert3.append("Hazelnut Chocolate Cake");
    dessertGrid.appendChild(dessert3);

    dessertSection.appendChild(dessertGrid);
    menu.appendChild(dessertSection);


    container.appendChild(menu);

    return;
}