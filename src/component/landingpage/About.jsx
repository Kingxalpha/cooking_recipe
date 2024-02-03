import Image from 'next/image'
import React from 'react'

function About() {
  return (
    <div className='bg-[#F0EBE1]'>
        <div className='lg:flex lg:flex-row lg:p-5 sm:p-3 sm:flex-col'>
            <div className=''>
                <div className='lg:flex sm:flex-col'>
                    <div className='sm:mb-3'>
                        <p className='p-2 rounded-xl bg-[#EE6352] lg:w-[15%] lg:mb-2 sm:w-[30%] sm:mb-2'>About Us</p>
                        <h2 className='font-bold text-xl lg:mb-2'>OUR CULINARY <br /> CHRONICLE</h2>
                        <p className=' text-gray-500 sm:mb-2 lg:mb-2'>Our journey is crafted with dedication, creativity, and an unrelenting commitment to delivering delightful culinary experiences,Join us in savoring the essence of every dish and the stories that unfold.</p>
                        <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
                    </div>
                    <div className='sm:mb-2 lg:mr-5'>
                        <Image height={100} width={600} src={"/card.png"}/>
                    </div>
                </div>
                <div className='sm:mb-2'>
                    <Image className='sm:hidden lg:mt-8' height={100} width={850} src={"/repice.png"}/>
                    <Image className='lg:hidden' height={100} width={380} src={"/repiceSm.png"}/>
                </div>
            </div>
            <div className='sm:mb-2'>
                <Image className='sm:hidden' height={100} width={850} src={"/imagery.png"}/>
                <Image className='lg:hidden' height={100} width={380} src={"/imagerySm.png"}/>
            </div>
        </div>
       
       
    </div>
  )
}

export default About