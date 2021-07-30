import React, { Component } from 'react'
import {FaInstagram,FaFacebookSquare,FaTwitter,FaSignInAlt}from 'react-icons/fa'
//import 'bootstrap/dist/css/bootstrap.min.css';
import { Image, Container, Row, Col } from "react-bootstrap";
import './Header.css'
import Navbar from './Navbar/Navbar'

export default class Header extends Component {
    render() {
        return (
         
          
              
            
            
          <header  >
             
           <ul class="social-list-left H6">
          <li class="social-list__item"><a class="social-list__link" href="/"><img class="img-header" src="https://cdn.goadventureturkey.com/goturkey/static/images/turkiye-dark.svg"/></a></li></ul>
          <Navbar></Navbar>
          {/* <div style={{alignItems: 'center'}}>
  <div className="header-language-selection">
    <div className="header-language-selection-current">EN<span aria-label="icon-arrow-down" className="c-icon c-icon-small icon-arrow-down icon" role="img" /></div>
    <div className="header-language-selection-dropdown">
      <div className="header-language-selection-dropdown-list">
        <li>English</li>
        <li>Türkçe</li>
        <li>русский язык</li>
        <li>українська</li>
        <li>العربية</li>
        <li>Deutsch</li>
        <li>español, castellano</li>
        <li>français, langue française</li>
        <li>中文 (Zhōngwén), 汉语, 漢語</li>
        <li>فارسی</li>
      </div>
    </div>
  </div>
  <a href="https://goturkiye.com" className="header-goturkey-logo d-none-xs d-if-sm"><img src="https://cdn.goadventureturkey.com/goturkey/static/images/turkiye-dark.svg" alt /></a>
</div>

           */}
          {/* <ul className="social-list" >
              <li title="Sign in" className="social-list__item"><a className="social-list__link" href=""><FaSignInAlt/> SIGN IN</a></li>
               */}
              {/* <li class="social-list__item"><a class="social-list__link" href=""><FaFacebookSquare/></a></li>
              <li class="social-list__item"><a class="social-list__link" href=""><FaInstagram/></a></li>
              <li class="social-list__item"><a class="social-list__link" href=""><FaTwitter/></a></li> */}
          {/* </ul> */}
          {/* <Container>
            {/* <Row className="show-grid  ">
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
            </Row> */}
          {/* </Container> */}
          {/* </Navbar.Collapse> */}
          </header>
          
          

      
  )
}
}