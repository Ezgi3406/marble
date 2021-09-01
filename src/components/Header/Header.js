import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import './Header.css'


export default class Header extends Component {
    render() {
        return (
          <div className="fixed-header">
            
        <div>
          <header  >
          <Navbar/>
          </header>
        </div>  
        </div> 
       
  )
}
}