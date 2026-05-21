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
    });
}

function createRideRow(docId, data) {
    const tr = document.createElement('tr');
    
    const homeLocation = `${data.homeCity}, ${data.homeState} ${data.homeZip}`;
    const workLocation = `${data.workCity}, ${data.workState} ${data.workZip}`;

    tr.innerHTML = `
        <td>${homeLocation}</td>
        <td>${workLocation}</td>
        <td>1 / ${data.passengerCapacity}</td>
    `;
    
    return tr;
}
     
document.getElementById("load-route-button").addEventListener("click", fetchRoutesFromFirebaseAndRender);
// fetchRoutesFromFirebaseAndRender();