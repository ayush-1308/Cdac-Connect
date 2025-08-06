import { useState, useEffect, useRef } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import { Link, useNavigate } from 'react-router-dom';
import { authService } from '../../services/authService';

const SignUp = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // State for form fields
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const isValidPassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
    return regex.test(password);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage('');

    if (!isValidPassword(password)) {
      setMessage('Password must be at least 8 characters long, include one uppercase letter, one number, and one special character.');
      return;
    }

    setIsLoading(true);

    try {
      const result = await authService.signup(username, email, password);
      if (result.success) {
        setMessage('Account created successfully! Please login');
        setIsSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (error) {
      setMessage(error.message || 'Signup failed, please try again.');
      console.error('Signup failed', error);
    } finally {
      setIsLoading(false);
    }
  };

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
        color: 0xba24ff,
        backgroundColor: 0x181824,
        maxDistance: 2.00,
        spacing: 18.00,
        speed: 0.8
      }));
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div ref={vantaRef} className="relative min-h-screen overflow-hidden flex items-center justify-center px-4">
      <div className="flex flex-col lg:flex-row w-full max-w-6xl h-auto lg:h-3/4 mx-auto">

        {/* Left Panel: CDAC CONNECT */}
        <Link to="/" className="flex-1 flex flex-col items-center justify-center py-10">
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-glitch font-bold text-purple-600 text-center leading-none animate-glow">
            CDAC
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-sans font-bold text-purple-600 text-center mt-4">
            CONNECT
          </h2>
        </Link>

        {/* Right Panel: Signup Form */}
        <div
          className="w-full lg:w-1/2 h-full p-6 sm:p-10 flex flex-col justify-center backdrop-blur-md bg-black/30"
          style={{
            clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0 100%, 0 20%)'
          }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light text-center text-white mb-2">
            Welcome <span className="font-bold text-purple-400">User</span>
          </h2>
          <p className="text-center text-gray-400 mb-8">Create your digital presence.</p>

          <form onSubmit={handleSignup} className="space-y-5">
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-4 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-4 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-4 bg-transparent border-2 border-blue-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-blue-300 transition-colors"
            />
            <button
              type="submit"
              className="w-full p-4 mt-4 font-bold text-lg text-white border-2 border-purple-500 rounded-md hover:bg-purple-500 transition-all duration-300 transform hover:scale-105"
              disabled={isLoading}
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </form>

          <p className="mt-8 text-center text-sm text-gray-300">
            Already have an account?{' '}
            <button
              onClick={() => navigate('/login')}
              className="font-semibold text-purple-400 hover:underline"
            >
              Log In
            </button>
          </p>

          {message && (
            <p className={`text-center mt-4 text-sm ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
              {message}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignUp;
