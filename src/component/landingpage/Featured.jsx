import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareCaretRight } from '@fortawesome/free-solid-svg-icons';
import { faSquareCaretLeft } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

function Featured() {
  return (
    <div className='p-3 bg-white'>
        <div className='lg:flex lg:items-center lg:justify-between sm:flex-col'>
            <h2 className='text-black font-bold'>FEATURED RECIPES</h2>
            <div className='flex flex-row items-center gap-3'>
                <FontAwesomeIcon className='bg-gray-400 p-2 rounded-full' icon={faSquareCaretLeft} />
                <FontAwesomeIcon className='bg-gray-600 p-2 rounded-full' icon={faSquareCaretRight} />
            </div>
        </div>
        <div className='lg:flex lg:flex-row sm:flex-col'>
            <div className='flex flex-col sm:items-center lg:ml-40 '>
                <Image className='lg:hidden p-2 sm:mt-2' height={100} width={500} src={"/image1sm.png"}/>
                <Image className='sm:hidden' height={100} width={500} src={"/image1lg.png"}/>
                <div className='lg:bg-white sm:bg-white sm:text-black sm:p-3 lg:text-black lg:w-[84%] sm:w-[95%] lg:p-5 rounded-br-xl rounded-bl-xl shadow-lg'>
                    <h2 className='sm:w-[100%] font-bold'>Savory Herb-Infused Chicken</h2>
                    <p className='sm:w-[100%] lg:w-[90%]'>Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken</p>
                    <div className='lg:flex lg:flex-row sm:flex-col sm:mt-3 lg:items-center lg:justify-between lg:mt-5'>
                        <p className='sm:w-[100%]'>40 Min - easy prep - 3 serves</p>
                        <button className='border border-black p-2 rounded-xl sm:w-[100%] sm:mt-2'>View Recipe</button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:items-center relative  '>
                <Image className='lg:hidden p-2' height={100} width={500} src={"/image2sm.png"}/>
                <Image className='sm:hidden' height={100} width={500} src={"/image2lg.png"}/>
                <div className='lg:bg-white sm:bg-white sm:text-black sm:p-3 lg:text-black lg:w-[70.5%] sm:w-[95%] lg:p-5 rounded-br-xl rounded-bl-xl shadow-lg'>
                    <h2 className='sm:w-[100%] font-bold'>Decadent Chocolate Mousse</h2>
                    <p className='sm:w-[100%] lg:w-[100%]'>Dive into the velvety indulgence of our Decadent Chocolate Mousse. A dessert that transcends sweetness!</p>
                    <div className='lg:flex lg:flex-row sm:flex-col sm:mt-3 lg:items-center lg:justify-between'>
                        <p className='sm:w-[100%]'>30 Min - medium prep - 4 serves</p>
                        <button className='border border-black p-2 rounded-xl sm:w-[100%] sm:mt-2'>View Recipe</button>
                    </div>
                </div>
            </div>
            <div className='absolute sm:top-[1850px] sm:right-5 lg:left-[1150px] lg:top-[1250px]'>
                <Image height={100} width={100} src={"/Tag.png"}/>
            </div>
        </div>
    </div>
  )
}

export default Featured