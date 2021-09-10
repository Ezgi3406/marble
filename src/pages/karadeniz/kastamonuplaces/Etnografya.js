import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Etnografya extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://www.tatilcity.net/wp-content/uploads/2018/12/liva-pasa-konagi-etnografya-muzesi-e1545990543607.jpg.webp"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Etnografya Muzesi</h3>
              Müze binası 1915–1917 tarihleri arasında Mimar Kemalettin tarafından ittihat ve terakki binası olarak inşa edilmiştir.1945 Yılında depo,1952 yılında Arkeoloji ve Etnografya Müzesi olarak hizmete açılmış olup, karma bir müzedir. Kültür ve Tabiat Varlıklarını bulmak, toplamak ve korumakla yükümlüdür.

            2863–3386 sayılı kanunlar gereğince işlem yapılmaktadır.

            Müzenin Arkeoloji, Etnografya Eser Seksiyonları ile Atatürk’ün Kastamonu’ya gezilerine ait eşya ve fotoğrafların teşhir edildiği bir salon ile bir ihtisas kitaplığı bulunmaktadır.

           Müze binasının 1997 yılında onarım ve restorasyonuna başlanmış 2002 yılında 500 Milyarlık ödenek sağlanarak Teşhir salonu ve ek depo binası, Kalorifer sistemi ile modern bir görünüşe sahip olmuş, vitrin aydınlatılması ve çevre düzenlemesi yapılara 14 Haziran 2005 yılında Kültür ve Turizm Bakanı Atilla KOÇ tarafından hizmete açılmıştır. 
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/repoKulturPortali/large/27022013/1f76d7be-eadc-4704-9db4-2c8335dadc67.JPG?format=jpg&quality=50" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://kastamonu.ktb.gov.tr/Resim/54037,clipimage004jpg.png?0"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/repoKulturPortali/large/27022013/0cf3e3be-a557-4e97-a35b-19aae69bdc8c.JPG?format=jpg&quality=50" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/repoKulturPortali/large/27022013/67604997-b79f-4556-ad76-8f23a79f3189.JPG?format=jpg&quality=50" style={{height:"274px" ,width:"250px"}}
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
