import { FIREBASE_CONFIG, FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION, OPENROUTESERVICE_API_KEY, ROUTE_STYLE } from "./constants.js";

// import Openrouteservice from 'openrouteservice-js';

console.log("Setting up map . . .");

// Copied from project 2
// Higher = zoom in closer.  
// const map = L.map('map').setView([ 37.87, -122.27 ], 10);   // Need to move down and to the right
// const map = L.map('map').setView([ 40.87, -125.27 ], 12); // too much ?
const map = L.map('map').setView([ 37.90, -122.30 ], 10);  // still need to move down a bit and to the right
// const map = L.map('map').setView([ 37.93, -122.33 ], 10);  

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

// Convert text address to latitute and longitutde.
async function textAddressToLatLong(address) {
    console.log("Converting address to latitude & longitude:", address);
    const URL = `https://nominatim.openstreetmap.org/search?format=json&limit=1&q=${encodeURIComponent(address)}`;

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


async function getHomeAddress() {
    let street = document.getElementById("home-street-address").value;
    let city = document.getElementById("home-city").value;
    let state = document.getElementById("home-state").value;
    let zip = document.getElementById("home-zip-code").value;
    
    let address = `${street}, ${city}, ${state} ${zip}`;
    return await textAddressToLatLong(address);
}
async function getWorkAddress() {
    let street = document.getElementById("work-street-address").value;
    let city = document.getElementById("work-city").value;
    let state = document.getElementById("work-state").value;
    let zip = document.getElementById("work-zip-code").value;
    
    let address = `${street}, ${city}, ${state} ${zip}`;
    return await textAddressToLatLong(address);
}

// prob default to 2-3 passengers for 1st version
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


firebase.initializeApp(FIREBASE_CONFIG);
// const db = firebase.app().firestore(FIRESTORE_NAME);
const db = firebase.firestore();
if (!db) {
    console.error("db firestore not initialized properly");
}


async function persistRouteToFirebase(homeCoordinates, workCoordinates, passengerCapacity, homeCity, homeState, homeZip, workCity, workState, workZip) {
    console.log("Persisting route data to Firebase . . .");

    const firebase_doc = {
        homeCoordinates: {
            lat: homeCoordinates.lat,
            lng: homeCoordinates.lng
        },
        workCoordinates: {
            lat: workCoordinates.lat,
            lng: workCoordinates.lng
        },
        homeCity: homeCity,
        homeState: homeState,
        homeZip: homeZip,
        workCity: workCity,
        workState: workState,
        workZip: workZip,
        currentPassenger: 0, 
        passengerCapacity: passengerCapacity
    };

    try {
        const docRef = await db.collection(FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION).add(firebase_doc);
        console.log(docRef.id, " => ", firebase_doc);
    } catch (error) {
        console.error("Error saving route to Firebase:", error);
    }
}


const Directions = new Openrouteservice.Directions({
    api_key: OPENROUTESERVICE_API_KEY
});

// Need a way to erase old routes when displaying new one
let currentRoutingControl = null;
async function calculateAndDisplayRoute() {
    console.log("Calculating and displaying route . . .");

    const homeCoordinates = await getHomeAddress();
    console.log("Home address lat/long:", homeCoordinates);
    
    const workCoordinates = await getWorkAddress();
    console.log("Work address lat/long:", workCoordinates);

    // Get city, state, and zip for persistence
    const homeCity = document.getElementById("home-city").value;
    const homeState = document.getElementById("home-state").value;
    const homeZip = document.getElementById("home-zip-code").value;
    const workCity = document.getElementById("work-city").value;
    const workState = document.getElementById("work-state").value;
    const workZip = document.getElementById("work-zip-code").value;

    try {
        // Need to remove old route
        if (currentRoutingControl) {
            console.log("Removing old route from map . . .");
            map.removeControl(currentRoutingControl);
        }

        const json = await Directions.calculate({
            coordinates: [
                [homeCoordinates.lng, homeCoordinates.lat], 
                [workCoordinates.lng, workCoordinates.lat]
            ],
            profile: 'driving-car',
            format: 'geojson'
        });

        currentRoutingControl = L.geoJSON(json, {
            style: ROUTE_STYLE
        }).addTo(map);

        let passengerCapacity = getPassengerCapacity();
        persistRouteToFirebase(homeCoordinates, workCoordinates, passengerCapacity, homeCity, homeState, homeZip, workCity, workState, workZip);
    } catch (error) {
        console.error("Error calculating/displaying route:", error);
    }
}

document.getElementById("show-route-button").addEventListener("click", calculateAndDisplayRoute);
// calculateAndDisplayRoute();