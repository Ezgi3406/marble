import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Carsi extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="http://www.pasader.com/wp-content/uploads/2020/05/KAstamonu-El-Sanatlar%C4%B1-scaled.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>
Münire Medresesi El Sanatları Çarşısı</h3>
              Nasrullah Camii arkasında yer alan medrese 1746 yılında Reisül Küttab Hacı Mustafa Efendi tarafından yaptırılmıştır. Yapı 2001 yılında Kastamonu Valiliği’nin düzenlemeleri ile turizme açılmıştır.
 
Medrese içindeki 21 adet dükkanda, Kastamonu’ya ait her türlü geleneksel el zanaatı bulunabileceği gibi, yöreye ait şifalı bitkiler ve ürünlerden, Kastamonu yöresel mutfağına uzanan geniş bir gezi yapma imkanı bulunmaktadır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://4.bp.blogspot.com/_1CWuHDdwBWg/Sg3LhLQw2eI/AAAAAAAAGBY/r-p-V2-DRUQ/s400/img_1395.jpeg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://4.bp.blogspot.com/_1CWuHDdwBWg/Sg3Lg5-lmAI/AAAAAAAAGBQ/DePp1X6gjXQ/s400/img_1373.jpeg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/repoKulturPortali/large/28022013/ca722e22-9205-4a0f-b044-45c3f8477f57.JPG?format=jpg&quality=50" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://scontent-hou1-1.xx.fbcdn.net/v/t1.18169-9/12715810_1242549922438174_1979524910646678130_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=9267fe&_nc_ohc=LspA3NKJdncAX_KgUZS&_nc_ht=scontent-hou1-1.xx&oh=ee6c2b22cd9d02fe02fe3f4e40a4ef95&oe=6162CD67" style={{height:"274px" ,width:"250px"}}
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
