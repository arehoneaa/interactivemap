const apiKey ='pk.eyJ1IjoiYWNjdXJhdGV0aGluZ3MiLCJhIjoiY2xnZHAyaGNkMXgxbzNscGlwcG90eDhseSJ9.kABl5xCvMOKdL_1C0BJtBg';

const mymap = L.map('map').setView([-25.77184601016997, 28.23536517639282], 12);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    maxZoom: 20,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: apiKey
}).addTo(mymap);

//Accurate Marker

const marker = L.marker([-25.74771706859068, 28.213412393265582]).addTo(mymap);

const marker1 = L.marker([-25.754967808821657, 28.23802786018075]).addTo(mymap);

const marker2 = L.marker([-25.74506710367406, 28.239253595544632]).addTo(mymap);

const marker3 = L.marker([-25.731938249170728, 28.16192730575928]).addTo(mymap);


//Mulovhedzi's popup message
let template =  `
    <h1>Pretoria art museum</h1>
    <div style="text-align:centre">
    <img width="250" height="150" src="pretoria-art-museum.jpg"/>
    </div>
    `
marker.bindPopup(template);

let template1 =  `
    <h1>SAPS Brooklyn</h1>
    <div style="text-align:centre">
    <img width="250" height="150" src="download.jfif"/>
    </div>
    `
marker1.bindPopup(template1);

let template2 =  `
    <h3>Hatfield VW Pretoria</h3>
    <div style="text-align:centre">
    <img width="170" height="150" src="images.jfif"/>
    </div>
    `
marker2.bindPopup(template2);

let template3 =  `
    <h3>Tshwane University Of Technology </h3>
    <div style="text-align:centre">
    <img width="250" height="150" src="tshwane.jfif"/>
    </div>
    `
marker3.bindPopup(template3);

//Circle

const circle = L.circle([-25.74771706859068, 28.213412393265582], {
    radius:100,
    fillColor: 'red',
    fillOpacity:0.2

}).addTo(mymap).bindPopup('Art museum surrounding areas')

const circle1 = L.circle([-25.767842042295758, 28.199602833403183], {
    radius:210,
    fillColor: 'red',
    fillOpacity:0.2

}).addTo(mymap).bindPopup('UNISA & Surroundings')

//Polygon

const polygon = L.polygon([
[-25.75433825492907, 28.232472733550505],
[-25.752979732436653, 28.222907614875037],
[-25.750030691069313, 28.228094852325455],

], {
    color:'blue',
    fillColor:'blue',
    fillOpacity:0.2
}).addTo(mymap).bindPopup('University, Highschool & Stadium ')