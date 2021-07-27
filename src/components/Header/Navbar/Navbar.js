import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark mdb-color darken-2 scrolling-navbar">
      <div className="container">
        
 
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">

          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Log In
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
);

export default Navbar;