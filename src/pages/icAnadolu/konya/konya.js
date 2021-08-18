import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import '../../../components/pages/Marmara'


export default class ankara extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="video-wrapper" >
                        <video className="video-target" autoPlay style={{filter: 'contrast(1.04) brightness(0.91)',width:"1350px", height: "250px", "margin-top":"30px"}} preload="none" playsInline muted loop data-poster><source src="https://cdn.goadventureturkey.com/konya/konya2-new.mp4" type="video/mp4" />Your browser does not support the video tag.</video>
                    </div>

                    <h2 className="heading"><strong>KONYA</strong></h2>
                    <h5 className="sub-heading"></h5>
                </div>
                <Container>
                    <Row className="show-grid text-center">
                        
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Konya/Beyşehir'> <Image src="https://cdn.goadventureturkey.com/konya/beysehir-lake2.jpg" square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-plane-departure fa-7x"></i>
                            <h3>BEYŞEHİR GÖLÜ</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                        


                            <Link to='/IcAnadolu/Konya/Beyşehir'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                        
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Konya'><Image src="" square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-ship fa-7x"></i>
                            <h3></h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Konya'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                    
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Konya'><Image src="" square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-hotel fa-7x"></i>
                            <h3></h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Konya'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                    
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Konya'><Image src="" square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-sun fa-7x"></i>
                            <h3></h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Konya'><p>
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