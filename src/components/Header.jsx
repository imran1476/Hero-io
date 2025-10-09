// src/components/Header.jsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi'; // Hamburger icons

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'Installation', path: '/installation' },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  const activeStyle =
    'text-purple-800 border-b-2 border-purple-500 font-semibold text-lg';
  const defaultStyle =
    'text-black hover:text-purple-600 transition duration-300 text-md';

  return (
    <header className="bg-white shadow-md border-b border-gray-200 fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2 text-purple-600 font-bold text-lg">
          <img src="/src/assets/logo.png" alt="HERO.IO Logo" className="h-8 w-auto" />
          <span>HERO.IO</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Contribute Button */}
        <a
          href="https://github.com/imran1476"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 items-center space-x-2"
        >
          <img src="/src/assets/fi_2111432.png" alt="" className="w-5 h-5 rounded-full" />
          <span>Contribute</span>
        </a>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
            {isOpen ? <FiX size={28} /> : <FiMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="flex flex-col space-y-2 px-4 py-4">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)} // Close menu on link click
                className={({ isActive }) =>
                  isActive
                    ? 'text-purple-800 font-semibold text-lg'
                    : 'text-gray-800 hover:text-purple-600 text-md'
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile Contribute Button */}
            <a
              href="https://github.com/imran1476"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 flex items-center justify-center"
            >
              <img src="/src/assets/fi_2111432.png" alt="" className="w-5 h-5 rounded-full mr-2" />
              <span>Contribute</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
