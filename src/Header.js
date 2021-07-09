import React, { Component } from 'react'
import {FaInstagram,FaFacebookSquare,FaTwitter,FaSignInAlt}from 'react-icons/fa'
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css'


export default class Header extends Component {
    render() {
        return (
            <div>
                <header  >
                <ul class="social-list-left H6">
                <li class="social-list__item"><a class="social-list__link" href=""><img class="img-header" src="https://cdn.goadventureturkey.com/goturkey/static/images/turkiye-dark.svg"/></a></li></ul>
                
                <ul class="social-list" >
                    <li title="Sign in" style={{margin:".25em 1.75em"}} class="social-list__item"><a class="social-list__link" href=""><FaSignInAlt/> SIGN IN</a></li>
                    
                    <li class="social-list__item"><a class="social-list__link" href=""><FaFacebookSquare/></a></li>
                    <li class="social-list__item"><a class="social-list__link" href=""><FaInstagram/></a></li>
                    <li class="social-list__item"><a class="social-list__link" href=""><FaTwitter/></a></li>
                </ul>
                </header>
            </div>
        )
    }
}
/*className="py-0 bg-dark"
className="d-inline-block align-top m-1 p-0 text-right text-white"
*/ 


