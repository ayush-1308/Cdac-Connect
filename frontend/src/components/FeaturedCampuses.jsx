import React, { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

// --- Campus Data with Image URLs ---
// Replace these with your own high-quality images
const campuses = [
  { name: 'CDAC Pune', imageUrl: 'pune.png' },
  { name: 'Sunbeam Pune', imageUrl: 'sunbeam.png' },
  { name: 'CDAC Delhi', imageUrl: 'delhi.png' },
  { name: 'CDAC Noida', imageUrl: 'noida.png' },
  { name: 'CDAC Bengaluru', imageUrl: 'bengaluru.png' },
];

const CrazyFeaturedCampuses = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  return (
    <section className="bg-[#181824] text-white font-sans py-24 sm:py-32 overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold">Featured Campuses</h2>
        <p className="text-xl text-gray-400 mt-4 max-w-3xl mx-auto">
          Explore top institutions and learning centers connected through our platform.
        </p>
      </div>

      <div className="relative mt-16">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6">
            {campuses.map((campus, index) => (
              <div key={index} className="flex-grow-0 flex-shrink-0 w-full sm:w-[45%] md:w-[35%] lg:w-[30%] pl-6 group">
                {/* The card itself with hover effects */}
                <div className="relative rounded-2xl overflow-hidden h-80">
                  {/* Glowing Border - The "crazy" part */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl 
                                  transition-all duration-1000 opacity-0 group-hover:opacity-100 group-hover:rotate-[-3deg] blur-lg"></div>
                  
                  {/* Background Image with Ken Burns Effect */}
                  <div className="absolute inset-0 overflow-hidden rounded-2xl">
                    <img
                      src={campus.imageUrl}
                      alt={campus.name}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] ease-out 
                                 group-hover:scale-110"
                    />
                  </div>
                  
                  {/* Gradient Overlay and Campus Name */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-3xl font-bold text-white transition-transform duration-500 ease-out 
                                   group-hover:-translate-y-2">
                      {campus.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* --- Custom Navigation Buttons --- */}
        <div className="absolute inset-y-0 inset-x-0 flex items-center justify-between pointer-events-none px-2">
          <button
            onClick={scrollPrev}
            className="pointer-events-auto bg-black/40 backdrop-blur-sm text-white rounded-full p-3 
                       hover:bg-purple-600/50 transition-all duration-300 transform hover:scale-110"
            aria-label="Previous campus"
          >
            <FiChevronLeft className="h-7 w-7" />
          </button>
          <button
            onClick={scrollNext}
            className="pointer-events-auto bg-black/40 backdrop-blur-sm text-white rounded-full p-3 
                       hover:bg-purple-600/50 transition-all duration-300 transform hover:scale-110"
            aria-label="Next campus"
          >
            <FiChevronRight className="h-7 w-7" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CrazyFeaturedCampuses;