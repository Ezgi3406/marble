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
              src="https://upload.wikimedia.org/wikipedia/commons/0/03/Keloglan_magarasi.jpg"
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
          <h3>Keloğlan Mağarası</h3>
          1970 yılında keşfedilen Keloğlan Mağarası, Acıpayam’daki Dodurgalar
          Kasabası’na bağlı bir mağaradır. Denizli Valiliği ve Dodurgalar
          Belediyesi Maden Tetkik Arama tarafından turizme kazandırılmış ve 2003
          yılında ziyarete açılmıştır. Yaklaşık 10 milyon yıldır oluşumunu
          sürdüren Keloğlan Mağarası, 2 büyük galerideki sarkıt ve dikitleriyle
          çok güzel bir havaya sahip. Yaklaşık 145 metre uzunluğa sahip olan
          mağarada çok sayıda damlataş görmek mümkün. İçeride hala yarasa
          toplulukları bulunuyor. Bu nedenle zaten küçük olan mağarada, bir
          yarasanın uçması yakınınızdan geçmesi demek. Ama endişelenecek bir şey
          yok. Dodurgalar Kasabası’nda yer aldığı için Dodurgalar Mağarası
          olarak da bilinen Keloğlan Mağarası’nın çıkışında küçük bir vitrinde,
          mağarada bulunduğunu tahmin ettiğim bizon, kırmızı tilki, keçi, kurt
          gibi hayvanlara ait çeşitli kemikler ve kalıntılar sergileniyor.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6RQRh8OODEgLaI3qrYEc5CXgjJUXEyv8i5w&usqp=CAU"
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTz_9XDoyX6aJWZaMDY9kVrLq87Nj9NfWHJYg&usqp=CAU"
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://trthaberstatic.cdn.wp.trt.com.tr/resimler/424000/424937.jpg"
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/repoKulturPortali/large/13082015/c28b0a4b-e07e-45e3-be4a-cd3e36f6b6b6.jpg?format=jpg&quality=50"
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
