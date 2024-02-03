import React from 'react'
import Image from 'next/image'

function Mastering() {
    const basics = [
        {
          image: <Image height={100} width={400} src={"/imgs.png"} />,
          heading: "Knife Skills",
          content: "Unlock the art of precision in your kitchen with proper chopping, dicing, and slicing techniques. Elevate your culinary creations to new heights.",
          content2: "15 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
          image: <Image height={100} width={400} src={"/lemon.png"} />,
          heading: "Sauteing and Searing",
          content: "Achieve the perfect sear and elevate flavors in your dishes. Learn the secrets to sautéing like a pro and creating irresistible textures.",
          content2: "20 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
          image: <Image height={100} width={400} src={"/Quinoa.png"} />,
          heading: "Roasting Tips",
          content: "Ensure even cooking and unlock flavorful results with our expert roasting tips. From golden vegetables to succulent meats, master the art of roasting.",
          content2: "25 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
          image: <Image height={100} width={400} src={"/berry.png"} />,
          heading: "Prep Workstations:",
          content: "Efficiently organize your kitchen space for chopping, mixing, and cooking. Elevate your efficiency in the heart of your culinary domain.",
          content2: "15 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
          image: <Image height={100} width={400} src={"/spagheti.png"} />,
          heading: "Cleaning as You Go",
          content: "Maintain a tidy kitchen for stress-free cooking. Learn the art of cleaning as you go, turning every culinary endeavor into a seamless experience.",
          content2: "20 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>View Recipe</button>
        },
        {
          image: <Image height={100} width={400} src={"/grilled.png"} />,
          heading: "Recipe Modification",
          content: "Feel confident modifying recipes to suit your taste. Explore the art of culinary creativity in crafting dishes uniquely your own.",
          content2: "25 min - 01 JUN 23 ",
          button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
      ];
    const nourising = [
        {
            heading: "Gluten-Free Alternatives",
            content: "Explore the world of gluten-free flours and grains, ensuring your dishes cater to a diverse range of dietary preferences.",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
            heading: "Plant-Based Cooking",
            content: "Delight in the realm of plant-based cooking with tips for crafting delicious vegetarian and vegan dishes.",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
            heading: "Allergy-Friendly <br /> Substitutions",
            content: "Discover options for common allergens, ensuring everyone can savor the flavors of your culinary creations.",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        }
    ]
    const tips = [
        {
            image: <Image height={100} width={400} src={"/imgs.png"} />,
            heading: "Fresh vs. Dried Herbs",
            content: "Discover the nuanced world of herbs. Learn when to opt for the freshness of herbs and when dried variants can amplify your culinary creations.",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/lemon.png"} />,
            heading: "Choosing Produce",
            content: "Selecting ripe fruits and vegetables is an art. Explore our insights to ensure optimal taste in every dish.",
            content2: "20 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/Quinoa.png"} />,
            heading: "Understanding Spices",
            content: "Enhance flavors by navigating the vast array of spices and seasonings. Uncover the secrets of creating dynamic taste profiles.",
            content2: "25 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/imgs.png"} />,
            heading: "Balancing Sweet and Savory",
            content: "Achieve the perfect symphony of flavors by mastering the art of balancing sweet and savory elements in your dishes",
            content2: "15 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/lemon.png"} />,
            heading: "Too Salty? Too Sweet? Fixing <br /> Seasoning Issues",
            content: "Discover quick fixes for seasoning mishaps and ensure your dishes are perfectly balanced.",
            content2: "20 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
        {
            image: <Image height={100} width={400} src={"/Quinoa.png"} />,
            heading: "Storage Solutions",
            content: "Keep ingredients fresh and accessible with our storage solutions. Transform your kitchen into an organized oasis.",
            content2: "25 min - 01 JUN 23 ",
            button: <button className='p-2 rounded-xl border-2 border-gray-500 hover:border-none transition hover:text-white hover:bg-[#f29c33] sm:w-[100%]'>Read More</button>
        },
    ]
  return (
    <div>Mastering</div>
  )
}

export default Mastering