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
              src="https://www.kusadasi.bel.tr/AdminPanel/fileman/Uploads/WhatsApp_Image_2020_05_29_at_15_.59%20-%20Copy%201.jpeg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Güvercinada</h3>
              Güvercinada Kalesi, Barbaros Hayrettin Paşa tarafından yaptırılan bir iç kale ve İlyas Ağa tarafından yaptırılan surlar yer almaktadır. Bu surlar Mora isyanı sırasında adalardan ve denizden gelebilecek saldırıları önleyebilmek için yaptırılmıştır. Kalenin inşaasında kullanılan taşlar yılancıburnundan özel seçilerek getirilmiştir. Kalenin mimarisi beşgen şeklindedir. Kalenin girişinde bir kitabe aralığı bulunur. Osmanlı döneminde ada korsanlara karşı da bir karakol vazifesi yapmış olduğu için, Korsan Kalesi olarak da bilinir. Adanın en yüksek noktasında bulunan kule, muhafızların çevreyi gözetlenmesi için kullanılmıştır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/guvercinada-kusadasi-turkey-picture-id1269283002?k=20&m=1269283002&s=612x612&w=0&h=P6KXhuBsVql9yucbSLK6r0qHWBmOKRioZevju_Z3kh4=" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/view-to-the-guvercinada-medieval-fortress-with-tourists-boats-in-picture-id1312149090?k=20&m=1312149090&s=612x612&w=0&h=matqK-vwizK2Lx2FsYme5X5NKrTzXn1venoyIdNmBg8="style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/guvercinada-kusadasi-turkey-picture-id1269284675?k=20&m=1269284675&s=612x612&w=0&h=wUjEWpRoMnaM5Q3uqirVtcOPxbEIESWHyRf1kgzJ9cI=" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/guvercinada-in-kusadasi-turkey-picture-id1033747160?k=20&m=1033747160&s=612x612&w=0&h=0ppEhKXjt0qFPhj3qb9qUYeSVNOiwq71tlZhhH9CMmM=" style={{height:"274px" ,width:"250px"}}
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
