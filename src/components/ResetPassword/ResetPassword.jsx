import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider';

const ResetPassword = () => {
  const [errMessage, setErrMessage] = useState(null);

  const { resetPassword } = useContext(AuthContext);
  const navigate = useNavigate();

  // Email Password Log In Handler
  const handleSubmit = e => {
    e.preventDefault();

    const email = e.target.email.value;

    resetPassword(email)
      .then(() => navigate('/signin'))
      .catch(err => setErrMessage(err.message));
  };

  return (
    <section className="w-[95%] max-w-[1280px] min-h-[80vh] mx-auto p-6 md:p-10 flex justify-center items-center bg-gray-200">
      <div className="text-[#403F3F bg-white w-full md:w-4/5 lg:w-3/5 px-6 md:px-14 py-16 rounded-md">
        <h3 className="text-3xl md:text-[35px] leading-[53px] text-center font-semibold">
          Reset Password
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
          {/* Error message */}
          {errMessage && <p className="text-red-500">{errMessage}</p>}
          {/* Submit */}
          <button
            className="bg-[#403F3F] text-white text-xl font-semibold p-[18px] mt-1.5 rounded-md"
            type="submit"
          >
            Send Reset Email
          </button>
        </form>

        <p className="text-[#706F6F] text-center font-semibold mt-7">
          OR{' '}
          <Link className="text-[#F75B5FFF]" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </section>
  );
};

export default ResetPassword;
