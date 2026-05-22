import { FIREBASE_CONFIG, FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION, FIRESTORE_NAME } from "./constants.js";

// Get data from Firebase, and for each one, display the route on the map, as well as the remaining passenger capacity.

firebase.initializeApp(FIREBASE_CONFIG);
// const db = firebase.app().firestore(FIRESTORE_NAME);
const db = firebase.firestore();

async function fetchRoutesFromFirebaseAndRender() {
    console.log("Fetching route data from Firebase . . .");

    let tableBody = document.querySelector('#rides-table-body'); 
    tableBody.innerHTML = '';

    const querySnapshot = await db.collection(FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION).get();
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        let row = createRideRow(doc.id, doc.data());
        tableBody.appendChild(row);

        // Initialize the mini map for this row
        renderMiniMap(doc.id, doc.data());
    });
}

function createRideRow(docId, data) {
    const tr = document.createElement('tr');

    const homeLocation = (data.homeCity && data.homeState) 
        ? `${data.homeCity}, ${data.homeState} ${data.homeZip || ''}` 
        : "Home city & state information unavailable";

    const workLocation = (data.workCity && data.workState) 
        ? `${data.workCity}, ${data.workState} ${data.workZip || ''}` 
        : "Work city & state information unavailable";

    const passengerCap = data.passengerCapacity || 4;

    tr.innerHTML = `
        <td>${homeLocation}</td>
        <td>${workLocation}</td>
        <td>1 / ${passengerCap}</td>
        <td>
            <div id="map-${docId}" style="height: 250px; width: 250px;"></div>
        </td>
    `;

    return tr;
}

function renderMiniMap(docId, data) {
    const mapId = `map-${docId}`;

    // Check if coordinates exist to avoid errors
    if (!data.homeCoordinates || !data.workCoordinates) {
        document.getElementById(mapId).innerHTML = "Map data unavailable; either home or work coordinates are unavailable";
        return;
    }

    const map = L.map(mapId, {
        zoomControl: false,         // No +/- buttons
        dragging: false,            // No dragging
        scrollWheelZoom: false,     // No scroll wheel
        doubleClickZoom: false,     // No doule click zoom.
        boxZoom: false,             // No shift drag
        touchZoom: false            // No zoom for mobile
    }).setView([data.homeCoordinates.lat, data.homeCoordinates.lng], 10);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const homeMarker = L.marker([data.homeCoordinates.lat, data.homeCoordinates.lng]).addTo(map);
    const workMarker = L.marker([data.workCoordinates.lat, data.workCoordinates.lng]).addTo(map);

    const line = L.polyline([
        [data.homeCoordinates.lat, data.homeCoordinates.lng],
        [data.workCoordinates.lat, data.workCoordinates.lng]
    ], {color: 'red'}).addTo(map);

    map.fitBounds(line.getBounds(), {
        padding: [10, 10]
    });
}

     
document.getElementById("load-route-button").addEventListener("click", fetchRoutesFromFirebaseAndRender);
// fetchRoutesFromFirebaseAndRender();