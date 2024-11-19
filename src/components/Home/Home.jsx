import React from 'react';

import Banner from './Banner/Banner';
import About from './About/About';
import HowWorks from './HowWorks/HowWorks';
import QuicView from './QuickView/QuicView';
import TeamMembers from './TeamMembers/TeamMembers';
import Contact from './Contact/Contact';

const Home = () => {
  return (
    <div className="w-[95%] max-w-[1280px] mx-auto">
      <Banner />
      <QuicView />
      <About />
      <TeamMembers />
      <HowWorks />
      <Contact />
    </div>
  );
};

export default Home;
