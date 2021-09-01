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
              src="http://localhost:3000/assets/img/places/kordonboyu5.jpg"
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
          <h3>Kordon Boyu</h3>
  
 
Kordon Boyu Ege’nin incisi olarak bilinen İzmir’in en meşhur noktalarından birisidir. Bütün İzmir halkının bildiği ve en az bir kere de olsa gittiği bir yerdir. Bunun haricinde çoğu İzmirli için bir nevi buluşma noktası olarak adlandırılır. Kordon Boyu sadece İzmir için ünlü bir yer değildir. Türkiye’nin her yerinde insanların bildiği ismini sıklıkla duyduğu bir yerdir. Kordon İzmir’in Konak ilçesine bağlı Alsancak semtinde bulunur.


İzmir’in en büyük sosyalleşme alanlarından birisi olan Kordon boyunun ise birçok özelliği bulunur. Kordonun en büyük özelliği yeşil ve mavinin yan yana olmasıdır. Geniş bir çim alan hemen yanında ise masmavi deniz ile buraya giden insanlara huzur verir. Çimenlerin bir diğer tarafında ise insanların yine oturup sohbet edebileceği kafeler bulunmaktadır. Kafelerin yanı sıra restoranlarda bulunan caddede Kordonun güzelliğine güzellik katmaktadır.



Kordon, yaz ve bahar aylarında birçok etkinliğe ve konsere de ev sahipliği yapmaktadır. Bu anlamda İzmir belediyesi Kordonun kapladığı yeri olabildiğince verimli kullanmaya çalışıyor. Trafikten ve kargaşadan uzak bir yerde olması sebebiyle de ailelerinde zaman geçirmek için tercih ettiği bir yerdir. Hem alan bakımından da ailecek yapılabilecek birçok oyuna veya aktiviteye oldukça rahat karşılayabilir. Buraya Gelen insanların tek düşüncesi oyun oynamak veya eğlenmek olmayabiliyor. Dinlenmek huzurlu bir yürüyüş yapmak ya da sohbet etmek içinde gayet elverişli bir yerdir.


 
Kordon İzmir için çok önemli bir yer tutmaktadır. Bunun yegane sebebi ise İzmir halkı için buranın sembolik bir yer taşımasıdır. İzmir için gezilecek yerler listesinin başında gelen yerlerden birisi olan Kordon özel bir yere sahiptir. Burada bisiklete binmek yürüyüş yapmak da oldukça popülerdir. Kordon boyu oldukça uzun olduğu için kendini tekrar eden parkların aksine yürüyüş yapan insanların yeni manzaralar görmesine olanak tanıyor. Durum böyle olunca da yürüyüş yapmak isteyen insanlar için yine kordon önemli bir yer haline geliyor.


Kordonun en büyük özelliklerinden birisi ise buraya gelen insanların sadece Kordon ile yetinmeyecek olmasıdır. Etrafında da gezilecek birçok alan bulunmaktadır. Kordon Boyunda bulunan Atatürk Evi hem İzmirliler tarafından hem de buraya tatile gelen turistler tarafından yoğun ilgi görmektedir. Üstünden geçen bunca zamana rağmen iyi korunmuş olan ev müze haline getirilmiş ve ziyarete açık haldedir. Atatürk evinin yanı sıra yine Kordon boyuna yakın olan Kıbrıs Şehitleri Caddesi ile de ünlüdür. Hem kültürel anlamda hem eğlence anlamında İzmir için önemli bir yere sahip olan caddede hem kültürlenmek hem de eğlenmek mümkün oluyor.


İzmir Kordonun İzmir merkezden uzaklığı ise sadece 10 dakikadır. Bu anlamda Kordonun merkezde olması da büyük bir avantaj oluyor. Kordon boyuna ulaşmak için sadece kara yolu değil denizden de ulaşım sağlanabiliyor. Kordonun içerisinde bir adette liman bulunuyor. Bu sebeple ulaşım kolaylığı da sağlayan kordon insanların buraya rahatça ulaşması için çalışıyor.

İzmir için sembol olan Kordon sadece gezi rehberlerinde değil sosyal medyanın her yerinde ünlü olmayı başarabilmiş bir yerdir. Youtube’da Kordan hakkında çekilmiş onlarca video bulmak mümkün oluyor. Bunun yanı sıra sadece video değil bazı kısa filmlere ya da videolara da ev sahipliği yapıyor. Her açıdan bakıldığında insanların sosyalleşmesi için dizayn edilmiş ve bu anlamda oldukça başarıya ulaşmıştır. Sadece İzmir için değil buraya gelen herkesi havasıyla büyülüyor ve hem mavinin hem de yeşilin insanlara yaşattığı güzel duyguları destekliyor. İzmir’e gelen herkesin görmesi gereken yerlerden birisidir.
        </p>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/kordonboyu7.jpg"
                style={{ height: "274px"}}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/kordonboyu8.jpg"
                style={{ height: "274px", width: "250px" }}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/kordonboyu9.jpg"
                style={{ height: "274px"}}
                square
                className="profile-pic"
              />
              <></>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="http://localhost:3000/assets/img/places/kordonboyu.jpg"
                style={{ height: "274px" }}
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
