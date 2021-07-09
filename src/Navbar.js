import React, { useRef } from 'react'
import logo from './images/bluemarble.png'
import { FaBars, FaSearch } from 'react-icons/fa'
import {useGlobalContext} from './context'



const Navbar = () => {
  const{openSidebar,openSubMenu,closeSubMenu}=useGlobalContext()
  
  const displaySubMenu=(e)=>{
    const page=e.target.textContent
    console.log(e.target.textContent)
    const tempBtn=e.target.getBoundingClientRect()
    console.log(e.target.getBoundingClientRect())
    const center=(tempBtn.left+tempBtn.right)/2
    const bottom=tempBtn.bottom-3
    openSubMenu(page,{center,bottom})
  }
  const handleSubMenu=(e)=>{
    if(!e.target.classList.contains('link-btn')){
      closeSubMenu()
      console.log(e.target.classList)
    }
  }
  
  return <nav className="nav" onMouseOver={handleSubMenu} >
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt='coding' className='nav-logo'/>
        <button className="btn toggle-btn" onClick={openSidebar}>
          <FaBars/>
        </button>
      </div>
      <ul className="nav-links">
        <li>
          <button className="link-btn"  onMouseOver={displaySubMenu}  >turkiye</button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubMenu} >dunya</button>
        </li>
        <li>
          <button className="link-btn" onMouseOver={displaySubMenu} >hakkimizda</button>
        </li>
        <button className="btn signin-btn" onClick={displaySubMenu} ><FaSearch /></button>
      </ul>
     
    </div>
  </nav>
}

export default Navbar
