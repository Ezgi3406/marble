import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Kumbet extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://www.yaz-tatili.com/wp-content/uploads/kumbet-yaylasi-giresun-850x478.jpg.webp"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Kumbet</h3>
              Giresun'a yaklaşık 60 km. mesafede bulunan Kümbet Yaylası,çevredeki bazı yaylalar ve Aymaç Mevkiinden oluşmaktadır.Merkeze adını veren Kümbet Yaylası Turizm Merkezi olup,Giresun'un en popüler yaylalarındandır. Kümbet Yaylasına Giresun -Dereli- Şebinkarahisar yolu üzerinden iki şekilde ulaşmak mümkündür. Dereli'den sonra Güdül - Yüceköy üzerinden gidildiğinde 60 km.lik asfalt yol ile ulaşılır. Şebinkarahisar yolundan devam edilince İkisu - Uzundere üzerinden de ulaşmak mümkündür.Kümbet Yaylasında elektrik,su ve telefon mevcut olup,ilkokul ve sağlık ocağı hizmet vermektedir. Yayla çevresi gür ormanlarla çevrili çiçeklerle dolu çayırlarla kaplı geniş bir alana yayılmıştır.Yaylada bakkal, kasap, fırın, manav, kır kahveleri bulunmaktadır. Günübirlik gelenler için bol miktarda kuzu eti ızgara ,ocak başında kendin pişir kendin ye şeklinde takdim edilmektedir.Yaylanın önemli mesire yeri olan Aymaç Mevkii yayla merkezinin yaklaşık 2 km. kuzeybatısındadır.Kümbet Yayla Şenliklerinin kutlandığı bu mevkii doğal güzellikler bakımından zengin çevre manzarasına hakim bir tepedir. Yayla çimenlerle kaplı ve orman içine serpilmiş düzlüklerden oluşmaktadır.Giresun'da genellikle temmuz ayının ikinci yansında yayla şenlikleri tertiplenir.O günçevredeki diğer yaylalardan ve obalarda bulunan aileler ile il ve ilçeler ile diğer illerden gelen halk şenliklerin yapılacağı yaylada büyük kalabalıklar oluştururlar Bu şenliklerde yenir, içilir, oyunlar oynanır, yarışmalar tertiplenir, hayvansal ürünler pazarlanır. Tertiplenen bu şenliklerin en ünlüsü temmuz ayının ikinci haftasına rastlayan Cumartesi ve Pazar günleri kutlanan Kümbet Yayla Şenlikleridir. Aymaç Mevkii:Aymaç mevkii Kümbet Yayla Merkezinin yaklaşık 2 km. kuzeybatısındadır.Her sene temmuz ayının ikinci Pazar gününe rastlayan Kümbet Yayla Şenliklerinin kutlandığı Aymaç mevkii doğal güzellikler yönünden zengin,çevre manzarasına hakim bir tepedir.Yol boyunca ladin ormanları ve kır çiçekleri etrafı süsleyerek güzel bir peyzaj oluşturmaktadır. Salon Çayırı Piknik Alanı: Giresun'dan Kümbet Yaylasına gelişte ,yayla merkezine yaklaşık 1 km. mesafede Orman Bölge Müdürlüğünce tesis edilmiş olan Salon Çayırı Piknik Alanına ulaşılır. Sık orman dokusu içinde günübirlik kullanım talebine hizmet verecek şekilde düzenli ve teçhizatlıdır.Su,wc gibi altyapının yanı sıra piknik masaları,et pişirme ocakları yağmur barınakları ve her biri 5'er yataklı 3 adet dinlenme evi bulunmaktadır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.yaz-tatili.com/wp-content/uploads/birun-kumbet-yaylasi.jpg.webp" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.yaz-tatili.com/wp-content/uploads/giresun-pasa-konagi-yaylasi-850x566.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.yaz-tatili.com/wp-content/uploads/pasakonagi-yaylasi.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.yaz-tatili.com/wp-content/uploads/Sis-Da%C4%9F%C4%B1-Yaylas%C4%B1-2.jpg" style={{height:"274px" ,width:"250px"}}
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
