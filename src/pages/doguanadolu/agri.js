import React, { Component } from 'react'
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "../../pages/pages.css";
import { Link } from 'react-router-dom';

export default class agri extends Component {
    render() {
        return (
            <div><div className="content-wrapper">
                <div class="video-wrapper">
          <video
              className="video-target"
              autoPlay
              style={{
                filter: "contrast(1.04) brightness(0.91)",
                width: "675px",
                height: "450px",
                "margin-top": "30px",
                "margin-left": "636px",
              }}
              preload="none"
              playsInline
              muted
              loop
              data-poster
            >
              <source
                src="https://cdn.goadventureturkey.com/agri/agri.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
            <h2 className="heading"><strong style={{
                width: "675px",
                height: "450px",
                color:"black",
                fontSize:"60px",
                "margin-top": "30px",
                "margin-right": "670px",
              }}>AĞRI</strong></h2>
            
          </div>
        
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
            <Link to="/Doguanadolu/Agri/Ishak-Pasa-Palace">
              <Image
                src="https://cdn.goadventureturkey.com/agri/1-liste-ishak-pasa-sarayi.jpg"
                square
                className="profile-pic"
              /></Link>
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>

                <p><Link to="/Doguanadolu/Agri/Ishak-Pasa-Palace">
                  <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
            <Link to="/Doguanadolu/Agri/Agri-Mountain">
              <Image
                src="https://cdn.goadventureturkey.com/agri/4-liste-agri-dagi.jpg"
                square
                className="profile-pic"
              /></Link>
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                <Link to="/Doguanadolu/Agri/Agri-Mountain">
                  <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
            <Link to="/Doguanadolu/Agri/Trail-Noahs-Ark">
              <Image
                src="https://cdn.goadventureturkey.com/agri/2-liste-nuhun-gemisi-izi.jpg"
                square
                className="profile-pic"
              /></Link>
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                <Link to="/Doguanadolu/Agri/Trail-Noahs-Ark">
                  <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
            <Link to="/Doguanadolu/Agri/Meya-Cayes">
              <Image
                src="https://cdn.goadventureturkey.com/agri/2-liste-meya-magaralari.jpg"
                square
                className="profile-pic"
              /></Link>
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
                <p>
                <Link to="/Doguanadolu/Agri/Meya-Cayes">
                  <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>
          </Row>
        </Container>
            </div>
        
        
        )
    }
}
