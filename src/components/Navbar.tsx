import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 bg-[#0A0B1E]/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2">
            <Mail className="w-6 h-6 text-[#7EE7F1]" />
            <span className="text-2xl font-bold text-white">ECOFY</span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </Link>
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </a>
            <a href="#values" className="text-gray-300 hover:text-white transition-colors">
              Our Values
            </a>
            <a href="#process" className="text-gray-300 hover:text-white transition-colors">
              Process
            </a>
            <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
              FAQ
            </a>
          </div>

          <Link
            to="/book-demo"
            className="bg-[#7EE7F1] text-black font-semibold px-6 py-2 rounded-full hover:opacity-90 transition-opacity"
          >
            Book a Demo
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;