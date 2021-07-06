import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/CustomNavbar';
import Footer from './components/Footer';
import CustomNavbar from './components/CustomNavbar';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <Navbar /> */}
          <Header/>
          <CustomNavbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;