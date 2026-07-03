// Calgary coordinates
const calgaryCenter = [51.0047, -114.0719];

// Load Calgary GeoJSON boundary
fetch('../assets/dev/calgary.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: "white",
                weight: 1,
                fillOpacity: 0.1
            }
        }).addTo(map);
    });
// Load Okotoks GeoJSON boundary
fetch('../assets/dev/okotoks.geojson')
    .then(res => res.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: "white",
                weight: 1,
                fillOpacity: 0.1
            }
        }).addTo(map);
    });
fetch('../assets/dev/airdrie.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: "white",
                weight: 1,
                fillOpacity: 0.1
            }
        }).addTo(map);
    });
fetch('../assets/dev/chestermere.geojson')
    .then(response => response.json())
    .then(data => {
        L.geoJSON(data, {
            style: {
                color: "white",
                weight: 1,
                fillOpacity: 0.1
            }
        }).addTo(map);
    });

const map = L.map('map').setView(calgaryCenter, 8.75);

// Add dark tile layer
L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 18,
}).addTo(map);

// Grey-out outside Calgary using bounds box
L.rectangle(calgaryBounds, {
    color: "#00ffcc",
    weight: 2,
    fillOpacity: 0.1
}).addTo(map);