import Image from 'next/image'
import React from 'react'

function Footer() {
  return (
    <div className='flex flex-col justify-center sm:items-center sm:text-center sm:gap-5'>
        <div className='lg:flex lg:flex-row lg:items-center sm:flex-col sm:items-center lg:justify-around lg:p-3'>
            <div className='sm:mt-3'>
                <Image height={100} width={100} src={"/new-footer.png"}/>
            </div>
            <div>
                <ul className='lg:flex lg:flex-row sm:flex-col lg:gap-5 sm:gap-3'>
                    <li className='hover:text-[#f29c33] cursor-pointer sm:border-b'>HOME</li>
                    <li className='hover:text-[#f29c33] cursor-pointer sm:border-b'>RECIPE</li>
                    <li className='hover:text-[#f29c33] cursor-pointer sm:border-b'>COOKING TIPS</li>
                    <li className='hover:text-[#f29c33] cursor-pointer sm:border-b'>ABOUT US</li>
                </ul>
            </div>
            <div>
                <Image height={100} width={100} src={"/Iconn.png"}/>
            </div>
        </div>
        <div className='text-center'>
            <h3 className='text-gray-700'>Copyright: © 2024 Cooks Delight.</h3>
        </div>
    </div>
  )
}

export default Footer