import Image from 'next/image'
import React from 'react'
import { AiFillInstagram, AiFillYoutube, AiOutlineFacebook, AiOutlineFieldTime } from 'react-icons/ai'

function Description() {
  return (
    <div className='lg:flex lg:flex-row sm:flex-col p-5 bg-[#F0EBE1] text-black'>
       <div>
            <div className='sm:hidden'>
                <p className='text-[24px]'>Picture succulent chicken infused with the bright notes of lemon and the aromatic richness of garlic. It's a symphony of flavors that will have your taste buds dancing. Join us as we delve into the art of roasting and uncover the secrets behind creating a masterpiece that's not just a meal but a celebration of culinary craftsmanship.</p>
                <p className='text-[24px]'>As you preheat your oven, envision the kitchen filling with the tantalizing aroma of herbs and citrus, setting the stage for a delightful meal that transcends the ordinary. The anticipation builds as the chicken roasts to golden perfection, promising a dining experience that marries simplicity with sophistication. Whether you're a seasoned chef or a kitchen novice, this recipe invites you to become a culinary artist, creating a masterpiece that will leave a lasting impression on your guests and loved ones.</p>
            </div>
            <div>
                <h3 className='font-bold text-lg'>Let’s go over the basics– the do’s, and the don’ts– for How to Cook a chicken</h3>
                <h4 className='text-[#EE6352] font-bold'>Do’s:</h4>
                <div className='mb-3'>
                    <h3 className='font-bold'>Thoroughly Clean Hands and Surfaces: </h3>
                    <p className='lg:w-1/2'>Before and after handling raw chicken, ensure your hands, utensils, and surfaces are clean to prevent cross-contamination.</p>
                </div>
                <div className='mb-3'>
                    <h3 className='font-bold'>Use Separate Cutting Boards: </h3>
                    <p className='lg:w-1/2'>Dedicate specific cutting boards for raw chicken to avoid the spread of bacteria to other foods.</p>
                </div>
                <div className='mb-3'>
                    <h3 className='font-bold'>Check Internal Temperature: </h3>
                    <p className='lg:w-1/2'>Invest in a reliable meat thermometer to ensure the chicken reaches the safe internal temperature of 165°F (74°C).</p>
                </div>
                <h4 className='text-[#EE6352] font-bold'>Don'ts:</h4>
                <div className='mb-3'>
                    <h3 className='font-bold'>Thaw Chicken at Room Temperature:</h3>
                    <p className='lg:w-1/2'>Avoid thawing chicken on the counter. Instead, thaw it in the refrigerator to prevent bacterial growth.</p>
                </div>
                <div className='mb-3'>
                    <h3 className='font-bold'>Overcrowd the Pan: </h3>
                    <p className='lg:w-1/2'>When roasting, ensure the chicken pieces have space between them for even cooking. Overcrowding can lead to unevenly cooked chicken.</p>
                </div>
            </div>
            {/*  */}
            <div className=' lg:w-[100%] lg:hidden'>
         <div className='bg-white  text-black mb-5 p-3 rounded-lg'>
            <h2 className='text-[#EE6352] font-bold uppercase mb-2'>Ingredients</h2>
            <li>1 whole chicken (about 3-4 pounds)</li>
            <li>2 lemons, sliced</li>
            <li>6 cloves garlic, minced</li>
            <li>2 tablespoons olive oil</li>
            <li>1 teaspoon dried thyme</li>
            <li>1 teaspoon dried rosemary</li>
            <li>Salt and black pepper to taste</li>
         </div>
         <div className='bg-white  text-black mb-5 p-3 rounded-lg'>
            <h2 className='text-[#EE6352] font-bold uppercase mb-2'>Equipment Needed for Preparation</h2>
            <li>Roasting pan</li>
            <li>Meat thermometer</li>
            <li>Cutting board</li>
            <li>Kitchen twine </li>
         </div>
         <div className='bg-white text-black mb-5 p-3 rounded-lg'>
            <h2 className='text-[#EE6352] font-bold uppercase mb-2'>Nutritional Value</h2>
            <p>Per serving (based on a 4-pound chicken):</p>
            <p>Calories: ~250</p>
            <p>Protein: ~30g</p>
            <p>Total Fat: ~13g</p>
            <p>Carbohydrates: ~5g</p>
         </div>
         <div>
            <h2 className='font-normal w-[100%]'>
                Note: Nutritional values are approximate and may vary based on specific ingredients and portion sizes.
            </h2>
         </div>
       </div>
            
            <div className='mb-3'>
                <h2 className='uppercase font-bold lg:text-[40px]'>Instructions</h2>
                <p className='lg:w-1/2 sm:hidden'>This recipe goes beyond the basics, inviting you to savor the richness of a creamy tomato basil sauce that clings to each strand of perfectly cooked pasta. It's a celebration of simplicity, where every ingredient plays a crucial role in creating a dish that is as comforting as it is delightful.</p>
                <p className='lg:w-1/2 sm:hidden'>Allow the chicken to rest for 10 minutes before carving. This brief resting period is essential; it allows the juices to redistribute, ensuring each slice is succulent and bursting with flavor. As you carve into the golden exterior, be prepared for the enticing aroma that fills the air, signaling that your Citrus Infusion Delight is ready to be savored.</p>
            </div>
            <div className='lg:hidden mb-3'>
                <p>Biometric technology is making its mark in the beauty world. Customized skincare formulations based on individual biometric data, such as DNA and skin microbiome analysis, are becoming more prevalent. These personalized approaches ensure that beauty products are tailored to meet the specific needs of each user, 
                    unlocking the potential for truly individualized skincare.Virtual try-ons and augmented reality (AR) experiences are transforming the way we shop for beauty products online. Brands are integrating AR technology into their platforms, allowing users to virtually try on makeup, experiment with different hairstyles,
                     and test skincare products before making a purchase. This immersive online shopping experience enhances user engagement and confidence in product selection.
                </p>
            </div>
            <div>
                <div className='mb-3'>
                    <h2 className='text-[#EE6352] font-bold uppercase'>Preheat and Prepare</h2>
                    <li>Preheat your oven to 375°F (190°C).</li>
                    <li>Rinse the chicken inside and out, then pat it dry with paper towels.</li>
                </div>
                <div className='mb-3'>
                    <h2 className='text-[#EE6352] font-bold uppercase'>Citrus Infusion</h2>
                    <li>Carefully lift the skin of the chicken and rub minced garlic directly onto the meat.</li>
                    <li>Place lemon slices under the skin, ensuring they cover as much surface as possible.</li>
                </div>
            </div>
            <div className='mb-3'>
                <Image height={100} width={400} src={"/chick.png"}/>
            </div>
            <div className='mb-3'>
                <h2 className='text-[#EE6352] font-bold uppercase'>Herb Blend</h2>
                <li>In a small bowl, mix olive oil, dried thyme, dried rosemary, salt, and black pepper to create a herb-infused mixture.</li>
                <li>Brush the entire chicken with the herb-infused mixture, making sure it's evenly coated.</li>
                <li>Season the exterior with additional salt and black pepper to taste.</li>
            </div>
            <div className='mb-3'>
                <Image height={100} width={400} src={"/seasoned.png"}/>
            </div>
            <div className='mb-3'>
                <h2 className='text-[#EE6352] font-bold uppercase'>Roast to Perfection</h2>
                <li>Place the chicken in a roasting pan, breast side up.</li>
                <li>Roast in the preheated oven for approximately 1 hour or until the internal temperature reaches 165°F (74°C).</li>
                <li>Allow the chicken to rest for 10 minutes before carving.</li>
                <li>Serve with the pan juices and roasted lemon slices for an extra burst of flavor.</li>
            </div>
            <div className='mb-3'>
                <Image height={100} width={400} src={"/Video.png"}/>
            </div>
            <div className='mb-3'>
                <h2 className='text-[#EE6352] font-bold uppercase'>Pairing Suggestions</h2>
                <li>Side Dish: Serve alongside roasted vegetables or a simple green salad.</li>
                <li>Wine: Pair with a crisp white wine or a light rosé for a well-balanced meal.</li>
            </div>
            <div className='mb-2'>
                <h4> <span className='text-[#EE6352] font-bold underline'>Roasted Vegetables: </span>The vibrant flavors of the roasted chicken complement beautifully with seasonal vegetables.</h4>
            </div>
            <div className='mb-2'>
                <h4> <span className='text-[#EE6352] font-bold underline'>Herb-infused Quinoa: </span>Create a wholesome meal by serving it alongside a bed of herb-infused quinoa.</h4>
            </div>
            <div className='mb-3'>
                <p>The combination of fresh lemon and aromatic garlic creates a citrus-infused masterpiece that takes the classic roast chicken to a whole new level. 
                    The acidity of the lemons not only adds brightness but also helps to tenderize the meat, resulting in a juicy and flavorful dish.
                    Whether you're hosting a family dinner or looking for a show-stopping centerpiece for a special celebration, this Lemon Garlic Roasted Chicken is the answer.
                    The simplicity of the ingredients allows the natural flavors to shine, making it a versatile and impressive dish.
                </p>
            </div>
            <div className='flex items-center justify-between border-2 border-black rounded-xl p-1 lg:w-[35%]'>
                <p>SHARE</p>
                <div className='flex items-center gap-4'>
                    <AiFillInstagram/>
                    <AiFillYoutube/>
                    <AiOutlineFacebook/>
                </div>
            </div>
            <br />
            <div className='lg:flex sm:flex-col items-center gap-5'>
                <Image height={100} width={300} src={"/author.png"}/>
                <div>
                    <h2 className='font-bold mb-2'>Isabella Russo</h2>
                    <p className='mb-2'>In the world of pots and pans, I'm on a mission to turn every meal into a masterpiece. Cooks Delight is not just a blog; 
                        it's a shared space where the love for food transcends boundaries. 
                        Here, we celebrate the art of crafting meals that not only nourish the body but also feed the soul.
                    </p>
                    <button className='p-1 rounded-xl border-black border cursor-pointer'>Learn More</button>
                </div>
            </div>
       </div>
       {/*  */}
       <div className=' lg:w-[100%] sm:hidden'>
         <div className='bg-white  text-black mb-5 p-3 rounded-lg'>
            <h2 className='text-[#EE6352] font-bold uppercase mb-2'>Ingredients</h2>
            <li>1 whole chicken (about 3-4 pounds)</li>
            <li>2 lemons, sliced</li>
            <li>6 cloves garlic, minced</li>
            <li>2 tablespoons olive oil</li>
            <li>1 teaspoon dried thyme</li>
            <li>1 teaspoon dried rosemary</li>
            <li>Salt and black pepper to taste</li>
         </div>
         <div className='bg-white  text-black mb-5 p-3 rounded-lg'>
            <h2 className='text-[#EE6352] font-bold uppercase mb-2'>Equipment Needed for Preparation</h2>
            <li>Roasting pan</li>
            <li>Meat thermometer</li>
            <li>Cutting board</li>
            <li>Kitchen twine </li>
         </div>
         <div className='bg-white text-black mb-5 p-3 rounded-lg'>
            <h2 className='text-[#EE6352] font-bold uppercase mb-2'>Nutritional Value</h2>
            <p>Per serving (based on a 4-pound chicken):</p>
            <p>Calories: ~250</p>
            <p>Protein: ~30g</p>
            <p>Total Fat: ~13g</p>
            <p>Carbohydrates: ~5g</p>
         </div>
         <div>
            <h2 className='font-normal w-[100%]'>
                Note: Nutritional values are approximate and may vary based on specific ingredients and portion sizes.
            </h2>
         </div>
       </div>

    </div>
  )
}

export default Description