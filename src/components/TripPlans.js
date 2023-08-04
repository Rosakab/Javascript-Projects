import React from "react";

const TripPlans = () => {
  return (
    <div className="max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4">
      <div className=" grid grid-cols-2 grid-rows-6 h-[80vh]">
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/285938/pexels-photo-285938.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>
        <img
          className=" row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/1486121/pexels-photo-1486121.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/14265799/pexels-photo-14265799.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>
        <img
          className="row-span-2 object-cover w-full h-full p-2"
          src="https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="#"
        ></img>

<img
          className=" row-span-2 object-cover w-full h-full p-2"
          src="https://images.unsplash.com/photo-1475503572774-15a45e5d60b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="#"
        ></img>



      </div>
      <div className="flex flex-col h-full justify-center">
        <h3 className="text-5xl md:text-6xl font-bold">
          Enjoy Private Beaches
        </h3>
        <p className="text-2xl py-6">
          Plan your next trip, find amazing places, and take fascinating detours
          with the trip planner. Every trip is a road trip.
        </p>
        <p className="pb-6">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>

        <div>
          <button className="bg-black text-white border-black hover:shadow-xl mr-4">
            Read More
          </button>
          <button className="bg-black text-white border-black hover:shadow-xl">
            Book Your Trip
          </button>
        </div>
      </div>
    </div>
  );
};

export default TripPlans;
