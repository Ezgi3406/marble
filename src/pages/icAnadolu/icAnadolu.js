import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import '../../pages/pages.css'


export default class IcAnadolu extends Component {
    render() {
      return (
        <div>
          <div className="content-wrapper">
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
                  src="https://cdn.goadventureturkey.com/central/ic-anadolu2.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
  
            <h2 className="heading">
              <strong style={{
                  width: "675px",
                  height: "450px",
                  color:"black",
                  fontSize:"60px",
                  "margin-top": "30px",
                  "margin-right": "670px",
                }}>İÇ ANADOLU</strong>
            </h2>
            <h5 className="sub-heading"></h5>
      </div>
       
          <Container>
            <Row className="show-grid text-center">
              <Col xs={12} sm={3} className="person-wrapper">
                <Link to='/IcAnadolu/Ankara'>
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/ankara.jpg"
                  square
                  className="profile-pic"
                />
                </Link>
                <>
                  <i className="fas fa-plane-departure fa-7x"></i>
                  <h3></h3>
                  <p>
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation
                  </p>
  
                  <p><Link to="/IcAnadolu/Ankara">
                    <Button bsStyle="primary">More</Button>
                    </Link>
                  </p>
                </>
              </Col>
  
              <Col xs={12} sm={3} className="person-wrapper">
                <Link to='/IcAnadolu/Eskişehir'>
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/eskisehir.jpg"
                  square
                  className="profile-pic"
                />
                </Link>
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
                  <Link to="/IcAnadolu/Eskişehir">
                    <Button bsStyle="primary">More</Button>
                    </Link>
                  </p>
                </>
              </Col>
  
              <Col xs={12} sm={3} className="person-wrapper">
                <Link to='/IcAnadolu/Konya'>
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/konya.jpg"
                  square
                  className="profile-pic"
                />
                </Link>
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
                  <Link to="/IcAnadolu/Konya">
                    <Button bsStyle="primary">More</Button>
                    </Link>
                  </p>
                </>
              </Col>
  
              <Col xs={12} sm={3} className="person-wrapper">
                <Link to='/IcAnadolu/Nevşehir'>
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/nevsehir.jpg"
                  square
                  className="profile-pic"
                />
                </Link>
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
                <Link to="/IcAnadolu/Nevşehir">
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