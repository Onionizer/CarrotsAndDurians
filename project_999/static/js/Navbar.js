function Navbar() {
    return (
        <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item has-text-weight-bold" href="index.html">
                    Carpool Connector
                </a>
            </div>
            <div className="navbar-menu is-active">
                <div className="navbar-start">
                    <a className="navbar-item" href="rides.html">Search Rides</a>
                    <a className="navbar-item" href="profile.html">Register Route</a>
                </div>
            </div>
        </nav>
    );
}