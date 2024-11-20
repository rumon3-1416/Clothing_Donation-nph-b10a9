import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../AuthProvider';
import { useNavigate } from 'react-router-dom';

import userIcon from '../../assets/icons/user.png';

const Dashboard = () => {
  const [isValidUrl, setIsValidUrl] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const { displayName, email, photoURL } = user;

  const img = new Image();
  img.onload = () => setIsValidUrl(true);
  img.onerror = () => setIsValidUrl(false);
  img.src = user?.photoURL;

  useEffect(() => {
    document.title = 'Dashboard | Clothing Donation';
  }, []);

  return (
    <section className="w-[95%] max-w-[1280px] mx-auto p-6 md:p-10 flex justify-center items-center">
      <div className="text-[#403F3F] bg-white w-full md:w-4/5 lg:w-3/5 px-6 md:px-12 pt-14 pb-16 rounded-2xl flex flex-col items-center">
        <h3 className="text-2xl md:text-3xl text-center font-semibold">
          Welcome {displayName.split(' ')[0]}
        </h3>

        <div className="bg-gradient-to-b to-[#0a7558] from-[#EC922D] p-1.5 mt-8 rounded-full flex justify-center items-center">
          <img
            className="w-40 aspect-square object-cover rounded-full"
            src={isValidUrl ? photoURL : userIcon}
            alt="img"
          />
        </div>

        <p className="text-2xl font-semibold mt-4">{displayName}</p>
        <p className="text-lg font-medium mt-2">{email}</p>

        {/* Update */}
        <button
          onClick={() => navigate('/updateprofile')}
          className="bg-[#0a7558] text-white text-xl font-semibold px-5 py-4 mt-6 rounded-xl"
        >
          Update Profile
        </button>
      </div>
    </section>
  );
};

export default Dashboard;
