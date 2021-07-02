import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import News from './components/News';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import A from './components/A';
import B from './components/B';
import CustomNavbar from './components/CustomNavbar';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* <B/> */}
          {/* <A/>
          <Navbar /> */}
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