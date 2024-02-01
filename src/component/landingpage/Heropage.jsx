import React from 'react'
import Link from 'next/link'

function Heropage() {
  return (
    <div className='bg-cover bg-center bg-no-repeat w-[100%] h-[90vh] sm:h-[50vh]' style={{ backgroundImage: 'url(/HeroSection.png)' }}>
    <div className='flex flex-col justify-center items-center h-[80vh] sm:h-[40vh] p-3'>
        <h1 className='lg:text-3xl font-bold lg:w-[30%] text-center'>UNLEASH CULINARY EXCELLENCE</h1>
        <p className='font-bold lg:w-1/4 text-center mt-2 sm:font-normal'>Explore a world of flavors, discover handcrafted recipes, and let the aroma of our passion for cooking fill your kitchen</p>
        <Link href="/recipes" passHref>
            <button className='p-2 px-3 bg-[#F29C33] rounded-xl mt-3 hover:border-2 hover:bg-transparent hover:text-[#f29c33] hover:duration-100 hover:transition'>
            Explore Recipes
            </button>
        </Link>
    </div>
  </div>
  )
}

export default Heropage