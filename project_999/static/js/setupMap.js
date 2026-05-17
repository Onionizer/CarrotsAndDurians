console.log("Setting up map . . .");

// Copied from project 2
// Higher = zoom in closer.  
const map = L.map('map').setView([ 37.87, -122.27 ], 10);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Have a list of pins for pickup spots


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

    } catch (error) {
        console.error("Error calculating/displaying route:", error);
    }
}