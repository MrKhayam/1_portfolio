import React from 'react'

const Profile = () => {
  return (
    <>
      <div className="w-[95%] lg:w-[40%] lg:mt-0 lg:h-full md:w-full mx-auto h-[500px] bg-white mt-5 rounded-lg">
        <img
          src="/profile.jpg"
          className="w-full h-full object-cover filter grayscale rounded-lg"
          alt=""
        />
        
      </div>
    </>
  );
}

export default Profile
