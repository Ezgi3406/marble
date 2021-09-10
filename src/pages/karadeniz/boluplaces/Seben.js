import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Seben extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://sebenkayaevleri.com/app/files/3315_3397_4149-DJI_0250.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Seben Kaya Evleri</h3>
              Solaklar Köyü sınırları içinde bulunan kaya evleri ilçe merkezine 4 km uzaklıktadır. Seben-Bolu yolu üzerinden yaklaşık 2 kilometre içeride bulunan kaya evleri Solaklar Köyü’nün kuzeydoğusunda, köye yaklaşık 750 metre uzaklıktadır. Kuz deresinin açtığı vadinin kuzeyindeki kayalık yamaçta yer almaktadır. Bu evler 4-5 katlı kaya evleri şeklinde ve her kat birbirine baca merdivenlerle bağlıdır. Kaya evlerinin yanında Belediye tarafından işletilen bir kır lokantası bulunmaktadır.


Kaya evlerinin şu an üç katı ziyarete açıktır, kaya yerleşimi girişinin sonunda zemin kat olarak değerlendirilebilecek oyularak açılmış oldukça büyük bir mekân bulunmaktadır. Bu mekânın hayvanların barınması için kullanılmış olduğu düşünülmektedir.

Ulaşım, bu yerleşimi oluşturanların açtığı yoldan değil, demir bir merdivenden sağlanmaktadır. İlk katta üç oda bulunmaktadır. Bu kattaki ikinci odanın her iki duvarında birer haç ve haçın üstünde Latince bir yazıt yer almaktadır.
Ayrıca odaların duvarlarında küçük nişler bulunmaktadır. Bu katta odalar bir koridor üzerinde olup koridorun sağ tarafı vadiye bakan ve üzerinde pencere açıklıklarının bulunduğu kaya duvardır. İkinci kata düşey bir bacadan çıkılmaktadır.

Bu kat tek mekândan oluş- maktadır ve bacanın hemen sol tarafında yaklaşık bir buçuk metre derinlik ve çapta zemin oyularak açılmış bir kuyu bulunmaktadır. Üçüncü kata da düşey bir baca ile çıkılmaktadır. Bu kat da tek mekândan oluşmaktadır ve mekânın vadiye bakan penceresinin tam karşısında 1,5x 1,5 metre ölçülerinde bir sarnıç bulunmaktadır. Bu sarnıca pencereden oyularak açılmış bir kanaldan su getirildiği düşünülmektedir

Dördüncü kata da düşey bir bacayla çıkılmaktadır, bu katta tavan yüksekliği yaklaşık 1.20 metre olup vadiye bakan pencereye bir koridor şeklinde ulaşılmaktadır ve başkaca bir mekân bulunmamaktadır. Bu katın vadinin gözetlemesi için kullanılmış olduğu düşünülmektedir.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/13/a8/ed/cb/seben-kaya-evleri.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://seben.bel.tr/app/files/7115_2222_5941-seben_kaya_evleri.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/repoKulturPortali/large/21022013/057df777-1520-4901-bbe6-4b898ecf00bf.JPG?format=jpg&quality=50" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/repoKulturPortali/large/SehirRehberi//GezilecekYer/20180613105545128_Seben%20Kaya%20Evleri.3.jpg?format=jpg&quality=50" style={{height:"274px" ,width:"250px"}}
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
