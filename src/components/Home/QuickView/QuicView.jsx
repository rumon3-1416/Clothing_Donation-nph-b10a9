import React from 'react';

import volunteerIcon from '../../../assets/icons/family.png';
import fundIcon from '../../../assets/icons/fund.png';
import donationIcon from '../../../assets/icons/clothes.png';

const QuicView = () => {
  return (
    <section className="py-16 grid grid-cols-3 gap-6">
      <div className="p-4 flex flex-col lg:flex-row items-center gap-4">
        <div className="bg-[#ec932d51] p-4 rounded-full">
          <img className="max-w-16" src={volunteerIcon} alt="Volunteer" />
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            Become a Volunteer
          </h3>
          <p className="text-gray-600 text-sm">
            We help companies develop powerful corporate social responsibility
          </p>
        </div>
      </div>

      <div className="p-4 flex flex-col lg:flex-row items-center gap-4">
        <div className="bg-[#ec932d51] p-4 rounded-full">
          <img className="max-w-16" src={fundIcon} alt="Volunteer" />
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            Quick Fundraise
          </h3>
          <p className="text-gray-600 text-sm">
            We help companies develop powerful corporate social responsibility
          </p>
        </div>
      </div>

      <div className="p-4 flex flex-col lg:flex-row items-center gap-4">
        <div className="bg-[#ec932d51] p-4 rounded-full">
          <img className="max-w-16" src={donationIcon} alt="Volunteer" />
        </div>
        <div className="text-center lg:text-left">
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-2">
            Start Donating
          </h3>
          <p className="text-gray-600 text-sm">
            We help companies develop powerful corporate social responsibility
          </p>
        </div>
      </div>
    </section>
  );
};

export default QuicView;
