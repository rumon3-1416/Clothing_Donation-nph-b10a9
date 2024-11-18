import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider';
import { Link, useNavigate } from 'react-router-dom';

import { IoEyeOutline } from 'react-icons/io5';
import { FaRegEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [showPass, setShowPass] = useState(false);
  const [passErr, setPassErr] = useState(null);
  const [errMessage, setErrMessage] = useState(null);

  const { setIsLoading, emailPassSignUp, updateUserProfile } =
    useContext(AuthContext);

  const navigate = useNavigate();

  // Form Submit handler
  const handleSubmit = e => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const email = e.target.email.value;
    const photoURL = e.target.photo.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;

    const regex = /^(?=.*[a-z])(?=.*[A-Z])/;
    // Password Length check
    if (password.length < 6) {
      setPassErr('Password must have at least 6 characters!');
      return;
    } else {
      setPassErr(null);
    }
    // Password RegEx check
    if (!regex.test(password)) {
      setPassErr(
        'Password must have at least one Uppercase & Lowercase letter!'
      );
      return;
    } else {
      setPassErr(null);
    }
    // Terms check
    if (!terms) {
      setErrMessage('Please accept term & conditions!');
      return;
    } else {
      setErrMessage(null);
    }
    // Create & Update user
    emailPassSignUp(email, password)
      .then(res => {
        setErrMessage(null);

        updateUserProfile(res.user, { displayName, photoURL })
          .then(() => {
            setErrMessage(null);
            setIsLoading(false);
            e.target.reset();
            navigate('/');
          })
          .catch(err => setErrMessage(err.message));
      })
      .catch(err => setErrMessage(err.message));
  };

  return (
    <section className="w-[95%] max-w-[1280px] min-h-[80vh] mx-auto p-6 md:p-10 flex justify-center items-center bg-gray-200">
      <div className="text-[#403F3F bg-white w-full md:w-4/5 lg:w-3/5 px-6 md:px-14 py-16 rounded-md">
        <h3 className="text-3xl md:text-[35px] leading-[53px] text-center font-semibold">
          Sign Up Your Account
        </h3>
        {/* border */}
        <div className="border border-[#E7E7E7] my-8"></div>

        <form onSubmit={handleSubmit} className="md:px-6 flex flex-col gap-6">
          {/* Name */}
          <div>
            <p className="text-xl font-semibold mb-4">Your Name</p>
            <input
              className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md"
              id="name"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
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
          {/* Photo */}
          <div>
            <p className="text-xl font-semibold mb-4">Photo URL</p>
            <input
              className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md"
              id="photo"
              name="photo"
              type="text"
              placeholder="Enter your photo url"
              required
            />
          </div>
          {/* Password */}
          <div className="relative">
            <p className="text-xl font-semibold mb-4">Password</p>
            <input
              className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md"
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
            {passErr && <p className="text-red-500 mt-3">{passErr}</p>}
          </div>
          {/* Terms */}
          <div className="flex items-center gap-2.5">
            <input
              className="w-6 h-6 outline-none"
              type="checkbox"
              name="terms"
              id="terms"
            />
            <p>
              Accept our{' '}
              <span className="font-semibold">Terms & Conditions.</span>
            </p>
          </div>
          {/* Error message */}
          {errMessage && <p className="text-red-500">{errMessage}</p>}
          {/* Submit */}
          <button
            className="bg-[#403F3F] text-white text-xl font-semibold p-[18px] mt-1.5 rounded-md"
            type="submit"
          >
            Sign Up
          </button>
        </form>

        <p className="text-[#706F6F] text-center font-semibold mt-7">
          Already Have An Account ?{' '}
          <Link className="text-[#F75B5FFF]" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default SignUp;
