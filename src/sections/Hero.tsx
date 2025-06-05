import React from 'react';

const Hero = () => {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 md:px-16 bg-white">
      {/* Left Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Step Into Comfort & Style
        </h1>
        <p className="text-gray-600 mb-8">
          Discover our new collection of premium shoes designed for both comfort and style. Crafted with the finest materials and attention to detail.
        </p>
        <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
          <button className="bg-teal-600 text-white font-medium px-6 py-3 rounded-lg hover:bg-teal-700 transition">
            Shop Collection
          </button>
          <button className="text-teal-600 font-medium px-6 py-3 hover:underline">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full md:w-1/2 mb-10 md:mb-0 flex justify-center">
        <img
          src="/assets/Hero.png"
          alt="Comfortable stylish shoes"
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
