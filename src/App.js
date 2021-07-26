import React from 'react'
import Navbar from './Navbar'
//import Hero from './Hero'
// import Sidebar from './Sidebar'
import Submenu from './Submenu'
import Home from './Home'
import Footer from './Footer'
import Header from './components/Header/Header'




function App() {
  return (
    <div>
      <Header/>
      {/* <Sidebar/> */}
      <Navbar/>
      <Home/>
      {/* <Hero/> */}
      <Submenu/>
      <Footer/>
      </div>
    
  )
}

export default App
