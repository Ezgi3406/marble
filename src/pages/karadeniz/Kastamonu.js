import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./karadeniz.css";

export default class Home extends Component {
  render() {
    return (
      <div className="body">
        <div className="content-wrapper">
          <div className="video-wrapper">
            <video
              className="video-target"
              autoPlay
              style={{
                filter: "contrast(1.04) brightness(0.91)",
                width: "1350px",
                height: "250px",
                "margin-top": "1px",
              }}
              preload="none"
              playsInline
              muted
              loop
              data-poster
            >
              <source
                src="https://cdn.goadventureturkey.com/kastamonu/kastamonu.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <h2 className="heading">
            <strong>KASTAMONU</strong>
          </h2>

          <h5 className="sub-heading"></h5>
        </div>

        <p className="paragraph">
          {" "}
          Karadeniz Bölgesi’nin yer alan Kastamonu, yeşil ile mavinin her tonunu
          kucaklayarak sizi saran ve her adımınızda kadim kültürünü hissettiren
          sımsıcak bir kenttir. Estetik sivil mimari örneği konakları, tarihin
          izini taşıyan han, cami ve külliyeleri; şehrin kültürel kimliğinin
          korunduğunun en güzel izleridir. Osmanlı’da uç merkezi olan Kastamonu,
          tabii güzellikleri yanında tarihî eserler ve türbelerin sıklığı
          bakımından nadir yörelerden birisidir. Bu nedenle, “Evliyalar Şehri”
          olarak da bilinmektedir. Kültürel mirasın zenginliğini barındıran
          leziz yöresel mutfağı, Küre ve Ilgaz Dağları’nın oluşturduğu vadi,
          kanyon, şelaleler, Karadeniz’de uzanan 170 kilometrelik sahilinde
          barındırdığı el değmemiş koylar, ormanlarının flora ve fauna
          zenginliği, endemik çeşitliliği ile Kastamonu; farklı keşif
          deneyimlerini bir arada sunan zengin bir destinasyondur.
        </p>

        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/kastamonu/1-munire-sultan-handicraft-bazaar.jpg"
                square
                className="profile-pic"
              />
              <>
                <h3 style={{ fontSize: "22px" }}>EL SANATLARI CARSISI</h3>
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
                  <Link to="/Karadeniz/Kastamonu/Carsi">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/kastamonu/1-liste-ethnography-museum.jpg"
                square
                className="profile-pic"
              />
              <>
                <h3 style={{ fontSize: "22px"}}>ETNOGRAFYA MUZESI</h3>
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
                  <Link to="/Karadeniz/Kastamonu/Etnografya">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/kastamonu/1-liste-ilgaz-mountain-2.jpg"
                square
                className="profile-pic"
              />
              <>
                <h3 style={{ fontSize: "22px" }}>ILGAZ MOUNTAIN</h3>
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
                  <Link to="/Karadeniz/Kastamonu/Ilgaz">
                    <Button className='button' bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/kastamonu/1-liste-kastamonu-castle.jpg"
                square
                className="profile-pic"
              />
              <>
                <h3 style={{ fontSize: "22px" }}>KASTAMONU KALESI</h3>
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
                  <Link to="/Karadeniz/Kastamonu/Kale">
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
