 import Image from 'next/image'
import React from 'react'
import logo from "../../../public/logo.jpg"
import { FaGithub } from "react-icons/fa";

const Footer=()=>{

return(
    <footer className='flex md:mt-[25px] px-6 py-8'>
                <div className='flex'>
                  <Image
                  src={logo}
                  alt='logo'
                  width={50}
                  height={50}
                  className='rounded-full border-2 shadow-lg'
                  />
                  <span className='font-[Pacifico] text-purple-800 m-3 sm:text-[20px]'>
                    &copy;2024 Samia.All Rights Reserved</span>
                  </div>
                  <div className='flex mr-5 md:p-2 butn1'>
                  <a
                                       href='https://github.com/Samiaa-codehub'
                                       target='_blank'
                                       rel='noopener noreferrer'
                                       aria-label='Github'
                                       className='text-purple-800'>
                                                          <FaGithub  size={40}/>
                         </a>

                    
                  </div>
                
            
    
    </footer>
  )
}

export default Footer