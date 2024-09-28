import React from "react";

const About = () => {
  return (
    <>
      <div className="w-[90%]  h-[300px] mx-auto rounded-lg mt-10 bg-[#edd8b7] flex flex-col gap-1">
        <div className="w-full h-[20%] rounded-lg flex justify-start">
          <img
            className="bg-transparent h-full rounded-lg opacity-[0.5] mt-4 ml-4"
            src="/flower.png"
            alt=""
          />
        </div>
        <div className="w-full h-[80%] p-3 flex flex-col justify-end">
          <h1 className='font-["Poppins"] text-lg'>
            Hi, I am Khayam Ijaz a Frontend Developer having more than 3 Years of Experience in Coding. I know all the cool technologies and tools used to build engaging frontend designs.
          </h1>
        </div>
      </div>
    </>
  );
};

export default About;
