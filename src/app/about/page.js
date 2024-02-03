import AbtSign from '@/component/about/AbtSign'
import Gallery from '@/component/about/Gallery'
import Title from '@/component/about/Title'
import Featured from '@/component/landingpage/Featured'
import Footer from '@/component/landingpage/Footer'
import Navbar from '@/component/landingpage/Navbar'
import Subscribe from '@/component/landingpage/Subscribe'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <Title/>
        <AbtSign/>
        <Gallery/>
        <Featured/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default page