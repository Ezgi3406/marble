import React, { Component } from "react";
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import Header from "../Header";
import "./istanbul.css";
export default class Home extends Component {
  render() {
    return (
      <div>
          <Header/>
        <div className="content-wrapper"
        ><Image src="/assets/img/services.jpg" />
          <h2 className="heading">Lovely Istanbul</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect destination in istanbul.
          </h5>
        </div>
        <Container>
          <Row className="show-grid text-center">
            
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/artvin.jpg" square className="profile-pic"/>
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
               


                <p>
                  <Button bsStyle="primary">More</Button>
                </p>
              </>
            </Col>

            
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/bolu.jpg" square className="profile-pic"/>
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
                  <Button bsStyle="primary">More</Button>
                </p>
              </>
            </Col>

           
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/elazig.jpg" square className="profile-pic"/>
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
                  <Button bsStyle="primary">More</Button>
                </p>
              </>
            </Col>

           
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/aksaray.jpg" square className="profile-pic"/>
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
                  <Button bsStyle="primary">More</Button>
                </p>
              </>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
