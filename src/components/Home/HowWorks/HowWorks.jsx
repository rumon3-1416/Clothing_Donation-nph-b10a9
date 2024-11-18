import React from 'react';

import clothesIcon from '../../../assets/images/charity.png';
import contactIcon from '../../../assets/images/customer-service.png';
import shareIcon from '../../../assets/images/share.png';

const HowWorks = () => {
  return (
    <section className="bg-[#FEFAF6] p-12 mt-24">
      <div className="mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">How It Works</h2>

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

        {/* Collection Points */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mb-6">
            Our Collection Points
          </h3>
          <ul className="text-left mx-auto w-full max-w-md">
            <li className="mb-4">
              <strong>Dhaka:</strong> House 12, Road 5, Dhanmondi, Dhaka.
              Contact: 01812345678
            </li>
            <li className="mb-4">
              <strong>Sylhet:</strong> House 23, Road 9, Zindabazar, Sylhet.
              Contact: 01712345678
            </li>
            <li>
              <strong>Rajshahi:</strong> House 45, Road 10, Rajshahi City.
              Contact: 01612345678
            </li>
          </ul>
        </div>

        {/* Supported Divisions */}
        <div>
          <h3 className="text-2xl font-bold text-gray-800 mt-12 mb-6">
            Where We Operate
          </h3>
          <p className="text-gray-600">
            We currently support donations in the following divisions:
          </p>
          <div className="flex flex-wrap justify-center mt-4">
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
              <span
                key={division}
                className="bg-gray-200 text-gray-700 px-4 py-2 m-2 rounded"
              >
                {division}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWorks;
