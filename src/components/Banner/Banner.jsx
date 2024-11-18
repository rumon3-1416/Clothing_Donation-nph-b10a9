import React from 'react';
import Carousel from './Carousel';

const Offers = () => {
  return (
    <section>
      <div className="bg-[#9538E2] text-white text-center py-8">
        <h2 className="text-[32px] font-bold mb-4">Latest Offers</h2>
        <p className="w-[80%] max-w-[796px] mx-auto mb-8">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
      </div>

      <div className="relative">
        <div className="bg-[#9538E2] w-full h-[200px] lg:h-[240px] absolute -top-1 -z-10"></div>

        <div className="bg-[#FFFFFF4D] w-[95%] max-w-[1280px] mx-auto border-2 border-white p-2 md:p-4 lg:p-6 rounded-3xl ld:rounded-[32px]">
          <Carousel />
        </div>
      </div>
    </section>
  );
};

export default Offers;
