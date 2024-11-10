"use client";
import Image from 'next/image'
import React, { useState } from 'react'
import logo from "../../../public/logo.jpg"
import Link from 'next/link'
import { FaGithub } from "react-icons/fa";

const Nav=()=> {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className=' text-white'>
      <div className='flex items-center justify-between p-4'>
        <div className='flex items-center'>
          <Image
            src={logo}
            alt='logo'
            width={50}
            height={50}
            className='rounded-full border-2 shadow-lg'
          />
          <span className='font-[Pacifico] text-purple-800 m-3 text-[20px]'>
            Samia
          </span>
        </div>
        <nav className='md:flex hidden gap-10 text-2xl'>
          <Link href={"#home"} className='hover:text-purple-200 butn'>Home</Link>
          <Link href={"#about"} className='hover:text-purple-200 butn'>About</Link>
          <Link href={"#project"} className='hover:text-purple-200 butn'>Work</Link>
          <Link href={"#contact"} className='hover:text-purple-200 butn'>Contact</Link>
        </nav>
        <div className=' items-center'>
          <a
            href='https://github.com/Samiaa-codehub'
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Github'
            className='text-purple-800 butn1'
          >
            <FaGithub size={40}
            />
          </a>
        </div>
        <button className='md:hidden text-2xl' onClick={toggleMenu}>
          ☰
        </button>
      </div>
      {isMenuOpen && (
        <nav className='md:hidden bg-purple-800 text-white p-4'>
          <ul className='flex flex-col items-center gap-4 text-2xl'>
            <li><Link href="#home" onClick={() => setIsMenuOpen(false)}>Home</Link></li>
            <li><Link href="#about" onClick={() => setIsMenuOpen(false)}>About</Link></li>
            <li><Link href="#project" onClick={() => setIsMenuOpen(false)}>Work</Link></li>
            <li><Link href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Nav;