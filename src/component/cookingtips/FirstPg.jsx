import Image from 'next/image'
import React from 'react'

function FirstPg() {
  return (
    <div className='bg-[#F0EBE1] text-black'>
        <div className='lg:flex sm:flex-col lg:items-center lg:justify-between p-3 lg:mb-7'>
            <h1 className='uppercase lg:text-[60px] sm:text-[38px] leading-none w-[100%] sm:mb-3 font-bold'>Our Essential Cooking Tips</h1>
            <p className='text-[21px] lg:text-right'>Welcome to Cooks Delight's treasure trove of cooking wisdom! Whether you're a seasoned chef or just starting your culinary journey, our cooking tips are designed to elevate your skills, enhance your kitchen experience, and bring joy to your cooking adventures.</p>
        </div>
        {/*  */}
        <div className='lg:flex lg:items-center sm:flex-col p-3 border border-gray-400 rounded-lg'>
            <div className='flex items-center gap-3'>
                <Image height={100} width={100} src={"/knife.png"}/>
                <div>
                    <h3 className='text-[#EE6352]'>QUALITY TOOLS</h3>
                    <p>Invest in high-quality knives, cutting boards, and cookware.</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Image height={100} width={100} src={"/cutter.png"}/>
                <div>
                    <h3 className='text-[#EE6352]'>ESSENTIAL UTENSILS</h3>
                    <p>Have a variety of utensils, including spatulas, tongs, and ladles.</p>
                </div>
            </div>
            <div className='flex items-center gap-3'>
                <Image height={100} width={100} src={"/weigh.png"}/>
                <div>
                    <h3 className='text-[#EE6352]'>MEASURING ACCURACY</h3>
                    <p>Use measuring cups and spoons for precise ingredient quantities.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FirstPg