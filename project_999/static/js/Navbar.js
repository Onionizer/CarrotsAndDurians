function Navbar() {
    console.log("In Navbar() . . .");

    return (
        <nav className="Navbar" id="navbar">
            <h1>Carpool Connector</h1>
            <button tabIndex="0">Home</button>
            <button tabIndex="0">Search Rides</button>
            <button tabIndex="0">Register route</button>
            <button tabIndex="0">Profile</button>
        </nav>
    );
}