import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import isValidUrl from '../Js/isValidUrl';
import { AuthContext } from '../AuthProvider';

import menuIcon from '../../assets/icons/menu.png';
import userIcon from '../../assets/icons/user.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <nav className="w-[95%] max-w-[1280px] py-6 mx-auto flex justify-between items-center gap-3 relative">
      <h2
        onClick={() => navigate('/')}
        className="text-xl font-bold cursor-pointer"
      >
        Clothing<span className="text-[#0a7558]">Donation</span>
      </h2>

      <ul
        className={`bg-[#0a7558b7] md:bg-transparent text-white md:text-[#32443f] font-medium backdrop-blur-md py-8 rounded-xl shadow-md md:shadow-none shadow-gray-200 ${
          showNav ? `flex` : `hidden`
        } md:flex flex-col md:flex-row items-center gap-4 lg:gap-8 absolute md:static inset-x-0 top-24 md:top-0 z-10`}
      >
        <li onClick={() => setShowNav(false)}>
          <NavLink to="/">Home</NavLink>
        </li>
        <li onClick={() => setShowNav(false)}>
          <NavLink to="/campaigns">Campaign</NavLink>
        </li>
        <li onClick={() => setShowNav(false)}>
          <NavLink to="/help">Help</NavLink>
        </li>
        <li onClick={() => setShowNav(false)}>
          <NavLink to="/dashboard">Dashboard</NavLink>
        </li>
      </ul>

      <div className="flex items-center gap-2 md:gap-3">
        {user ? (
          <>
            <button
              onClick={() => navigate('/updateprofile')}
              className="bg-white w-12 h-12 p-0.5 border-2 border-[#0a7558] rounded-full"
            >
              <img
                className="w-full h-full object-cover rounded-full"
                src={isValidUrl(user.photoURL) ? user.photoURL : userIcon}
                alt=""
              />
            </button>
            <button
              onClick={signOutUser}
              className="text-[#0a7558] text-xl font-semibold px-5 lg:px-9 py-2.5 border-2 border-[#0a7558] rounded-full hidden md:block"
            >
              Log Out
            </button>
          </>
        ) : (
          <>
            <button
              onClick={() => navigate('/signin')}
              className="text-[#0a7558] text-xl font-semibold px-5 lg:px-9 py-2.5 border-2 border-[#0a7558] rounded-full hidden md:block"
            >
              Login
            </button>
            <button
              onClick={() => navigate('/signup')}
              className="bg-[#0a7558] text-white text-xl font-semibold px-5 lg:px-9 py-2.5  border-2 border-[#0a7558] rounded-full hidden md:block"
            >
              Register
            </button>
          </>
        )}

        {!user && (
          <button
            onClick={() => navigate('/signin')}
            className="bg-white w-12 h-12 p-0.5 border-2 border-[#0a7558] rounded-full md:hidden"
          >
            <img
              className="w-full h-full object-cover rounded-full"
              src={userIcon}
              alt="profile"
            />
          </button>
        )}
        {/* Menubar */}
        <button
          onClick={() => setShowNav(!showNav)}
          className="p-2.5 border-2 border-[#0a7558] rounded-full md:hidden"
        >
          <img className="w-6" src={menuIcon} alt="menu" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
