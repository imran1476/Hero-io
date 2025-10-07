// src/components/Header.jsx (Tailwind CSS ব্যবহার করে ডিজাইন)
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Apps', path: '/apps' },
    { name: 'Installation', path: '/installation' },
  ];

  const activeStyle = "text-white border-b-2 border-purple-500 font-semibold";
  const defaultStyle = "text-gray-300 hover:text-white transition duration-300";

  return (
    <header className="bg-gray-900 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo and Home Link */}
        <Link to="/" className="flex items-center space-x-2 text-white text-xl font-bold">
          {/* ধরে নিন আপনার logo.png assets ফোল্ডারে আছে */}
          <img src="/assets/hero_logo.png" alt="HERO.IO Logo" className="h-8 w-auto" />
          <span>HERO.IO</span>
        </Link>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => isActive ? activeStyle : defaultStyle}
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Contribution Button */}
        <a 
          href="আপনার-গিথাব-প্রোফাইল-লিঙ্ক" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300"
        >
          Contribute
        </a>
      </div>
    </header>
  );
};

export default Header;