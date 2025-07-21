import React from 'react';

const Hero = () => {
  return (
    <section className="bg-gray-700 font-sans">
      <div className="container mx-auto flex items-center justify-center px-16 py-32">
        {/* Left Column: Text Content */}
        <div className="w-1/2">
          <h1 className="text-7xl font-light text-gray-200">Code</h1>
          <h1 className="text-7xl font-light text-gray-200 mt-2">Connect</h1>
          <h1 className="text-7xl font-light text-gray-200 mt-2">Communicate</h1>
          <p className="text-xl text-gray-400 mt-8 max-w-md">
            Bringing campus closer, One message at a time. Smarter way to stay in touch.
          </p>
        </div>
        
        {/* Right Column: Image */}
        <div className="w-1/2 flex justify-start pl-10">
          <img 
            src="/hero-image.png"
            alt="Abstract sphere of light" 
            className="w-4/5 rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;