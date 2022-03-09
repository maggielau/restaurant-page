export default function loadContact() {

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