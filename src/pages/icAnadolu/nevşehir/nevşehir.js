import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import '../../../pages/pages.css'

export default class Nevşehir extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="video-wrapper" >
                        <video className="video-target" autoPlay style={{filter: 'contrast(1.04) brightness(0.91)',width:"1350px", height: "400px", "margin-top":"3px"}} preload="none" playsInline muted loop data-poster><source src="https://cdn.goadventureturkey.com/nevsehir/nevsehir.mp4" type="video/mp4" />Your browser does not support the video tag.</video></div>

                    <h2 className="heading"><strong>NEVŞEHİR</strong></h2>
                    <h5 className="sub-heading"></h5>
                </div>
                <Container>
                    <Row className="show-grid text-center">
                        
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Nevsehir/PeriBacaları'> <Image src="https://cdn.goadventureturkey.com/nevsehir/liste-fairy-chimney-2.jpg" style={{height:"274px" ,width:"250px"}} square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-plane-departure fa-7x"></i>
                            <h3>Peri Bacaları</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                        


                            <Link to='/IcAnadolu/Nevsehir/PeriBacaları'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                        
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Nevşehir/IhlaraVadisi'><Image src="https://cdn.goadventureturkey.com/nevsehir/ihlara-canyon.jpg" style={{height:"274px" ,width:"250px"}} square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-ship fa-7x"></i>
                            <h3>Ihlara Vadisi</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Nevşehir/IhlaraVadisi'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                    
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Nevşehir/KaranlıkKilise'><Image src="https://cdn.goadventureturkey.com/nevsehir/liste-dark-church.jpg" style={{height:"274px" ,width:"250px"}} square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-hotel fa-7x"></i>
                            <h3>Karanlık Kilise</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Nevşehir/KaranlıkKilise'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                    
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Nevşehir/Kızılırmak'><Image src="https://cdn.goadventureturkey.com/nevsehir/avanos-kizilirmak.jpg" style={{height:"274px" ,width:"250px"}} square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-sun fa-7x"></i>
                            <h3>Kızılırmak</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Nevşehir/Kızılırmak'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}
