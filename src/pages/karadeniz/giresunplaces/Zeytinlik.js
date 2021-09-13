import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Zeytinlik extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://cdn.goadventureturkey.com/giresun/1-zeytinlik-district.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Zeytinlik</h3>
              Giresun il merkezinde yer alan Zeytinlik Semti, 3. derece kentsel sit alanıdır. Yaklaşık iki asır önce Avrupa’dan ithal edilen malzemelerle inşa edilen, Rumlar ile Türkler'in yıllarca yaşadığı, türkülere konu olan Zeytinlik Evleri, ziyaretçilerine tarihin içerisinde yolculuk yaptırır. Trabzon Kültür Varlıklarını Koruma Bölge Kurulu Müdürlüğü tarafından 17.05.1991 tarih ve 1029 sayılı karar ile tescillenmiştir. 
              Günümüzde bu bölgede 80 adet tescilli ev yer almaktadır. Semt o dönemlerde  “Gogora Mahallesi” olarak anılmaktadır. Tarihte Rumlar'ın ikamet ettiği, Giresun yerleşiminin tam ortasında yer alan Giresun Evleri, kendine özgü bahçesi, kapıları, pencereleri, iç dizaynı gibi mimari özellikleriyle ön plana çıkmaktadır. Avrupa’ya fındık götüren gemilerin getirdiği ithal malzemelerle inşa edilen evlerde, bu günün sobalarından çok farklı peçi (Rus) sobası, Marsilya kiremitleri dikkat çekmektedir. Kitabelere göre en eski 1840’lı yıllarda inşa edilmiş olan evler, hiçbiri diğerinin ışığına, manzarasına hava sirkülasyonuna etki etmeyecek şekilde konumlandırılmıştır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdnuploads.aa.com.tr/uploads/Contents/2019/10/22/thumbs_b_c_e7fffa4e046f8591be72cd5a3afcf784.jpg?v=130644" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.aa.com.tr/uploads/userFiles/61711173-5fde-465e-9a7e-6afe03048c5b/2019%2Fekim%2Fzeytinlik_1.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://admin.aa.com.tr/uploads/userFiles/61711173-5fde-465e-9a7e-6afe03048c5b/2019%2Fekim%2Fzeytinlik_2.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/contents/images/20190502144756931_uk_giresun188.jpg" style={{height:"274px" ,width:"250px"}}
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
