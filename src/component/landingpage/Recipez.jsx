import { Content } from 'next/font/google'
import Image from 'next/image'
import React from 'react'

function Recipez() {

  const foods = [
    {
      image: <Image height={100} width={400} src={"/imgs.png"} />,
      heading: "Savory Herb-Infused Chicken",
      content: "Indulge in the rich and savory symphony of flavors with our Savory Herb-Infused Chicken",
      content2: "40 Min - easy prep - 3 serves",
      button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>View Recipe</button>
    },
    {
      image: <Image height={100} width={400} src={"/lemon.png"} />,
      heading: "Lemon Garlic Grilled Chicken",
      content: "Experience the perfect blend of zesty lemon and aromatic garlic with this roasted chicken recipe",
      content2: "1 hour - hard prep - 4 serves",
      button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>View Recipe</button>
    },
    {
      image: <Image height={100} width={400} src={"/Quinoa.png"} />,
      heading: "Quinoa Veggie Stir-Fry",
      content: "Quick, wholesome, and bursting with flavors, it's perfect for a healthy weeknight dinner.",
      content2: "30 Min - easy prep - 3 serves",
      button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>View Recipe</button>
    },
    {
      image: <Image height={100} width={400} src={"/berry.png"} />,
      heading: "Berry Bliss Smoothie Bowl",
      content: "This berry smoothie bowl is not only visually appealing but also a powerhouse of antioxidants.",
      content2: "10 Min - easy prep - 2 serves",
      button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>View Recipe</button>
    },
    {
      image: <Image height={100} width={400} src={"/spagheti.png"} />,
      heading: "Spaghetti Aglio e Olio",
      content: "A minimalist yet flavorful dish with garlic, olive oil, and a hint of red pepper flakes.",
      content2: "20 min - easy prep - 2 serves",
      button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>View Recipe</button>
    },
    {
      image: <Image height={100} width={400} src={"/grilled.png"} />,
      heading: "Grilled Veggies with Sauce",
      content: "Served with a zesty chimichurri sauce its a perfect addition to your outdoor gatherings.",
      content2: "25 Min - medium prep - 6 serves",
      button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>View Recipe</button>
    },
  ];

  return (
    <div className='flex flex-col items-center justify-center p-4 bg-[#F0EBE1]'>
      <div className='flex flex-col items-center mt-2'>
        <p className='p-2 rounded-xl bg-[#EE6352] mb-2 text-white'>Recipes</p>
        <h1 className='capitalize text-xl lg:w-[20%] text-center mb-2 text-black'>Embark on a journey</h1>
        <p className='lg:w-[50%] text-center mb-2 text-black'>With our diverse collection of recipes, we have something to satisfy every palate.</p>
        <div className='lg:flex lg:flex-row lg:mb-3 sm:grid  sm:grid-cols-3 gap-3 sm:mb-2'>
          <p className='p-2 border-2 rounded-xl bg-[#9FDC26] px-5'>ALL</p>
          <p className='p-2 border-2 border-black rounded-xl text-black sm:text-[12px]'>VEGAN</p>
          <p className='p-2 border-2 border-black rounded-xl text-black sm:text-[12px]'>BREAKFAST</p>
          <p className='p-2 border-2 border-black rounded-xl text-black sm:text-[12px]'>LUNCH</p>
          <p className='p-2 border-2 border-black rounded-xl text-black sm:text-[12px]'>DINNER</p>
          <p className='p-2 border-2 border-black rounded-xl text-black sm:text-[12px]'>DESSERT</p>
          <p className='p-2 border-2 border-black rounded-xl text-black sm:text-[12px]'>QUICKBITE!</p>
        </div>
      </div>
      <div className=''>
        <div className='lg:grid lg:grid-cols-3 lg:ml-16'>
          {foods.map((food, index) => (
            <div key={index} className=''>
              <div className=''>
                {food.image}
              </div>
                <div className='flex flex-col bg-[#F0EBE1] text-black lg:w-[86%] sm:w-[100%] mb-3 p-2 shadow-lg rounded-br-xl rounded-bl-xl'>
                <h1 className='mt-2 font-bold'>{food.heading}</h1>
                <p className='mt-2 text-[12px] text-gray-500'>{food.content}</p>
                <div className='flex lg:flex-row lg:items-center sm:flex-col justify-between sm:mt-2'>
                  <p className='sm:mb-2 text-[12px] text-gray-500'>{food.content2}</p>
                  {food.button}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Recipez;
