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
                src="https://cdn.goadventureturkey.com/aydin/aydin.mp4"
                type="video/mp4"
              />
            </video>
            <h2 className="heading">AYDIN</h2>
            {/* <h5 className="sub-heading">
            With us you’ll find a perfect destination in Aydın.
          </h5> */}
          </div>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/BafaGolu">
                <Image
                  src="http://localhost:3000/assets/img/places/bafa-lake.jpg"
                  square
                  className="profile-pic"
                />
              </Link>

              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Söke ovası 2000 yıl kadar önce denizdi, burada büyük bir
                  körfez vardı. Büyük Menderes ırmağının getirdiği alüvyonlar
                  körfezi duldurdu ve ova haline getirdi. Bugünkü Bafa Gölü
                  denizden bir parça olarak arada kaldı. Gölün üzerinde iki ada
                  bulunmaktadır. İkiz adalardan biri aslında tam ada değil, bir
                  kumulla karaya bağlıdır. Bafa Gölü’nde kefal, levrek, yılan
                  balığı tutulmaktadır.
                </p>

                <p>
                  {" "}
                  <Link to="/BafaGolu">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/DidimMarina">
                <Image
                  style={{ height: "359px" }}
                  src="http://localhost:3000/assets/img/places/Didim-Marina2.jpg"
                  square
                />
              </Link>
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Didim Marina, 2009 yılında hizmete açıldı. Didim’in içinde
                  Çamlık Mevkiinde bulunur. Marinaya denizden yaklaşırken
                  mendireği ve fenerleri görülür. Marina, karadan Bodrum Milas
                  Uluslararası havaalanına 90 km, İzmir Havaalanına 145 km
                  mesafededir. Didim’in içinde bir marina olduğu için Didim’in
                  tüm imkanlarından yararlanır. Dalgıçlık hizmetlerinin yanında,
                  dalış tüpü doldurmak da mümkündür.
                </p>
                <p>
                  <Link to="/DidimMarina">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Guvercinada">
                <Image
                  style={{ height: "360px" }}
                  src="http://localhost:3000/assets/img/places/guvercin-island.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Güvercinada Kalesi, Barbaros Hayrettin Paşa tarafından
                  yaptırılan bir iç kale ve İlyas Ağa tarafından yaptırılan
                  surlar yer almaktadır. Bu surlar Mora isyanı sırasında
                  adalardan ve denizden gelebilecek saldırıları önleyebilmek
                  için yaptırılmıştır. Kalenin inşaasında kullanılan taşlar
                  yılancıburnundan seçilerek getirilmiştir. Kalenin mimarisi
                  beşgen şeklindedir. Kalenin girişinde bir kitabe aralığı
                  bulunur.
                </p>
                <p>
                  <Link to="/Guvercinada">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Tralleis">
                <Image
                  style={{ height: "362px" }}
                  src="http://localhost:3000/assets/img/places/tralleis1.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Tralleis Antik Kenti Aydın’ın kuzeyinde ve Kestane dağlarının
                  güneyinde bulunan antik kenttir.Tralleis Antik Kenti’nde,
                  spor, eğitim ve kültürel faaliyetlerin yürütüldüğü “Üç Gözler”
                  yapısı başta olmak üzere, hamam, tiyatro, agora ve stadium
                  gibi yapılar bulunmaktadır. Bölgede arkeolojik çalışmalar
                  halen sürdürülmektedir ve toprak altında kalan şehir gün
                  yüzüne çıkarılmaktadır.
                </p>
                <p>
                  <Link to="/Tralleis">
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
