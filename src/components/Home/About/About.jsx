import React from 'react';

import donateImage from '../../../assets/images/Donate.png';
import missionIcon from '../../../assets/icons/target.png';
import contributeIcon from '../../../assets/icons/donation.png';

const About = () => {
  return (
    <section className="bg-[#0a75580e]">
      <div className="grid md:grid-cols-2 items-center">
        <div className="pt-6 px-6">
          <img
            className="max-h-[570px] aspect-square md:aspect-[3/4] object-contain mx-auto"
            src={donateImage}
            alt="about us"
          />
        </div>

        <div className="p-6">
          <p className="text-[#EC922D] text-lg font-semibold mb-4">About Us</p>
          <h1 className="text-4xl leading-[44px] font-semibold">
            Helping Each Other Can Make Our Country Better
          </h1>
          <p className="text-[#32443f] text-lg mt-6">
            We help provide necessities to help people in need around Our
            Country.
          </p>

          <div className="mt-10 flex items-start gap-4">
            <div className="bg-[#ff008052] p-2 rounded-full">
              <img className="w-12" src={missionIcon} alt="mission" />
            </div>
            <div>
              <h5 className="text-lg font-semibold">Our Mission</h5>
              <p className="text-[#32443f] text-justify">
                Bring you donations to the right people is our mission. We try
                our best to help cold.
              </p>
            </div>
          </div>

          <div className="mt-10 flex items-start gap-4">
            <div className="bg-[#00ff9d52] p-2 rounded-full">
              <img className="w-20" src={contributeIcon} alt="contribute" />
            </div>{' '}
            <div>
              <h5 className="text-lg font-semibold">How You Contribute</h5>
              <p className="text-[#32443f] text-justify">
                Send your donation to us. It is our responsibility to reach your
                donation to the desired destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
