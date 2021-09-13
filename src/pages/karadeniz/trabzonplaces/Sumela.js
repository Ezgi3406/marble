import React, { Component } from "react";
import "../../../pages/pages.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import { right } from "@popperjs/core";



export default class Sumela extends Component {
  render() {
    return (
      <div className="background">
        <div className="background-image">
                   
        </div>

        <div style={{ display: "grid", "grid-template-columns": "1fr 1fr" }}>
          <Col xs={40} sm={15} className="marmara-wrapper">
            <Image
              src="https://touristjourney.com/wp-content/uploads/2020/08/shutterstock_1427895116-2048x923.jpg"
              style={{ height: "600px", width: "900px", padding:"60px", marginRight:"10px"}}
              square
              className="profile-pic"
            />
            </Col>
            </div>
            <p style={{padding: "60px" }}>
              <h3>Sumela Manastiri</h3>
              The ancient Sumela Monastery in northeastern Turkey is ready to open its doors this Saturday to hold mass for the seventh time since resuming religious services after a pause of 88 years.

Overlooking a lush valley near the Black Sea coast, the monastery was reopened in 2010 for Christian Orthodox services to be held once a year.

However, mass could not be held for the past four years due to ongoing restoration works.

All preparations for this year's service on Saturday, Aug. 15, when many Christians celebrate the Assumption of Mary, have been completed.

Local officials have completed measures to ensure security and cover the health, accommodation and transportation needs of mass-goers.

Gendarmerie forces will patrol the monastery, while other officials will be present to facilitate attendance.
Service, which was led by Fener Greek Patriarch Bartholomew I in previous years, will on Saturday be headed by officials from the Patriarchate.

This year, 46 people are expected to attend mass due to restrictions meant to curb the novel coronavirus outbreak.

The mass will be held from 9.00 a.m. until noon (0600-0900GMT) and no other visitors will be admitted into the premises for two hours after its conclusion. 
            </p>
               <Container>
          <Row className="show-grid text-center">
            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://touristjourney.com/wp-content/uploads/2020/08/shutterstock_1427895116-2048x923.jpg" style={{height:"274px" ,width:"250px"}}
                square
                className="profile-pic"
              />
              <>
                </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://touristjourney.com/wp-content/uploads/2020/08/Visit-the-spectacular-Karaca-Cave-on-the-Sumela-Monastery-Tour-from-Trabzon.jpg"style={{height:"274px" ,width:"250px"}} square
                
                className="profile-pic"
              />
              <>
               
              </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://touristjourney.com/wp-content/uploads/2020/08/Visit-the-Cosandere-Valley-on-the-Sumela-Monastery-Tour-from-Trabzon_53.jpg" style={{height:"274px" ,width:"250px"}}square
                className="profile-pic"
              />
              <>
               </>
            </Col>

            <Col xs={12} sm={3} className="person-wrapper">
              <Image
                src="https://touristjourney.com/wp-content/uploads/2020/08/Admire-the-beincredible-Sumela-Monastery-on-the-Sumela-Monastery-Tour-from-Trabzon-2048x1365.jpg" style={{height:"274px" ,width:"250px"}}
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
