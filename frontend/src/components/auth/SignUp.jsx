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
   const[username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const isValidPassword = (password) => {
      const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.*[0-9]).{8,}$/;
      return regex.test(password);
    };
    
    const handleSignup = async (e) => {
      e.preventDefault();
      setMessage('');
    
      // ✅ Password validation
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

  const checkUsername = async () => {
    try {
      const response = await fetch(`http://localhost:8080/auth/exists?username=${username}`);
      if (!response.ok) {
        throw new Error('Failed to check username');
      }
      const exists = await response.json(); // assuming server returns true/false
      return exists;
    } catch (err) {
      console.error("Username check failed", err);
      return false;
    }
  };

  return (
    <div ref={vantaRef} className="relative min-h-screen overflow-hidden flex items-center justify-center">
      <div className="flex w-3/4 h-3/4">

        {/* Left Panel: Animated Brand */}
        <Link to="/" className="flex-1 flex flex-col items-center justify-center animate-float">
        <h1 className="text-9xl font-glitch font-bold text-purple-600 text-center leading-none animate-glow">
        CDAC
       </h1>
       <h2 className="text-7xl font-sans font-bold text-purple-600 text-center mt-4">
       CONNECT
      </h2>
      </Link>


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

          <form onSubmit={handleSignup} className="space-y-5">
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}

              onBlur={async () => {
                const exists = await checkUsername();
                if (exists) setError("Username already exists");
                else setError("");
              }}
              className="w-full p-4 bg-transparent border border-gray-500 rounded-md text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
            />
            <input
              type="password"
              placeholder="password"
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
          {message && (
              <p className={`text-center mt-4 text-sm ${isSuccess ? 'text-green-400' : 'text-red-400'}`}>
                {message}
              </p>
          )}
          {error && (
              <p className="text-center mt-2 text-red-400 text-sm">{error}</p>
          )}

        </div>
      </div>
    </div>
  );
};

export default SignUp;