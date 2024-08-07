// LEAFLET MAP

var map = L.map("map").setView([47.142301599737635, 39.74624163558195], 16);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.marker([47.142301599737635, 39.74624163558195])
  .addTo(map)
  .bindPopup(
    "<strong>LEVEL FITNESS</strong><br>ул. Максима Горького, 84 Батайск<br>Ростовская обл. Россия<br>346880"
  )
  .openPopup();

// FANCY BOX INIT

Fancybox.bind("[data-fancybox]", {});
