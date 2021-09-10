import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Giresunadasi extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://cdnuploads.aa.com.tr/uploads/Contents/2018/07/09/thumbs_b_c_06115a26c4f4bdabebb3838fb0873ef6.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Giresun Adasi</h3>
              Giresun, gerek bulunduğu coğrafi bölgenin gerekse Ülkemizin doğal ve kültürel varlıkları konusunda potansiyel açıdan önemli kentlerden biridir. Sahip olduğu bu zenginlikte özellikle Giresun Adası ön plana çıkmaktadır. Merkez Gedikkaya Mevkii karşısında kentin 1.6 kilometre açığında, 40 bin metrekare yüzölçümüne ve denizden 30 metre yüksekliğe sahip olan Giresun Adası (eski adı ile Aretias, Khalkeritis), Doğu Karadeniz’de Antik Çağ'da ve Ortaçağ'da yerleşime sahne olmuş tek adasıdır. Mülkiyeti Hazineye ait olan ve birçok açıdan sahiplenmesi gereken evrensel bir değer olarak karşımıza çıkan ada; 2. derece arkeolojik ve doğal sit alanıdır. Ada üzerinde ortaçağdan kalma surlar, 1 adet kilise, 1 adet şapel, 1 adet sarnıç, çok sayıda pithos ve mezar yapıları vardır. Üzerinde kazı çalışmalarına devam eden adanın tarihi, arkeolojik buluntulardan hareketle Milattan Önce 300’lü yıllara kadar inmektedir. Gerek mitolojideki yeri, gerek üzerinde yer alan kültür varlıkları bakımından Doğu Karadeniz’deki üzerinde yerleşim olan tek ada hüviyetindeki Giresun Adası aynı zamanda kuş türlerinin önemli bir üreme ve yaşam alanıdır.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.aa.com.tr/uploads/userFiles/52f7c4d2-852f-4a9e-b343-be9ef8b66754/2018%2F07%2Fgiresun_adasi_2.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.aa.com.tr/uploads/userFiles/52f7c4d2-852f-4a9e-b343-be9ef8b66754/2018%2F07%2Fgiresun_adasi_3.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://i2.wp.com/gezimingo.com/wp-content/uploads/2020/03/Giresun-Adasi-%C2%A9-Fotog%CC%86raf-Tayfun2909-Shutterstock-1536x863.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Giresun_Kalesi.jpg/1280px-Giresun_Kalesi.jpg" style={{height:"274px" ,width:"250px"}}
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
