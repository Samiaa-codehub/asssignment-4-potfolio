import React from 'react'
import project1 from "../../../public/project1.jpg"

import Image from 'next/image';

const projects = [
  {
    name: 'Sweet Delight website',
    description: 'A Next.js powered website to track a offering a vaeriety of freshly baked goods',
    techStack: ['Next.js', 'Node', 'CSS'],
    image: '/project5.jpg',
    github: 'https://github.com/Samiaa-codehub/assignment-4-samia',
  },
  {
    name: 'Dynamic Resume',
    description: 'A typescript-based interactive resume built with HTML,CSS and typescript,allowing user to showcases their skills dynamically',
    techStack: ['HTML','CSS','Typescript'],
    image: '/picture3.jpg',
    github: 'https://github.com/Samiaa-codehub/milestone-samia-3',
  },
  {
    name: 'Countdown Timer',
    description: 'A Next.js countdown timer displays the time remaining until a specfied future time.',
    techStack: ['Next.js','Node', 'Tailwind CSS'],
    image: '/pic3.jpg',
    github: 'https://github.com/Samiaa-codehub/countdown-timer',
    
  },
  {
    name:'Todo List App',
    description:'A to-do list is an application that allows users to create a list of tasks,marks them as complete,and delete them.',
    techStack:['Typescript'],
    image:'/picture5.jpg',
    github:'https://github.com/alsagithub/todo-app.git'

  },
  {
    name:'Calculator App',
    description:'A basic typescript calculator for performing essential arithematic operations',

    techStack:['typescript'],
    image:'/picture6.jpg',
    github:'https://github.com/alsagithub/simple-calculator1.git'
  },
  {
    name:'Dynamic & Editable Resume',
    description:'A Typescript-based interactive resume built HTML and CSS, allowing users to showcase their skills dynamically and editablity.',
    techStack:['HTML','CSS','Typescript'],
    image:'/picture4.jpg',
    github:''
  }
];

 const Work =()=> {
  return (
    <section id="projects" className="py-12 px-4 md:px-8 lg:px-16 mt-8">
      <h2 className="text-5xl mb-10 text-center font-[Rye] text-purple-800 butn1">Projects</h2>
      <p className='text-[white] mb-5 text-[20px] text-center'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est tenetur aut explicabo error, nostrum nihil! Vitae aperiam natus hic corporis, cum blanditiis, aspernatur doloremque ipsum provident quibusdam eum laudantium aliquam!</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col border p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={project.image}
              alt={project.name}
              width={500}
              height={300}
              className="rounded-lg mb-4 object-cover"
            />
            <h3 className="text-2xl font-semibold mb-2 text-purple-800">{project.name}</h3>
            <p className=" mb-3 text-[white]">{project.description}</p>
            <p className="text-sm text-gray-500 mb-4">
              <strong className='text-purple-800'>Tech Stack:</strong> {project.techStack.join(', ')}
            </p>
            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                className="text-blue-600 hover:text-blue-800"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}



export default Work