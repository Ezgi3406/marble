import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {Container, Col, Image, Button, Row } from "react-bootstrap";
import '../../../pages/pages.css'


export default class Ankara extends Component {
    render() {
        return (
            <div>
                <div className="content-wrapper">
                    <div className="video-wrapper" >
                        <video className="video-target" autoPlay style={{filter: 'contrast(1.04) brightness(0.91)',width:"1350px", height: "400px", "margin-top":"3px"}} preload="none" playsInline muted loop data-poster><source src="https://cdn.goadventureturkey.com/ankara/ankara2.mp4" type="video/mp4" />Your browser does not support the video tag.</video></div>

                    <h2 className="heading"><strong>ANKARA</strong></h2>
                    <h5 className="sub-heading"></h5>
                </div>
                <Container>
                    <Row className="show-grid text-center">
                        
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Ankara/Anıtkabir'> <Image src="https://cdn.goadventureturkey.com/ankara/2-anitkabir.jpg" style={{height:"274px" ,width:"250px"}} square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-plane-departure fa-7x"></i>
                            <h3>Anıtkabir</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                        


                            <Link to='/IcAnadolu/Ankara/Anıtkabir'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                        
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Ankara/AnkaraKalesi'><Image src="https://cdn.goadventureturkey.com/ankara/3-ankara-castle.jpg" style={{height:"274px" ,width:"250px"}} square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-ship fa-7x"></i>
                            <h3>Ankara Kalesi</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Ankara/AnkaraKalesi'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                    
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Ankara/IlkMeclis'><Image src="https://cdn.goadventureturkey.com/ankara/2-grand-national-assembly-of-turkey.jpg" style={{height:"274px" ,width:"250px"}} square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-hotel fa-7x"></i>
                            <h3>İlk Meclis</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Ankara/IlkMeclis'><p>
                            <Button bsStyle="primary">More</Button>
                            </p></Link>
                        </>
                        </Col>

                    
                        <Col xs={12} sm={3} className="person-wrapper">
                        <Link to='/IcAnadolu/Ankara/Nallıhan'><Image src="https://cdn.goadventureturkey.com/ankara/nallihan-.jpg" style={{height:"274px" ,width:"250px"}} square className="profile-pic"/></Link>
                        <>
                            <i className="fas fa-sun fa-7x"></i>
                            <h3>Nallıhan</h3>
                            <p>
                            {" "}
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                            do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation
                            </p>
                            <Link to='/IcAnadolu/Ankara/Nallıhan'><p>
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
