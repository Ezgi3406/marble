import React, { useState, useContext } from 'react'
import sublinks from './data'

export const AppContext=React.createContext()

export const AppProvider=({children})=>{
    const[isSidebarOpen,setIsSidebarOpen]=useState(false)
    const[isSubMenuOpen,setIsSubMenuOpen]=useState(false)
    const [location,setLocation]=useState({})
    const [page,setPage]=useState({page:'',links:[]})
    const openSidebar=()=>{
        setIsSidebarOpen(true)
    }
    const closeSidebar=()=>{
        setIsSidebarOpen(false)
    }
    const openSubMenu=(page,{bottom,center})=>{
        setLocation({bottom,center})
        setIsSubMenuOpen(true)
        const currentPage=sublinks.find(sublink=>sublink.page===page)
        setPage(currentPage)
    }
    const closeSubMenu=()=>{
        setIsSubMenuOpen(false)
    }
    
    return <AppContext.Provider value={{
        isSubMenuOpen,
        isSidebarOpen,setIsSubMenuOpen,setIsSidebarOpen,openSubMenu,openSidebar,closeSubMenu,closeSidebar,location,page}} >
        {children}
    </AppContext.Provider>
}

export const useGlobalContext=()=>{
    return useContext(AppContext)
}