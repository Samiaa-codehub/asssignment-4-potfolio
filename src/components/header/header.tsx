import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.jpg"
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

function Header() {
  return (
    <div className='flex'>
                <div className='flex'>
                  <Image
                  src={logo}
                  alt='logo'
                  width={50}
                  height={50}
                  className='rounded-full border-2 shadow-lg'
                  />
                  <span className='font-[Pacifico] text-purple-800  m-3 text-[20px]'>
                    Samia</span>
                  </div>
                  <nav className='md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-1  md:flex flex-raw   justify-between items-center text-base  gap-10 hidden lg:gap20 text-2xl'>
                    <Link href={"#home"} className='hover:text-purple-900 text-[white] butn'>Home</Link>
                    <Link href={"#about"} className='text-[white] hover:text-purple-900 butn'>About</Link>
                    <Link href={"#project"} className='text-[white] hover:text-purple-900 butn'>Work</Link>
                    <Link href={"#contact"} className='text-[white] hover:text-purple-900 butn'>Contact</Link>
                  </nav>
                  <div className='flex mr-5 md:p-2 butn1'>
                    <a
                    href='https://github.com/Samiaa-codehub'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='Github'
                    className='text-purple-800'
                    >
                  <FaGithub  size={40}/>
                  </a>

                  </div>
                
            
    
    </div>
  )
}

export default Header