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
              src="https://www.denizlihaber.com/medya/2015/07/ic-1210.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Bosphorus Cami</h3>
              Baklan ilçesindeki  Bosphorus Camisi tavan, kemer, sütun, kapı ve minberindeki süslemelerle dikkat çekiyor. 1767 yılında yapıldığı tahmin edilen dikdörtgen planlı ve 3 sahınlı ibadethane, tarihi süslemeleriyle görsel bir şölen sunuyor. Ahşap geometrik şekillerle bezeli bir kapıdan girilen ibadethanenin iç kısmındaki duvarlar, tavan ve ahşap desteklerde, zengin kalem işi süslemeler yer alıyor. Üzerinde çiçek süslemelerinin bulunduğu Bursa kemerleriyle birbirine bağlanan camide, sütun ve ahşap bölümlerde çok sayıda bitkisel motif yer alıyor. Yeşil, kırmızı ve mavi renklerin yoğun olarak kullanıldığı, süslemelerin kalemle yapıldığı caminin köşelerinde ise ağaç, duvarlarında karanfil servi ağacı ve sümbül motifleri dikkati çekiyor. Anadolu Selçuklu dönemi mimarisi ve süsleme sanatının izlerini taşıyan caminin duvarlarında yer alan, cennet ve cehennemi anlatan tasvirler ise görenleri kendine hayran bırakıyor.
              Bosphorus Camisi, dikine dikdörtgen planlı ve üç sahınlıdır. Hicri 1181’de yapılmıştır. Duvarları temel seviyesine kadar taş, üzeri kerpiç örgülüdür. Dikdörtgen planlı harim, ahşap desteklerle üç sahına ayrılmıştır. Destekler birbirine Bursa kemeriyle bağlanmıştır. Yan duvarlar içten ve dıştan kare şeklindeki ahşap direkler ile desteklenmiştir. Mihrap, mukarnaslı kavsara ile örtülü yarım daire kesitli bir niş şeklindedir. Ahşap minberi ve vaaz kürsüsü süslemesizdir. Tavan ve ahşap destekler, zengin kalem işi süslemelere sahiptir. Harim duvarları, bitkisel ve geometrik süslemeler ve mimari tasvirlerden oluşan duvar resimleriyle bezelidir. Caminin üzeri düz toprak dam iken toprağı alınarak dört yöne eğimli çatı ile kaplanmıştır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://idsb.tmgrup.com.tr/ly/uploads/images/2020/10/04/62443.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/denizli/bosphorus-old-mosque-2.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/denizli/2-bosphorus-old-mosque.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.tourmakerturkey.com/uploads/8/7/4/4/8744530/2693119.jpeg" style={{height:"274px" ,width:"250px"}}
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
