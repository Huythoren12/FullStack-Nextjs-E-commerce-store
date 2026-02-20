"use client"
import { AlignLeft } from 'lucide-react';
import React, { useState } from 'react'
import SideMenu from './SideMenu';


const MobileMenu = () => {
    const [isSideBarOpen,setIsSidebarOpen]=useState(false)
  return (
    <>
    <button onClick={()=> setIsSidebarOpen(!isSideBarOpen)}>
        <AlignLeft className="hover:text-darkColor hoverEffect md:hidden hover:cursor-pointer"/>
    </button>
    <div className="md:hidden">
        <SideMenu 
        isOpen={isSideBarOpen}
        onClose={()=> setIsSidebarOpen(false)} />
    </div>
    
    </>
  );
}

export default MobileMenu;
