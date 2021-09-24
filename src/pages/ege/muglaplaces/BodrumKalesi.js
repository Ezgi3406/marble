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
              src="https://bodrum.bel.tr/upload/sayfalar/1582552014_bodrum-(2).jpg"
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
          <h3>Bodrum Kalesi</h3>
          Bodrum Kalesi şüphesiz ki giden herkesin ziyaret etmek isteyeceği,
          görmeden dönmek istemeyecekleri en meşhur gezi yerleri arasında
          bulunmaktadır. Bodrum Kalesi Bodrum’un en önemli simgelerinden
          biridir. Çok görkemli olan bu kale iki liman arasın da kayalıkların
          üzerine kurulmuştur. Kalenin üstüne çıktığınız da eşsiz bir manzaraya
          kendinizi kaptırmamanız mümkün değildir. Yerli veya yabancı tüm
          turistlerin büyük bir kalabalık oluşturduğu bu kaleyi gezdikten sonra
          hemen yakınında bulunan müzeleri de gezerek dönebilirsiniz. Bodrum
          Kalesi iki liman arasında kayalık bir alan üzerinde kurulmuştur. Antik
          Çağ'da önce ada olan bu alan sonraları kente bağlanarak yarımada
          durumuna gelmiştir. 1406-1523 yılları arasında inşa edilen St. Jean
          Şövalyeleri'nin kalesi, kare planlı, 180 x 185 metre ölçülerindedir.
          İç kale içinde değişik ülke adları verilmiş kuleler bulunmaktadır. En
          yüksek kule deniz seviyesinden 47,50 metre yükseklikte olan Fransız
          Kulesi'dir. Diğer kuleler İtalyan Kulesi, Alman Kulesi, Yılanlı Kule
          ve İngiliz Kulesi'dir. Kalenin doğu duvarı dışında kalan bölümleri
          çift beden duvarları olarak takviye edilmiştir. İç kaleye 7 kapı
          geçilerek ulaşılır. Kapılar üzerinde armalar bulunmaktadır. Armalar
          üzerinde haçlar, düz veya yatay bantlar, ejder ve aslan figürleri
          bulunmaktadır. İç kalede Sapelin alti dahil olmak üzere 14 sarnıç
          vardır. Kale korugani, çiftli duvarlar arası su hendeği, asma köprü,
          kontrol kulesi, II. Mahmut tuğrası kalenin göze çarpan yerlerindendir.
          Bodrum Kalesi, 19'uncu yüzyıl sonunda kalenin hapishane olarak
          kullanıldığı dönemde bir hamam yapısı ile Osmanlı niteliği
          kazanmıştır. Kale bugün Sualtı Arkeoloji Müzesi olarak
          kullanılmaktadır. Müze koleksiyonlarında bulunan eserler Türk hamamı,
          Amphora sergilemesi, Doğu Roma Gemisi, Cam Salonu, Cam Batığı, Sikke
          ve Mücevherat Salonu, Karyalı Prenses Salonu, İngiliz Kulesi, İşkence
          ve Katliam Odaları ve Alman Kulesi'nde sergilenmektedir. Ayrıca, 33.5
          dönüm genişliğindeki bir arazi üzerine kurulmuş olan kalede açık
          mekanlarda da eser sergilenmektedir. Müze 1995 yılında Avrupa'da Yılın
          Müzesi Yarışması'nda "Özel Övgü" ödülünü almıştır.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.tatildukkani.com/assets/data/landmarks/landmark_1466768995_71.jpeg"
                style={{ height: "274px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://gezilmesigerekenyerler.com/wp-content/uploads/2015/07/Bodrum-Kalesi-01-e1436643717913.jpg"
                style={{ height: "274px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://i4.hurimg.com/i/hurriyet/75/750x422/5bca23fb0f25441138e3800f.jpg"
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.mimarizm.com/Files/2017/11/9/128803/128803.jpg"
                style={{ height: "274px" }}
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
