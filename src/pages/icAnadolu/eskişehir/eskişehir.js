import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import '../../../pages/pages.css'

export default class eskişehir extends Component {
    render() {
        return (
            <div>
               <div className="content-wrapper">
                    <div className="video-wrapper" >
                        <video className="video-target" autoPlay style={{filter: 'contrast(1.04) brightness(0.91)',width:"1350px", height: "250px", "margin-top":"30px"}} preload="none" playsInline muted loop data-poster><source src="https://cdn.goadventureturkey.com/eskisehir/eskisehir2.mp4" type="video/mp4" />Your browser does not support the video tag.</video></div>

                    <h2 className="heading"><strong>ESKİŞEHİR</strong></h2>
                    <h5 className="sub-heading"></h5>
                </div>
                <Container>
                    <Row className="show-grid text-center">
                        
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Eskişehir/Odunpazarı'> <Image src="https://cdn.goadventureturkey.com/eskisehir/liste-odunpazari-district-2.jpg" square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-plane-departure fa-7x"></i>
                            <h3>ODUNPAZARI EVLERİ</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                        


                            <Link to='//IcAnadolu/Eskişehir/Odunpazarı'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                        
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Eskişehir/Porsuk'><Image src="https://cdn.goadventureturkey.com/eskisehir/liste-porsuk-stream-gondola-trip.jpg" square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-ship fa-7x"></i>
                            <h3>PORSUK NEHRİ</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Eskişehir/Porsuk'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                    
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Eskişehir/Atlıhan'><Image src="https://cdn.goadventureturkey.com/eskisehir/liste-atlihan-handicrafts-market-2.jpg" square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-hotel fa-7x"></i>
                            <h3>ATLIHAN</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Eskişehir/Atlıhan'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                    
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Eskişehir/Yazılıkaya'><Image src="https://cdn.goadventureturkey.com/eskisehir/liste-midas-monument-yazilikaya-3.jpg" square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-sun fa-7x"></i>
                            <h3>YAZILIKAYA</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Eskişehir/Yazılıkaya'><p>
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


