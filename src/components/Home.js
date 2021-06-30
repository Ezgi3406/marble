import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron,Row, Col, Image, Button,Carousel,Container  } from 'react-bootstrap';
import './Home.css';


export default class Home extends Component {
  render() {
    return (
      <Container >
        <Jumbotron>
        <Carousel>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://icdn.ensonhaber.com/resimler/galeri/1_10074.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://icdn.ensonhaber.com/resimler/galeri/1_10074.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="https://icdn.ensonhaber.com/resimler/galeri/1_10074.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
          
{/*           
          <h2>Welcome to CodeLife</h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link> */}
        </Jumbotron>
        <Row className="show-Container  text-center">
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183732-ee8b1f92-th.jpg" square className="profile-pic"/>
            <h3>Adana</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183732-ee8b1f92-th.jpg" square className="profile-pic"/>
            <h3>Adana</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183732-ee8b1f92-th.jpg" square className="profile-pic"/>
            <h3>Adana</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183732-ee8b1f92-th.jpg" square className="profile-pic"/>
            <h3>Adana</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183732-ee8b1f92-th.jpg" square className="profile-pic"/>
            <h3>Adana</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183732-ee8b1f92-th.jpg" square className="profile-pic"/>
            <h3>Adana</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183732-ee8b1f92-th.jpg" square className="profile-pic"/>
            <h3>Adana</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://resimdiyari.com/_data/i/upload/2012/10/14/20121014183732-ee8b1f92-th.jpg" square className="profile-pic"/>
            <h3>Adana</h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
          </Col>
          
        </Row>
      </Container >
    )
  }
}
