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
              src="https://www.yatliman.com/wp-content/uploads/2020/10/D-Marin-Didim-5-850x570.jpg"
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
          <h3>Didim Marina</h3>
          2009 yılında hizmete açıldı. Didim’in içinde Çamlık Mevkiinde bulunur.
          Marinaya denizden yaklaşırken mendireği ve fenerleri görülür. Marina,
          karadan Bodrum Milas Uluslararası havaalanına 90 km, İzmir Havaalanına
          145 km mesafededir. Didim’in içinde bir marina olduğu için Didim’in
          tüm imkanlarından yararlanır. Tarihi Apollon tapınağı da Didim
          içindedir. 576 kara bağlama kapasitesine 80.000 m2 lik açık ve kapalı
          kara park(600 yat) alanlarına sahiptir. Gümrük işlemleri marinada
          yapılır. Döviz bozulur. Dalgıçlık hizmetlerinin yanında, dalış tüpü
          doldurmak ta mümkündür. Gayet rahat, yeni ve düzenli bu marinada su,
          elektrik( 220/380 Volt-50 Hz-16-32-63-125 Amp), özürlü konuklara da
          servis veren bir çok duş ve wc ler marinanın her noktasında bulunur.
          Pontonlarda TV yayınlarını alabileceğiniz bağlantılar vardır.
          Gözetleme kuleleri, güvenlik kameraları ve geniş bir güvenlik ekibiyle
          marinanın güvenliği sağlanır. Müşterileri için, çeşitli ebatlarda
          malzeme depoları bulunmaktadır. Araçlar için kapalı ve açık
          otoparkları vardır. Çekek alanında 2 adet travel Lift(400-75 ton) ve
          40 tonluk trailer bulunur. Çekek alanında imkanlar kısmında
          bulacağınız bir çok teknik atölye ve mağaza vardır. İlk yardım
          merkezi, doktoru ve ambulansı gereğinde yatçılara hizmet verir.
          Marinanın yangın ikaz ve söndürme sistemi de bulunmaktadır. İçinde
          mini marketinde bulunduğu akaryakıt istasyonunda gümrüklü veya
          gümrüksüz yakıt almak mümkündür. Liman içi su sirkülasyon sistemi ile
          tekneleriniz temiz suyun içinde kalır. Atık su, atık yağ, sintine suyu
          ve katı atık toplama sistemleri mevcuttur. Marinanın yat kulübü, yüzme
          havuzu, çeşitli restoran bar ve kafeleri bulunmaktadır. Ayrıca,
          etkinlikler için amfi-tiyatro, tenis kortları, plaj voleybol alanları,
          fitness merkezi, sauna ve çocuk oyun salonları da vardır.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/red-cruises-yacht-picture-id578304740?k=20&m=578304740&s=612x612&w=0&h=tdeBnik-iqSOiRP_XzCCJMC2I6pKMMiz2yoKmJSOPwU="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/aerial-view-of-altinkum-marina-at-mugla-turkey-picture-id537665601?k=20&m=537665601&s=612x612&w=0&h=IouIKgj2IVIvVCCLDuyXx_W7ANLqRbHPUVoGOCuk2VE="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/boats-in-akbuk-turkey-picture-id578306902?k=20&m=578306902&s=612x612&w=0&h=JHZQe-GrUm5ERnnWqoSNivfURVUvg1rVAf3Wmob6hGo="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/aegean-coast-recreaiton-area-and-beach-picture-id1281187519?k=20&m=1281187519&s=612x612&w=0&h=qWc7AvWwwDChi1_hIya3Lff87ZoupGkoX6KQdyVVn9g="
                style={{ height: "274px", width: "250px" }}
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
