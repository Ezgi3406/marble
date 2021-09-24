import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { right } from "@popperjs/core";

export default class GreatMosque extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image"></div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://cdnuploads.aa.com.tr/uploads/Contents/2020/01/12/thumbs_b_c_3c6e2d97ece756531960f41aa157b5c9.jpg"
              style={{
                height: "600px",
                width: "900px",
                padding: "60px",
                marginRight: "10px",
              }}
              square
              className="profile-pic"
            />
          </Col>
        </div>
        <p style={{ padding: "60px" }}>
          <h3>Ephesus</h3>
          Kuruluşu M.Ö. 6000 yıllarına dayanan ve Helenistik dönemden tutunda
          Roma, Bizans (Doğu Roma), Beylikler ve Osmanlı dönemlerine kadar aktif
          yerleşim yeri olarak kullanılan o soylu şehir; Efes. Asırlar boyu
          üstün şehir planlama örneği oluşuyla, büyük öneme sahip bir liman
          kenti olmanın getirdiği ticaret merkezi özelliğiyle, binlerce yıl çok
          zengin kültüre sahip uygarlıklara ev sahipliği yapmasının kaçınılmaz
          sonucu olarak bir kültürler beşiği oluşuyla, Hristiyanlığın Hac
          merkezi olarak kabul görülmesi ve asırlardır bir dini merkez olma
          özelliğiyle; Efes tarihin bir parçası değil tarihin ta kendisi desek
          yanlış olmaz. Efes Antik Kenti MÖ 8600 dönemine basit bir yerleşim
          olarak başlamış. Yüzyıllar içinde büyüyerek döneminin en önemli dünya
          başkentlerinden birisi olmuş. Kurulduğu İzmir’in Selçuk ilçesinin
          Anadolu’nun en verimli topraklarından birisi olması, ticaret
          yollarının buradan geçmesi, ve dünyanın doğusu ve batısını birbirine
          bağlayan bir limana sahip olması sayesinde şehir çok gelişmiş. Altın
          çağını ise MÖ 129’da Roma İmparatorluğu’na bağlandıktan sonra görmüş.
          Asya Eyaleti’nin başkenti olmuş. Bu dönemde (MÖ 2.-1. yüzyıl) Efes
          200.000 kişiyi aşan nüfusu ile bir çağının en büyük metropollerinden
          birine dönüşmüş. Şehirde biriken zenginlik mimariye de yansımış.
          Tekrar ayağa kaldırılarak sergilenen Celsus Kütüphanesi’nin
          ihtişamından ne kadar etkileyici bir şehir olduğunu tahmin etmek
          mümkün. Roma ile yarışır nitelikte olduğu söyleniyor. Şehrin güzelliği
          ile en meşhur yapısı ise, şehir Romalıların eline geçmeden önce, MÖ
          550’de Lidya kralı Creseus tarafından yaptırılan ve dünyanın 7
          harikası arasında yer alan Artemis Tapınağı. Maalesef bugün tapınaktan
          sadece geriye bir kaç parça taş ve sonradan birleşirilmiş bir sütun
          kalmış. Bir Yunan tanrıçası olan Artemis’in Anadolu’nun bereket
          tanrıçası Kibele’nin devamı olduğu, Yunan kültürüne sentezlendiği
          düşünülüyor. Efes pek çok din ve ırktan insana ev sahipliği yapıyordu.
          Hristiyanlık inanışına gore buradaki hoşgörü ortamına güvenen Aziz
          Yuhanna takriben MS. 36 yılında İsa’nın kendisine emanet ettiği annesi
          Meryem’i, İsa’nın Kudüs’te çarmıha gerilişinin ardından güvende olması
          için buraya getiriyor. Bugün Meryem Ana’nın yaşadığı ev dünyanın dört
          bir köşesinden gelen Hristiyanlar tarafından ziyaret edilen bir hac
          noktası. 1304 yılı itibariyle Türk beyliklere geçen Efes’te 98 yıl
          boyunca refah sürse de 1402 yılında Moğol saldırılarında nasibini alır
          ve büyük tahribata uğrar. 1425 yılında ise şehri Osmanlı fetheder. Bu
          noktadan sonra Efes büyük bir hızla önemini yitirir ve 20.yy a
          geldiğimizde Menderes Nehrinin taşıdığı kumlar ovayı genişletmiştir.
          Bir sahil kenti olan Efes artık denize 5km kadar uzaklıkta kalır.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Ephesus_Celsus_Library_Fa%C3%A7ade.jpg/250px-Ephesus_Celsus_Library_Fa%C3%A7ade.jpg"
                style={{ height: "274px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kulturportali.gov.tr/repoKulturPortali/small/PetekIcon/EfesIcon_20180123223842444_20181119112907057.jpg"
                style={{ height: "274px"}}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://i4.hurimg.com/i/hurriyet/75/750x422/5eec7c782269a2048c5ac50b.jpg"
                style={{ height: "274px"}}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://i.milliyet.com.tr/MolaSlider/2017/11/21/fft351_mf25867901.Jpeg"
                 style={{ height: "274px"}}
                square
                className="profile-pic"
              />
              <></>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
