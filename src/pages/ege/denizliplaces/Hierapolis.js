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
              src="http://localhost:3000/assets/img/places/hierapolis-pamukkale.jpg"
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
          <h3>Hierapolis Antik Kenti</h3>
          Pamukkale Travertenleri'nin hemen yanında tüm görkemiyle ayakta duran
          Pamukkale Hierapolis Antik Kenti'nin kalıntılarının büyük bölümü de bu
          dönemden. Eşi bulunmaz güzellikteki travertenler ile birlikte bu
          kalıntılar UNESCO Dünya Kültürel ve Doğal Miras Listesi’nde yer
          alıyor. Pamukkale’nin hemen ilk görüşte sizi büyüleyeceğine eminiz. 2
          bin yıl öncesinde de Bergama Krallığı bu çekiciliğe karşı koyamamış ve
          travertenlerin yanına Hierapolis Kenti’ni inşa etmiştir. Bu dönemde
          Hierapolis bir termal sağlık merkezi gibi görev yapmış ve şifalı
          olduğuna inanılan kaynakları binlerce yıl boyunca Anadolu’nun farklı
          yerlerinden gelip sağlık ve güzellik arayan kişiler tarafından ziyaret
          edilmiştir. Günümüzde de güzellik ve sağlık arayışı içinde termal
          havuzları ziyaret edilmeye devam ediyor. Siz de binlerce yıl
          öncesindeki antik dünyanın insanlarının yüzdüğü sulara girebilir ve
          travertenlerin muhteşem manzarasını izleyebilirsiniz. Ancak oluşumu
          binlerce yıl alan bu doğal güzellik oldukça hassas. O yüzden yalnızca
          belli kesimlerinde dolaşılabiliyor ve sularına girilebiliyor.
          Pamukkale’de daha uzun süre kalmak ve şifalı sularından yararlanmak
          isteyenler ise antik kentin ve travertenlerin yakınında yer alan
          termal tesislerde hem konaklayabilir hem de masaj, termal sular ve
          çamur banyolarının keyfini yaşayabilirler. Hierapolis Antik Kenti
          oldukça iyi biçimde korunarak günümüze ulaşmayı başarmıştır. Buranın
          bir termal merkez olduğu zamanlarda çok sık ziyaret edildiğini
          kesinlikle söyleyebileceğimiz Roma Hamamı, günümüzde arkeoloji müzesi
          olarak kullanılıyor. Hierapolis ve yakın çevresindeki antik kent
          kazılarında ortaya çıkarılan heykeller ve diğer kalıntıları burada
          görebilirsiniz. Antik tiyatro, tapınaklar, anıtsal çeşmeler, mezarlar,
          agora, gymnasium gibi yapılar da size 2 bin yıl öncesinin kentinde
          olduğunu hissettirecek derecede iyi durumda. Özellikle Roma Dönemi’nde
          cehennemin girişi olduğuna inanılan Ploutonium hakkında anlatılan
          hikâyeler ilginizi çekecektir. Hierapolis, Hristiyanlık açısından da
          kutsal bir yerleşim. Bu kutsallığın en önemli nedeni İsa’nın 12
          havarisinden birisi olan Phillippus’un burada öldürülmüş olması ve
          mezarının da burada bulunması. 5'inci yüzyılda saray mimarlarınca
          yapılan, azizin mezarının yer aldığı Martyrium, Hristiyanlığın kutsal
          yapılarından. İçinde vaftiz teknesi ve piskopos ayin mekânlarının yer
          aldığı 6'ncı yüzyıl katedrali ile 7'nci yüzyıla tarihlendirilen
          Direkli Kilise diğer önemli Hristiyan yapıları. Daha küçük pek çok
          kilise de kentin çeşitli yerlerine dağılmış durumda. Tüm bu yapılar
          Hierapolis’in Bizans Dönemi’nde önemli bir dinsel merkez olduğunu
          kanıtlıyor.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/remains-of-the-ancient-site-of-hierapolis-in-pamukkale-turkey-picture-id1313711614?k=20&m=1313711614&s=612x612&w=0&h=OtwkESDlDAFQ_CHZV_okQE_-cg_5Bt6G4dhgMqHf3p4="
                style={{ height: "274px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/1-hierapolis-ancient-city-4.jpg"
                style={{ height: "274px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/3-liste-hierapolis-ancient-city-2.jpg"
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://media.istockphoto.com/photos/hierapolis-theater-in-turkey-picture-id589135626?k=20&m=589135626&s=612x612&w=0&h=0LCa7ExOGa3o_40bGRh625LeH23NwKkLvph6uWVYTcM="
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
