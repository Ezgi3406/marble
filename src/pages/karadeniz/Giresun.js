import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./karadeniz.css";

export default class Home extends Component {
  render() {
    return (
      <div className="body">
        <div className="content-wrapper">
          <div className="video-wrapper">
            <video
              className="video-target"
              autoPlay
              style={{
                filter: "contrast(1.04) brightness(0.91)",
                width: "1350px",
                height: "250px",
                "margin-top": "1px",
              }}
              preload="none"
              playsInline
              muted
              loop
              data-poster
            >
              <source
                src="https://cdn.goadventureturkey.com/giresun/giresun.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="heading">
            <strong>GIRESUN</strong>
          </h2>

          <h5 className="sub-heading"></h5>
        </div>

        <p className="paragraph">
          {" "}
          Pearl of the Black Sea Giresun, the pearl of the Black Sea Region, is
          a beautiful coastal city where green and blue converge. Settled on
          peninsula embracing the sea, you can see every shade of green and have
          the opportunity to be in touch with nature in the plateaus.Giresun
          offers its visitors many alternatives in terms of tourism with its
          geographical location, mild climate in the coastal areas and
          continental climate in the inner parts, being suitable for all kinds
          of winter and nature sports, historical richness and natural beauties,
          as well as handicrafts, fishing and hunting opportunities, and green
          plateaus.
        </p>

        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/giresun/1-liste-giresun-island-aretias.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>GIRESUN ADASI</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  <Link to="/Karadeniz/Giresun/Giresunadasi">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/giresun/liste-zeytinlik-district.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>ZEYTINLIK</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  <Link to="/Karadeniz/Giresun/Zeytinlik">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/giresun/liste-kumbet-plateau.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>KUMBET</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  <Link to="/Karadeniz/Giresun/Kumbet">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/giresun/3-liste-blue-lake.jpg"
                square
                className="profile-pic"
              />
              <>
                <h3 style={{ fontSize: "24px" }}>MAVI GOL</h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </p>
                <p>
                  <Link to="/Karadeniz/Giresun/Mavigol">
                    <Button className='button' bsStyle="primary">More</Button>
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
