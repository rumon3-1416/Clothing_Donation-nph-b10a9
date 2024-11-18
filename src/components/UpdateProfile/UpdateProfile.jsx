import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvider';

const UpdateProfile = () => {
  const [errMessage, setErrMessage] = useState(null);

  const { setIsLoading, user, updateUserProfile } = useContext(AuthContext);

  const { displayName: oName, email: oEmail, photoURL: oUrl } = user;

  const handleSubmit = e => {
    e.preventDefault();

    const displayName = e.target.name.value;
    const photoURL = e.target.photo.value;

    // Update Name & Photo
    if (displayName !== oName || photoURL !== oUrl) {
      updateUserProfile(user, { displayName, photoURL })
        .catch(err => setErrMessage(err.message))
        .finally(setIsLoading(false));
    }
  };

  return (
    <section className="w-[95%] max-w-[1280px] min-h-[80vh] mx-auto p-6 md:p-10 flex justify-center items-center bg-gray-200">
      <div className="text-[#403F3F bg-white w-full md:w-4/5 lg:w-3/5 px-6 md:px-14 py-16 rounded-md">
        <h3 className="text-3xl md:text-[35px] leading-[53px] text-center font-semibold">
          Your Profile
        </h3>
        {/* border */}
        <div className="border border-[#E7E7E7] my-8"></div>

        <form onSubmit={handleSubmit} className="md:px-6 flex flex-col gap-6">
          {/* Name */}
          <div>
            <p className="text-xl font-semibold mb-4">Name</p>
            <input
              className="bg-[#F3F3F3] w-full p-5 outline-none rounded-md"
              id="name"
              name="name"
              type="text"
              placeholder="Enter new name"
              defaultValue={oName || ''}
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
              placeholder="Enter new email"
              value={oEmail}
              readOnly
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
              placeholder="Enter new photo url"
              defaultValue={oUrl || ''}
            />
          </div>
          {/* Error message */}
          {errMessage && <p className="text-red-500">{errMessage}</p>}
          {/* Submit */}
          <button
            className="bg-[#403F3F] text-white text-xl font-semibold p-[18px] mt-1.5 rounded-md"
            type="submit"
          >
            Update
          </button>
        </form>
      </div>
    </section>
  );
};

export default UpdateProfile;
