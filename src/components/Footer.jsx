// src/components/Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <div className="flex items-center justify-center md:justify-start space-x-2 mb-2">
              <img src="/assets/hero_logo.png" alt="HERO.IO Logo" className="h-6 w-auto" />
              <span className="text-white text-lg font-bold">HERO.IO</span>
            </div>
            <p className="text-sm">
              Copyright © {currentYear} HERO.IO - All rights reserved
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-col items-center md:items-end">
            <h4 className="text-white font-semibold mb-2">Social Links</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-purple-500 transition duration-300"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-purple-500 transition duration-300"><FaTwitter size={20} /></a>
              <a href="#" className="hover:text-purple-500 transition duration-300"><FaInstagram size={20} /></a>
              <a href="আপনার-গিথাব-প্রোফাইল-লিঙ্ক" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition duration-300"><FaGithub size={20} /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;