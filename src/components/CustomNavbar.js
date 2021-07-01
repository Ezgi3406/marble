import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown,Form,FormControl,Button,ButtonGroup,DropdownButton,Dropdown } from "react-bootstrap";


import "./CustomNavbar.css";
import 'bootstrap/dist/css/bootstrap.min.css';





export default function CustomNavbar() {
  return (
    <div>
     <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#home"><img
        src="https://image.shutterstock.com/image-vector/london-clock-tower-logo-big-260nw-336201224.jpg"
        width="200"
        height="100"
        className="d-inline-block align-top m-0 text-center text-white"
        alt="Blue Marble"
      /></Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="m-auto ">

      <NavDropdown title="Turkiye" id= "dropdown-button-drop-down" >

      <NavDropdown.Item href="#action/3.1" className="m-auto"  id= "dropdown-button-drop-left">ISTANBUL</NavDropdown.Item>
      <NavDropdown.Item>
        <NavDropdown title="ANADOLU" id= "dropdown-button-drop-right" key='right' drop='right'  className="m-auto " menuAlign='right'
  as={ButtonGroup}>
        <NavDropdown.Item href="#action/3.1"  >AVRUPA YAKASI</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.1">ASYA YAKASI</NavDropdown.Item>
        </NavDropdown>
        </NavDropdown.Item>

        <NavDropdown.Divider />

        <div>
        <NavDropdown title="AKDENIZ" id="basic-nav-dropdown-right" className="dropdown-menu-right" alignRight>
        <NavDropdown.Item href="#action/3.1">ANTALYA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">ADANA</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">MERSIN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">ISPARTA</NavDropdown.Item>
        </NavDropdown>
        </div>
        <NavDropdown.Divider />
        <div>
        <NavDropdown title="KARADENIZ" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">TRABZON</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">SAMSUN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ORDU</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">RIZE</NavDropdown.Item>
        </NavDropdown>
       
        </div>
        <div>
        <NavDropdown title="MARMARA" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">TRABZON</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">SAMSUN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ORDU</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">RIZE</NavDropdown.Item>
        </NavDropdown>
       
        </div>
         <div>
        <NavDropdown title="EGE" id="basic-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">TRABZON</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">SAMSUN</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">ORDU</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.4">RIZE</NavDropdown.Item>
        </NavDropdown>
       
        </div>
      </NavDropdown>
    
       
       
       

      <NavDropdown title="Dunya" id="basic-nav-dropdown">
       <NavDropdown title="LONDRA" id="basic-nav-dropdown"> 
      
        
      

        <NavDropdown.Item href="#action/3.1">a</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">b</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">c</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">d</NavDropdown.Item>
      
      </NavDropdown>
      </NavDropdown>

    
      <NavDropdown title="About Us" id="basic-nav-dropdown">
      
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            
        </NavDropdown>
      
      
      
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
    </div>
  )
}
