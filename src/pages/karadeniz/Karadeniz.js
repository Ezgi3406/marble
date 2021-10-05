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
                "margin-top": "3px",
                "margin-left": "636px",
              }}
              preload="none"
              playsInline
              muted
              loop
              data-poster
            >
              <source
                src="https://cdn.goadventureturkey.com/black-sea/blacksea.mp4"
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
              }}>KARADENIZ</strong>
          </h2>

          <div>
            <p className="paragraph">
              {" "}
              Bir tarafında deniz, diğer tarafında engebeli dağlarla çevrili,
              dar kıyı şeridine dağılmış köyleri ile ülkenin geri kalanından
              apayrı bir dünyadır Karadeniz sahilleri… Karadeniz, gezilip
              görülecek yerleri, kendine hayran bırakan doğası, yapılabilecek
              pek çok aktivite olanağı ile Türkiye’nin bambaşka bir köşesidir.
              Karadeniz’in sahil boyunca uzanan dolambaçlı kıyı şeridi, ülkenin
              en manzaralı yollarından birine sahip olmasıyla bu bölgeyi kara
              yolculuğu için en cazip rotalardan biri yapar. Bölgenin en gözde
              ve en turistik yeri Karadeniz’in doğusunda yer alan Sümela
              Manastırı’dır. Karadeniz’in alabildiğine uzanan kıyı şeridinde
              yapılacak bir gezi sırasında antik surlar, eşsiz plajlar ve liman
              kıyısındaki şirin yerleşim bölgelerini görebilirsiniz. Kuzeyde buz
              gibi denizi, güneyde yemyeşil dağ yamaçları ile muhteşem bir
              manzaraya sahip Karadeniz; çay, fındık ve kiraz bahçelerinin yanı
              sıra hamsisi ile de meşhurdur. Bisiklet severler için de mükemmel
              bir rota olan Karadeniz; sahil beldeleri, el değmemiş plajları ve
              sakin balıkçı köyleri ile macera severlere de hitap eder.
            </p>
          </div>
        </div>

        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/bolu.jpg"
                square
                className="profile-pic"
              />
              <>
                {/* <h3 style={{ fontSize: "24px" }}>BOLU</h3> */}
                <p className="paragraph2">
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
                  <Link to="Karadeniz/Bolu">
                    <Button className='button'  bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/kastamonu.jpg"
                square
                className="profile-pic"
              />
              <>
                {/* <h3 style={{ fontSize: "24px" }}>KASTAMONU</h3> */}
                <p className="paragraph2">
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
                  <Link to="Karadeniz/Kastamonu">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/giresun.jpg"
                square
                className="profile-pic"
              />
              <>
                {/* <h3 style={{ fontSize: "24px" }}>GIRESUN</h3> */}
                <p className="paragraph2">
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
                <Link to="Karadeniz/Giresun">
                  <Button className='button' bsStyle="primary">More</Button>
                </Link>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/goturkey/trabzon.jpg"
                square
                className="profile-pic"
              />
              <>
                {/* <h3 style={{ fontSize: "24px" }}>TRABZON</h3> */}
                <p className="paragraph2">
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
                <Link to="Karadeniz/Trabzon">
                  <Button className='button' bsStyle="primary">More</Button>
                </Link>
              </>
            </Col>
          </Row>
        </Container>
        <div class="responsive-map">
        <iframe src="https://www.google.com/maps/d/embed?mid=1N0XkRDKNL60gKJvPMPsXnRAO40-J4sEa" width="400" height="400"
        style={{ border: "0" }}
        allowfullscreen=""
        loading="lazy"></iframe>
          
          <ol class="map-list"><strong>Gezilecek Yerler</strong>
            <li class="map-list-item-blue">Abant Golu</li>
            <li class="map-list-item-blue">Mudurnu</li>
            <li class="map-list-item-blue">Seben Kaya Evleri</li>
            <li class="map-list-item-blue">Yedigoller Milli Parki</li>
            <li class="map-list-item-blue">Giresun Adasi</li>
            <li class="map-list-item-blue">Kumbet Yaylasi</li>
            <li class="map-list-item-blue">Mavi Gol</li>
            <li class="map-list-item-blue">Zeytinlik Mahallesi</li>
            <li class="map-list-item-blue">El Sanatlari Carsisi</li>
            <li class="map-list-item-blue">Etnografya Muzesi</li>
            <li class="map-list-item-blue">Ilgaz Dagi</li>
            <li class="map-list-item-blue">Kastamonu kalesi</li>
            <li class="map-list-item-blue">Ataturk Kosku</li>
            <li class="map-list-item-blue">Gulbahar Hatun Camii</li>
            <li class="map-list-item-blue">Sumela Manastiri</li>
            <li class="map-list-item-blue">Uzungol</li>
          </ol>
        </div>
      </div>
      
    );
  }
}
