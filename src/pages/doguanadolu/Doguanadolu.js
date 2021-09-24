import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import "../../pages/pages.css";
import { Link } from "react-router-dom";

export default class Doguanadolu extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <div class="video-wrapper">
            <video
              className="video-target"
              autoPlay
              style={{
                filter: "contrast(1.04) brightness(0.91)",
                width: "675px",
                height: "450px",
                "margin-top": "30px",
                "margin-left": "636px",
              }}
              preload="none"
              playsInline
              muted
              loop
              data-poster
            >
              <source
                src="https://cdn.goadventureturkey.com/eastern/dogu2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>

          <h2 className="heading">
            <strong
              style={{
                width: "675px",
                height: "450px",
                color: "black",
                fontSize: "60px",
                "margin-top": "30px",
                "margin-right": "670px",
              }}
            >
              DOĞU ANADOLU
            </strong>
          </h2>
          <h5 className="sub-heading"></h5>
        </div>

        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Doguanadolu/Elazig">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/elazig.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
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
                  <Link to="/Doguanadolu/Elazig">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Doguanadolu/Erzurum">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/erzurum.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
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
              <Link to="/Doguanadolu/Van">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/van.jpg"
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
                  <Link to="/Doguanadolu/Van">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Doguanadolu/Agri">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/agri.jpg"
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
                  <Link to="/Doguanadolu/Agri">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>
          </Row>
        </Container>
        <div class="responsive-map">
          <iframe
            src="https://www.google.com/maps/d/embed?mid=1BAMK_iIlWJOP1YksN1yanmlAWqMrBWrf"
            width="400"
            height="400"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
          ></iframe>
          
          <ol class="map-list"><strong>Gezilecek Yerler</strong>
            <li class="map-list-item-blue">Harput Kalesi</li>
            <li class="map-list-item-blue">Şefik Gül Kültür Evi</li>
            <li class="map-list-item-blue">Keban Barajı</li>
            <li class="map-list-item-blue">Saklıkapı Karaleylek Kanyonu</li>
            <li class="map-list-item-blue">Çifte Minareli Medrese</li>
            <li class="map-list-item-blue">Kongre Binası (23 Temmuz 1919)</li>
            <li class="map-list-item-blue">Palandöken Dağı</li>
            <li class="map-list-item-blue">Tortum Gölü</li>
            <li class="map-list-item-blue">Akdamar Adası</li>
            <li class="map-list-item-blue">Van baskale akçalı Traverteni</li>
            <li class="map-list-item-blue">Hoşap Kalesi</li>
            <li class="map-list-item-blue">Van Müzesi</li>
            <li class="map-list-item-blue">İshak Paşa Sarayı</li>
            <li class="map-list-item-blue">Ağrı Dağı</li>
            <li class="map-list-item-blue">Nuhun Gemisi</li>
            <li class="map-list-item-blue">Meya Mağaraları</li>
          </ol>
        </div>
      </div>
    );
  }
}
