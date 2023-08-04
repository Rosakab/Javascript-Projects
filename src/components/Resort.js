import React from "react";

const Resort = () => {
  return (
    <div className="max-w-[1100px] h-[480px] bg-blue-200 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4">
      <div className="lg:top-20 relative lg:col-span-1 col-span-2">
        <h3 className="text-2xl font-bold"> Relax and Enjoy</h3>
        <p className="pt-4">
          The point of using Lorem Ipsum is that it has a more-or-less normal
          distribution of letters, as opposed to using Content here, content
          here.
        </p>
        <div>
          <button className="bg-black text-white border-black hover:shadow-xl mr-4 mt-4">
            Read More
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 col-span-2 gap-2">
        <img
          className=" shadow-lg object-cover w-full h-full"
          src="https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>
        <img
          className=" shadow-lg row-span-2 object-cover w-full h-full"
          src="https://images.pexels.com/photos/1450363/pexels-photo-1450363.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>
        <img
          className="shadow-lg object-cover w-full h-full"
          src="https://images.pexels.com/photos/261169/pexels-photo-261169.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>
      </div>
    </div>
  );
};

export default Resort;
