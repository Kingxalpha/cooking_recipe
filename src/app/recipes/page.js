import Footer from '@/component/landingpage/Footer'
import Navbar from '@/component/landingpage/Navbar'
import Subscribe from '@/component/landingpage/Subscribe'
import Description from '@/component/recipes/Description'
import RecipeHeading from '@/component/recipes/RecipeHeading'
import Similar from '@/component/recipes/Similar'
import React from 'react'

function page() {
  return (
    <div>
        <Navbar/>
        <RecipeHeading/>
        <Description/>
        <Similar/>
        <Subscribe/>
        <Footer/>
    </div>
  )
}

export default page