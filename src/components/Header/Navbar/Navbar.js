import React from 'react';
import Trlogo from '../../images/turkiye-logo.svg'
import { Link } from 'react-router-dom';
import { Image, Container, Row, Col } from "react-bootstrap";
import '../Header.css'

const Navbar = () => (
  <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark mdb-color darken-2 scrolling-navbar">
      <div className="container">
      <ul class="social-list-left">
          <li class="social-list__item"><a class="social-list__link" href="/"><img className="img-header" alt="coding" src={Trlogo}/></a></li></ul>
 
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
              <span style={{color:"black"}}>Register</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">

                <span style={{color:"black"}}>Login</span>
              </Link>
            </li>
          </ul>
        </div>
       
          


      </div>
    </nav>
  </div>
);

export default Navbar;