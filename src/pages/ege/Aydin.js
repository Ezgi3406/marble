import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ege.css";

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
                src="https://cdn.goadventureturkey.com/aydin/aydin.mp4"
                type="video/mp4"
              />
            </video>
            <h2 className="heading">AYDIN</h2>
          {/* <h5 className="sub-heading">
            With us you’ll find a perfect destination in Aydın.
          </h5> */}
          </div>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/BafaGolu">
                <Image
                  src="http://localhost:3000/assets/img/places/bafa-lake.jpg"
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
                  <Link to="/BafaGolu">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/DidimMarina">
                <Image
                  src="http://localhost:3000/assets/img/places/Didim-Marina3.jpg"
                  square/>
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
                  <Link to="/DidinMarina">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Guvercinada">
                <Image
                  src="http://localhost:3000/assets/img/places/guvercin-island.jpg"
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
                  <Link to="/Guvercinada">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Tralleis">
                <Image style={{height:"255px"}}
                  src="http://localhost:3000/assets/img/places/tralleis1.jpg"
                 
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
                  <Link to="/Tralleis">
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
