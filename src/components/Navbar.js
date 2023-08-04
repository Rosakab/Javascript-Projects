import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle= ()=>{
    setToggle(!toggle);
  }

  return (
    <div className="absolute w-full p-4 flex justify-between items-center">
      <h1 className="text-white font-bold font-serif text-2xl z-20">HiTravel.</h1>
      <IoIosMenu onClick={handleToggle}
      className="text-white z-20 cursor-pointer" size={40} />

      <div
        className={
          toggle
            ? "ease-in duration-500 fixed text-gray-300 left-0 top-0 w-full md:w-3/4 h-screen bg-black/90 px-4 py-7 flex flex-col z-10"
            : "absolute top-0 h-screen left-[-100%] ease-in duration-500 z-10"
        }
      >
        <ul className=" flex flex-col fixed  w-full md:w-3/4 h-full items-center justify-center">
          <li className="font-serif p-8 font-bold text-3xl">Home</li>
          <li className="font-serif p-8 font-bold text-3xl">Destinations</li>
          <li className="font-serif p-8 font-bold text-3xl">Activities</li>
          <li className="font-serif p-8 font-bold text-3xl">Gallery</li>
          <li className="font-serif p-8 font-bold text-3xl">Reservation</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
