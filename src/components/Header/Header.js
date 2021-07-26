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
          <ul class="social-list-left H6">
          <li class="social-list__item"><a class="social-list__link" href="/"><img class="img-header" src="https://cdn.goadventureturkey.com/goturkey/static/images/turkiye-dark.svg"/></a></li></ul>
          <Navbar></Navbar>
          {/* <ul className="social-list" >
              <li title="Sign in" className="social-list__item"><a className="social-list__link" href=""><FaSignInAlt/> SIGN IN</a></li>
               */}
              {/* <li class="social-list__item"><a class="social-list__link" href=""><FaFacebookSquare/></a></li>
              <li class="social-list__item"><a class="social-list__link" href=""><FaInstagram/></a></li>
              <li class="social-list__item"><a class="social-list__link" href=""><FaTwitter/></a></li> */}
          {/* </ul> */}
          <Container>
            <Row className="show-grid  ">
              <Col xs={12} sm={12} className="icons ">
                <div className="social-icons">
                  <Image
                    src="/assets/img/logo_facebook.png"
                    className="social-icon"
                  />
                  <Image
                    src="/assets/img/logo_twiter.png"
                    className="social-icon"
                  />
                  <Image
                    src="/assets/img/logo_google+.png"
                    className="social-icon"
                  />
                  <Image
                    src="/assets/img/logo_linkedin.png"
                    className="social-icon"
                  />
                </div>
              </Col>
            </Row>
          </Container>
          </header>
      </div>
  )
}
}