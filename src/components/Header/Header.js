import React, { Component } from 'react'
import {FaInstagram,FaFacebookSquare,FaTwitter,FaSignInAlt}from 'react-icons/fa'
//import 'bootstrap/dist/css/bootstrap.min.css';

import { Image, Container, Row, Col } from "react-bootstrap";
import './Header.css'
import Navbar from './Navbar/Navbar'

export default class Header extends Component {
    render() {
        return (
         
        <div>
          <header  >
          <Navbar/>
          </header>
        </div>

  )
}
}