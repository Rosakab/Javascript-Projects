import React from "react";

const Hero = () => {
  return (
    <div className="w-full h-screen">
      <img
        className="w-full h-screen top-0 left-0 object-cover"
        src="https://images.pexels.com/photos/1424788/pexels-photo-1424788.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="#"
      >
      </img>
      <div className= "bg-black/30 absolute top-0 left-0 w-full h-screen"></div>
      <div className="absolute top-0 w-full h-full text-white flex flex-col justify-center ">
        <div className= "md:left-[10%] max-w-[1100px] m-auto absolute p-4">
         
          <h1 className="font-bold text-5xl md:text-7xl drop-shadow-2xl"> Welcome to Your Next Vacation</h1>
          <p className="max-w-[600px] drop-shadow-2xl py-4 text-xl">Enjoy a day at a private beach in peace. No locals 
             on the beach no the crowds on the water and no water sports activities.</p>
             <button className= "bg-white text-black font-bold  hover:bg-gray-300">
              Book Now
             </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
