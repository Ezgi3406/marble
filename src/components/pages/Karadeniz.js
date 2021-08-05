import React, { Component } from "react";
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "./karadeniz.css";


export default class Home extends Component {
  render() {
    return (
      <div>
          
          
        <div className="content-wrapper">

          <div>

            {/* src="https://www.youtube.com/embed/ICF5CA_Y1uw" */}
           
            <iframe  width="100%" height="360" src='https://cdn.goadventureturkey.com/black-sea/blacksea.mp4' title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <h2 className="heading"><strong>KARADENIZ</strong></h2>

          <h5 className="sub-heading">
           BLUE MARBLE
          </h5>
          </div>

          <div>
          <p>
            {" "}
            Türkiye's Black Sea coast is a world apart from the rest of the country, with the clusters of villages that speckle its narrow coastline hemmed in by the sea on one side and rolling mountains on the other.
          </p>
          </div>
          
          
        </div>

        
        <Container>
          <Row className="show-grid text-center">
            
            <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/bolu.jpg" square className="profile-pic"/>
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
            <Image src="https://cdn.goadventureturkey.com/goturkey/kastamonu.jpg" square className="profile-pic"/>
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
            <Image src="https://cdn.goadventureturkey.com/goturkey/giresun.jpg" square className="profile-pic"/>
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
            <Image src="https://cdn.goadventureturkey.com/goturkey/trabzon.jpg" square className="profile-pic"/>
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
