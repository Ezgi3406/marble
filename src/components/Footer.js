import React, { Component } from 'react'

import './Home.css';
import {AiFillFacebook,AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai';
import { ArrowRight } from 'react-bootstrap-icons';





export default class Footer extends Component {
  render() {
    return (
      <div>
        
          <footer className="py-5 bg-dark">
          {/* <h3>Facebook</h3> */}
        
            

              <div class="container">
                <p className="m-0 text-center text-white h4 ">
                  <button><AiFillFacebook/></button>
                  <button><AiOutlineInstagram/></button>
                  <button><AiFillYoutube/></button><br/>
              </p>
              <p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p>
              </div>

          </footer>   
      </div>

)}}


