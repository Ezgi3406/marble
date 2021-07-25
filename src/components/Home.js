import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron,Row, Col, Image, Button,Carousel,Container  } from 'react-bootstrap';
import './Home.css';
import Header from './Header';
import Navbar from './Navbar'
import Submenu from './Submenu'
export default class Home extends Component {
  render() {
    return (
     
      <Container >
         <Header/>
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
{/*           
          <h2>Welcome to CodeLife</h2>
          <p>This is how to build a website with React, React-Router & React-Bootstrap</p>
          <Link to="/about">
            <Button bsStyle="primary">Learn More</Button>
          </Link> */}
        </Jumbotron>
        <Row className="show-Container  text-center">
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/balikesir.jpg" square className="profile-pic" alt="Ankara"/>
            <h3></h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            <Button bsStyle="primary">More</Button>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/artvin.jpg" square className="profile-pic"/>
            <h3></h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            <Button bsStyle="primary">More</Button>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/bartin.jpg" square className="profile-pic"/>
            <h3></h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            <Button bsStyle="primary">More</Button>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/bolu.jpg" square className="profile-pic"/>
            <h3></h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            <Button bsStyle="primary">More</Button>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/elazig.jpg" square className="profile-pic"/>
            <h3></h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            
                        <Button bsStyle="primary">More</Button>
                        
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/aksaray.jpg" square className="profile-pic"/>
            <h3></h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            <Button bsStyle="primary">More</Button>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/4-kapadokya.jpg" square className="profile-pic"/>
            <h3></h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            <Button bsStyle="primary">More</Button>
          </Col>
          <Col xs={12} sm={3} className="person-wrapper">
            <Image src="https://cdn.goadventureturkey.com/goturkey/9-istanbul.jpg" square className="profile-pic"/>
            <h3></h3>
            <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
            <p>
            <Link to="/istanbul">
                    <Button bsStyle="primary">More</Button></Link>
                    </p>

          </Col>
        </Row>
      </Container >
    )
  }
}






