import { FIREBASE_CONFIG, FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION, FIRESTORE_NAME } from "./constants.js";

// Get data from Firebase, and for each one, display the route on the map, as well as the remaining passenger capacity.

firebase.initializeApp(FIREBASE_CONFIG);
// const db = firebase.app().firestore(FIRESTORE_NAME);
const db = firebase.firestore();

async function fetchRoutesFromFirebaseAndRender() {
    console.log("Fetching route data from Firebase . . .");
    
    // For each one, create a row.  
    // Need to create a mini map for route.  Just assume center is the same for all?
    
    let ridesDiv = document.querySelector('#rides_div'); 
    ridesDiv.innerHTML = '';

    // querySnapshot itself is not iterable 
    const querySnapshot = await db.collection(FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION).get();
    for (let doc of querySnapshot.docs) {
        console.log(doc.id, " => ", doc.data());
        let singleRideDiv = createRideDiv(doc.data());
        ridesDiv.appendChild(singleRideDiv);
    }

    // db.collection(FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION).get()
    //     .then((querySnapshot) => {
    //         console.log("Testing Firestore Connection...");
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.id, " => ", doc.data());
    //         });
    //     })
    //     .catch(err => console.error("Firebase fetch failed:", err));
}


    // const firebase_doc = {
    //     homeCoordinates: {
    //         lat: homeCoordinates.lat,
    //         lng: homeCoordinates.lng
    //     },
    //     workCoordinates: {
    //         lat: workCoordinates.lat,
    //         lng: workCoordinates.lng
    //     },
    //     currentPassenger: 0, // will need to update this as passengers are added
    //     passengerCapacity: passengerCapacity
    // };
function createRideDiv(firebaseDocData) {
    let singleRideDiv = document.createElement('div');
    singleRideDiv.classList.add("Rides-ride");
    singleRideDiv.innerHTML = 
        `   <div class="Ride-details">
                <strong>Home:</strong> ${firebaseDocData.homeCoordinates.lat}, ${firebaseDocData.homeCoordinates.lng}<br>
                <strong>Work:</strong> ${firebaseDocData.workCoordinates.lat}, ${firebaseDocData.workCoordinates.lng}<br>
            </div>`;
    return singleRideDiv;
}


document.getElementById("load-route-button").addEventListener("click", fetchRoutesFromFirebaseAndRender);
fetchRoutesFromFirebaseAndRender();