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
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/18/ff/09/b8/1850-hotel-alacati.jpg?w=900&h=-1&s=1"
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
          <h3>Alaçatı</h3>
          Çeşme Alaçatı eğer büyük şehrin hızından ve gürültüsünden sıkıldıysanız ve dinlendirici bir tatil yapmak veya bir tatlı huzur almak istiyorsanız gelebileceğiniz bir yerdir.

Küçük ve sevimli Ege kasabalarını seviyorsanız ve daha önce hiç gitmediyseniz mutlaka Çeşme Alaçatı’yı görmelisiniz. Eski Rum mimarisini yansıtan özellikleriyle cumbalı taş evleri görünce etkilenmemeniz mümkün değildir. Kendinizi birdenbire eski zamanların huzurlu ortamında bulursunuz.

Küçük bahçelerindeki begonviller ve semtin neredeyse tamamında hissedilen lavanta kokusu sizi mesh eder. Alaçatı Kendinizi eski zamanların ya da mahalle kültürü olan kasabaların huzurlu havasının içerisinde bulursunuz. Alaçatı sokaklarını Arnavut kaldırımları süsler. Bu sokaklarda gezmek bile keyif vericidir. Dolayısıyla eğer yolunuz bu kasabaya düşerse ilk yapmanız gereken Arnavut kaldırımlı dar sokaklarda cumbalı evlerin arasında gezmek olmalıdır. Ayrıca bu evlerin pek çoğu pansiyon, butik otel, kafe ve restoran olarak kullanılır.

Alaçatı kasabası genel olarak mavi renge bürünmüştür. İzmir Gezilecek Yerler Çeşme Alaçatı Gezilecek Yerler Mavi renkli tahta sandalyeler pek çok restoran ve kafede tercih edilir. Ayrıca yöreye özgü olan pek çok şey korunmuştur. Alaçatı genel olarak renkli bir karaktere sahip bir kasabadır. Semtin kendine has belirli özellikleri vardır. Mekanlarının dekorasyonunda da yöreye ait ürünler dikkat çeker. Mesela özel işlemeli el yapımı masa örtüleri çoğu yerde kullanılır. Keyifli bir yemek yemek ya da bir şeyler içmek için girebileceğiniz pek çok restoran ve kafe bulunur.


 
Alaçatı kasabasının karakteri kendine özgüdür. Bu kendine özgülük yiyeceklerde de hissedilir. Her Cumartesi kasaba meydanına yakın olan çok geniş bir alanda bir pazar kurulur. Bu pazar da Alaçatı sokakları ve Alaçatı gezilmesi gereken yerler arasındadır. Hem yiyecek hem de satılan tekstil ürünleri yöreye özgüdür. Mesela aklınıza bile gelmeyecek her çeşit sebze ve meyveden organik reçel çeşitleri satan ünlü reçelciler vardır. Öte yandan pazarda satılan pek çok ürün genel olarak çevredeki köylerden gelir. Alaçatı Pazarında yani satılan her şey organik, taze ve sağlıklıdır. Satılan tekstil ürünleri de yöreye özgüdür. Alaçatı halkı olabildiğince rahat ve salaş giyinmeyi sever. Alaçatı pazarında da bu tarz ürünler satın alabilirsiniz. İçinde kendinizi rahat hissedeceğiniz pek çok kıyafet de bulabilirsiniz. Kısacası bu pazar hemen her türlü ihtiyacınızı karşılamak için harika bir yerdir.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://a0.muscache.com/pictures/lombard/MtTemplate-933202-media_library/original/3ba5cabd-d44b-4417-9df6-e56d7ef59536.jpeg"
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://mk0traxplorioco2ayl8.kinstacdn.com/wp-content/uploads/2021/02/2021-02-15_602a76c05a5a9_51677D47-A773-4220-8F40-C26C82A4956D-scaled.jpeg"
                style={{ height: "274px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn2.civitatis.com/turquia/esmirna/galeria/header/alacati.jpg"
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://miro.medium.com/max/1024/0*b5hPsXXdAH9vlXdb.jpg"
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
