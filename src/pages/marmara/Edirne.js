import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../../pages/pages.css"
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
        <div className="video-wrapper" ><video className="video-target"
    
    autoPlay style={{filter: 'contrast(1.04) brightness(0.91)',width:"1350px",
    height: "400px", "margin-top":"3px"}} preload="none" playsInline muted loop data-poster><source src="https://cdn.goadventureturkey.com/edirne/edirne-1.mp4" type="video/mp4" />Your browser does not support the video tag.</video></div>
          <h2 className="heading">EDIRNE</h2>
          <h5 className="sub-heading">
            
          </h5>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/edirne/liste-selimiye-mosque-2.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3>Selimiye Mosque</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                  
                </p>

                <p>
                  {" "}
                  <Link to="/https://cdn.goadventureturkey.com/wedding/9.jpg">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/edirne/liste-mecidiye-bridge.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3>Mecidiye Bridge</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation 
                </p>
                <p>
                  <Link to="/Sultan Ahmet Mosque">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/edirne/liste-canola-field.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3>Canola Field</h3>
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
                src="https://cdn.goadventureturkey.com/edirne/2-liste-kakava-festival.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3>Kakava Festival </h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
               
               

               
                <p>
                  <Link to="/Istanbul">
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
