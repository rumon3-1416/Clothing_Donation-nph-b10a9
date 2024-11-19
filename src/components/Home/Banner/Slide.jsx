import React from 'react';
import { useNavigate } from 'react-router-dom';

const Slide = ({ carousel }) => {
  const { id, image, title, description, contactInfo } = carousel;

  const navigate = useNavigate();

  return (
    <div className="relative">
      <img
        className="w-full aspect-[1/1] sm:aspect-[4/3] md:aspect-[2/1] object-cover"
        src={image}
        alt=""
      />

      <div className="bg-[#00000060] text-white w-full text-center flex flex-col items-center justify-center absolute inset-0">
        <h2 className="max-w-[80%] text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold lg:font-bold">
          {title}
        </h2>
        <p className="w-[80%] max-w-[796px] text-sm sm:text-md md:text-lg font-medium mt-4 mb-0 lg:mb-4">
          {description}
        </p>
        <p className="max-w-[80%] text-sm sm:text-md md:text-lg font-medium mb-0">
          Contact: {contactInfo}
        </p>
        <button
          onClick={() => {
            navigate(`/gadget_details`);
            localStorage.setItem('details', JSON.stringify(carousel));
          }}
          className="bg-[#0a7558] text-sm md:text-lg lg:text-xl font-semibold px-4 lg:px-6 py-2 lg:py-3 mt-4 lg:mt-6 rounded-full"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default Slide;
