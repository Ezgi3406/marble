import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Yedigoller extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://www.izbilir.com/uploads/images/2018/10/bolu-yedigoller-seringol-56122878.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Yedigoller</h3>
              Batı Karadeniz Bölgesi'nde Bolu'nun 42 km. kuzeyinde Zonguldak'ın güneyinde yer alan Milli Parka Ankara–İstanbul karayolunun 152. km'sindeki Yeniçağa ve 190. km'sindeki Bolu'dan kuzeye ayrılan yollarla ulaşılır.
              Kışın Bolu–Yedigöller güzergâhı (karla) kapalı olduğundan ulaşım, Yeniçağa–Mengen–Yazıcık veya Devrek- Yazıcık üzerinden yapılır.
              1642 hektar büyüklüğündeki Yedigöller Havzası, 1965 yılında milli park olarak korumaya alınmıştır. Havza kayan kütlelerin vadilerin önlerini kapatması sonucu oluşan, yüzeysel ve yeraltı akışlarıyla birbirine bağlı, kuzeyden güneye 1500 m. mesafede sıralanmış 7 gölden oluşmuştur. Milli park içindeki "Köyyeri" mevkiinde yeni Bizans dönemine ait bulunan kalıntılardan, eski dönemlerde bölgenin bir yerleşim yeri olduğu anlaşılmaktadır.
              Ortalama 780 m. yükseklikte olan platodaki göllerin en büyüğü Büyükgöl'dür. En derin yeri ise 15 m'dir. Büyükgöl'ün güneydoğusundaki Deringöl, 20 m. uzunluğundaki akan bölümü ile Büyükgöl'e bağlıdır.
              Diğer platodan 100 m. yükseklikteki platonun en geniş gölü Nazlıgöl'dür. Dibinden sızdırdığı bol miktardaki su, gölün kuzeydoğusunda yüzeye çıkarak bir şelalenin oluşmasına sebep olduğundan "Şelale Gölü" adı da verilir. Aynı platoda Sazlıgöl, İncegöl ve Küçükgöl bulunur. Kuzeyden güneye doğru alçalma gösteren bölgede, en yüksek yer 1488 m. ile Eğrikiriş Tepesi, en alçak yer ise 465 m. ile Kirazçatı'dır.
              Yaban hayvanlarından ayı, domuz, kurt, tilki, sansar, sincap, geyik, karaca ve tavşan ile kuşlardan yabani ördek, yabani güvercin ve keklik vardır. Milli Park sahasında 100'ün üzerinde kuş türü tespit edilmiştir.Bu özellikleriyle Yedigöller Milli Parkı tam bir doğa cenneti durumundadır. Her yıl mayıs-eylül dönemlerinde Büyükgöl ve Deringöl'de ücret karşılığı sportif olta balıkçılığı yapılabilmektedir. Göllerde göl alası ve gökkuşağı alabalığı vardır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://foto.haberler.com/haber/2020/12/15/yedigoller-nerede-bolu-yedigoller-nerede-13801382_3254_amp.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.izbilir.com/en/uploads/images/2018/10/bolu-yedigoller-54989347.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.izbilir.com/uploads/images/2018/10/bolu-buyukgol-93971093.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.izbilir.com/uploads/images/2018/10/bolu-yedigoller-seringol-56122878.jpg" style={{height:"274px" ,width:"250px"}}
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
