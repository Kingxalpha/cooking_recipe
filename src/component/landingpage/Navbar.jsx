'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className='w-[100%] flex'>
        <nav className='flex justify-around w-[100%] items-center p-3 bg-[#fff] sm:w-[100%] sm:p-[10px]' onClick={toggleMenu}>
          <div>
            <Image height={100} width={100} src={"/Log.png"}/>
          </div>
          <ul className='flex flex-row items-center justify-between gap-10 text-black sm:hidden md:hidden text-2xl'>
            <li className='cursor-pointer hover:text-[#f29c33]'>
              <Link href="/">
                Home
              </Link>
            </li>
            <li className='cursor-pointer hover:text-[#f29c33]'>
            <Link href="/about">About Us</Link>
            </li>
            <li className='cursor-pointer hover:text-[#f29c33]'>
              <Link href="/recipes">Recipes</Link>
            </li>
            <li className='cursor-pointer hover:text-[#f29c33]'>
              <Link href="/cooking-tips">Cooking Tips</Link>
            </li>
          </ul>
          <div className='flex flex-row items-center gap-3 sm:hidden md:hidden'>
            <div className='bg-gray-500 w-7 h-7 flex items-center rounded-full'>
                <FontAwesomeIcon icon={faSearch} />
            </div>
            <div className='p-2 bg-black px-5 rounded-md'>
                <p>Subcribe</p>
            </div>
          </div>

          <button className='bg-black pt-2 pb-2 pl-3 pr-3 rounded-xl text-white  lg:hidden sm:block transition duration-150 ease-in-out'>
            {isMenuOpen ? <RxCross1/> : <AiOutlineMenu /> }
          </button>
          <button className='bg-Button pt-2 pb-2 pl-3 pr-3 text-lg rounded-xl md:hidden sm:hidden text-white'>Join Us</button>
        </nav>
      </div>
      <ul className={`${isMenuOpen? "block" : "hidden"  } flex flex-col gap-3 items-center justify-center text-white h-[40vh] transition duration-300 ease-in-out lg:hidden mt-6 z-[999]`}>
        <li className='cursor-pointer'>Home</li>
        <li className='cursor-pointer'>About Us</li>
        <li className='cursor-pointer'>Recipes</li>
        <li className='cursor-pointer'>Cooking Tips</li>
        <div className='bg-gray-500 flex items-center w-7 h-7 rounded-full'>
            <FontAwesomeIcon icon={faSearch} />
        </div>
        <button className='bg-Button pt-2 pb-2 pl-3 pr-3 rounded-xl text-white w-[30%]'>Subscribe</button>
      </ul>
    </div>
  )
}

export default Navbar