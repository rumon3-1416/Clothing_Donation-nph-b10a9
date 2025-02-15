import React, { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

import menuIcon from '../../assets/icons/menu.png';
import userIcon from '../../assets/icons/user.png';

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [isValidUrl, setIsValidUrl] = useState(false);

  const { user, signOutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const img = new Image();
  img.onload = () => setIsValidUrl(true);
  img.onerror = () => setIsValidUrl(false);
  img.src = user?.photoURL;

  return (
    <div className="w-full fixed top-0 inset-x-0 z-10">
      <div className="w-full">
        <nav className="bg-[#f7f7f7b3] w-[95%] max-w-[1280px] backdrop-blur-md py-6 mx-auto flex justify-between items-center gap-2 relative">
          <h2
            onClick={() => navigate('/')}
            className="text-xl font-bold cursor-pointer"
          >
            <span className="text-[#EC922D]">Clothing</span>
            <span className="text-[#0a7558]">Donation</span>
          </h2>

          <ul
            className={`bg-[#0a7558e2] md:bg-transparent backdrop-blur-md md:backdrop-blur-none text-white md:text-[#32443f] font-medium py-8 md:py-0 rounded-xl shadow-md md:shadow-none shadow-gray-200 ${
              showNav ? `flex` : `hidden`
            } md:flex flex-col md:flex-row items-center gap-4 md:gap-3 lg:gap-8 absolute md:static inset-x-0 top-24 md:top-0 z-20`}
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
            {user && (
              <li
                onClick={() => {
                  signOutUser();
                  setShowNav(false);
                }}
                className="md:hidden cursor-pointer"
              >
                Log Out
              </li>
            )}
          </ul>

          <div className="flex items-center gap-2 lg:gap-3">
            {user ? (
              <>
                <button
                  onClick={() => navigate('/dashboard')}
                  className="bg-transparent w-12 h-12 p-0.5 border-2 border-[#0a7558] rounded-full"
                >
                  <img
                    className="w-full h-full object-cover rounded-full"
                    src={isValidUrl ? user.photoURL : userIcon}
                    alt=""
                  />
                </button>
                <button
                  onClick={signOutUser}
                  className="text-[#0a7558] text-lg font-medium px-5 lg:px-9 py-2 border-2 border-[#0a7558] rounded-full hidden md:block"
                >
                  Log Out
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/signin')}
                  className="text-[#0a7558] text-lg font-medium px-5 lg:px-9 py-2 border-2 border-[#0a7558] rounded-full hidden md:block"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate('/signup')}
                  className="bg-[#0a7558] text-white text-lg font-medium px-5 lg:px-9 py-2  border-2 border-[#0a7558] rounded-full hidden md:block"
                >
                  Register
                </button>
              </>
            )}

            {!user && (
              <button
                onClick={() => navigate('/signin')}
                className="bg-[#f7f7f7] w-12 h-12 p-0.5 border-2 border-[#0a7558] rounded-full md:hidden"
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
      </div>
    </div>
  );
};

export default Navbar;
