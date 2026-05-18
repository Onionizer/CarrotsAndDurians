import { FIREBASE_CONFIG, FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION, OPENROUTESERVICE_API_KEY, ROUTE_STYLE } from "./constants.js";

// import Openrouteservice from 'openrouteservice-js';

console.log("Setting up map . . .");

// Copied from project 2
// Higher = zoom in closer.  
// const map = L.map('map').setView([ 37.87, -122.27 ], 10);   // Need to move down and to the right
// const map = L.map('map').setView([ 40.87, -125.27 ], 12); // too much ?
// const map = L.map('map').setView([ 37.90, -122.30 ], 9);   // This is OK w/ 1000px height but need to zoom in more after reducing  to 700px.  
const map = L.map('map').setView([ 37.90, -122.30 ], 8); 

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

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
        console.log("Received loc data:", data, "for address:", address);

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


// Break these down into smaller boxes and concat them. For now, just one box for prototyping
async function getHomeAddress() {
    let address = document.getElementById("full-home-address").value;
    return await textAddressToLatLong(address);
}
async function getWorkAddress() {
    let address = document.getElementById("full-work-address").value;
    return await textAddressToLatLong(address);
}

function getPassengerCapacity() {
    let passengerCapacity = document.getElementById("passenger-capacity").value;
    return passengerCapacity;
}


// Pin the pickup spots on the map
// Once everything is working, should store the pickup spot information elsewhere to pull it out so it can be show in dropdown or something.
const bartPickUpSpots = [
    {name: "Pleasant Hill/Contra Costa Centre BART",   lat: 37.9284, lon: -122.0560},
    {name: "Walnut Creek BART",                        lat: 37.9055, lon: -122.0675},
    {name: "Lafayette BART",                           lat: 37.8931, lon: -122.1246},
    {name: "Orinda BART",                              lat: 37.8784, lon: -122.1837},
    {name: "Rockridge BART",                           lat: 37.8447, lon: -122.2513},
    {name: "12th St Oakland City Center BART",         lat: 37.8030, lon: -122.2716},
    {name: "Lake Merritt BART",                        lat: 37.7970, lon: -122.2651},
    {name: "Downtown Hayward BART",                    lat: 37.6697, lon: -122.0870}
];

// https://leafletjs.com/examples/custom-icons/
const bartTrainIcon = L.icon({
    iconUrl: 'https://cdn.shoplightspeed.com/shops/637485/files/60678338/bart-fleet-train-sticker.jpg',
    // shadowUrl for fancy shadow effect
    // iconSize: [28, 28],      // size of the icon - 28 is too big.
    iconSize: [24, 24],      
    iconAnchor: [12, 12],    // point of the icon which will correspond to marker's location
    popupAnchor: [0, -12]   // point from which the popup should open relative to the iconAnchor
});


function pinPickUpSpots() {
    bartPickUpSpots.forEach(pickUpSpot => {
        L.marker([pickUpSpot.lat, pickUpSpot.lon], {icon: bartTrainIcon})
            .addTo(map)
            .bindPopup(pickUpSpot.name);    // I can add HTML to .bindPopup() to be fancier.
    });
}
pinPickUpSpots();


class CommuteRoute {
    // want user information, max distance added/max time added, but for prototype, just route.
    constructor(homeCoordinates, workCoordinates, passengerCapacity) {
        this.homeCoordinates = homeCoordinates;
        this.workCoordinates = workCoordinates;
        this.passengerCapacity = passengerCapacity;
    }
}


firebase.initializeApp(FIREBASE_CONFIG);
const db = firebase.firestore();

async function persistRouteToFirebase(homeCoordinates, workCoordinates) {
    console.log("Persisting route data to Firebase . . .");

    const commute_route = new CommuteRoute(homeCoordinates, workCoordinates);

    try {
        const docRef = await db.collection(FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION).add(commute_route);

    } catch (error) {
        console.error("Error saving route to Firebase:", error);
    }
}


// const Directions = new Openrouteservice.Directions({
//     api_key: OPENROUTESERVICE_API_KEY
// });

// Need a way to erase old routes when displaying new one
let currentRoutingControl = null;
async function calculateAndDisplayRoute() {
    console.log("Calculating and displaying route . . .");

    //  prob easier to just have one box for now 
    const homeCoordinates = await getHomeAddress();
    // const homeCoordinates = await textAddressToLatLong("UC Berkeley, CA");
    console.log("Home address lat/long:", homeCoordinates);
    
    const workCoordinates = await getWorkAddress();
    // const workCoordinates = await textAddressToLatLong("Downtown Redwood City, CA");
    console.log("Work address lat/long:", workCoordinates);

    try {
        // Need to remove old route
        if (currentRoutingControl) {
            console.log("Removing old route from map . . .");
            map.removeControl(currentRoutingControl);
        }

        // const json = await Directions.calculate({
        //     coordinates: [
        //         // V2 expects [Longitude, Latitude], Leaflet expects [Latitude, Longitude]. 
        //         [homeCoordinates.lng, homeCoordinates.lat], 
        //         [workCoordinates.lng, workCoordinates.lat]
        //     ],
        //     profile: 'driving-car',
        //     format: 'geojson'
        // });

        // currentRoutingControl = L.geoJSON(json, {
        //     style: ROUTE_STYLE
        // }).addTo(map);


        currentRoutingControl = L.Routing.control({
            waypoints: [homeCoordinates, workCoordinates],
            // Set up OpenRouteService
            router: L.Routing.openrouteserviceV2('eyJvcmciOiI1YjNjZTM1OTc4NTExMTAwMDFjZjYyNDgiLCJpZCI6IjM4ZTEwZDU4MzhmNzRmNDNiNmVmMDc3ZDEzZTk0ODY1IiwiaCI6Im11cm11cjY0In0=', {
                // do I need to specify format: json?
                profile: 'driving-car',
                api_version: 'v2' 
            }),
            lineOptions: {
                styles: [{ color: '#2A75D3', weight: 6, opacity: 0.85 }] 
            },

            show: false // Keeps the layout clean by hiding the text list of turn directions
        }).addTo(map);

        // try persisting to test
        let passengerCapacity = getPassengerCapacity();
        let current_route = new CommuteRoute(homeCoordinates, workCoordinates, passengerCapacity);
        persistRouteToFirebase(current_route);
    } catch (error) {
        console.error("Error calculating/displaying route:", error);
    }
}

document.getElementById("show-route-button").addEventListener("click", calculateAndDisplayRoute);
// calculateAndDisplayRoute();