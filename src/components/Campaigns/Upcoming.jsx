import React from 'react';

import clockIcon from '../../assets/icons/clock.png';
import gpsIcon from '../../assets/icons/gps-gold.png';
import { useNavigate } from 'react-router-dom';

const Upcoming = ({ data }) => {
  const { id, title, image, time, date, division } = data;

  const navigate = useNavigate();

  const handleMore = () => {
    localStorage.setItem('details', JSON.stringify(data));
    navigate('/donate-details');
  };

  return (
    <div
      className={`bg-white rounded-xl relative ${
        id % 2 === 0 ? `bottom-6` : `top-6`
      }`}
    >
      <div className="border-b-4 border-[#0a7558] relative">
        <img
          className="w-full aspect-video object-cover rounded-t-xl"
          src={image}
          alt={title}
        />
        <p className="bg-[#0a7558] text-white text-xs sm:text-sm font-medium inline-block px-4 py-1 rounded-t-lg absolute bottom-0 left-3 md:left-6">
          {date}
        </p>
      </div>

      {/* Desc */}
      <div className="p-4">
        <div className="mb-2 flex flex-wrap items-center gap-1 sm:gap-3">
          <div className="flex items-center gap-1">
            <img className="h-4 sm:h-5" src={clockIcon} alt="time" />
            <p className="text-xs sm:text-sm">{time}</p>
          </div>
          <div className="flex items-center gap-1">
            <img className="h-4 sm:h-5" src={gpsIcon} alt="time" />
            <p className="text-xs sm:text-sm">{division}</p>
          </div>
        </div>

        <h4 className="sm:text-xl font-semibold">{title}</h4>

        <p
          onClick={handleMore}
          className="text-[#0a7558] hover:text-[#EC922D] text-sm sm:text-base font-medium mt-2 cursor-pointer"
        >
          Read More
        </p>
      </div>
    </div>
  );
};

export default Upcoming;
