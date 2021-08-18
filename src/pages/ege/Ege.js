import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ege.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <div className="video-wrapper">
            <video
              className="video-target"
              autoPlay
              style={{
                filter: "contrast(1.04) brightness(0.91)",
                width: "1350px",
                height: "400px",
                "margin-top": "1px",
                
              }}
              preload="none"
              playsInline
              muted
              loop
              data-poster
            >
              <source
                src="https://cdn.goadventureturkey.com/aegean/ege-bolgesi-.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <h2 className="heading" style={{"z-index":"1"}}>
              <strong>EGE</strong>
            </h2>
            <h5 className="sub-heading"></h5>
          </div>
        </div>
        <Container >
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Izmir">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/6-izmir.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  "Beautiful İzmir" draws you into a world of picturesque
                  modernity and traditions, with its refreshing touches to human
                  souls. İzmir hypnotizes visitors in an aura of history and
                  modernity.It is one of the oldest cities for 8500 years.
                </p>

                <p>
                  {" "}
                  <Link to="/Izmir">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Mugla">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/5-mugla.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Muğla, which connects the Aegean and Mediterranean seas with
                  its turquoise waters and virgin bays, is waiting to be
                  explored. It is like a hidden paradise, where the sun, blue
                  and green are intertwined, shedding light on the history.
                </p>
                <p>
                  <Link to="/Mugla">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Denizli">
                <Image
                  src="http://localhost:3000/assets/img/places/denizli1.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  "Located at the crossroads of Anatolia, where the Aegean,
                  Central Anatolia and Mediterranean Regions meet, Denizli has
                  hosted many civilizations throughout history with its
                  geographical location and natural beauties."
                </p>
                <p>
                  {" "}
                  <Link to="/Denizli">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Aydin">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/aydin.jpg"
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
                  <Link to="/Aydin">
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
