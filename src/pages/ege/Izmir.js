import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";

import { Link } from 'react-router-dom';
import "./izmir.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/services.jpg" />
          <h2 className="heading">Lovely Izmir</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect destination in Izmir.
          </h5>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image src="http://localhost:3000/assets/img/places/cesme-2.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  The Çeşme district is a very popular summer resort, especially among residents of nearby İzmir, and includes historic sites such as a 16th-century castle and an old caravanserai. The white sandy beaches stretch lazily along a road lined with exquisitely built houses.
                </p>

                <p>
                  <Link to="/Cesme">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/ephesus1.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Foundation of the ancient city of Ephesus within the borders of Selçuk District goes back to 6000 BCE. The biggest temple dedicated to Artemis, the Artemision, of 6th century BCE was built at the skirts of Ayasuluk hill infront of the earliest harbour of the city.
                </p>
                <p>
                  <Link to="/Efes">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/kemeralti-bazaar.jpg"
                square
                className="profile-pic"
              />
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
              <Image
                src="http://localhost:3000/assets/img/places/kordon1.jpg"
                square
                className="profile-pic"
              />
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
