// Get data from Firebase, and for each one, display the route on the map, as well as the remaining passenger capacity.

function fetchRoutesFromFirebase() {
    console.log("Fetching route data from Firebase . . .");
    
    // For each one, create a row.  
    // Need to create a mini map for route.  Just assume center is the same for all?
    db.collection(FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION).get()
        .then((querySnapshot) => {
            console.log("Testing Firestore Connection...");
            querySnapshot.forEach((doc) => {
                console.log(doc.id, " => ", doc.data());
            });
        })
        .catch(err => console.error("Firebase fetch failed:", err));
}

fetchRoutesFromFirebase();