import React from 'react';

import Banner from './Banner/Banner';
import About from './About/About';
import HowWorks from './HowWorks/HowWorks';

const Home = () => {
  return (
    <div className="w-[95%] max-w-[1280px] mx-auto">
      <Banner />
      <About />
      <HowWorks />
    </div>
  );
};

export default Home;
