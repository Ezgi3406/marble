import React, { Component } from 'react';
import Routes from './routes'


import { BrowserRouter as Router , Route } from "react-router-dom";
import {Switch} from 'react-router-dom'

function App() {
  return (
    <div>
      
    <Router>  
    <Routes/>
      <Switch>
      </Switch>
  </Router>  
  </div>

  
  )
}

export default App
