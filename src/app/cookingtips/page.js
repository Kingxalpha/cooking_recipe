import FirstPg from '@/component/cookingtips/FirstPg'
import Mastering from '@/component/cookingtips/Mastering'
import Newest from '@/component/cookingtips/Newest'
import Footer from '@/component/landingpage/Footer'
import Navbar from '@/component/landingpage/Navbar'
import Subscribe from '@/component/landingpage/Subscribe'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <FirstPg/>
        <Newest/>
        <Mastering/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default page