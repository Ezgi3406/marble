import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../../../pages/pages.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
        <div className="video-wrapper" ><video className="video-target"
    
    autoPlay 
    style={{
    filter:'contrast(1.04) brightness(0.91)',
    width:"675px",
    height: "450px",
    "margin-top":"30px",
    "marginLeft":"636px",
  }} 
    preload="none"
    playsInline
    muted
    loop
    data-poster
        >
          <source src="https://cdn.goadventureturkey.com/bursa/bursa2.mp4" type="video/mp4" />Your browser does not support the video tag.</video></div>
           </div>
        <h2 className="heading">
            <strong style={{
                width: "675px",
                height: "450px",
                color:"black",
                fontSize:"60px",
                "margin-top": "30px",
                "margin-right": "670px",
              }}>BURSA</strong>
          </h2>
          <h5 className="sub-heading"></h5>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/bursa/1-karagoz-hacivat.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3>Hacivat Karagoz </h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                  
                </p>

                <p>
                  {" "}
                  <Link to="/Bursa">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/bursa/1-liste-great-mosque.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3>Great Mosque</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation 
                </p>
                <p>
                  <Link to="/GreatMosque">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/bursa/1-liste-golyazi-village.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3>Golyazi Village</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                  <Link to="/">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/bursa/2-liste-uludag.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3>Uludag </h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
               
               

               
                <p>
                  <Link to="/Bursa">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
