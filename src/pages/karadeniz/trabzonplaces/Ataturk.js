import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Ataturk extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://imgrosetta.mynet.com.tr/file/12643382/12643382-728xauto.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Ataturk Kosku</h3>
              Doğasıyla cennetten bir köşe olan Trabzon, geçmişi asırlara dayanan bir tarihe sahip. Birçok medeniyete ev sahipliği yapan şehir, topraklarında bu medeniyetlerin derin izlerini taşıyor. Şehir Mustafa Kemal Atatürk'ün onurlandırdığı bir köşke de sahip. Bu köşk Soğuksu çam ormanları arasında bulunan Trabzon Atatürk Köşkü.
              Trabzon Atatürk Köşkü her noktasıyla hayranlık uyandırıyor. Binanın dış mimarisi ve iç dizaynı harikulade güzellikte. Trabzon merkez gezilecek yerler listesinin en başında gelen Atatürk Köşkü kesinlikle görülmesi gereken bir yer.
              Atatürk Köşkü 1890 yılında Kostantin Kabayanidis tarafından yazlık olarak inşa edilmiş. Avrupa ve Batı Rönesans mimarisinin etkilerini taşıyan binada büyük ve gösterişli Avrupa'ya özgü simgeler kullanılmış. Köşkün dış cephesi taş işçiliğinin güzelliğini göstermekte olup, iç cephesi Bağdadî tekniğinde dizayn edilmiş.


Gazi Mustafa Kemal Atatürk, 15-17 Eylül 1924 tarihlerinde Trabzon’a ilk kez geldiğinde bu gün Trabzon Müzesi (Kostaki Konağı) olarak düzenlenen konakta ağırlanmış. Daha sonra Soğuksu semtine yaptığı gezintide bu köşkü görmüş ve çok beğenmiş. Bina 1930 yılında Trabzon Özel İdaresince tescil edilerek İl Daimi Encümeninin kararıyla Cumhurbaşkanı Gazi Mustafa Kemal Paşa Hazretlerine “temlik” edilmiş. Daha sonra Trabzon’dan oluşturulan bir heyet Ankara’ya giderek köşkün tapusunu ve anahtarını Atatürk’e teslim etmiş. Atatürk, 10–12 Haziran 1937 tarihlerinde üçüncü ve son kez Trabzon’u onurlandırdığında ise, iki gece bu köşkte kalmış.

trabzon merkezde gezilecek yerler atatürk evi

Atatürk’ün ölümünden sonra Köşk, Atatürk’ün yasal varisi, kardeşi Makbule Boysan’a intikal ettirilmiş. Köşkü müzeye dönüştürmek amacıyla Trabzon Belediyesi binayı satın almış ve bina 1943 yılından itibaren müzeye dönüştürülerek hizmete açılmış.

Müzede, 19. yy sonu ile 20. yy ait, mobilyalar, porselenler, halılar vb. ile Atatürk’e ait tablolardan oluşan Etnografik nitelikli 344 adet eser sergileniyor.

            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://imgrosetta.mynet.com.tr/file/12643391/640xauto.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://imgrosetta.mynet.com.tr/file/12643412/640xauto.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/0d/35/b7/6c/icten.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media-cdn.tripadvisor.com/media/photo-s/0d/35/b2/14/icten.jpg" style={{height:"274px" ,width:"250px"}}
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
