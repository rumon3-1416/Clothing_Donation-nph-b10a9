import React, { useState } from 'react';

const DonateDetails = () => {
  const [blanket, setBlanket] = useState(false);
  const [jacket, setJacket] = useState(false);
  const [sweater, setSweater] = useState(false);

  const data = JSON.parse(localStorage.getItem('details'));

  const {
    title,
    image,
    description,
    status,
    contactInfo,
    division,
    additionalNotes,
  } = data;

  const handleSubmit = e => {
    e.preventDefault();
    e.target.reset();
    setBlanket(false);
    setJacket(false);
    setSweater(false);
  };

  return (
    <section className="w-[95%] max-w-[1280px] mx-auto">
      {/* Donation Details Section */}
      <div className="bg-white p-8 shadow-lg rounded-2xl grid items-center grid-cols-1 md:grid-cols-2 gap-8">
        <img
          src={image}
          alt={title}
          className="
        w-full aspect-video md:aspect-[4/3] lg:aspect-video object-cover rounded-xl"
        />
        <div className="">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{title}</h2>
          <p className="text-gray-600 mb-5">{description}</p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Status:</span> {status}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Division:</span> {division}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Contact:</span> {contactInfo}
          </p>
          <p className="text-gray-700 mb-1">
            <span className="font-semibold">Note:</span> {additionalNotes}
          </p>
        </div>
      </div>

      {/* Donation Form */}
      <div className="mx-auto mt-12 bg-white px-8 py-10 shadow-lg rounded-2xl">
        <h3 className="text-gray-800 text-3xl font-bold text-center mb-8">
          Donation Form
        </h3>
        <form onSubmit={handleSubmit}>
          {/* Quantity */}
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="quantity"
              className="text-gray-700 font-semibold mb-2"
            >
              Quantity of Items
            </label>
            <input
              className="bg-[#F7F7F7] text-gray-800 w-full px-4 py-3 rounded-lg outline-none"
              id="quantity"
              type="text"
              name="quantity"
              placeholder="E.g., 2 jackets, 3 blankets"
              required
            />
          </div>

          {/* Type */}
          <div className="mb-6 flex flex-col">
            <p className="text-gray-700 font-semibold mb-2">Items Type</p>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setBlanket(!blanket)}
                className={`bg-[#0a755812] text-[#0a7558] text-center px-4 py-2 rounded-lg hover:bg-[#0a755833] shadow-sm ${
                  blanket && `border-2 border-[#0a7558]`
                } transition`}
                type="button"
              >
                Blanket
              </button>
              <button
                onClick={() => setJacket(!jacket)}
                className={`bg-[#0a755812] text-[#0a7558] text-center px-4 py-2 rounded-lg hover:bg-[#0a755833] shadow-sm ${
                  jacket && `border-2 border-[#0a7558]`
                } transition`}
                type="button"
              >
                Jacket
              </button>
              <button
                onClick={() => setSweater(!sweater)}
                className={`bg-[#0a755812] text-[#0a7558] text-center px-4 py-2 rounded-lg hover:bg-[#0a755833] shadow-sm ${
                  sweater && `border-2 border-[#0a7558]`
                } transition`}
                type="button"
              >
                Sweater
              </button>
            </div>
          </div>

          {/* Location */}
          <div className="mb-6 flex flex-col">
            <label
              htmlFor="location"
              className="text-gray-700 font-semibold mb-2"
            >
              Pickup Location
            </label>
            <input
              className="bg-[#F7F7F7] text-gray-800 w-full px-4 py-3 rounded-lg outline-none"
              type="text"
              id="location"
              name="location"
              placeholder="E.g., House 12, Road 5, Dhanmondi, Dhaka"
              required
            />
          </div>

          {/* Notes */}
          <div className="mb-8 flex flex-col">
            <label htmlFor="note" className="text-gray-700 font-semibold mb-2">
              Additional Notes (Optional)
            </label>
            <textarea
              className="bg-[#F7F7F7] px-4 py-3 rounded-lg outline-none text-gray-800 resize-none"
              id="note"
              name="note"
              placeholder="Any additional information or requests"
              rows="4"
            ></textarea>
          </div>

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-[#0a7558] text-white font-semibold px-6 py-3 rounded-xl"
            >
              Submit Donation
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default DonateDetails;
