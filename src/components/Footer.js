import React, { Component } from 'react'

import './Home.css';
import {AiFillFacebook,AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai';





export default class Footer extends Component {
  render() {
    return (
      <div>
        
          <footer class="py-5 bg-dark">
          {/* <h3>Facebook</h3> */}
        
            

              <div class="container"><p class="m-0 text-center text-white"><AiFillFacebook/><AiOutlineInstagram/><AiFillYoutube/><br/>Copyright &copy; Your Website 2021</p></div>

          </footer>   
      </div>

)}}