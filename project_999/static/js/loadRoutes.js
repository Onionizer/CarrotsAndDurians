import { FIREBASE_CONFIG, FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION, FIRESTORE_NAME } from "./constants.js";

// Get data from Firebase, and for each one, display the route on the map, as well as the remaining passenger capacity.

firebase.initializeApp(FIREBASE_CONFIG);
// const db = firebase.app().firestore(FIRESTORE_NAME);
const db = firebase.firestore();

async function fetchRoutesFromFirebaseAndRender() {
    console.log("Fetching route data from Firebase . . .");
    
    // For each one, create a row.  
    // Need to create a mini map for route.  Just assume center is the same for all?
    const querySnapshot = await db.collection(FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION).get();

    let ridesDiv = document.querySelector('#rides_div'); 
    ridesDiv.innerHTML = '';

    for (let doc of querySnapshot) {
        console.log(doc.id, " => ", doc.data());
        let singleRideDiv = createRideDiv(doc.data());
        ridesDiv.appendChild(singleRideDiv);
    }

    db.collection(FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION).get()
        .then((querySnapshot) => {
            console.log("Testing Firestore Connection...");
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(err => console.error("Firebase fetch failed:", err));
}


function createRideDiv(ride) {
    let singleRideDiv = document.createElement('div');
    singleRideDiv.classList.add("Rides-ride");
    singleRideDiv.innerHTML = '';
    return singleRideDiv;
}


function createBookDiv(book) {
    let singleBookDiv  = document.createElement('div');
    singleBookDiv.classList.add("Books-book");
    singleBookDiv.innerHTML = 
        `   <img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" alt="cover">
            <div class="Books-book-details">
                <div class="Books-book-title">${book.title}</div>
                <strong>Author:</strong> ${book.author_name[0]}<br>
                <strong>Language:</strong> ${book.language}<br>
                <strong>Year Published:</strong> ${book.first_publish_year}<br>
            </div>
            `
    ;
    return singleBookDiv;
}




fetchRoutesFromFirebaseAndRender();