import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { right } from "@popperjs/core";

export default class GreatMosque extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image"></div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://media.istockphoto.com/photos/fethiye-saklikent-canyon-mugla-turkey-picture-id1284970547?k=20&m=1284970547&s=612x612&w=0&h=ZYOqWTVKFqKFMATPojAXWW1dxzInRVckAzF2_jmrPYo="
              style={{
                height: "600px",
                width: "900px",
                padding: "60px",
                marginRight: "10px",
              }}
              square
              className="profile-pic"
            />
          </Col>
        </div>
        <p style={{ padding: "60px" }}>
          <h3>Saklıkent</h3>
          Muğla’nın Fethiye ilçesinde bulunan Saklıkent, henüz el değmemiş bir
          doğa harikası. Saklıkent Kanyonu Fethiye Olağanüstü tertemiz suya
          sahip Saklıkent kanyonu, gelen ziyaretçilerini şaşırtıyor. Fethiye
          Gezilecek Yerler Kanyondan 14 km uzaklıkta ise dünyada görülebilecek
          en güzel manzaralardan birini görebilirsiniz. Dağlardan gelen serin
          sular üzerinde yürüyerek, buradaki güzellikleri keşfedebilirsiniz.
          Milli park içerisinde bulunan ve Türkiye’nin eşsiz güzellikleri
          arasında en güzeli olan Saklıkent görülmeye değer yerlerdendir.
          Birbirinden güzel manzaraları ile doğal güzelliklerini keşfedeceğiniz
          bu yerde gezintiyeçıkmadan önce ise yanınızda kesinlikle bir lastik
          sandalet bulundurun. Çünkü, buradaki kayaların üzerinden hızlı suları
          aşarken kaza önlemleri için bir çift terliğe ihtiyacınız olacaktır.
          Birbirinden değerli doğal güzelliklere sahip Saklıkent kanyonunda
          keşfedilecek birçok sayıda yer mevcut. Su üzerinde gezi ve etrafı
          keşfettikten sonra burada konaklayabileceğiniz ve dinlenebileceğiniz
          yerlerde var. Saklıkent Kanyonu Fethiye tesisi de bu dinlenme
          yerlerinden olmakla beraber sakin saatler geçirebileceğiniz harika bir
          alandır.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/saklikent-gorge-fethiye-turkey-picture-id488599525?k=20&m=488599525&s=612x612&w=0&h=Nh5bTJVIqmhvQTqCKYZ4P781Qamq-4MbpueK1XNfsDI="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/saklikent-gorge-fethiye-turkey-picture-id503089519?k=20&m=503089519&s=612x612&w=0&h=dVkyRryHAiETaAAstECfuovbKpmiH3bRkuYO5ChO2U8="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/saklikent-gorge-fethiye-turkey-picture-id502907675?k=20&m=502907675&s=612x612&w=0&h=sX0Hk5KEe2TflEwnHaCShzvnd3ny0vsR_Sc_f0PPqgw="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/boardwalk-at-saklikent-gorge-canyon-picture-id486747095?k=20&m=486747095&s=612x612&w=0&h=aFqJXjBlMWBSy8qbg3IKBXmDSal3TJKb80qBBEII3LQ="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
