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
              src="https://aydin.ktb.gov.tr/Resim/55192,t20jpg.png?0"
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
          <h3>Tralleis</h3>
          Tralleis antik kenti Aydın ilinin kuzeyinde, Kestane dağlarının hemen
          güney yamacındaki plato üzerinde yer almaktadır. İl merkezine 1 km.
          uzaklıkta olan kent, argoslular ve Tralleis’liler tarafından
          kurulmuştur. Menderes havzasının verimli toprakları üzerine kurlmuş
          olan bu kent M.Ö.334’te İskender tarafından alınmasından sonra
          Hellenistik krallıklar arasında sık sık el değiştirmiştir. Tralleis’te
          bu gün ayakta kalan tek yapı “Üç Gözler” olarak adlandırılan 2. asırda
          yapılmış olan, antik çağın eğitim, spor ve kültür açısından önde gelen
          yapılarından olan gymnasiuma ait kalıntıdır. Roma dönemine ait bir
          hamam, tiyatro, agora, stadium kentin diğer yapılarındandır. Devam
          eden kazılarla da kentin toprak altında kalmış kısımları ortaya
          çıkarılmaktadır. İlkçağda ürettiği deriler ve kırmızı renkli çanak
          çömlek ile ünlü olan kent, Apollonios ve Tauriskos isimli iki büyük
          yontu ustasını ve Ayasofya’ın mimarlarından Anthemios’u da
          yetiştirmiştir. Heykel sanatının dünyaca ünlü iki heykeli olan Farnese
          Boğazı ve Genç Atlet isimli heykeller de Tralleis’in gün yüzüne çıkan
          harikalarındandır.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/tralleis-ancient-city-aydin-turkey-picture-id1152075269?k=20&m=1152075269&s=612x612&w=0&h=kTP2xdeOuQAwGVITYB0OSBuPobFaqK0BlDjyAcKqbn8="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/tralleis-ancient-city-aydin-turkey-picture-id1213549156?k=20&m=1213549156&s=612x612&w=0&h=vDxIAg-jytru7DvN9ewZ8Pm1UxB0oV_gWAyVyKfr-I0="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/tralleis-corinth-order-columns-picture-id824252026?k=20&m=824252026&s=612x612&w=0&h=aO4fVmp-t4G8o2PnG0aZceRBdzHx2WGBAZJMAy1TOHQ="
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/ruins-of-the-ancient-city-of-patara-turkey-picture-id1213549744?k=20&m=1213549744&s=612x612&w=0&h=TdDFN3Gi3_IoEyFkHBkhUy7H1UxHE7mNXYBXoLuuNNI="
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
