import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import "../../ege/ege.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/services.jpg" />
          <h2 className="heading">Lovely Mugla</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect destination in Mugla.
          </h5>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/4-bodrum.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Bodrum is world renowned as a paradise for tourists featuring charming neighbourhoods, various ancient sites, exquisite bays, turquoise sea, mild Mediterranean climate, modern transportation.
                </p>

                <p>
                  <Link to="/Bodrum">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/datca.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Datça has pristine beaches and hidden coves, pine-crested hills, olive and almond groves, quaint villages filled with stone houses, and most importantly, a slow and peaceful existence.
                </p>
                <p>
                  <Link to="/Datca">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/fethiye-2.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Fethiye With its postcard-worthy backdrop of golden sands, forested mountains, and miles of azure ocean. The town itself is equally attractive, with leafy seafront promenades, bazaars and ancient ruins.
                </p>
                <p>
                  <Link to="/Fethiye">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/2-marmaris.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Marmaris is where the Mediterranean meets the Aegean, where green verdant forests meet the famous turquoise waters of the sea, and where modern culture meets ancient civilizations.
                </p>
                <p>
                  <Link to="/Marmaris">
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