import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../../pages/pages.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
        <div classname="video-wrapper">
            <video
              classname="video-target"
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
                src="https://cdn.goadventureturkey.com/denizli/denizli.mp4"
                type="video/mp4"
              />
            </video>
          <h2 className="heading">DENİZLİ</h2>
          {/* <h5 className="sub-heading">
            With us you’ll find a perfect destination in Denizli.
          </h5> */}
        </div>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/KeloglanCave">
                <Image
                  src="http://localhost:3000/assets/img/places/keloglan-cave.jpg"
                  square
                  className="profile-pic"
                />
              </Link>

              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  When the sun heats unbearably, you can always choose to go to
                  the cave of Keloğlan. It is one of the most beautiful and cold
                  caves in Turkey. As long as you get into the cave, you will
                  feel the cold immediately.
                </p>

                <p>
                  {" "}
                  <Link to="/KeloglanCave">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Hierapolis">
                <Image
                  src="http://localhost:3000/assets/img/places/hierapolis1.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  The area of Hierapolis was exposed to be a place for many
                  settlements for its abundant water sources. It is highly
                  believed that the ancient city was built by the people of
                  Pergamum. There had been a settlement existence here.
                </p>
                <p>
                  <Link to="/Hierapolis">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Bosphorus">
                <Image
                  src="http://localhost:3000/assets/img/places/bosphorus-mosque.jpg"
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
                  <Link to="/Bosphorus">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Pamukkale">
                <Image
                  src="http://localhost:3000/assets/img/places/pamukkale.jpg"
                  style={{ height: "274px" }}
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Travertines of Pamukkale, with a fairytale look resembling a
                  cloud field from afar, are one of the rare beauties where
                  history and nature embrace. With its calcareous structure,
                  snow-white color and the warmth of thermal water, they give an
                  indescribable sense of texture
                </p>
                <p>
                  <Link to="/Pamukkale">
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
