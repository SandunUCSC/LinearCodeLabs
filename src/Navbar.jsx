// src/components/Navbar.jsx

import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import logo from './assets/logo.png'

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  return (
    <nav className="p-4 text-white bg-[#02001A] sticky top-0">
      <div className="container flex items-center justify-between mx-auto">
        <div><img className='h-5 md:h-7' src={logo}/></div>
        <div className="hidden space-x-6 md:flex">
          <a href="#home" className="hover:text-gray-400">Home</a>
          <a href="#about" className="hover:text-gray-400">About</a>
          <a href="#services" className="hover:text-gray-400">Services</a>
          <a href="#contact" className="hover:text-gray-400">Contact</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleNav}>
            {navOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
      {navOpen && (
        <div className="mt-4 space-y-4 md:hidden">
          <a href="#home" className="block hover:text-gray-400">Home</a>
          <a href="#about" className="block hover:text-gray-400">About</a>
          <a href="#services" className="block hover:text-gray-400">Services</a>
          <a href="#contact" className="block hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
