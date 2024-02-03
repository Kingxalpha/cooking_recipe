import FirstPg from '@/component/cookingtips/FirstPg'
import Mastering from '@/component/cookingtips/Mastering'
import Newest from '@/component/cookingtips/Newest'
import Navbar from '@/component/landingpage/Navbar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <FirstPg/>
        <Newest/>
        <Mastering/>
    </div>
  )
}

export default page