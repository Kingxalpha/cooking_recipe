import React from 'react'
import Image from 'next/image'
import {AiOutlineFieldTime } from 'react-icons/ai'


function RecipeHeading() {
  return (
    <div className='bg-[#F0EBE1] text-black p-3'>
        <div className='flex flex-col lg:items-center sm:items-center justify-center'>
            <p className='p-1 bg-[#EE6352] rounded-xl text-white px-2 mb-2'>Recipe</p>
            <h1 className='mb-2 text-center'>LEMON GARLIC ROASTED CHICKEN</h1>
            <p className='lg:w-1/2 text-center'>Welcome to Cooks Delight, where culinary dreams come alive! Today, we embark on a journey of flavors with a dish that promises to elevate your dining experience – our Citrus Infusion Delight: Lemon Garlic Roasted Chicken.</p>
            <div className='flex items-center mt-5 mb-10'>
                <div className='flex flex-row items-center'>
                    <AiOutlineFieldTime/>
                    <p>1HOUR</p>
                </div>
                <p>.</p>
                <div className='flex flex-row items-center'>
                    <Image height={15} width={15} src={"/weight.png"}/>
                    <p>HARDPREP</p>
                </div>
                <p>.</p>
                <div className='flex flex-row items-center'>
                    <Image height={15} width={15} src={"/plate.png"}/>
                    <p>4 SERVES</p>
                </div>
            </div>
            <Image height={100} width={754} src={"/fullimg.png"}/>
        </div>
    </div>
  )
}

export default RecipeHeading