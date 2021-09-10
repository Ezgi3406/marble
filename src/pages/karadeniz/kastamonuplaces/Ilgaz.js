import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Ilgaz extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://iadsb.tmgrup.com.tr/0f65f6/0/0/0/0/960/637?u=https://idsb.tmgrup.com.tr/2018/12/15/1544828272588.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Ilgaz Dagi</h3>
              The snow falling in most parts of Anatolia heralds the season of fun and skiing in the top ski resorts. The Mount Ilgaz Ski Center, one of the best ski resorts in Turkey, counts down the days to the inauguration of the official season. However, although the ski center is not officially operating, ski enthusiasts have already begun to climb the mountain and enjoy the slopes.

With beautiful scenic views, Mount Ilgaz, one of the highest mountains in the Black Sea region, is situated between Kastamonu province and Çankırı province, and hosts visitors from around the country, in particular Ankara and Istanbul, as it is close to the biggest cities in Turkey. Situated in the heart of Ilgaz Mountain National Park, covering an area of 1,088 hectares, the ski resort on Mount Ilgaz, with a height of 2,850 meters, has a reputation for natural beauty. In general, foggy air dominates, with a natural structure surrounded by fir trees. Skiers have the opportunity to watch these unparalleled beauties. This ski resort where downsloping is generally slow is mostly preferred by beginner level skiers and those who want to improve their skiing skills. Due to the ideal climate of the region, skiers enjoy a fairly long ski season and excellent powder.

The ski season starts in December and continues until April, offering ski lovers an opportunity to enjoy the Black Sea slopes for a longer period. The ski resort features two tracks with a total length of 2.8 km. The longest track length is 1.5 km. Whether you ski, snowboard or hop on a sled, there is a good chance you will enjoy the Black Sea slopes and its beautiful nature. Speaking to Anadolu Agency (AA), Kastamonu Governor Yaşar Karadeniz said Mount Ilgaz Ski Center is one of the newest but increasingly popular ski resort. Since Ilgaz is easily accessible from the biggest cities in Turkey, Karadeniz said: "Thanks to its location and nature, Mount Ilgaz is the perfect place for winter."
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.kastamonuilkhaber.com/images/haberler/aw563956_02_40601ead6b60840d60f6.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.doyouknowturkey.com/wp-content/uploads/2019/09/bubi-mountain.jpeg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.doyouknowturkey.com/wp-content/uploads/2019/09/Zigana-gu%CC%88mu%CC%88s%CC%A7hane.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://www.doyouknowturkey.com/wp-content/uploads/2019/09/%C4%B1lgaz-1-1.jpg" style={{height:"274px" ,width:"250px"}}
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
