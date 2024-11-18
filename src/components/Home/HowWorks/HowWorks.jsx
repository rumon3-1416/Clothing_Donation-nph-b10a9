import React from 'react';

import clothesIcon from '../../../assets/images/charity.png';
import contactIcon from '../../../assets/images/customer-service.png';
import shareIcon from '../../../assets/images/share.png';

const HowWorks = () => {
  return (
    <section className="bg-[#FEFAF6] p-12 mt-24">
      <div className="mx-auto text-center">
        <p className="text-[#EC922D] text-lg font-semibold mb-4">
          How It Works
        </p>
        <h2 className="text-3xl font-bold text-gray-800 mb-8">
          How You Can Make a Difference
        </h2>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="p-6 bg-white shadow-md hover:shadow-xl rounded-2xl cursor-pointer">
            <img
              className="w-4/12 max-w-32 mx-auto mb-6"
              src={clothesIcon}
              alt="Clothes"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Step 1: Gather Your Warm Clothes
            </h3>
            <p className="text-gray-600">
              Look for gently used or new winter clothing like jackets,
              sweaters, and blankets.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md hover:shadow-xl rounded-2xl cursor-pointer">
            <img
              className="w-4/12 max-w-32 mx-auto mb-6"
              src={contactIcon}
              alt="Clothes"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Step 2: Contact or Visit a Collection Point
            </h3>
            <p className="text-gray-600">
              Locate your nearest collection point below or contact us for
              pickup assistance.
            </p>
          </div>
          <div className="p-6 bg-white shadow-md hover:shadow-xl rounded-2xl cursor-pointer">
            <img
              className="w-4/12 max-w-32 mx-auto mb-6"
              src={shareIcon}
              alt="Clothes"
            />
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              Step 3: Spread the Word
            </h3>
            <p className="text-gray-600">
              Share our mission with your friends and family to help more
              people.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Collection Points */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Our Collection Points
            </h3>
            <ul className="text-left">
              <li className="mb-4 border-b border-gray-300 pb-2">
                <strong>Dhaka:</strong> House 12, Road 5, Dhanmondi, Dhaka.
                <br /> Contact: 01812345678
              </li>
              <li className="mb-4 border-b border-gray-300 pb-2">
                <strong>Sylhet:</strong> House 23, Road 9, Zindabazar, Sylhet.
                <br /> Contact: 01712345678
              </li>
              <li className="border-b border-gray-300 pb-2">
                <strong>Rajshahi:</strong> House 45, Road 10, Rajshahi City.
                <br /> Contact: 01612345678
              </li>
            </ul>
          </div>

          {/* Operate */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Where We Operate
            </h3>
            <p className="text-gray-600 mb-4">
              We currently support donations in the following divisions:
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {[
                'Dhaka',
                'Sylhet',
                'Rajshahi',
                'Chattogram',
                'Khulna',
                'Barishal',
                'Mymensingh',
                'Rangpur',
                'Comilla',
              ].map(division => (
                <div
                  key={division}
                  className="bg-[#0a755812] border border-[#0a755882] text-[#0a7558] text-center py-3 px-4 rounded hover:bg-[rgba(10,117,88,0.2)] shadow-sm transition"
                >
                  {division}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
