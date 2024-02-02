import React from 'react'

function Subscribe() {
  return (
    <div  className='bg-cover bg-center bg-no-repeat w-[100%] h-[85vh] sm:h-[50vh]' style={{ backgroundImage: 'url(/group.png)' }}>
        <div className='flex flex-col items-center justify-center lg:h-[80vh] sm:h-[50vh] p-3  '>
            <p className='text-[10px]'>SUBSCRIBE</p>
            <h1 className='lg:text-[50px] sm:text-[25px] leading-none text-center font-black font-sans mb-3'>JOIN THE FUN <br /> SUBSCRIBE NOW!</h1>
            <p className='lg:w-1/2 text-center mb-3'>Subscribe to our newsletter for a weekly serving of recipes, cooking tips, and exclusive insights straight to your inbox.</p>
            <div className='lg:bg-white rounded-xl sm:flex sm:flex-col sm:gap-5'>
                <input className='p-2 rounded-xl border-none' placeholder='Email Address' type='email' />
                <button className='bg-black text-white rounded-xl p-1 mr-3 border-none' type='submit'>SUBSCRIBE</button>
            </div>
        </div>
    </div>
  )
}

export default Subscribe