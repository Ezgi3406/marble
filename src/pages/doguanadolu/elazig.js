import React, { Component } from 'react'
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "../../components/pages/marmara.css";
import { Link } from 'react-router-dom';

export default class elazıg extends Component {
    render() {
        return (
            <div><div className="content-wrapper">
                <Image src="https://cdn.goadventureturkey.com/elazig/kapali-carsi.jpg" style={{
                filter: "contrast(1.04) brightness(0.91)",
                width: "630px",
                height: "450px",
                "margin-top": "30px",
                "margin-right": "636px",
              }}/>
            {/*<Image src="https://cdn.goadventureturkey.com/elazig/1-keban-baraj-golu.jpg" style={{
                filter: "contrast(1.04) brightness(0.91)",
                width: "630px",
                height: "450px",
                "margin-top": "30px",
                "margin-left": "636px",
              }}/>*/}
            <h2 className="heading"><strong style={{
                width: "675px",
                height: "450px",
                color:"black",
                fontSize:"60px",
                "margin-top": "30px",
                "margin-left": "636px",
              }}>ELAZIĞ</strong></h2>
            
          </div>
        
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/elazig.jpg"
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

                <p><Link to="/Doguanadolu/Elazig">
                  <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/erzurum.jpg"
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
                <Link to="/Doguanadolu/Erzurum">
                  <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/van.jpg"
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
                <Link to="/Doguanadolu/Van">
                  <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/agri.jpg"
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
                <Link to="/Doguanadolu/Agri">
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
