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
                src="https://cdn.goadventureturkey.com/aegean/ege-bolgesi-.mp4"
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>

            <h2 className="heading" style={{"z-index":"1"}}>
              <strong>EGE</strong>
            </h2>
            <h5 className="sub-heading"></h5>
          </div>
        </div>
        <Container >
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Izmir">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/6-izmir.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Türkiye’nin batısında yer alan ve Ege’nin incisi olarak kabul edilen İzmir her yıl 1 milyonun üzerinde turisti ağırlamaktadır. Herkesi kendine hayran bırakan bir atmosfere sahip olan İzmir Türkiye’de yaşanılası bir bölge olarak görülmektedir ve ziyaretçilerine birçok gezilip görülecek yer ve birçok aktivite sunmaktadir.
                </p>

                <p>
                  {" "}
                  <Link to="/Izmir">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Mugla">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/5-mugla.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Ülkemizin en gözde tatil noktalarından olan Muğla her yıl binlerce turisti ağırlamaktadır. Özellikle ilçelerinde bulunan doğal güzellikleri, tarihi noktaları ve canlı hayatı ile tatilcileri kendine çeken şehir yaz aylarında yoğun bir ilgi görmektedir ve
                  Doğal güzellikleri ile birlikte gezilecek birçok yere sahiptir. 
                 
                </p>
                <p>
                  <Link to="/Mugla">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="pe      rson-wrapper">
              <Link to="/Denizli">
                <Image
                  src="http://localhost:3000/assets/img/places/denizli1.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Denizli, tarihi ve muhteşem doğal güzellikleri ile gezilip görülmesi gereken önemli turizm yerlerinden biridir. Eski çağlara kadar dayanan tarihi birikimi şehrin kültürel dokusunu etkilediği kadar turistik yerlerin yapısını da etkilemiştir. Birçok medeniyete ev sahipliği yapmış olan Denizli bu medeniyetlerin izini taşımaktadır.
                </p>
                <p>
                  {" "}
                  <Link to="/Denizli">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Aydin">
                <Image
                  src="https://cdn.goadventureturkey.com/goturkey/aydin.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Ege Bölgesi'nde yer alan Aydın'ın verimli topraklarından dolayı asırlar boyunca farklı uygarlıklar burada yaşamını sürdürmüştür. Antik kentlerin içerisinde filozoflar ve bilim adamları çalışmaları sürdürmüş ve ticaret merkezi olarak bilinen bu şehri uzun yıllar boyunca farklı ülkeler tarafından ele geçirilmek için savaş vermiştir. 
                </p>
                <p>
                  <Link to="/Aydin">
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
