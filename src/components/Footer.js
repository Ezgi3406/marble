import React, { Component } from 'react'
//import './Home.css';
import './Footer.css';
//import {AiFillFacebook,AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai';
//import { ArrowRight } from 'react-bootstrap-icons';
import {FaInstagram,FaFacebookSquare,FaTwitter}from 'react-icons/fa'

export default class Footer extends Component {
  render() {
    return (
      <div>
          <footer className="py-5 black">
          {/* <h3>Facebook</h3> */}
              <div class="container">
                
                <p className="m-0 text-center text-white h4 ">
                <img class="img-footer" src="https://cdn.goadventureturkey.com/goturkey/static/images/turkiye-dark.svg"/>
                <ul class="social-list-footer">
                  <li class="social-list-footer__item"><a class="social-list__link" href=""><FaFacebookSquare/></a></li>
                  <li class="social-list-footer__item"><a class="social-list__link" href=""><FaInstagram/></a></li>
                  <li class="social-list-footer__item"><a class="social-list__link" href=""><FaTwitter/></a></li>
                </ul>
              </p>
              <p className="m-0 text-center text-white">Copyright &copy; Your Website 2021</p>
              </div>
          </footer>   
      </div>
)}}


/*import React, { Component } from 'react'

import './Home.css';
import {AiFillFacebook,AiOutlineInstagram,AiFillYoutube} from 'react-icons/ai';
import { ArrowRight } from 'react-bootstrap-icons';





export default class Footer extends Component {
  render() {
    return (
      <div>
        
          <footer className="py-5 bg-dark">
          {/* <h3>Facebook</h3> *//*}
        
            

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
 */