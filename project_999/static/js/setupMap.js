console.log("Setting up map . . .");

// Copied from project 2
// Higher = zoom in closer.  
const map = L.map('map').setView([ 37.87, -122.27 ], 10);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Have a list of pins for pickup spots



// Convert text address to latitute and longitutde.
function textAddressToLatLong(address) {
    console.log("Converting address to latitude & longitude:", address);
    const URL = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(address)}`;

    return fetch(URL)
        .then((response) => response.json()) 
        .then((data) => {
            console.log("Received loc data:", data);
            return L.latLng(data[0].lat, data[0].lon);
        });
}
textAddressToLatLong("UC Berkeley, Berkeley, CA");
textAddressToLatLong("Downtown Redwood City, CA");
textAddressToLatLong("Walnut Creek, CA");

// Break these down into smaller boxes and concat them. For now, just one box for prototyping
function getHomeAddress() {
    return document.getElementById("home-address").value;
}

function getWorkAddress() {
    return document.getElementById("work-address").value;
}

// Need a way to erase old routes when displaying new one
let currentRoutingControl = null;
async function calculateAndDisplayRoute() {
    //  prob easier to just have one box for now 
    const homeAddress = getHomeAddress();
    const workAddress = getWorkAddress();

    try {
        // Create URL for OpenRouteService API call
        const URL = 'tempURL';

        const response = await fetch(URL);
    } catch (error) {
        console.error("Error calculating/displaying route:", error);
    }
}