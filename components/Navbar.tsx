import { useState } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-black">Grace Community</span>
            </Link>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#home" className="text-gray-700 hover:text-black transition-colors duration-200">Home</Link>
            <Link href="#about" className="text-gray-700 hover:text-black transition-colors duration-200">About</Link>
            <Link href="#programs" className="text-gray-700 hover:text-black transition-colors duration-200">Programs</Link>
            <Link href="#contact" className="text-gray-700 hover:text-black transition-colors duration-200">Contact</Link>
            
            {/* Donate Button */}
            <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Donate
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black focus:outline-none focus:text-black"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <Link href="#home" className="block px-3 py-2 text-gray-700 hover:text-black">Home</Link>
            <Link href="#about" className="block px-3 py-2 text-gray-700 hover:text-black">About</Link>
            <Link href="#programs" className="block px-3 py-2 text-gray-700 hover:text-black">Programs</Link>
            <Link href="#contact" className="block px-3 py-2 text-gray-700 hover:text-black">Contact</Link>
            <button className="w-full text-left bg-black text-white px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors duration-200">
              Donate
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}