import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class GreatMosque extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://www.yerelnet.org.tr/wp-content/uploads/2021/05/Kemeralti-Carsisi-1.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Kemeraltı</h3>

Mezarlıkbaşı semtinden Konak Meydanı’na kadar uzanan bölgeyi içine alan tarihi bir çarşıdır. Çarşının bugün ana caddesini oluşturan Anafartalar Caddesi, geniş bir kavis çizer. Bu kavis, caddenin geçen yüzyıllarda var olan iç limanın etrafını dolaşmış olmasından kaynaklanmaktadır. Liman, zamanla ağzına doğru dolmaya başladığından, yeni yerleşim ve ticaret sahaları açılmış ve buraları yeni binalarla değerlendirilmiştir.

İlk yapıldığı yıllarda çarşı, kısmen tonozlu, kiremit örtülü, yan sokakları ve arastalarıyla bir kapalı çarşı görünümündeydi. Yakın yıllara kadar, Şadırvanaltı Cami’nden Havra Sokağı’na kadar devam eden sokakların üstü örtülü idi. Çarşı, Kemeraltı adını bu bölümünün üstünün kapalı olması özelliğinden almıştır. Çarşıya dik olarak açılan bugünkü küçük sokakların bir bölümünün üstü de yine beşik tonozlarla örtülü bulunuyordu. Bunlara açılan diğer ara sokaklarla birlikte arastalar oluşmaktaydı. Çarşı içinde pek çok han yer almaktadır. Eskiden olduğu gibi günümüzde de Kemeraltı Çarşısı, İzmir’in en önemli alış-veriş merkezidir. Eskinin gizemli tonoz ve kubbeli dükkânlarının sayısı oldukça azalsa bile, modern iş merkezleri, mağazaları, sinemaları ve kafeteryaları ile sokakları günün her saati canlı, her türlü alış-verişin yapılabileceği bir site görünümündedir. Bu kapalı ve açık mekânlardan oluşan çarşıda geleneksel Türk el sanatlarından seramikler, çini panolar, ahşap ürünler, tombaklar, halı ve kilimler, deri ürünlerinin her çeşidini bulmak mümkündür
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/shops-in-kemeralti-izmir-turkey-picture-id1049145786" style={{height:"274px" }}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.otuzbeslik.com/img/mekan/kemeralti-carsisi.location.12471.arl3du.jpg"
                style={{height:"274px" }} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20171030151526190_Kemeralti,%20Ali%20Pasa%20Meydani,%20I.Hasan%20Bodur.jpg?format=jpg&quality=50" style={{height:"274px" }}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/TR_Izmir_asv2020-02_img06_Kemeralt%C4%B1.jpg/220px-TR_Izmir_asv2020-02_img06_Kemeralt%C4%B1.jpg" style={{height:"274px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>
          </Row>
        </Container>
       </div>
    );
  }
}
