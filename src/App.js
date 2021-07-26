import React, { Component } from 'react';
import Home from './components/Home'
import Footer from './components/Footer'
import Istanbul from './components/pages/Istanbul'


import { BrowserRouter as Router , Route } from "react-router-dom";
import {Switch} from 'react-router-dom'
import About from './components/pages/About';

function App() {
  return (
    <Router>  
      <Switch>
      <Route exact path="/" component={Home} />  
      <Route exact path="/Istanbul" component={Istanbul} /> 
      <Route exact path="/About" component={About} />
      </Switch>
       <Footer/>
  </Router>  

  
  )
}

export default App
