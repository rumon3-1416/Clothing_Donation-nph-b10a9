import PropTypes from 'prop-types';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Slide = ({ offerData }) => {
  const { productId, productImage, heading, description, offer } = offerData;

  const navigate = useNavigate();

  return (
    <div className="relative">
      <img
        className="w-full aspect-[1/1] sm:aspect-[4/3] md:aspect-[2/1] object-cover"
        src={productImage}
        alt=""
      />

      <div className="bg-[#0000004d] w-full text-center flex flex-col items-center justify-center absolute inset-0">
        <h1 className="text-white text-xl sm:text-3xl md:text-5xl font-bold mb-2 md:mb-6">
          {offer}
        </h1>
        <h2 className="text-[#ffffffe7] max-w-[80%] text-sm sm:text-lg md:text-2xl lg:text-3xl font-semibold">
          {heading}
        </h2>
        <p className="text-[#ffffffd4] w-[80%] max-w-[796px] text-xs sm:text-sm md:text-base font-medium mt-4 mb-0 lg:mb-4">
          {description}
        </p>
        <button
          onClick={() => {
            navigate(`/gadget_details/${productId}`);
            localStorage.setItem('details', JSON.stringify(offerData));
          }}
          className="bg-[#9538e2] text-white text-sm md:text-lg lg:text-xl font-semibold px-4 lg:px-6 py-2 lg:py-3 mt-4 lg:mt-6 rounded-full"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

Slide.propTypes = {
  offerData: PropTypes.object,
};

export default Slide;
