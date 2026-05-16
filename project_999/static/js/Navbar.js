function Navbar() {
    console.log("In Navbar() . . .");

    return (
        <nav className="Navbar" id="navbar">
            <h1>Carpool Connector</h1>
            <button tabindex="0">Home</button>
            <button tabindex="0">Search Rides</button>
            <button tabindex="0">Register route</button>
            <button tabindex="0">Profile</button>
        </nav>
    );
}