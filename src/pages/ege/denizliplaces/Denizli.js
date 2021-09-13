import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
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
                src="https://cdn.goadventureturkey.com/denizli/denizli.mp4"
                type="video/mp4"
              />
            </video>
          <h2 className="heading">DENİZLİ</h2>
          {/* <h5 className="sub-heading">
            With us you’ll find a perfect destination in Denizli.
          </h5> */}
        </div>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/KeloglanCave">
                <Image
                  src="http://localhost:3000/assets/img/places/keloglan-cave.jpg"
                  square
                  className="profile-pic"
                />
              </Link>

              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Yaklaşık 10 milyon yıldır oluşumunu sürdüren Keloğlan Mağarası, 2 büyük galerideki sarkıt ve dikitleriyle çok güzel bir havaya sahip.
                  Rivayete göre, çok zaman önce köse bir insan bu mağaraya gelmiş ve burada uyumuş. Uyandığı zaman ise saçları çok uzamış. Yine bir rivayete göre her kim bu mağarada kalırsa, upuzun saçlarının olacağına inananılarmış. 


                </p>

                <p>
                  {" "}
                  <Link to="/KeloglanCave">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Hierapolis">
                <Image
                  src="http://localhost:3000/assets/img/places/hierapolis1.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Hierapolis Antik Kenti oldukça iyi biçimde korunarak günümüze ulaşmayı başarmıştır. Buranın bir termal merkez olduğu zamanlarda çok sık ziyaret edildiğini kesinlikle söyleyebileceğimiz Roma Hamamı, günümüzde arkeoloji müzesi olarak kullanılıyor. Hierapolis ve yakın çevresindeki antik kent kazılarında ortaya çıkarılan heykeller ve diğer kalıntıları burada görebilirsiniz. 
                </p>
                <p>
                  <Link to="/Hierapolis">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Bosphorus">
                <Image
                  src="http://localhost:3000/assets/img/places/bosphorus-mosque.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Bosphorus Camisi tavan, kemer, sütun, kapı ve minberindeki süslemelerle dikkat çekiyor. 1767 yılında yapıldığı tahmin edilen 3 sahınlı ibadethane, tarihi süslemeleriyle görsel bir şölen sunuyor. Ahşap geometrik şekillerle bezeli bir kapıdan girilen ibadethanenin iç kısmındaki duvarlar, tavan ve ahşap desteklerde, zengin kalem işi süslemeler yer alıyor.
                </p>
                <p>
                  <Link to="/Bosphorus">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Pamukkale">
                <Image
                  src="http://localhost:3000/assets/img/places/pamukkale.jpg"
                  style={{ height: "274px" }}
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Pamukkale Travertenleri şüphesiz herkes tarafından tanınan bu doğal güzellik, pamuğa benzeyen doğal görüntüsü ile herkesi şaşkına çevirmeyi başarmıştır. Doğal oluşumlu bir güzellik olduğu için UNESCO Dünya Miras Listesinde yer almayı başarabilmiştir. Bu açıdan yerli ve yabancı turistler tarafından çok fazla ziyaret edilmektedir.
                </p>
                <p>
                  <Link to="/Pamukkale">
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
