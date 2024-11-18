import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';

import googleIcon from '../../assets/icons/google.png';
import fbIcon from '../../assets/icons/facebook.png';

const SignIn = () => {
  const [showPass, setShowPass] = useState(false);
  const [errMessage, setErrMessage] = useState(null);

  const { setIsLoading, emailPassSignIn, googleSignIn, facebookSignIn } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // Email Password Log In Handler
  const handleSubmit = e => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    emailPassSignIn(email, password)
      .then(() => {
        setIsLoading(false);
        navigate('/');
      })
      .catch(err => setErrMessage(err.message));
  };
  // Pop Up Log In Handler
  const handlePopUpLogIn = site => {
    if (site === 'google') {
      googleSignIn()
        .then(() => {
          setIsLoading(false);
          navigate('/');
        })
        .catch(err => setErrMessage(err.message));
    } else if (site === 'fb') {
      facebookSignIn()
        .then(() => {
          setIsLoading(false);
          navigate('/');
        })
        .catch(err => setErrMessage(err.message));
    }
  };

  return (
    <section className="w-[95%] max-w-[1280px] min-h-[80vh] mx-auto p-6 md:p-10 flex justify-center items-center bg-gray-200">
      <div className="text-[#403F3F bg-white w-full md:w-4/5 lg:w-3/5 px-6 md:px-14 py-16 rounded-md">
        <h3 className="text-3xl md:text-[35px] leading-[53px] text-center font-semibold">
          Sign In to Continue
        </h3>
        {/* border */}
        <div className="border border-[#E7E7E7] my-8"></div>

        {/* Email Password Sign In */}
        <form onSubmit={handleSubmit} className="md:px-6 flex flex-col gap-6">
          {/* Email */}
          <div>
            <p className="text-xl font-semibold mb-4">Email</p>
            <input
              className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md"
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          {/* Password */}
          <div className="relative">
            <p className="text-xl font-semibold mb-4">Password</p>
            <input
              className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md mb-3"
              id="password"
              name="password"
              type={showPass ? `text` : `password`}
              placeholder="Enter password"
              required
            />
            <button
              onClick={() => setShowPass(!showPass)}
              className="absolute top-16 right-4 rounded-full"
              type="button"
            >
              {showPass ? (
                <IoEyeOutline className="text-2xl" />
              ) : (
                <FaRegEyeSlash className="text-2xl" />
              )}
            </button>
            <Link
              className="text-[#504f4f] font-medium underline"
              to="/resetpassword"
            >
              Forgotten Password?
            </Link>
          </div>
          {/* Error message */}
          {errMessage && <p className="text-red-500">{errMessage}</p>}
          {/* Submit */}
          <button
            className="bg-[#403F3F] text-white text-xl font-semibold p-[18px] mt-1.5 rounded-md"
            type="submit"
          >
            Sign In
          </button>
        </form>

        <p className="text-[#706F6F] text-center font-semibold mt-7">
          Don’t Have An Account ?{' '}
          <Link className="text-[#F75B5FFF]" to="/signup">
            Sign UP
          </Link>
        </p>

        {/* or border */}
        <div className="my-6 grid grid-cols-[1fr,_40px,_1fr] items-center">
          <div className="border border-[#8d8b8b]"></div>
          <p className="text-[#403F3F] text-2xl font-medium text-center">or</p>
          <div className="border border-[#8d8b8b]"></div>
        </div>

        <div>
          {/* Google Sign In */}
          <button
            onClick={() => handlePopUpLogIn('google')}
            className="w-full text-xl font-semibold p-4 border-2 border-[#403F3F] rounded-full flex justify-center items-center gap-4"
          >
            <img className="w-8" src={googleIcon} alt="G" />
            <span>Continue With Google</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
