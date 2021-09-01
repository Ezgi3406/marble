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
              src="https://image.elitema.com.tr/db_images/109/4/1236/mymavitur%20(1).jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Yassıca Adaları</h3>
              Fethiye ve Göcek’in komşu oldukları Fethiye Körfezi’nin adeta simgesi olmuş bir adalar topluluğu Yassıca Adaları ya da bilinen diğer adı ile Yassıcalar. İrili ufaklı birçok adadan oluşan Yassıca Adaları korunaklı yapısı ve doğal güzelliği ile günübirlik tekne turları ve konaklamalı mavi yolculuk turları için biçilmiş kaftan. Fethiye Yassıcalar’da ki bazı adalar o kadar küçük ki eski denizciler tümüne birden tek isim vermiştir. Yassıca Ada’sı Ölüdeniz Kumburnu Plajı’na benzemesi, uç kısmında çocuklar ve yüzme bilmeyenler için doğal bir havuzu olması ile dünya çapında ün kazanmıştır. Doğal havuzda gönül rahatlığı ile çocuklarınızın yüzmelerine izin verebilirsiniz. Ayrıca adadan adaya yüzme merakı olanlar içinde Yassıcalar çok uygun. Yaklaşık yarım saatlik yüzme Yassıca Adaları’ndan bir kaçını dolaşabilirsiniz. Üzerinde hiçbir yerleşimin olmadığı, mavi ile yeşilin buluştuğu bu şirin Fethiye adası, tatiliniz süresince görülmesi gereken yerlerden biri. 
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://pbs.twimg.com/media/D707rJRWsAAI9sq.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/1c/b9/f8/5e/fethiye-gocek-yassicalar.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://i.pinimg.com/originals/e6/12/bb/e612bbc01e2197ffc984249b813b2f24.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://kiralikyatgocek.com/wp-content/uploads/2020/01/Yass%C4%B1ca-Adalar-800x600.jpg" style={{height:"274px" ,width:"250px"}}
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
