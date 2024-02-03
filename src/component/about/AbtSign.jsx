import Image from 'next/image'
import React from 'react'

function AbtSign() {
  return (
    <div className='lg:flex lg:flex-row sm:flex-col lg:gap-5 p-3 bg-[#F0EBE1]'>
        <div>
            <Image height={100} width={1500} src={"/author.png"}/>
            <div className='flex justify-between border border-black p-1 rounded-lg mt-2'>
                <p className='text-black'>FOLLOW ME</p>
                <Image height={100} width={100} src={"/wrapper.png"}/>
            </div>
        </div>
        <div>
            <h1 className='text-[30px] font-bold text-black'>From Italian Roots to Global Palates</h1>
            <p className='text-[16px] text-[#333333] mb-3'>Born and raised in the vibrant culinary landscape of Italy, my journey with food began in the heart of my family's kitchen. Surrounded by the aroma of fresh herbs, the sizzle of pans, and the laughter of loved ones, I developed a deep appreciation for the art of cooking. My culinary education took me from the historic streets of Rome to the bustling markets of Florence, where I honed my skills and cultivated a love for the simplicity and authenticity of Italian cuisine.</p>
            <p className='text-[16px] text-[#333333] mb-3'>Driven by a relentless curiosity, I embarked on a global culinary exploration, seeking inspiration from the rich tapestry of flavors found in kitchens around the world. From the spicy markets of Marrakech to the sushi stalls of Tokyo, each experience added a unique brushstroke to my culinary canvas.</p>
            <p className='text-[16px] text-[#333333] mb-3'>Whether you're a seasoned home cook or just starting your culinary adventure, I'm delighted to have you here. Let's stir, simmer, and savor the beauty of creating something wonderful together.</p>
            <p className='text-[16px] text-[#333333] mb-3'>Warmest regards,</p>
            <h3 className='text-[21px] text-[#333333]'>Isabella Russo</h3>
        </div>
    </div>
  )
}

export default AbtSign