import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../pages/pages.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <div className="video-wrapper">
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
                src="https://cdn.goadventureturkey.com/bolu/bolu2.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="heading">
            <strong style={{
                width: "675px",
                height: "450px",
                color:"green",
                fontSize:"60px",
                "margin-top": "30px",
                "margin-right": "670px",
              }}>BOLU</strong>
          </h2>

          <h5 className="sub-heading"></h5>
        </div>

        <p className="paragraph">
          {" "}
          Karadeniz Bölgesi’nde yer alan, tarihi MÖ 1200’lere dayanan:
          Hititleri, Romalıları, Bizanslıları ve Osmanlı Devleti’ni ağırlayan
          Bolu, yıllar içinde kendine has gelenek ve görenekleriyle özgün bir
          kimlik edinmiştir. Topraklarının %65’i ormanla kaplı olan Bolu,
          tertemiz havası ve muhteşem doğasıyla yeşilin her tonunu
          görebileceğiniz ağaç çeşitliliğine sahip. Bolu, Türkiye’nin en çok
          nüfusa sahip iki kenti olan İstanbul ve Ankara’nın kesişim noktaları
          arasında yer almasıyla önemli bir konum da edinir. Abant, Gölcük,
          Göynük Sünnet Gölü, Mudurnu Sülüklü Göl, Kıbrıscık Karagöl, Aladağ
          Beşpınarlar, Bolu Yaylaları, Seben Taşlıyayla Gölü, Yedi Göller ve
          Göksu gibi doğal güzelliklerin ev sahibi Bolu, gerçek bir yeryüzü
          cenneti. Dünya çapında üne sahip Bolu ve Mengenli aşçılar, geleneksel
          lezzetlerin yaşatılmasına büyük önem verirler ve bu durum, Bolu
          Mutfağı’nı özel bir mutfak haline getirir.
        </p>

        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/bolu/1-liste-abant-golu-2.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>ABANT</h3>
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
                  <Link to="/Karadeniz/Bolu/Abant">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/bolu/liste-yedi-goller-milli-parki-2.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>SEVEN LAKES</h3>
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
                  <Link to="/Karadeniz/Bolu/Yedigoller">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/bolu/liste-goynuk-2.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>MUDURNU</h3>
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
                  <Link to="/Karadeniz/Bolu/Mudurnu">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/bolu/liste-seben-kaya-evleri.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>SEBEN KAYA EVLERI</h3>
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
                  <Link to="/Karadeniz/Bolu/Seben">
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
