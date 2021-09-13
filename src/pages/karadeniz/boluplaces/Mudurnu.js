import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Mudurnu extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://storage.kucukoteller.com.tr/2018/05/23/1527077721804094.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Mudurnu</h3>
              Mudurnu, Köse Mihal ve Samsa Çavuş’tan süre gelen tarihi dokusunu günümüze kadar sürdürebilen ilçelerde biridir. İçerisindeki tarihi dokuyu bozmamak adına otel ve pansiyonlar bile konak tarzında oluşturulmuş veya restore edilmiştir. Tarihi dokusu, gelenek ve göreneklerini hiç kaybetmemiş, nesilden nesile aktarılmıştır.

İlçe köklü tarihinin yanı sıra doğaseverlerin dikkatini çekecek zenginliklere sahiptir. Ayrıca Mudurnu, Türkiye'nin en sakin şehri olarak kayıtlara geçmiştir. Gölleri, yeşil alanları ve huzur veren atmosferi ile Mudurnu, gezilecek yerler listesinde şehrin stresinden uzaklaşmak isteyenler için Bolu’nun nadide noktalarından biridir.

İlçe merkezi üç ayrı taraftan ilerleyen karayollarının kesiştiği bir yer üzerinde kurulmuştur. Bolu’ya olan mesafesi 50 kilometredir. Mudurnu- Ankara arası 200 kilometre, Mudurnu- İstanbul arası ise 250 kilometredir.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.otelleri.net/landing/mudurnu/gezi-rehberi/abant-golu-2023-1d.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.otelleri.net/landing/mudurnu/gezi-rehberi/suluklu-gol-2023-98.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.otelleri.net/landing/mudurnu/gezi-rehberi/akkaya-travertenleri-2023-43.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.otelleri.net/landing/mudurnu/gezi-rehberi/mudurnu-saat-kulesi-2023-64.jpg" style={{height:"274px" ,width:"250px"}}
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
