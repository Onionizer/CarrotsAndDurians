function Navbar() {
    console.log("In Navbar() . . .");

    return (
        <nav className="Navbar" id="navbar">
            <h1>Carpool Connector</h1>
            <ul>
                <li><a tabIndex="0" href="#home">Home</a></li>
                <li><a tabIndex="0" href="#search-rides">Search Rides</a></li>
                <li><a tabIndex="0" href="#register-route">Register Route</a></li>
                <li><a tabIndex="0" href="#profile">Profile</a></li>
            </ul>
        </nav>
    );
}