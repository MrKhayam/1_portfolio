import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Contact = () => {
  return (
    <>
      <div className="w-[95%] lg:h-full lg:w-[55%] md:w-1/2 font-['Poppins'] h-[300px] md:h-[650px] mx-auto rounded-lg mt-5 md:my-5 bg-[#edd8b7] flex flex-col gap-1">
        <div className="head w-full h-[25%] md:h-[10%] lg:h-[20%] p-5 flex items-center justify-between">
          <h1 className="w-32">Get in Touch with me.</h1>
          <GoArrowUpRight size={25} />
              </div>
              <div className="w-full h-[75%] md:h-[90%] flex flex-col justify-end px-5 py-9">
                  <h1 className="text-4xl font-bold">Contact Me</h1>
              </div>
        </div>
    </>
  );
};

export default Contact;
