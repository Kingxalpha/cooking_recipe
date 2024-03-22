'use client'
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare, AiFillYoutube } from 'react-icons/ai'


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
      <div className='w-[100%] flex'>
        <nav className='flex justify-around w-[100%] items-center p-3 bg-[#F0EBE1] sm:w-[100%] sm:p-[10px]' onClick={toggleMenu}>
          <div>
            <Image height={100} width={100} src={"/Log.png"}/>
          </div>
          <ul className='flex flex-row items-center justify-between gap-10 text-black sm:hidden md:hidden min-lg:hidden text-2xl'>
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
              <Link href="/cookingtips">Cooking Tips</Link>
            </li>
          </ul>
          <div className='flex flex-row items-center gap-3 sm:hidden md:hidden'>
            <div className='bg-gray-500 p-1 flex items-center rounded-full lg:hidden'>
                <AiOutlineSearch/>
            </div>
            <div className='p-2 bg-black px-5 rounded-md cursor-pointer'>
                <p>Subcribe</p>
            </div>
          </div>

          <button className='bg-black pt-2 pb-2 pl-3 pr-3 rounded-xl text-white  lg:hidden sm:block transition duration-150 ease-in-out'>
            {isMenuOpen ? <RxCross1/> : <AiOutlineMenu /> }
          </button>
        </nav>
      </div>
      <ul className={`${isMenuOpen? "block bg-black absolute top-8 inset-0 h-[50vh] transition duration-300 ease-in-out"  : "hidden"  } flex flex-col gap-3 p-3 justify-center text-white h-[40vh] transition duration-300 ease-in-out lg:hidden mt-6 z-[98px]`}>
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
              <Link href="/cookingtips">Cooking Tips</Link>
            </li>
            <div className='flex items-center gap-5'>
            <div className='bg-gray-500 p-1 flex items-center rounded-full'>
                <AiOutlineSearch/>
            </div>
            <button className='bg-[#f29c33] pt-2 pb-2 pl-3 pr-3 rounded-xl text-white w-[30%] cursor-pointer'>Subscribe</button>
            </div>
            <div className='flex gap-3'>
                <AiFillFacebook/>
                <AiFillInstagram/>
                <AiFillTwitterSquare/>
                <AiFillYoutube/>
            </div>
      </ul>
      
    </div>
  )
}

export default Navbar