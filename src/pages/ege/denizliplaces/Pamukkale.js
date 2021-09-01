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
              src="https://seyahatdergisi.com/wp-content/uploads/2015/05/Pamukkale-Travertenleri-Resimleri.jpg"
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
          <h3>Pamukkale Travertenleri</h3>
          Eşsiz güzellik, sanki masal diyarında pamuktan yapılmış bir kale ve
          aynı zamanda da bir şifa kaynağı.Dünya Mirası Listesi’nde yer alan
          Pamukkale travertenleri, oluşumunun ve kaynak sularının akmaya devam
          edişinin tarihi araştırmacılara göre 14 bin yıl öncesine kadar
          dayanıyor. Travertenler bölgede bulunan kayaların çökmesiyle
          oluşmuştur. Sıcak suların bölgedeki kayalara akması ve kayalarında
          çökmesiyle oluşmuştur.Sularda kalsiyum ile karbonhidrat bulunması
          sebebiyle sıcak suların kayaların üzerine çıkması ve suyun içinde yer
          alan karbondioksit ve karbonmonoksit uçar.Uçan gazlar sonrası
          travertenler birikir ve beyaz bir görünüm alır. Travertenler üzerinde
          bir çok su kaynağı ve büyüklü küçüklü havuzlar da yer alıyor ve
          buralara girmek serbest. Ancak bir çok değerimize sahip çıkamadığımız
          gibi yıllar önce alınan yanlış kararlarla birlikte, travertenler
          etrafında imara izin verilmesiyle kararmaya başlayan travertenler için
          artık geç de olsa önlem alınmış durumda ve buraya ayakkabı ile girmek
          yasak. Oteller ve yollar da geç de olsa kaldırılmış durumda.Eğer
          gidecek olursanız da sizi fotoğraflardaki karelerden çok daha
          etkileyici ufak bir masal diyarı bekliyor.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/pamukkale-turkey-at-sunset-picture-id171574206?k=20&m=171574206&s=612x612&w=0&h=sw95QQwWtDvtRuwn6GAp9fIRV6cV4TXi3l2QqwA3UQ0="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/pamukkale-picture-id468826954?k=20&m=468826954&s=612x612&w=0&h=kop4A9WTpCMvH-Ttpg033tp4lWIQS3nxqRiPoAInTyw="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/carbonate-travertines-the-natural-pools-during-sunset-pamukkale-picture-id539479634?k=20&m=539479634&s=612x612&w=0&h=Bxm1WJAgddtY6wttepV4vm_TfathwyaFAtxMJrr5HOQ="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/travertine-pools-at-ancient-hierapolis-picture-id474218629?k=20&m=474218629&s=612x612&w=0&h=Y7LO1Tkp-S83kIyL08GZ4MszhmnXFosjEoLJXwjsZT4="
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
