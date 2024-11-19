import React from 'react';

import teamImg from '../../../assets/images/team.png';
import gpsImg from '../../../assets/icons/gps.png';
import callImg from '../../../assets/icons/phone.png';

const Contact = () => {
  return (
    <section className="text-center p-8 mt-24">
      <p className="text-[#EC922D] text-lg font-semibold mb-4">Contact Us</p>
      <h2 className="max-w-[400px] text-3xl font-bold text-gray-800 mx-auto mb-12">
        We Love to Hear from Our Happy Donors
      </h2>

      <div className="text-left grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <div className="bg-[#E5E6EA] rounded-xl mb-5">
            <img src={teamImg} alt="our team" />
          </div>
          <p className="text-gray-600 text-sm mb-4">
            There are many variations of poor people available but majority have
            suffered cold in some form, by injected randomize words even
            slightly believable.
          </p>

          <div className="mb-3 flex items-center gap-3">
            <div className="border-2 border-[#A7A7A7] p-2 rounded-full">
              <img className="size-6" src={callImg} alt="" />
            </div>
            <div>
              <p className="text-xl font-bold">Phone</p>
              <p className="text-[#A7A7A7]">+8801509876543</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="border-2 border-[#A7A7A7] p-2 rounded-full">
              <img className="size-6" src={gpsImg} alt="" />
            </div>
            <div>
              <p className="text-xl font-bold">Address</p>
              <p className="text-[#A7A7A7]">
                House 12, Road 5, Dhanmondi, Dhaka
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <div>
          <form
            onSubmit={e => {
              e.preventDefault();
              e.target.reset();
            }}
            className="bg-white px-8 py-10 rounded-2xl grid grid-cols-1"
          >
            <input
              className="bg-[#F7F7F7] px-4 py-3 mb-3 rounded-lg outline-none text-gray-800"
              type="text"
              placeholder="Name"
            />
            <input
              className="bg-[#F7F7F7] px-4 py-3 mb-3 rounded-lg outline-none text-gray-800"
              type="email"
              placeholder="Email"
              required
            />
            <input
              className="bg-[#F7F7F7] px-4 py-3 mb-3 rounded-lg outline-none text-gray-800"
              type="text"
              placeholder="Phone"
            />
            <textarea
              className="bg-[#F7F7F7] px-4 py-3 mb-6 rounded-lg outline-none text-gray-800 resize-none"
              rows="3"
              placeholder="Message"
              required
            ></textarea>
            <button className="bg-[#0a7558] text-white font-semibold px-6 py-3 rounded-xl me-auto">
              Send a message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
