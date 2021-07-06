import React from 'react'
import {Nav,Dropdown,Form,FormControl,Button,ButtonGroup,SplitButton,DropdownButton } from "react-bootstrap";

export default function Navbar() {
  return (
    <div>
      <div>
      <img
        // src="https://image.shutterstock.com/image-vector/london-clock-tower-logo-big-260nw-336201224.jpg"
        src="./BlueMarble.png"
        // width="296"
        // height="80"
        // className="d-inline-block align-center m-0 text-center text-white"
        alt="Blue Marble"
        style={{width:'296px',height:'80px',margin:'0 auto',display:'flex',justifyContent:'center'}}
      />
      </div>pp'
      

      <div className="mb-2">
    
      <DropdownButton
        as={ButtonGroup}
        key=''
        id='dropdown-button-drop-down'
        drop='right'
        variant="secondary"
        title='Turkiye'>
      
        <Dropdown.Item eventKey="1">istanbul</Dropdown.Item>
        <Dropdown.Item eventKey="2">anadolu</Dropdown.Item>
        <Dropdown.Item eventKey="3">marmara</Dropdown.Item>
        <Dropdown.Item eventKey="4">ege</Dropdown.Item>

      </DropdownButton>
    
      </div>

  {/* <div>
    {['up', 'down', 'left', 'right'].map((direction) => (
      <SplitButton
        key={direction}
        id={`dropdown-button-drop-${direction}`}
        drop={direction}
        variant="secondary"
        title={`Drop ${direction}`}
      >
        <Dropdown.Item eventKey="1">Action</Dropdown.Item>
        <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
        <Dropdown.Item eventKey="3">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
      </SplitButton>
    ))}
  </div> */}
    </div>
  )
}

