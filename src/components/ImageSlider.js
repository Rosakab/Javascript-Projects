import React, { useState } from "react";
import { slides } from "../imageData";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      <p className="text-gray-800 font-bold text-xl text-center md:text-4xl mt-2">
        The Best Food For People Who Love To Eat!
      </p>
      <div className="max-w-[1100px] h-[600px] w-full m-auto py-16 px-4 relative group ">
        <div
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        ></div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full
      p-2 group-hover:bg-black/50 text-white cursor-pointer"
        >
          <MdKeyboardArrowLeft onClick={prevSlide} />
        </div>
        <div
          className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full
      p-2 group-hover:bg-black/50 text-white cursor-pointer"
        >
          <MdKeyboardArrowRight onClick={nextSlide} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
