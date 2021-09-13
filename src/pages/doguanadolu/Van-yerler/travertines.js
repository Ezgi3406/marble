import React, { Component } from 'react'
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";

export default class travertines extends Component {
    render() {
        return (<div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://cdn1.ntv.com.tr/gorsel/0LrRd64LtUiF9H6nbHygMQ.jpg?width=1000&mode=both&scale=both&v=1557923344036"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Travertines</h3>
              Located in the Yeşil district, the mosque was built in 1419 by
              Çelebi Sultan Mehmed. Green Mosque, which is one of the "Inverted
              T" plan mosques, is one of the most beautiful historical buildings
              of Türkiye as well as Bursa. The architect of the mosque is Hacı
              İvaz Pasha. The crown door at the entrance of Green Mosque, is a
              beautiful product of Turkish stone carving. The mukarnas is
              extraordinarily beautiful. Green stone and marble were used in the
              door arch. Most of the interior is covered with tiles. The walls,
              ceilings, vaults and transition iwans are all covered with tiles.
              One of the most precious examples of tile work in the mosque is
              its mihrab, which is more than ten meters high. The mihrab, which
              includes flowers with various geometric motifs, is one of the most
              beautiful details in the mosque.<br/>
              Green Madrasa, one of the first Ottoman madrasas, is also known as Sultaniye Madrasa, hosts tile and ceramic works from the Seljuk, Beylik and Ottoman periods (İznik, Kütahya) dating from the 13th to the 20th centuries, wood, carved and inlaid works, examples of Turkish metal art, tombak and other metal works, Seljuk and Ottoman coins, traditional Turkish handicrafts and clothes.
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/van/2-liste-muradiye-selalesi.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/van/liste-akcali-travertenleri.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/van/liste-flamingolar.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://cdn.goadventureturkey.com/van/3-liste-muradiye-selalesi.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>
          </Row>
        </Container>
       </div>
        )
    }
}
