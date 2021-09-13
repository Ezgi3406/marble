import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Giresunadasi extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://seyahatdergisi.com/wp-content/uploads/2018/10/Giresun-Mavi-Gol.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Mavi Gol</h3>
              Giresun’a 45 km, Dereli İlçesine 13 km mesafededir.Alancık Köyü Kuzalan Mahallesinde bulunur. En yüksek noktası 1800mt yükseklikteki Dikoluk Pınarı ve Marazlı Tepesidir.482 hektar alana sahiptir. Kuzalan Şelalesi, Mağaralar, anıt ağaçlar,tarihi değirmenler gibi zengin güzelliklerinin yanında pek çok canlı çeşitliliğine , farklı bir ekosisteme ev sahipliği yapmaktadır.60 farklı familyaya ait 129 bitki türü, 36 familyaya ait 105 kuş türü de tabiat parkı içinde yer almaktadır. Ayrıca; tarihi güzelliklerden Manastırlar, Kaleler, Kemer Köprülerde göze çarpar. Tabiat Yürüyüşü, foto safari, bisiklet safari, atv, kaya tırmanışı,olta balıkçılığı, kuş gözlemciliği yapılabilmektedir.

Giresun’a 32 km. uzaklıkta bulunan, Doğu Karadeniz Bölgesi'nde sodalı suyun dere halinde aktığı tek yer olma özelliğine sahip. Mavi Göl özellikle belirli aylarda turkuaz rengine bürünmektedir. Büyüklü küçüklü 3 gölden oluşan, halk arasında 'Sodalı Göl' diye adlandırılan Mavi Göl'ün suyu, kireç taşları ve sodalı suyun etkisiyle turkuaz rengi almaktadır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://seyahatdergisi.com/wp-content/uploads/2018/10/mavi-gol-giresun.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://seyahatdergisi.com/wp-content/uploads/2018/10/giresun-mavi-gol-selale.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kuponall.com/wp-content/uploads/2021/06/giresun-mavi-gol.jpeg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kuponall.com/wp-content/uploads/2021/06/giresun-mavi-gol-kamp.jpeg" style={{height:"274px" ,width:"250px"}}
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
