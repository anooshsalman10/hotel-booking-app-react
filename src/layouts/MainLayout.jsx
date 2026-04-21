import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Outlet, useLocation} from 'react-router-dom'
import HotelRegistration from '../components/HotelRegistration'

const MainLayout = () => {
  const isOwnerPath = useLocation().pathname.includes("owner");
  return (
    <div className="flex flex-col min-h-screen">
    {! isOwnerPath && <Navbar/>}

    <main className="flex-grow">
    {false && <HotelRegistration/>}
    <Outlet/>
    </main>
    
    <Footer/>
    </div>
  )
}

export default MainLayout