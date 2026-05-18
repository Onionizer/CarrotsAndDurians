function Navbar() {
    // console.log("In Navbar() . . .");

    return (
        <nav className="Navbar" id="navbar" role="navigation" aria-label="main navigation">
            <h1>Carpool Connector</h1>
            <ul>
                <li><a tabIndex="0" href="index.html">Home</a></li>
                <li><a tabIndex="0" href="find-rides.html">Find Rides</a></li>
                <li><a tabIndex="0" href="profile.html">Profile / Register Route</a></li>
            </ul>
        </nav>
    );
}