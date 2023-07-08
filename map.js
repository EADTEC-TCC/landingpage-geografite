// Inicialização do mapa com o Leaflet
// var map = L.map('map'); // Inicializar o mapa e depois definir o ponto inicial

var map = L.map("map").setView([-14.24067, -54.38802], 4); // Inicializar o mapa diretamente

// Tenta buscar a localização do usuário (ver documentação)
// https://developer.mozilla.org/pt-BR/docs/Web/API/Geolocation/getCurrentPosition

navigator.geolocation.getCurrentPosition(
  (p) => {
    map.setView([p.coords.latitude, p.coords.longitude], 13);
  },
  () => {
    map.setView([-14.24067, -54.38802], 4);
  },
  { enableHighAccuracy: true }
);

// Adiciona os "ladrilhos" do OpenStreetMap

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  minZoom: 3,
  maxZoom: 19,
  zoomDelta: 0.5,
  attribution:
    '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

map.attributionControl.setPrefix('<a href="https://leafletjs.com/">Leaflet</a>');

L.control.scale({ imperial: true, metric: true }).addTo(map);

let markings = [
    [-21.791954, -48.175959],
    [-23.716984, -47.414229],
    [-23.512667, -47.497606],
];

// for (coordinates in markings) {
for (let i = 0; i < markings.length; i++) {
  L.marker(markings[i]).bindPopup("Geografite").addTo(map);
};

map.on("load", () => {
  L.popup()
    .setLatLng(map.getCenter())
    .setContent("Olá! Este é o GeoGrafite :)")
    .openOn(map);
});
