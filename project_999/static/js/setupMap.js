console.log("Setting up map . . .");

// Copied from project 2
// Higher = zoom in closer.  
// const map = L.map('map').setView([ 37.87, -122.27 ], 10);   // Need to move down and to the right
// const map = L.map('map').setView([ 40.87, -125.27 ], 12); // too much ?
const map = L.map('map').setView([ 37.90, -122.30 ], 9);   // Need to move down and to the right

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Have a list of pins for pickup spots



// Convert text address to latitute and longitutde.
async function textAddressToLatLong(address) {
    console.log("Converting address to latitude & longitude:", address);
    const URL = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(address)}`;

    // return fetch(URL)
    //     .then((response) => response.json()) 
    //     .then((data) => {
    //         console.log("Received loc data:", data);
    //         return L.latLng(data[0].lat, data[0].lon);
    //     });


    try {
        const response = await fetch(URL);
        const data = await response.json();
        console.log("Received loc data:", data);

        // maybe check if address exists? 
        return L.latLng(data[0].lat, data[0].lon);
    } catch (error) {
        console.error("Error converting address to lat/long:", error);
    }
}
// textAddressToLatLong("UC Berkeley, Berkeley, CA");
// [
//   {
//     "place_id": 319946266,
//     "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
//     "osm_type": "node",
//     "osm_id": 1948043265,
//     "boundingbox": ["37.8713458", "37.8714458", "-122.2651894", "-122.2650894"],
//     "lat": "37.8713958",
//     "lon": "-122.2651394",
//     "display_name": "UC Berkeley, The Crescent, Downtown Berkeley, Berkeley, Alameda County, California, 94704, United States",
//     "class": "highway",
//     "type": "bus_stop",
//     "addresstype": "highway",
//     "name": "UC Berkeley",
//     "importance": 0.00007045166704809671,
//     "place_rank": 30
//   }
// ]
// textAddressToLatLong("Downtown Redwood City, CA");
// [
//   {
//     "place_id": 324720148,
//     "licence": "Data © OpenStreetMap contributors, ODbL 1.0. http://osm.org/copyright",
//     "osm_type": "way",
//     "osm_id": 240211431,
//     "boundingbox": ["37.4853549", "37.4855876", "-122.2279621", "-122.2276210"],
//     "lat": "37.4854375",
//     "lon": "-122.2277882",
//     "display_name": "Downtown Station Redwood City Post Office, 855, Jefferson Avenue, Redwood Junction, Redwood City, San Mateo County, California, 94063, United States",
//     "class": "amenity",
//     "type": "post_office",
//     "addresstype": "amenity",
//     "name": "Downtown Station Redwood City Post Office",
//     "importance": 0.00006208209353775871,
//     "place_rank": 30
//   }
// ]


// textAddressToLatLong("Walnut Creek, CA");

// Break these down into smaller boxes and concat them. For now, just one box for prototyping
function getHomeAddress() {
    return document.getElementById("home-address").value;
}
function getWorkAddress() {
    return document.getElementById("work-address").value;
}


// Pin the pickup spots on the map
// Once everything is working, should store the pickup spot information elsewhere to pull it out so it can be show in dropdown or something.
const pickupSpots = [
    {name: "Pleasant Hill/Contra Costa Centre BART",   lat: 37.9284, lon: -122.0560},
    {name: "Walnut Creek BART",                        lat: 37.9055, lon: -122.0675},
    {name: "Lafayette BART",                           lat: 37.8931, lon: -122.1246},
    {name: "Orinda BART",                              lat: 37.8784, lon: -122.1837},
    {name: "Rockridge BART",                           lat: 37.8447, lon: -122.2513},
    {name: "12th St Oakland City Center BART",         lat: 37.8030, lon: -122.2716},
    {name: "Lake Merritt BART",                        lat: 37.7970, lon: -122.2651}
];

function pinPickUpSpots() {
    pickupSpots.forEach(pickUpSpot => {
        L.circleMarker([pickUpSpot.lat, pickUpSpot.lon], {
            radius: 7,
            fillColor: "#28a72e",
            // color: "#ffffff",
            // weight: 2,
            fillOpacity: 1,
        }).addTo(map)
    });
}
pinPickUpSpots();

// Need a way to erase old routes when displaying new one
let currentRoutingControl = null;
async function calculateAndDisplayRoute() {
    //  prob easier to just have one box for now 
    // const homeAddress = getHomeAddress();
    const homeCoordinates = await textAddressToLatLong("UC Berkeley, CA");
    console.log("Home address lat/long:", homeCoordinates);
    
    // const workAddress = getWorkAddress();
    const workCoordinates = await textAddressToLatLong("Downtown Redwood City, CA");
    console.log("Work address lat/long:", workCoordinates);

    try {
        // Create URL for OpenRouteService API call
        currentRoutingControl = L.Routing.control({
            waypoints: [homeCoordinates, workCoordinates],
            lineOptions: {
                styles: [{ color: '#2A75D3', weight: 6, opacity: 0.85 }] 
            },

            show: false // Keeps the layout clean by hiding the textual list of turn directions
        }).addTo(map);
    } catch (error) {
        console.error("Error calculating/displaying route:", error);
    }
}


calculateAndDisplayRoute();