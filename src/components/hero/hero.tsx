import Image from "next/image";
import image from "../../../public/image.png"



const Hero = () => {
  return (
    <div>
      <div>
        <div className="hero min-h-[80vh]  custom-img p-6 md:p-10 lg:p-20 m-15 mt-5">
          <div className="hero-overlay flex flex-col lg:flex-row items-center lg:justify-between">
            <div className="hero-content text-neutral-content lg:max-w-md lg:text-left text-center">
              <div className="max-w-md">
                <h1 className="mb-3 text-4xl md:text-5xl font-bold   text-[white]">Hello! I'm Samia</h1>
                <br></br>
                <h1 className="mb-3 text-3xl md:text-5xl text-purple-800  font-[Rye] butn1">
                  Front-End Developer
                </h1>
                <p className="mb-5 font-thin text-lg md:text-xl my-5 text-[white]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit magnam labore excepturi, numquam voluptatibus, necessitatibus quasi deleniti at nesciunt amet debitis nihil sed architecto quas blanditiis eius ab corporis. Quibusdam?
                </p>
                <button className="text-[white] butn text-[20px]  hover:text-purple-800 px-6 py-2">Contact Me</button>
                <hr className="w-[150px]  mx-auto lg:mx-0 "/>
              </div>
            </div>
            <div className="flex mt-10 lg:mt-0">
                <Image
                src={image}
                alt="image"
                className="w-[200px] h-[300px] md:w-[250px] md:h-[350px] lg-w-[300px] lg:h-[400px]  rounded-tl-[150px] rounded-br-[150px] m-[15px] p-2 border-[5px]  border-[white]  opacity-0px gap-0px"
                />
            </div>
          </div>
        </div>
            </div>
            </div>
  );
};
export default Hero;