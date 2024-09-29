import React from 'react'

const Intro = () => {
  return (
    <>
      <div className="w-[95%] lg:w-[50%] lg:h-full md:w-[100%] h-[300px] mx-auto rounded-lg mt-5 bg-[#edd8b7] flex flex-col gap-1">
        <div className="w-full h-[40%] rounded-lg flex justify-end">
          <img
            className="bg-transparent h-full rounded-lg opacity-[0.5] mt-4 mr-4"
            src="/flower.png"
            alt=""
          />
        </div>
        <div className="w-full h-[60%] p-3 flex flex-col justify-end">
          <h1 className='font-["Poppins"] font-bold text-2xl'>
            Crafting interactive, responsive, and visually stunning web
            experiences with code and creativity.
          </h1>
        </div>
      </div>
    </>
  );
}

export default Intro
