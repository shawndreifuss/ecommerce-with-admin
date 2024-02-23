import React, { useState, useEffect } from 'react'
import MainNavbar from '../components/Navbars/MainNavbar';
import MainSidebar from '../components/Sidebars/MainSidebar';
import Profile from '../pages/Main/Profile'




const Blogs = () => {

const [sidebarOpen, setSidebarOpen] = useState(false);





  return (
    <>
     <div className="flex h-screen overflow-hidden">
    <MainSidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

    {/* Content area */}
    <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

     {/*  Site header */}
     <MainNavbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

     <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

     <Profile />



    </div>
     </main>
     
     </div>
     </div>
     </>
  )
}

export default Blogs