import { ArrowIcon } from "./ui/ArrowIcon";
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import GLOBE from 'vanta/dist/vanta.globe.min.js';

const CampusHero = () => {
  const vantaRef = useRef(null); 
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(GLOBE({
        el: vantaRef.current,
        THREE: THREE, 
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x8634c2, 
        backgroundColor: 0x181824 
      }));
    }

    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]); 

  return (
    <section ref={vantaRef} className="relative min-h-screen text-white font-sans">
      
      {/* Overlay Content */}
      {/* We use absolute positioning and z-index to place the text ON TOP of the Vanta canvas */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center">
        
        {/* Main Headline */}
        <h1 className="text-8xl font-bold max-w-6xl leading-tight">
          Connect, Collaborate, & Succeed on Campus
        </h1>
        
        {/* Subheading */}
        <p className="text-2xl text-gray-400 mt-8 max-w-5xl">
          Join CampusConnect, the ultimate platform for students to network, share resources, and thrive together. Your academic journey, simplified and supercharged.
        </p>
        
        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-6 mt-12">
          <button className="flex items-center justify-center space-x-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out text-lg">
            <button
            onClick={() => (window.location.href = '/login')}
            className='font-semibold text-white '
          >
            Let's Connect
          </button>
            <ArrowIcon />
          </button>
          <button className="flex items-center justify-center space-x-3 border-2 border-gray-700 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out text-lg">
            <span>Learn More</span>
            <ArrowIcon />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CampusHero;


// import { ArrowIcon } from "./ui/ArrowIcon";

// const CampusHero = () => {
//   return (
//     // Use min-h-screen and large vertical padding for flexible, full-screen feel
//     <div className="bg-gray-900 text-white font-sans">
//       <div className="container mx-auto flex flex-col items-center justify-center py-32 px-4 text-center">
        
//         {/* Main Headline - Larger font and wider max-width for 1080p */}
//         <h1 className="text-8xl font-bold max-w-6xl leading-tight">
//           Connect, Collaborate, & Succeed on Campus
//         </h1>
        
//         {/* Subheading - Larger font and wider max-width */}
//         <p className="text-2xl text-gray-400 mt-8 max-w-5xl">
//           Join CampusConnect, the ultimate platform for students to network, share resources, and thrive together. Your academic journey, simplified and supercharged.
//         </p>
        
//         {/* Call-to-Action Buttons - Larger buttons and more space */}
//         <div className="flex flex-col sm:flex-row items-center justify-center space-y-5 sm:space-y-0 sm:space-x-6 mt-12">
          
//           {/* Primary Button */}
//           <button className="flex items-center justify-center space-x-3 bg-fuchsia-600 hover:bg-fuchsia-700 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out text-lg">
//             <span>Sign Up</span>
//             <ArrowIcon />
//           </button>
          
//           {/* Secondary Button */}
//           <button className="flex items-center justify-center space-x-3 border-2 border-gray-700 hover:bg-gray-800 text-white font-semibold py-4 px-8 rounded-lg transition duration-300 ease-in-out text-lg">
//             <span>Learn More</span>
//             <ArrowIcon />
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default CampusHero;