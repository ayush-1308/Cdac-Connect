const FeaturesSection = () => {
  return (
    <section className="bg-gray-800 text-white font-sans py-20 sm:py-32">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center px-6">
        
        {/* Left Column: Image Showcase */}
        <div className="w-full lg:w-1/2">
          {/* Relative container to position the overlapping images */}
          <div className="relative h-[500px] flex justify-center items-center">
            {/* Background Image (rotated) */}
            <img
              src="/code-screen.png"
              alt="Code on a screen"
              className="absolute w-2/4 max-w-[280px] rounded-2xl shadow-xl transform -rotate-12"
            />
            {/* Foreground Image (on top) */}
            <img
              src="/app-ui.png"
              alt="Application UI"
              className="relative w-2/4 max-w-[280px] rounded-2xl shadow-2xl z-10"
            />
          </div>
        </div>

        {/* Right Column: Text Content */}
        <div className="w-full lg:w-1/2 mt-16 lg:mt-0 lg:pl-16">
          <div className="flex flex-col space-y-8 text-center lg:text-left">
            {[...Array(5)].map((_, i) => (
              <p key={i} className="text-xl text-gray-400 leading-relaxed">
                Bringing campus closer, One message at a time.
                <br />
                Smarter way to stay in touch.
              </p>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default FeaturesSection;