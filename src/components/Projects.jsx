import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  return (
    <>
      <div className="w-[95%] lg:w-full md:h-[650px] lg:mt-3 md:w-1/2 font-['Poppins'] h-auto mx-auto rounded-lg mt-5 bg-[#edd8b7] flex flex-col gap-1">
        <div className="head w-full p-5 flex justify-between">
          <h1 className="text-xl font-semibold">My Work</h1>
          <GoArrowUpRight size={25} />
        </div>
        <div className="img w-[92%] h-52 bg-gray-300 mx-auto rounded-xl">
          <img
            src="/project.jpg"
            className="w-full h-full object-cover rounded-xl"
            alt=""
          />
        </div>
        <div className="flex flex-col w-full gap-7 mt-10">
          <h1 className="text-3xl md:text-[24px] w-[85%] py-3 border-b border-black mx-auto lg:text-2xl font-semibold">
            React Buttrons Library
          </h1>
          <h1 className="text-3xl md:text-[24px] w-[85%] py-3 border-b border-black mx-auto lg:text-2xl font-semibold">
            Color Palletes
          </h1>
          <h1 className="text-3xl md:text-[24px] w-[85%] py-3 border-b border-black mx-auto lg:text-2xl font-semibold">
            Twitter Clone
          </h1>
        </div>
      </div>
    </>
  );
};

export default Projects;
