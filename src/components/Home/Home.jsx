import React from 'react';

import Banner from './Banner/Banner';
import About from './About/About';

const Home = () => {
  return (
    <div className="w-[95%] max-w-[1280px] mx-auto">
      <Banner />
      <About />
    </div>
  );
};

export default Home;
