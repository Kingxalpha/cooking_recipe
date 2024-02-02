import React from 'react'

function Title() {
  return (
    <div className='bg-[#FFFBF2] text-black'>
        <div className='flex lg:flex-row sm:flex-col sm:items-center sm:mt-1'>
            <h1 className='uppercase lg:text-[70px] sm:text-[38px] leading-none w-[90%]'>Welcome to <br /> my Culinary <br /> Haven!</h1>
            <div className='sm:flex sm:flex-col sm:justify-center sm:p-3'>
                <p className='lg:w-4/6'>Bonjour and welcome to the heart of my kitchen! I'm Isabella Russo, the culinary enthusiast behind this haven of flavors, Cooks Delight. Join me on a gastronomic journey where each dish carries a story, and every recipe is a crafted symphony of taste.</p>
                <p className='p-2 rounded-lg bg-[#F29C33] border-none lg:w-[20%]'>Explore Recipes</p>
            </div>
        </div>
    </div>
  )
}

export default Title