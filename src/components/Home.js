import React, { Component } from 'react'
//import { Link } from 'react-router-dom';
import { Jumbotron,Row, Col, Image,Button, Carousel,Container  } from 'react-bootstrap';
import './Home.css';
//import Header from '../components/Header/Header';
import Navbar from './Navbar'
import Submenu from './Submenu'
import { Link } from 'react-router-dom';

export default class Home extends Component {
  render() {
    return (
     
      <Container >
         {/*<Header/>*/}
         <Navbar/>
        <Submenu/>
         
        <Jumbotron className='pt-70'>
        <Carousel className='m-auto w-75'>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://2.bp.blogspot.com/-__zWIxEzmiE/T9XENbGJuPI/AAAAAAAAB_k/uLonNXbpons/s640/Full+Hd+Duvarka%C4%9F%C4%B1tlar%C4%B1+1+(49).jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://www.virahaber.com/d/gallery/359_2.jpg"
      alt=""
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://1.bp.blogspot.com/-FfxY7y6eJJg/T9XDznuKkJI/AAAAAAAAB_c/a_uPxW2jBiA/s640/Full+Hd+Duvarka%C4%9F%C4%B1tlar%C4%B1+1+(421).jpg"
      alt=""
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</Jumbotron>

       
<Row className="show-Container  text-center">
          <Col xs={12} sm={3} className="person-wrapper">
            <Image
              src="https://cdn.goadventureturkey.com/goturkey/9-istanbul.jpg"
              square
              className="profile-pic"
            />
            <p>
              Modern ve Geleneksel birleşimi ile İstanbul ziyaretçilerini
              büyüleyen şehirdir:Müzeleri,kiliseler,saraylar,ulu camiler,
              çarşılar ve doğal güzellikler saymakla bitmez.Gün batımında
              Boğazın batı kıyılarında,karşı kıyıya yansıyan akşam ışığını
              izlerken İstanbul'un dünyanın en muhteşem şehirlerinden biri
              olduğunu anlayabilirsiniz.
            </p>
            <p>
            <Link to="/istanbul">
                    <Button bsStyle="primary">More</Button></Link>
                    </p>

          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image
              src="https://cdn.goadventureturkey.com/goturkey/antalya-destination-kart-1.jpg"
              square
              className="profile-pic"
            />

            <p>
              Antalya deniz, güneş, tarih ve doğanın uyum içinde buluştuğu bir
              şehirdir. Antik kentler, deniz, güneş, kumsal, orman... hepsi bu
              bütünlüğün parçalarıdır. Perge olarak adlandırılan Antik Kent, St.
              Paul'un önemli duraklarından biri ve Pamfilya uygarlığına ait
              önemli liman kentidir.
            </p>
            <Button bsStyle="primary">More</Button>

          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image
              src="https://cdn.goadventureturkey.com/goturkey/nevsehir.jpg"
              square
              className="profile-pic"
            />

            <p>
              Nevşehir, tüm güzellikleri ve tarihiyle Kapadokya'nın büyük bir
              bölümünü kaplar. Göreme Açık Hava Müzesi 1985 yılından beri UNESCO
              Dünya Mirası Listesinde yer almaktadır. Göreme Açık Hava Müzesi,
              dünyaca ünlü peri bacalarının yanı sıra Karanlık ve Tokalı
              kiliselerinde tarih severler için önemli bir yerdir.
            </p>
            <Button bsStyle="primary">More</Button>

          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image
              src="https://cdn.goadventureturkey.com/goturkey/5-mugla.jpg"
              square
              className="profile-pic"
            />

            <p>
              Büyüleyici denizi, kumu ve güneşinin yanı sıra; Muğla, çeşitli
              olanaklar sunarak zengin bir potansiyele sahiptir. Su sporları,
              bisiklet ve trekking, yamaç paraşütü, yeşil turizm, mağaralar,
              sağlık ve kültür turizmi gibi turizm türleri kentte alternatif
              turizm çeşitliliğini oluşturmaktadır.{" "}
            </p>
            <Button bsStyle="primary">More</Button>

          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image
              src="https://cdn.goadventureturkey.com/goturkey/2-mersin.jpg"
              square
              className="profile-pic"
            />
            {/*<h3>Adana</h3>*/}
            <p>
              Tarih boyunca farklı medeniyetlerin buluşma noktası olan Mersin'de
              dünyanın en önemli tarihi mekanlarından ve kültürel cazibe
              merkezlerinden bazılarını bulmak şaşırtıcı değil. Alahan
              Manastırı, St. Paul Anıt Müzesi, Mamure Kalesi ve Korykos Antik
              Kenti (Kız Kalesi) gibi bazıları UNESCO Dünya Mirası Geçici
              Listesi'nde yer almaktadır.
            </p>
            <Button bsStyle="primary">More</Button>

          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image
              src="https://cdn.goadventureturkey.com/goturkey/6-izmir.jpg"
              square
              className="profile-pic"
            />

            <p>
              "Güzel İzmir" olarak anılan şehir;yatlar,gemiler ve vapurlarla
              süslenmiş büyük bir koyu çevrelemektedir. Kıyı şeridi,sahil
              boyunca uzanan deniz mahsulü restoranları,kafeleri, Ege Mutfağı
              yemekleri sunan restoranları ve eğlence tesisleri ile
              tanınırken;iç kesimleri,sayısız antik uygarlığın hikayelerini
              anlatan kalıntılar ve anıtlar açısından zengindir.
            </p>
            <Button bsStyle="primary">More</Button>

          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image
              src="https://cdn.goadventureturkey.com/goturkey/alacati-cesme-urla.jpg"
              square
              className="profile-pic"
            />

            <p>
              Çeşme,berrak suları,şifalı termal suları,tarihi eserleri,canlı
              gece hayatı ve güzel plajları ile İzmir’in en popüler turistik
              bölgelerinden biri. Alaçatı, Ilıca ve Urla ilçeleri ise Çeşme’nin
              önemli tatil beldeleri arasında.Yarımadanın eşsiz ve unutulmaz
              tatil alternatifleri sunarken Alaçatı bölgesi ünlü bir rüzgâr
              sörfü destinasyonu olarak öne çıkıyor.
            </p>
            <Button bsStyle="primary">More</Button>

          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image
              src="https://cdn.goadventureturkey.com/goturkey/2-marmaris.jpg"
              square
              className="profile-pic"
            />

            <p>
              Akdeniz'in Ege ile buluştuğu, yemyeşil ormanların denizin meşhur
              turkuaz sularıyla bir araya geldiği ve modern kültürün eski
              uygarlıklarla kaynaştığı bir eşsiz bir destinasyondur,Marmaris…
              Marmaris, harika bir atmosferde doğal güzellikleri ve bölgenin
              zengin tarihini keşfedip dinlenmek isteyenlerin uğrak noktasıdır.
            </p>
            <Button bsStyle="primary">More</Button>

          </Col>
          
        </Row>
       
        
       

      </Container >
      
    )
  }
}






