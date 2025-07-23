import React, { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';

const SignUp = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  // State for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  // Initialize Vanta.js background
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(NET({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        // scale: 1.00,
        // scaleMobile: 1.00,
        color: 0xba24ff,          // A vibrant purple
        backgroundColor: 0x181824,  // Dark background from prompt
        // points: 9.00,
        maxDistance: 2.00,
        spacing: 18.00,
        speed: 0.8 // A slower, more mesmerizing speed
      }));
    }
    // Cleanup function
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  // Dummy useEffect to simulate API call
  useEffect(() => {
    const fetchDummyData = () => {
      setTimeout(() => {
        setUsername('cyb3r_n3xus');
        setPassword('c0nn3ct_th3_d0ts!');
        setEmail('user@cdac.connect');
      }, 1500);
    };
    fetchDummyData();
  }, []);

  return (
    // Fixed 1920x1080 container to prevent overflow
    <div ref={vantaRef} className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div className="flex w-3/4 h-3/4">

        {/* Left Panel: Animated Brand */}
        <div className="flex-1 flex flex-col items-center justify-center animate-float">
          <h1 className="text-9xl font-glitch font-bold text-purple-600 text-center leading-none animate-glow">
            CDAC
          </h1>
          <h2 className="text-7xl font-sans font-bold text-purple-600 text-center mt-4">
            CONNECT
          </h2>
        </div>

        {/* Right Panel: "Shattered Glass" Signup Form */}
        <div className="w-1/2 h-full p-10 flex flex-col justify-center"
             style={{
               background: 'rgba(0, 0, 0, 0.25)',
               backdropFilter: 'blur(10px)',
               clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)' // Angled cut for shattered look
             }}>
          
          <h2 className="text-4xl font-light text-center text-white mb-2">
            Welcome <span className="font-bold text-purple-400">User</span>
          </h2>
          <p className="text-center text-gray-400 mb-8">Create your digital presence.</p>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="password"
              placeholder="passoword"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-transparent border-2 border-blue-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-300 transition-colors"
            />
            <button
              type="submit"
              className="w-full p-4 mt-4 font-bold text-lg text-white border-2 border-purple-500 rounded-md hover:bg-purple-500 transition-all duration-300 transform hover:scale-105"
            >
              SignUp
            </button>
          </form>
          <p className="mt-8 text-center text-sm text-gray-300">
            Already have an account?{' '}
            <button
            onClick={() => (window.location.href = '/login')}
            className='font-semibold text-purple-400 hover:underline'
          >
            LogIn
          </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;