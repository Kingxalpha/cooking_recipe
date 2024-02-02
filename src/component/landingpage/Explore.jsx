import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Explore = () => {
  return (
    <div className='bg-[#C4E5FC] lg:flex lg:flex-row lg:p-10'>
        <div className='sm:flex sm:flex-col sm:px-3 lg:mt-20'>
            <p className='p-2 px-3 rounded-xl border-2 bg-[#EE6352] sm:w-[25%] lg:w-[10%] mt-4'>Explore</p>
            <h2 className='sm:w-[30%] sm:mt-2 text-black sm:font-bold'>Our Diverse Pallete</h2>
            <p className='text-black lg:w-1/2'>If you are a breakfast enthusiast, a connoisseur of savory delights, or on the lookout for irresistible desserts, our curated selection has something to satisfy every palate.</p>
            <Link href="/" passHref>
            <button className='p-2 px-3 rounded-xl mt-3 border border-black hover:bg-[#f29c33] hover:border-none text-black hover:text-[#fff] hover:duration-100 hover:transition'>
            See More
            </button>
        </Link>
        </div>
        <div className='flex sm:items-center sm:justify-center sm:mt-3 sm:p-2'>
            <Image height={100} width={500} src={"/FilterWrapper.png"}/>
        </div>

    </div>
  )
}

export default Explore
