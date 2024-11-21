import React, { useEffect, useState } from 'react';

import campaignIcon from '../../assets/icons/campaigns.png';
import volunteerIcon from '../../assets/icons/volunteers.png';
import fundIcon from '../../assets/icons/fund.png';
import donorIcon from '../../assets/icons/donor.png';

const Help = () => {
  const [currTitle, setCurrTitle] = useState(1);

  useEffect(() => {
    document.title = 'How to Help | Clothing Donation';
  }, []);

  return (
    <div className="w-[95%] max-w-[1280px] mx-auto">
      <section className="bg-[#E6F1EF] px-3 md:px-6 lg:px-12 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 items-center gap-16 md:gap-8 lg:gap-12">
        {/* Cards */}
        <div>
          <div className="w-fit mx-auto grid grid-cols-2 gap-6">
            {/* Card */}
            <div className="bg-white p-4 rounded-xl flex flex-col items-center justify-center gap-4 relative top-6">
              <div className="bg-[#ec932d51] p-3 rounded-full">
                <img className="max-w-10" src={campaignIcon} alt="Volunteer" />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-1">
                  4850
                </h3>
                <p className="text-gray-600">Total Campaigns</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl flex flex-col items-center justify-center gap-4 relative bottom-6">
              <div className="bg-[#ec932d51] p-3 rounded-full">
                <img className="max-w-10" src={volunteerIcon} alt="Volunteer" />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-1">
                  2068
                </h3>
                <p className="text-gray-600">Happy Volunteers</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl flex flex-col items-center justify-center gap-4 relative top-6">
              <div className="bg-[#ec932d51] p-3 rounded-full">
                <img className="max-w-10" src={fundIcon} alt="Volunteer" />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-1">
                  3456
                </h3>
                <p className="text-gray-600">Released Funds</p>
              </div>
            </div>

            <div className="bg-white p-4 rounded-xl flex flex-col items-center justify-center gap-4 relative bottom-6">
              <div className="bg-[#ec932d51] p-3 rounded-full">
                <img className="max-w-10" src={donorIcon} alt="Volunteer" />
              </div>
              <div className="text-center">
                <h3 className="text-xl md:text-3xl font-bold text-gray-800 mb-1">
                  480
                </h3>
                <p className="text-gray-600">Satisfied Donors</p>
              </div>
            </div>
          </div>
        </div>

        {/* Frequent Ques */}
        <div className="">
          <h2 className="max-w-[400px] text-3xl font-bold text-gray-800 mb-5">
            Frequently Asked Questions
          </h2>

          {/* Ques */}
          <div>
            <div
              onClick={() => setCurrTitle(1)}
              className="collapse collapse-arrow border-b border-gray-300 mb-4"
            >
              <input type="radio" name="my-accordion-2" defaultChecked />
              <div
                className={`collapse-title ${
                  currTitle === 1 && 'text-[#0a7558]'
                } text-xl font-medium`}
              >
                <p>Can I change where I want my donation go?</p>
              </div>
              <div className="collapse-content">
                <p>
                  Adding an additional 2.5% to the amount of your donation will
                  help cover processing fees and other expenses associated with
                  the processing of your gift. This fee is not required to make
                  a financia gift. You may choose to add the additional amount
                  at the time of your online donation.
                </p>
              </div>
            </div>

            <div
              onClick={() => setCurrTitle(2)}
              className="collapse collapse-arrow border-b border-gray-300 mb-4"
            >
              <input type="radio" name="my-accordion-2" />
              <div
                className={`collapse-title ${
                  currTitle === 2 && 'text-[#0a7558]'
                } text-xl font-medium`}
              >
                <p>Where does my transaction processing fee go?</p>
              </div>
              <div className="collapse-content">
                <p>
                  Adding an additional 2.5% to the amount of your donation will
                  help cover processing fees and other expenses associated with
                  the processing of your gift. This fee is not required to make
                  a financia gift. You may choose to add the additional amount
                  at the time of your online donation.
                </p>
              </div>
            </div>

            <div
              onClick={() => setCurrTitle(3)}
              className="collapse collapse-arrow border-b border-gray-300 mb-4"
            >
              <input type="radio" name="my-accordion-2" />
              <div
                className={`collapse-title ${
                  currTitle === 3 && 'text-[#0a7558]'
                } text-xl font-medium`}
              >
                <p>How can I receive a refund?</p>
              </div>
              <div className="collapse-content">
                <p>
                  Adding an additional 2.5% to the amount of your donation will
                  help cover processing fees and other expenses associated with
                  the processing of your gift. This fee is not required to make
                  a financia gift. You may choose to add the additional amount
                  at the time of your online donation.
                </p>
              </div>
            </div>

            <div
              onClick={() => setCurrTitle(4)}
              className="collapse collapse-arrow border-b border-gray-300 mb-4"
            >
              <input type="radio" name="my-accordion-2" />
              <div
                className={`collapse-title ${
                  currTitle === 4 && 'text-[#0a7558]'
                } text-xl font-medium`}
              >
                <p>Is My credit card information secure?</p>
              </div>
              <div className="collapse-content">
                <p>
                  Adding an additional 2.5% to the amount of your donation will
                  help cover processing fees and other expenses associated with
                  the processing of your gift. This fee is not required to make
                  a financia gift. You may choose to add the additional amount
                  at the time of your online donation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
