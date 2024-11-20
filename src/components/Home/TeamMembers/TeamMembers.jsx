import React from 'react';

import 'animate.css';
import { useInView } from 'react-intersection-observer';

import anisulImg from '../../../assets/images/anisul_islam.png';
import jhankarImg from '../../../assets/images/jhankar_mahbub.png';
import aliImg from '../../../assets/images/ali_hossain.png';
import sumitImg from '../../../assets/images/Sumit_shaha.png';

const TeamMembers = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  return (
    <section className="mt-24">
      <div className="mb-8 flex flex-col md:flex-row md:justify-between items-start md:items-end gap-6">
        <div>
          <p className="text-[#EC922D] text-lg font-semibold mb-4">
            Our Expert Team
          </p>
          <h1 className="max-w-[420px] text-3xl sm:text-4xl leading-[44px] font-semibold">
            Meet The Team Behind Their Success Story
          </h1>
        </div>

        <button className="bg-[#0a7558] text-white font-semibold px-6 py-3 rounded-xl ms-auto">
          View All Members
        </button>
      </div>
      {/* Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div
          ref={ref}
          className={`mb-16 relative ${
            inView ? 'animate__animated animate__fadeInLeft' : ''
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="bg-[#E5E6EA] rounded-xl">
            <img
              className="aspect-[3/4] w-full object-cover rounded-xl"
              src={jhankarImg}
              alt=""
            />
          </div>
          <div className="bg-[#F7F7F7] group hover:bg-[#0a7558] text-center p-4 rounded-lg absolute inset-x-3 -bottom-14 transition">
            <p className="text-[#2b2d2c] group-hover:text-[#f9a749] text-xl font-semibold">
              Jhankar Mahbub
            </p>
            <p className="text-gray-600 group-hover:text-white font-medium">
              Founder & Director
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className={`mb-16 relative ${
            inView ? 'animate__animated animate__fadeInUp' : ''
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="bg-[#E5E6EA] rounded-xl">
            <img
              className="w-full aspect-[3/4] object-cover rounded-xl"
              src={anisulImg}
              alt=""
            />
          </div>
          <div className="bg-[#F7F7F7] group hover:bg-[#0a7558] text-center p-4 rounded-lg absolute inset-x-3 -bottom-14 transition">
            <p className="text-[#2b2d2c] group-hover:text-[#f9a749] text-xl font-semibold">
              Anisul Islam
            </p>
            <p className="text-gray-600 group-hover:text-white font-medium">
              Operations Manager
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className={`mb-16 relative ${
            inView ? 'animate__animated animate__fadeInUp' : ''
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="bg-[#E5E6EA] rounded-xl">
            <img
              className="w-full aspect-[3/4] object-cover rounded-xl"
              src={aliImg}
              alt=""
            />
          </div>
          <div className="bg-[#F7F7F7] group hover:bg-[#0a7558] text-center p-4 rounded-lg absolute inset-x-3 -bottom-14 transition">
            <p className="text-[#2b2d2c] group-hover:text-[#f9a749] text-xl font-semibold">
              Ali Hossain
            </p>
            <p className="text-gray-600 group-hover:text-white font-medium">
              Community Coordi.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className={`mb-16 relative ${
            inView ? 'animate__animated animate__fadeInRight' : ''
          }`}
          style={{ animationDelay: '0.4s' }}
        >
          <div className="bg-[#E5E6EA] rounded-xl">
            <img
              className="w-full aspect-[3/4] object-cover rounded-xl"
              src={sumitImg}
              alt=""
            />
          </div>
          <div className="bg-[#F7F7F7] group hover:bg-[#0a7558] text-center p-4 rounded-lg absolute inset-x-3 -bottom-14 transition">
            <p className="text-[#2b2d2c] group-hover:text-[#f9a749] text-xl font-semibold">
              Sumit Shaha
            </p>
            <p className="text-gray-600 group-hover:text-white font-medium">
              Volunteer Coordi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;
