import React, { Component } from 'react'
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "../../pages/pages.css";
import { Link } from 'react-router-dom';

export default class van extends Component {
    render() {
        return (<div><div className="content-wrapper">
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
        src="https://cdn.goadventureturkey.com/van/van.mp4"
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
      }}>VAN</strong></h2>
    
  </div>

<Container>
  <Row className="show-grid text-center">
    <Col xs={12} sm={3} className="person-wrapper">
      <Image
        src="https://cdn.goadventureturkey.com/van/4-liste-akdamar-adasi.jpg"
        square
        className="profile-pic"
      />
      <>
        <i className="fas fa-plane-departure fa-7x"></i>
        <h3></h3>
        <p>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          Ut enim ad minim veniam, quis nostrud exercitation
        </p>

        <p><Link to="/Doguanadolu/Van/Akdamar-Island">
          <Button bsStyle="primary">More</Button>
          </Link>
        </p>
      </>
    </Col>

    <Col xs={12} sm={3} className="person-wrapper">
      <Image
        src="https://cdn.goadventureturkey.com/van/liste-travertenler.jpg"
        square
        className="profile-pic"
      />
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
        <Link to="/Doguanadolu/Van/Travertines">
          <Button bsStyle="primary">More</Button>
          </Link>
        </p>
      </>
    </Col>

    <Col xs={12} sm={3} className="person-wrapper">
      <Image
        src="https://cdn.goadventureturkey.com/van/2-liste-hosap-kalesi.jpg"
        square
        className="profile-pic"
      />
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
        <Link to="/Doguanadolu/Van/Hosap-Castle">
          <Button bsStyle="primary">More</Button>
          </Link>
        </p>
      </>
    </Col>

    <Col xs={12} sm={3} className="person-wrapper">
      <Image
        src="https://cdn.goadventureturkey.com/van/2-liste-van-muzesi.jpg"
        square
        className="profile-pic"
      />
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
        <Link to="/Doguanadolu/Van/Van-Museum">
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
