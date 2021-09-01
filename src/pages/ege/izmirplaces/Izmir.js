import React, { Component } from "react";
import { Container, Col, Image, Button, Row } from "react-bootstrap";

import { Link } from "react-router-dom";
import "../../../pages/pages.css";
export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <div classname="video-wrapper">
            <video
              classname="video-target"
              autoPlay
              style={{
                filter: "contrast(1.04) brightness(0.91)",
                width: "1350px",
                height: "400px",
                "margin-top": "1px",
              }}
              preload="none"
              playsInline
              muted
              loop
              data-poster
            >
              <source
                src="https://cdn.goadventureturkey.com/izmir/izmir-pc.mp4"
                type="video/mp4"
              />
            </video>
            {/* <Image src="/assets/img/services.jpg" /> */}

            <h2 className="heading">İZMİR</h2>
            {/* <h5 className="sub-heading">
            With us you’ll find a perfect destination in Izmir.
          </h5> */}
          </div>
        </div>
        <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Alacati">
                <Image
                  src="http://localhost:3000/assets/img/places/alacatı2.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-plane-departure fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Çeşme Alaçatı dinlendirici bir tatil yapmak veya bir tatlı
                  huzur almak istiyorsanız gelebileceğiniz bir yerdir. Küçük ve
                  sevimli Ege kasabalarını seviyorsanız mutlaka Alaçatı’yı
                  görmelisiniz. Eski Rum mimarisini yansıtan özellikleriyle
                  cumbalı taş evleri görünce etkilenmemeniz mümkün değildir.
                  Kendinizi birdenbire eski zamanların huzurlu ortamında
                  bulursunuz.
                </p>

                <p>
                  <Link to="/Alacati">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Efes">
                <Image
                  src="http://localhost:3000/assets/img/places/ephesus1.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-ship fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Asırlar boyu üstün şehir planlama örneği oluşuyla, büyük öneme
                  sahip bir liman kenti olmanın getirdiği ticaret merkezi
                  özelliğiyle, binlerce yıl çok zengin kültüre sahip
                  uygarlıklara ev sahipliği yapmasının kaçınılmaz sonucu olarak
                  bir kültürler beşiği oluşuyla, Hristiyanlığın Hac merkezi
                  olarak kabul görülmesi ve asırlardır bir dini merkez olma
                  özelliğiyle; Efes tarihin önemli bir parçasıdır
                </p>
                <p>
                  <Link to="/Efes">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Kemeralti">
                <Image
                  src="http://localhost:3000/assets/img/places/kemeralti-bazaar.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-hotel fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Mezarlıkbaşı semtinden Konak Meydanı’na kadar uzanan bölgeyi
                  içine alan tarihi bir çarşıdır Kemeraltı. Çarşının bugün ana
                  caddesinin çizdiği geniş kavis, caddenin geçen yüzyıllarda var
                  olan iç limanın etrafını dolaşmış olmasındandır. Liman,
                  zamanla ağzına doğru dolmaya başladığından, yeni yerleşim ve
                  ticaret sahaları açılmış ve buralar yeni binalarla
                  değerlendirilmiştir.
                </p>
                <p>
                  <Link to="/Kemeralti">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Link to="/Kordon">
                <Image
                  src="http://localhost:3000/assets/img/places/kordon1.jpg"
                  square
                  className="profile-pic"
                />
              </Link>
              <>
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Kordon, Alsancak’ın en keyifli noktası. İzmir’de iş çıkışı
                  saatinde yapılacak en güzel şey, yiyeceğinizi, içeceğinizi
                  kapıp Kordon boyunca uzanan çimlerde yerinizi alıp, günü
                  batırmak. Özellikle de aylardan bahar aylarıysa, bu canlı ama
                  aynı zamanda da dingin ortamın, İzmir’in limonata kıvamındaki
                  havasının keyfine doyum olmuyor. Kordon boyu aynı zamanda sıra
                  sıra balıkçılarla dolu.
                </p>
                <p>
                  <Link to="/Kordon">
                    <Button bsStyle="primary">More</Button>
                  </Link>
                </p>
              </>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
