let mymap = L.map("mapid").setView([5.5, 5.5], 13);

const URL =
  "https://geo.ipify.org/api/v1?apiKey=at_RyMzs9DPkbrvltZhi19LdhwM9MRpq&ipAddress=";
let fullURL = null;

function completeURL() {
  let inputValue = document.getElementById("ipadress").value;
  fullURL = URL + inputValue;
  return fullURL;
}

function getLocationData() {
  axios.get(fullURL ? fullURL : URL).then((data) => {
    document.getElementById("yourIp").innerHTML = data.data.ip;
    document.getElementById("city").innerHTML = data.data.location.city + ",";
    document.getElementById("region").innerHTML = data.data.location.region;
    document.getElementById("timeZone").innerHTML = data.data.location.timezone;
    document.getElementById("postalCode").innerHTML =
      data.data.location.postalCode;
    document.getElementById("isp").innerHTML = data.data.isp;

    mymap.off();
    mymap.remove();

    mymap = L.map("mapid").setView(
      [data.data.location.lat, data.data.location.lng],
      13
    );
    marker = L.marker([data.data.location.lat, data.data.location.lng]).addTo(
      mymap
    );
console.log(data);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoibmVib2pzYTMxMSIsImEiOiJja282eml5MWQxcjJjMndseWR0eWdpNHpqIn0.7CCC_DwCQM7pLUfuBnDjoA",
      }
    ).addTo(mymap);
  });
}

document.getElementById("ipadress").addEventListener("keyup", completeURL);
document
  .getElementById("submitButton")
  .addEventListener("click", getLocationData);
window.addEventListener("load", (event) => {
  getLocationData();
});
