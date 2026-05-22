import { FIREBASE_CONFIG, FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION } from "./constants.js";

// Initialize Firebase if not already initialized.  Apparently this is best practice.
if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
}
const db = firebase.firestore();

async function updateRouteCount() {
    console.log("Fetching count . . .");

    const routeCountElement = document.getElementById("route-count");
    if (!routeCountElement) {
        console.log("???? where is this");
        return;
    }

    try {
        const querySnapshot = await db.collection(FIREBASE_PROTOTYPE_NO_AUTH_COLLECTION).get();
        routeCountElement.textContent = querySnapshot.size;
        console.log("Updated route-count!");
    } catch (error) {
        console.error("Error fetching route count:", error);
        routeCountElement.textContent = "0";
    }
}

// Initial update
updateRouteCount();
