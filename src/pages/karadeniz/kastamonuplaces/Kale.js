import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Kale extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://media-cdn.tripadvisor.com/media/photo-s/1b/43/9f/06/kastamonu-kalesi.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Kastamonu Kalesi</h3>
              Kale, Kastamonu’nun ana simgelerinden biri olarak kentin en yüksek noktasından şehrin tacı gibi durmaktadır. Şehrin batısında bir ana kaya kütlesi üzerinde bulunan kale, MS.12'nci yüzyılda Komnenoslar tarafından yaptırılmıştır. Orijinal yapıdan günümüzde sadece iç kale kısmı ulaşmıştır. Kalenin dış surları 18'inci yüzyıl sonlarında yok olmuştur. Kalenin çeşitli dönemler içerisinde geçirmiş olduğu değişiklikler, bir Orta Çağ Bizans yapısından çok Türk mimarisini yansıtmasına neden olmuştur. Kalenin şehirden yaklaşık 120 metre yüksekte oluşu; ulaşım yönünden oldukça kolay olması Kastamonu’yu panaromik açıdan izlenebilecek en iyi yer konumunda bulunmasını sağlar. Kale içerisinde sarnıçlar, zindan, kaçış tünelleri ile “Bayraklı Sultan” olarak anılan türbe bulunmaktadır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/0b/c2/62/29/kale.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/1b/e7/3e/21/img-20200829-114008-largejpg.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/1d/6f/f9/1a/caption.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/1d/6f/f9/1d/caption.jpg" style={{height:"274px" ,width:"250px"}}
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
