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
              src="http://localhost:3000/assets/img/places/iztuzu-beach.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>İztuzu</h3>
              İztuzu sahili dev kaplumbağalar Caretta Carettalar ile dünyaca ünlendi. Kumsalın bir ucunda İstuzu Plajı tesisleri, öteki ucunda da Dalyanağzı Günübirlik Plaj tesisleri yer alıyor. Kumsal kilometrelerce uzanıyor. İstuzu plajına Dalyan’dan karayoluyla ulaşılıyor. Dalyan’dan çıkan asfalt yol deltayı, Sülüngür kıyısını izleyerek köylerden geçerek iniyor plaja. Plaja yaklaştıkça yükselen yol üzerinde fotoğraf çekmeye uygun açıklıklar oluşuyor. Tüm deltayı ve kumsalı içine alan bir panorama bu. Dalyan ağzı plajına ise Dalyan’dan kalkan dolmuş tekneler götürüyor. Caretta caretta türü dev kaplumbağalar, yumurtlamaya İstuzu kumsalına geliyorlar. Kumsalın gerisinde kalan İstuzu ve Dalyanağzı Plai tesislerinde Kabinler ve soğuk birşeyler içebileceğiniz büfeler var. Şemsiye de kiralanabiliyor. Ancak şemsiyelerin yumurtalara zarar vermemesi için önlem de alınıyor. İztuzu Dalyan ağzı Plajına Kanaldan da, sürekli sefer yapan motorlarla gidebilirsiniz. Göl suyunu denize bağlayan küçük bir doğal kanal kumsalı boydan boya bölüyor. Denize girip, kumsalda güneşlendikten sonra öbür yanda gölün tatlı suyuyla duş yapabilirsiniz. Hem tuzlu, hem de tatlı suda yüzebilme olanağı büyük keyif veriyor insana. İztuzu Caretta Caretta'ların ötesinde bir doğa harikası. Bulmaca labirentlerinde gördüğünüz türden müthiş bir görünümü var. Sanki denize uzanan 5400 metrelik bir kumdan ok dolana dolana gidiyor sazlıklar eşliğinde. Bu arada tekrar hatırlatalım:. Dalyan kanallarında hemen her mevsim boyu 1 metreyi bulan kaplumbağalar görebilirsiniz. Nil Kaplumbağaları olarak bilinen bu türün Caretta Caretta’larla ilgisi yok. Ayakları tırnaklıdır ve balıkla beslenirler.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/izuzu6.jpg"style={{height:"274px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/iztuzu4.jpg"style={{height:"274px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/iztuzu7.jpg" style={{height:"274px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/iztuzu1.jpeg" style={{height:"274px" }}
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
