function Navbar() {
    // console.log("In Navbar() . . .");

    return (
        <nav className="Navbar" id="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-start">
                <a className="navbar-item" href="index.html" tabIndex="0">Carpool Connector - Home</a>
                <a className="navbar-item" href="rides.html" tabIndex="0">Search Rides</a>
                <a className="navbar-item" href="profile.html" tabIndex="0">View & Register Route</a>
            </div>
        </nav>
    );
}