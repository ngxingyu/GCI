var lat = document.getElementById("lat");
var long = document.getElementById("long");
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.watchPosition(showPosition);
    } 
}
function showPosition(position) {
    lat.innerHTML = "Latitude: " + position.coords.latitude; 
    long.innerHTML = "Longitude: " + position.coords.longitude; 
 }
