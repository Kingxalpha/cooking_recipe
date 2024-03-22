import React from 'react'
import Image from 'next/image'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function Mastering() {
    const basics = [
        {
          image: <Image height={100} width={400} src={"/knife1.png"} />,
          heading: "Knife Skills",
          content: "Unlock the art of precision in your kitchen with proper chopping, dicing, and slicing techniques. Elevate your culinary creations to new heights.",
          content2: "15 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
          image: <Image height={100} width={400} src={"/searng.png"} />,
          heading: "Sauteing and Searing",
          content: "Achieve the perfect sear and elevate flavors in your dishes. Learn the secrets to sautéing like a pro and creating irresistible textures.",
          content2: "20 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
          image: <Image height={100} width={400} src={"/roasting.png"} />,
          heading: "Roasting Tips",
          content: "Ensure even cooking and unlock flavorful results with our expert roasting tips. From golden vegetables to succulent meats, master the art of roasting.",
          content2: "25 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
          image: <Image height={100} width={400} src={"/workstation.png"} />,
          heading: "Prep Workstations:",
          content: "Efficiently organize your kitchen space for chopping, mixing, and cooking. Elevate your efficiency in the heart of your culinary domain.",
          content2: "15 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
          image: <Image height={100} width={400} src={"/cleaning.png"} />,
          heading: "Cleaning as You Go",
          content: "Maintain a tidy kitchen for stress-free cooking. Learn the art of cleaning as you go, turning every culinary endeavor into a seamless experience.",
          content2: "20 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>View Recipe</button>
        },
        {
          image: <Image height={100} width={400} src={"/recipemodification.png"} />,
          heading: "Recipe Modification",
          content: "Feel confident modifying recipes to suit your taste. Explore the art of culinary creativity in crafting dishes uniquely your own.",
          content2: "25 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
      ];
    const nourising = [
        {
            style:{ backgroundImage: 'url(/glutenfree.png)' },
            heading: "Gluten-Free Alternatives",
            content: "Explore the world of gluten-free flours and grains, ensuring your dishes cater to a diverse range of dietary preferences.",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
            style:{ backgroundImage: 'url(/plantbased.png)' },
            heading: "Plant-Based Cooking",
            content: "Delight in the realm of plant-based cooking with tips for crafting delicious vegetarian and vegan dishes.",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
            style:{ backgroundImage: 'url(/allergyfriend.png)' },
            heading: "Allergy-Friendly Substitutions",
            content: "Discover options for common allergens, ensuring everyone can savor the flavors of your culinary creations.",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        }
    ]
    const tips = [
        {
            image: <Image height={100} width={400} src={"/fried.png"} />,
            heading: "Fresh vs. Dried Herbs",
            content: "Discover the nuanced world of herbs. Learn when to opt for the freshness of herbs and when dried variants can amplify your culinary creations.",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/choosing.png"} />,
            heading: "Choosing Produce",
            content: "Selecting ripe fruits and vegetables is an art. Explore our insights to ensure optimal taste in every dish.",
            content2: "20 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/understanding.png"} />,
            heading: "Understanding Spices",
            content: "Enhance flavors by navigating the vast array of spices and seasonings. Uncover the secrets of creating dynamic taste profiles.",
            content2: "25 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/balancing.png"} />,
            heading: "Balancing Sweet and Savory",
            content: "Achieve the perfect symphony of flavors by mastering the art of balancing sweet and savory elements in your dishes",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/toosalty.png"} />,
            heading: "Too Salty? Too Sweet?Fixing Seasoning Issues",
            content: "Discover quick fixes for seasoning mishaps and ensure your dishes are perfectly balanced.",
            content2: "20 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/storage.png"} />,
            heading: "Storage Solutions",
            content: "Keep ingredients fresh and accessible with our storage solutions. Transform your kitchen into an organized oasis.",
            content2: "25 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%] cursor-pointer'>Read More</button>
        },
    ]
  return (
    <div className='bg-[#F0EBE1] p-3'>
        {/* BASICS */}
        <div className='lg:flex lg:items-center lg:justify-between sm:flex-col'>
            <h2 className='text-black font-bold'>MASTERING THE BASICS</h2>
            <div className='flex flex-row items-center gap-3'>
                <div className='bg-gray-300 rounded-full p-0.5 items-center'>
                 <AiOutlineArrowLeft/>
                </div>
                <div className='bg-gray-600 rounded-full p-0.5 items-center'>
                 <AiOutlineArrowRight/>
                </div>
            </div>
        </div>
        <div className='lg:grid lg:grid-cols-3 lg:ml-16 sm:p-1 bg-[#F0EBE1]'>
          {basics.map((basics, index) => (
            <div key={index} className=''>
              <div className=''>
                {basics.image}
              </div>
                <div className='flex flex-col bg-[#F0EBE1] text-black lg:w-[71%] sm:w-[100%] mb-3 p-2 shadow-lg rounded-br-xl rounded-bl-xl'>
                <h1 className='mt-2 font-bold'>{basics.heading}</h1>
                <p className='mt-2 text-[12px] text-gray-500'>{basics.content}</p>
                <div className='flex lg:flex-row lg:items-center sm:flex-col justify-between sm:mt-2'>
                  <p className='sm:mb-2 text-[12px] text-gray-500'>{basics.content2}</p>
                  {basics.button}
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* NOURISHING */}
        <div className='lg:flex lg:items-center lg:justify-between sm:flex-col bg-[#F0EBE1] sm:mb-2'>
            <h2 className='text-black font-bold uppercase'>Nourishing Every Palate</h2>
            <div className='flex flex-row items-center gap-3'>
                <div className='bg-gray-300 rounded-full p-0.5 items-center'>
                 <AiOutlineArrowLeft/>
                </div>
                <div className='bg-gray-600 rounded-full p-0.5 items-center'>
                 <AiOutlineArrowRight/>
                </div>
            </div>
        </div>
        <div className='lg:flex lg:flex-row sm:flex-col lg:items-center lg:justify-around lg:mt-2 lg:gap-5'>
            {nourising.map((item, index) => (
                <div key={index} className='bg-cover bg-no-repeat lg:w-[400px] lg:h-[400px] lg:mb-5 sm:mb-3 sm:p-2' style={item.style}>
                    <div className='flex flex-col items-center lg:mt-48 gap-5 ' >
                        <h1>{item.heading}</h1>
                        <p className='mt-2 text-[12px] text-white text-center'>{item.content}</p>
                        <div className='flex lg:flex-row lg:items-center sm:flex-col justify-between sm:mt-2 lg:gap-10'>
                            <p className='sm:mb-2 text-[12px] text-white'>{item.content2}</p>
                            {item.button}
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* TIPS */}
        <div className='lg:flex lg:items-center lg:justify-between sm:flex-col sm:mb-2 sm:p-3'>
            <h2 className='text-black font-bold uppercase'>TIps & tricks</h2>
            <div className='flex flex-row items-center gap-3'>
                <div className='bg-gray-300 rounded-full p-0.5 items-center'>
                 <AiOutlineArrowLeft/>
                </div>
                <div className='bg-gray-600 rounded-full p-0.5 items-center'>
                 <AiOutlineArrowRight/>
                </div>
            </div>
        </div>
        <div className='lg:grid lg:grid-cols-3 lg:ml-16'>
          {tips.map((tips, index) => (
            <div key={index} className=''>
              <div className=''>
                {tips.image}
              </div>
                <div className='flex flex-col bg-[#F0EBE1] text-black lg:w-[70%] sm:w-[100%] mb-3 p-2 shadow-lg rounded-br-xl rounded-bl-xl'>
                <h1 className='mt-2 font-bold'>{tips.heading}</h1>
                <p className='mt-2 text-[12px] text-gray-500'>{tips.content}</p>
                <div className='flex lg:flex-row lg:items-center sm:flex-col justify-between sm:mt-2'>
                  <p className='sm:mb-2 text-[12px] text-gray-500'>{tips.content2}</p>
                  {tips.button}
                </div>
              </div>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Mastering