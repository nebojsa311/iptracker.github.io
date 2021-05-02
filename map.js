var mymap = L.map('mapid').setView([43.799, 18.340], 13);
var marker = L.marker([43.799, 18.340]).addTo(mymap);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken: 'pk.eyJ1IjoibmVib2pzYTMxMSIsImEiOiJja282eml5MWQxcjJjMndseWR0eWdpNHpqIn0.7CCC_DwCQM7pLUfuBnDjoA'

}).addTo(mymap);