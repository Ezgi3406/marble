import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ege.css";
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
                src="https://cdn.goadventureturkey.com/mugla/mugla2.mp4"
                type="video/mp4"
              />
            </video>
            <h2 className="heading">MUĞLA</h2>
            {/* <h5 className="sub-heading">
            With us you’ll find a perfect destination in Mugla.
          </h5> */}
          </div>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/BodrumKalesi">
                <Image
                  style={{ height: "244px" }}
                  src="http://localhost:3000/assets/img/places/Bodrumkalesi.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Bodrum Kalesi hiç şüphesiz Bodrum’un en önemli ikonu. Deniz kenarında yılları, dalgaları dimdik göğüsleyen kale Bodrum’da gezilecek yerlerin ve Bodrum’un en güzel manzaralarının liste başında bulunuyor.
                </p>

                <p>
                  <Link to="/BodrumKalesi">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Iztuzu">
                <Image
                  src="http://localhost:3000/assets/img/places/iztuzu1.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Altın sarısı rengindeki kumuyla İztuzu Plajı`nın bir tarafında tatlı su, diğer tarafında tuzlu su bulunması nedeniyle dünyadaki eşsiz plajlardandır ve burada insanlar ile caretta carettalar barış içinde yaşamlarını sürdürmektedirler.
                </p>
                <p>
                  <Link to="/Iztuzu">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Saklikent">
                <Image
                  src="http://localhost:3000/assets/img/places/saklikent.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Muğla ve Antalya arasındaki sınırı oluşturan Saklıkent Kanyonu’na da bir gün ayırmanızı öneririz. Kanyon;  yaklaşık 18 kilometre uzunluğu, 200 metreyi bulabilen yüksekliği, daracık geçişleri, etrafına kurulmuş köyleri ile çok özel bir yer.
                </p>
                <p>
                  <Link to="/Saklikent">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/YassicaAdalari">
                <Image style={{ height: "244px" }}
                  src="http://localhost:3000/assets/img/places/fethiye-yassica-islands.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Yassıcalar denilen bu adaların tek tek adları bile yok. Büyükçe olanının denize uzanan kumsallı burnunun ucunda küçücük bir havuzcuk oluşuyor. Burada adalar arasında yüzme macerasını da korkmadan deneyebilirsiniz. 
                </p>
                <p>
                  <Link to="/YassicaAdalari">
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
