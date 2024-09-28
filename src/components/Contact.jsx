import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
  return (
    <>
      <div className="w-[90%] font-['Poppins'] h-[300px] mx-auto rounded-lg mt-10 bg-[#edd8b7] flex flex-col gap-1">
        <div className="head w-full h-[25%] p-5 flex items-center justify-between">
          <h1 className="w-32">Get in Touch with me.</h1>
          <GoArrowUpRight size={25} />
              </div>
              <div className="w-full h-[75%] flex flex-col justify-end px-5 py-9">
                  <h1 className="text-4xl font-bold">Contact Me</h1>
              </div>
        </div>
    </>
  );
};

export default Contact;
