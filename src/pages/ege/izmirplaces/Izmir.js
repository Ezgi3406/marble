import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";

import { Link } from 'react-router-dom';
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
                src="https://cdn.goadventureturkey.com/izmir/izmir-pc.mp4"
                type="video/mp4"
              />
            </video>
          {/* <Image src="/assets/img/services.jpg" /> */}
          
          <h2 className="heading">İZMİR</h2>
          {/* <h5 className="sub-heading">
            With us you’ll find a perfect destination in Izmir.
          </h5> */}
        </div>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
            <Link to="/Alacati">
              <Image src="http://localhost:3000/assets/img/places/alacatı2.jpg"
                square
                className="profile-pic"
              />
              </Link>
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  The Çeşme district is a very popular summer resort, especially among residents of nearby İzmir, and includes historic sites such as a 16th-century castle and an old caravanserai. The white sandy beaches stretch lazily along a road lined with exquisitely built houses.
                </p>

                <p>
                  <Link to="/Alacati">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
            <Link to="/Efes">
              <Image
                src="http://localhost:3000/assets/img/places/ephesus1.jpg"
                square
                className="profile-pic"
              />
              </Link>
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Foundation of the ancient city of Ephesus within the borders of Selçuk District goes back to  <Link to="/Efes"></Link>6000 BCE. The biggest temple dedicated to Artemis, the Artemision, of 6th century BCE was built at the skirts of Ayasuluk hill infront of the earliest harbour of the city.
                </p>
                <p>
                <Link to="/Efes">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
            <Link to="/Kemeralti">
              <Image
                src="http://localhost:3000/assets/img/places/kemeralti-bazaar.jpg"
                square
                className="profile-pic"
              />
              </Link>
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  In the Kemaraltı Historical Bazaar you will find products from the skilled hands of İzmir that bring together the traces of the past with the texture of the present. They sometimes take you to the past and keep the history alive and sometimes reflect modernity.
                </p>
                <p>
                  <Link to="/Kemeralti">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
            <Link to="/Kordon">
              <Image
                src="http://localhost:3000/assets/img/places/kordon1.jpg"
                square
                className="profile-pic"
              />
              </Link>
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  With a beauty that inspired many songs, Kordon is a must-see place in İzmir. It’s one of the symbols of the city, where locals and visitors meet the Aegean Sea, watch the sunset or lay down on the grass and relax during summer and spring. 
                </p>
                <p>
                  <Link to="/Kordon">
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
