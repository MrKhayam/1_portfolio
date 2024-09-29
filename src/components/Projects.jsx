import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Projects = () => {
  return (
    <>
      <div className="w-[95%] font-['Poppins'] h-[700px] mx-auto rounded-lg mt-5 bg-[#edd8b7] flex flex-col gap-1">
        <div className="head w-full p-5 flex justify-between">
          <h1 className="text-xl font-semibold">My Work</h1>
          <GoArrowUpRight size={25} />
              </div>
              <div className="img w-[92%] h-56 bg-gray-300 mx-auto rounded-xl">
                  <img src="/project.jpg" className="w-full h-full object-cover rounded-xl" alt="" />
              </div>
              <div className="hr w-[93%] h-[1px] bg-black mx-auto mt-10 mb-7"></div>
              <h1 className="text-3xl font-semibold px-5">React Buttrons Library</h1>
              <div className="hr w-[93%] h-[1px] bg-black mx-auto my-7"></div>
              <h1 className="text-3xl font-semibold px-5">Color Palletes</h1>
              <div className="hr w-[93%] h-[1px] bg-black mx-auto my-7"></div>
              <h1 className="text-3xl font-semibold px-5">Twitter Clone</h1>
      </div>
    </>
  );
};

export default Projects;
