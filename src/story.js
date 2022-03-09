import storyImg1 from './images/story1.jpg';
import storyImg2 from './images/story2.jpg';


export default function loadStory() {

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
    story1pic.src = storyImg1;
    story1pic.alt = "Restaurant prep";
    story1.appendChild(story1pic);
    const story1text = document.createElement('p');
    story1text.textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam odio eros, sodales sed commodo quis, vestibulum vitae lectus. Nunc at ipsum tellus. Maecenas mollis ullamcorper nisi, vel laoreet urna condimentum ut. Vestibulum a urna ante. Sed pharetra porttitor lacus sit amet posuere. Morbi vel dui augue. Quisque ante nulla, malesuada et sodales at, condimentum eu tellus. In convallis nisi non dui faucibus, a gravida sem aliquet."
    story1.appendChild(story1text);

    const story2 = document.createElement('div');
    story2.id = "story2";
    const story2pic = new Image();
    story2pic.src = storyImg2;
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