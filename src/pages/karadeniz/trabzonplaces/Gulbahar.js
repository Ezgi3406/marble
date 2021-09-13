import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Gulbahar extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/e/e2/Gulbahar_Hatun_Camii3.Jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Gulbahar Hatun Camii</h3>
              Gülbaharhatun Camii Yavuz Sultan Selim'in annesi Gülbahar Hatun'un hatırası için Orta Hisar'ın batısında, Zağnos Köprüsü'nün yakınında bir külliye içerisinde yapılmıştır. Külliyeden cami ile türbe günümüze gelebilmiş; imaret, medrese, hamam ve mektep yıkılmıştır. Kaynaklar bu eserin, 1514 yılında yaptırıldığını göstermektedir. Caminin inşa kitabesi yoktur. Cami erken devir Osmanlı mimarisinde ayrı bir plan tipi oluşturan Zaviyeli Camiler grubuna girmektedir. Duvar işçiliği özenlidir. Pencereler, son cemaat mahalli, kemerleri ve minarede koyu gri ve sarımsı beyaz taş kullanılmıştır. Mihrap mermerden yapılmıştır. Kenar bordürleri sade, tepeliği bitkisel süslemelidir. Beşgen niş mukarnaslı bir kavsara ile son bulur. Köşeliklerinde ikişer kabara (gül bezek) motifi yer alır. Minberde mermer olup sade bırakılmıştır. Caminin klasik dönem süslemeleri bozulmuştur. Bugünkü süslemeler son onarımlarda yapılmıştır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/0b/04/ce/27/gulbahar-hatun-cami-ve.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/03/26/81/b0/gulbahar-hatun-tomb.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/0b/04/ce/52/gulbahar-hatun-cami-ve.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/0b/04/ce/6d/gulbahar-hatun-cami-ve.jpg" style={{height:"274px" ,width:"250px"}}
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
