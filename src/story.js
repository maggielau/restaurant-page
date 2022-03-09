export default function loadStory() {

    const container = document.getElementById("container");

    container.innerHTML = "";

    const story = document.createElement('div');
    story.className = "story";
    story.id = "story";

    story.append("Our Story Div");

    container.appendChild(story);

    return;

}