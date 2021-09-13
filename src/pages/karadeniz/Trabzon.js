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
                src="https://cdn.goadventureturkey.com/trabzon/1-trabzon.mp4"
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
              }}>TRABZON</strong>
          </h2>

          <h5 className="sub-heading"></h5>
        </div>

        <p className="paragraph">
          Bin yıl öncesine uzanan köklü tarihi ile Trabzon, Doğu Karadeniz
          Bölgesi'nin kültür ve doğal zenginlik merkezidir adeta... Antik İpek
          Yolu üzerinde bulunan kent, yüzyıllardır dinlerin, dillerin ve
          kültürlerin buluşma noktası olmuş; efsanevi İpek Yolu üzerindeki
          limanı nedeniyle tarihte önemli bir rol oynamıştır. 14. yüzyılda Marco
          Polo tarafından da ziyaret edilen Trabzon, seyahat kitaplarında ve
          anılarında şehri ölümsüzleştiren Ksenofon, Evliya Çelebi, Fallmerayer
          ve Frunze gibi dünyaca ünlü seyyahlara da ilham kaynağı olmuştur.
          Trabzon günümüzde müzeler, manastırlar, camiler, türbeler,
          kervansaraylar, hamamlar, kapalı çarşı, sur duvarları, sivil mimarinin
          muhteşem örnekleri ve kusursuz bir manzaraları ile olgunlaşmış, önemli
          bir ticaret ve kültür merkezi olarak kalmıştır.
        </p>

        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/trabzon/ataturk-mansion.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>ATATURK KOSKU</h3>
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
                  <Link to="/Karadeniz/Trabzon/Ataturk">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/trabzon/gulbahar-hanim-mosque.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>GULBAHAR HATUN</h3>
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
                  <Link to="/Karadeniz/Trabzon/Gulbahar">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/trabzon/uzungol1.jpg"
                square
                className="profile-pic"
              />
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3 style={{ fontSize: "24px" }}>UZUNGOL</h3>
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
                  <Link to="/Karadeniz/Trabzon/Uzungol">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/trabzon/sumela-monastery1.jpg"
                square
                className="profile-pic"
              />
              <>
                <h3 style={{ fontSize: "24px" }}>SUMELA MANASTIRI</h3>
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
                  <Link to="/Karadeniz/Trabzon/Sumela">
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
