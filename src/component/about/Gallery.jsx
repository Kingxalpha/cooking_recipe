import Image from 'next/image'
import React from 'react'

function Gallery() {
  return (
    <div className='lg:grid lg:grid-cols-4 p-3 bg-[#F0EBE1] gap-3'>
        <Image className='sm:mb-3' height={100} width={400} src={"/img12.png"}/>
        <Image className='sm:mb-3' height={100} width={400} src={"/image(2).png"}/>
        <Image className='sm:mb-3' height={100} width={400} src={"/ford.png"}/>
        <Image className='sm:mb-3' height={100} width={400} src={"/fond.png"}/>
        <Image className='sm:mb-3' height={100} width={400} src={"/clad.png"}/>
        <Image className='sm:mb-3' height={100} width={400} src={"/pamd.png"}/>
        <Image className='sm:mb-3' height={100} width={400} src={"/klid.png"}/>
        <Image height={100} width={400} src={"/forge.png"}/>
    </div>
  )
}

export default Gallery