import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-[#0f172a] to-[#1e293b] text-white w-full">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold whitespace-nowrap">CDAC Connect</div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          <ul className="flex gap-8 text-sm font-semibold">
            <li className="hover:text-purple-400 cursor-pointer">Home</li>
            <li className="hover:text-purple-400 cursor-pointer">About</li>
            <li className="hover:text-purple-400 cursor-pointer">Contact</li>
          </ul>
          <a
            href="https://dummyapi.io/signup"
            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm"
          >
            SignUp
          </a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden w-full px-6 pb-4 space-y-3 text-sm font-semibold text-center">
          <a href="#" className="block hover:text-purple-400">Home</a>
          <a href="#" className="block hover:text-purple-400">About</a>
          <a href="#" className="block hover:text-purple-400">Contact</a>
          <a
            href="https://dummyapi.io/signup"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md"
          >
            SignUp
          </a>
        </div>
      )}
    </nav>
  );
}
