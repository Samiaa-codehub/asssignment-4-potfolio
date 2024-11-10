import React from 'react';

const About = () => {
  return (
    <div>
        <div className='px-5 py-8'><h1 className='text-purple-800 text-5xl mb-5 ml-5 mt-8 font-[Rye]'>About</h1>
        <p className='text-[white] mb-5 ml-5 text-[20px] font-[Clinzel]'>Hello, my name is samia.I am passionate about technology and web development, especially focusing on creating engaging and efficient user experience. I have been working  on improving my skills in HTML,CSS and Typescript and I am currently learing Next.js to build responsive and dynamic websites. In my free time,I enjoy exploring new place,and I am always eager to learn new things,whether it&apos;s about coding or different cultures.I am excited to take on new challenges and grow as a developer</p>
        <div className='flex flex-col md:flex-row items-center justify-center gap-10 mt-5'>
            <div className='text-center'>
                <h2 className='text-purple-800 text-4xl font-[Rye] mt-2 butn1'>Typescript</h2>
                <p className='text-[white] text-[16px]  mt-2'>8+Month Experience</p>
                <hr className='w-[200px] mx-auto mt-2 '/>
            </div>
            <div>
                <h2 className='text-purple-800 text-4xl font-[Rye] mt-2 butn1'>HTML,CSS</h2>
                <p className='text-[white] text-[16px]  mt-2'>2+ Month Experience</p>
                <hr className='w-[200px] mx-auto mt-2'/>
            </div>
            <div>
            <h2 className='text-purple-800 text-4xl font-[Rye] mt-2 butn1'>Next.js</h2>
            <p className='text-[white] text-[16px] mt-2'>2+Month Experience</p>
            <hr className="w-[200px] mx-auto  mt-2 "/>

            </div>
        </div>
        </div>
    </div>
  )
}

export default About
