import React from 'react'
import LandingNavbar from '../components/Navbars/LandingNavbar'
import Hero from '../components/Hero/Hero'
import TopContent from '../components/Content/TopContent'
import LandingPosts from '../components/Posts/LandingPosts'
import MainFooter from '../components/Footers/MainFooter'



const Landing = () => {
  return (
    <>
    <LandingNavbar />
    <Hero />
    <TopContent />
    <LandingPosts/>
    <MainFooter/>
    </>
   
  )
}

export default Landing