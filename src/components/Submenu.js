import React, { useState, useRef, useEffect } from 'react'
import {useGlobalContext} from './context'

const Submenu = () => {
  const {isSubMenuOpen,location,page:{page,links}}=useGlobalContext()
  const container=useRef(null)
  const[columns,setColumns]=useState('col-2')
  useEffect(()=>{
    setColumns('col-2')
    const subMenu=container.current;
    const{bottom,center}=location
    subMenu.style.left=`${center}px`
    subMenu.style.top=`${bottom}px`
if(links.length===3){
  setColumns('col-3')
}
if(links.length>3){
  setColumns('col-4')
}

  },[location,links])
  
  return <aside ref={container} className={`submenu ${isSubMenuOpen&&'show'}`}>
       <h4>{page}</h4>
        <div className={`submenu-center ${columns}`}>
        {links.map((link,index)=>{
         const{icon,url,label}=link
         return  <a key={index} href={url}>
            {icon}
            {label}
         </a>
       })}
        </div>
  </aside>
}

export default Submenu
