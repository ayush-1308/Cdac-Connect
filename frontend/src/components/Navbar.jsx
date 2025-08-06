import { useState } from 'react'

export default function Navbar ({ onContactClick, onAboutClick }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className='bg-[#181824] text-white w-full fixed top-0 z-50'>
      <div className='w-full max-w-7xl mx-auto px-6 md:px-10 py-4 flex justify-between items-center'>
        {/* Logo */}
        <div className='text-2xl font-bold whitespace-nowrap'>CDAC Connect</div>

        {/* Desktop Links */}
        <div className='hidden md:flex items-center gap-10'>
          <ul className='flex gap-8 text-sm font-semibold'>
            <li className='hover:text-purple-400 cursor-pointer' onClick={onAboutClick}>About</li>
            <li
              className='hover:text-purple-400 cursor-pointer'
              onClick={onContactClick}
            >
              Contact
            </li>
          </ul>
          <button
            onClick={() => (window.location.href = '/login')}
            className='bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md text-sm'
          >
            Let's Connect
          </button>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className='md:hidden'>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className='focus:outline-none'
          >
            <svg
              className='w-6 h-6'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              {isOpen ? (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M6 18L18 6M6 6l12 12'
                />
              ) : (
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M4 6h16M4 12h16M4 18h16'
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden w-full px-6 pb-4 space-y-3 text-sm font-semibold text-center'>
          <a href='/' className='block hover:text-purple-400'>
            Home
          </a>
          <a href='/about' className='block hover:text-purple-400'>
            About
          </a>
          <button
            className='block w-full hover:text-purple-400'
            onClick={() => {
              setIsOpen(false)
              onContactClick()
            }}
          >
            Contact
          </button>
          <button
            onClick={() => (window.location.href = '/login')}
            className='inline-block bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md'
          >
            Let's Connect
          </button>
        </div>
      )}
    </nav>
  )
}