import React, { Component } from "react";
import "../../ege/ege.css";
import { Container, Col, Image, Button, Row } from "react-bootstrap";


export default class Home extends Component {
  render() {
    return (
      <div>
        <div className="content-wrapper">
          <Image src="/assets/img/services.jpg" />
          <h2 className="heading">Lovely Izmir</h2>
          <h5 className="sub-heading">
            With us you’ll find a perfect destination in Izmir.
          </h5>
        </div>
        
<div style={{display: "grid",
            "grid-template-columns": "1fr 1fr"}}>
<Image
                src="https://cdn.goadventureturkey.com/goturkey/aksaray.jpg"
                square
                className="profile-pic"
              />
            
                <i className="fas fa-sun fa-7x"></i>
                <h3></h3>
                <p>
                  {" "}
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation
                </p>
</div>
         
              
                
          
          

      </div>
      
    );
  }
}
