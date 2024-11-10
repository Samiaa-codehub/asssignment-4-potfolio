import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail } from "react-icons/md";





const Contct = () => {
  return (
    <div id="contact" className="pt-32 container">
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-8">
          <h2 className="text-5xl text-purple-800 font-[Rye]">Contact Me</h2>
          <p className="text-[white] pt-2 text-[18px]">
            I would have to hear about your project and how I can help. Please
            fill in the form, and I'll get back to you as soon as possible
          </p>
        
        <div className="flex gap-3 items-center">
        <FaPhone size={30} /> (021) 111-2222


        </div>
        <div className="flex gap-3 items-center">
        <MdEmail  size={30}/> samia567@gmail.com

        </div>
        </div>
        <div className="space-y-8">
            <div className="flex flex-col gap-1">
                <label htmlFor="name" className="text-[20px] text-purple-700 font-[Rye]">Name:</label>
                <input type="text" className="h-[40px] bg-transparent  border border-accent rounded-md hover:border-purple-800 butn1" id="text"/>
            </div>
            <div className="flex flex-col gap-1">
                <label htmlFor="email" className="text-[20px] text-purple-700 font-[Rye]">Email:</label>
                <input type="email" className="h-[40px] bg-transparent border border-accent rounded-md hover:border-purple-800 butn1" id="email"/>
            </div>
            <div className="flex flex-col gap-1">
            <label htmlFor="message" className="text-[20px] text-purple-700 font-[Rye]">Message:</label>
            <textarea className="bg-transparent border border-accent rounded-md hover:border-purple-800 butn1" id="message"rows={8}></textarea>
            </div>
            <button className="border border-accent rounded-md text-purple-800 h-[50px] w-[100px] butn hover:border-purple-800 text-lg text-center md:m-2">Send</button>
        </div>
      </div>
    </div>
  );
};

export default Contct;
