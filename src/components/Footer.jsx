// src/components/Footer.jsx

import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 mt-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {/* 1. Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img src="https://i.ibb.co.com/KjL0MCjT/logo.png" alt="HERO.IO Logo" className="h-8 w-auto" />
              <span className="text-white text-xl font-bold">HERO.IO</span>
            </div>
            <p className="text-gray-400 text-sm">
              HERO.IO develops amazing apps that simplify your life and boost productivity.
            </p>
            <p className="text-gray-400 text-sm">
              Copyright © {currentYear} HERO.IO. All rights reserved.
            </p>
          </div>

          {/* 2. Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-purple-500 transition">Home</a></li>
              <li><a href="/apps" className="hover:text-purple-500 transition">Apps</a></li>
              <li><a href="/installation" className="hover:text-purple-500 transition">Installation</a></li>
              <li><a href="/contact" className="hover:text-purple-500 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* 3. Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2">
                <FaMapMarkerAlt className="text-purple-500" /> 
                <span>123 Hero Street, City, Country</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaPhone className="text-purple-500" /> 
                <span>+880 123 456 789</span>
              </li>
              <li className="flex items-center space-x-2">
                <FaEnvelope className="text-purple-500" /> 
                <span>support@hero.io</span>
              </li>
            </ul>
          </div>

          {/* 4. Newsletter & Social Links */}
          <div className="space-y-4">
            <h4 className="text-white font-semibold mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm">Subscribe to our newsletter for updates and offers.</p>
            <div className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Your email" 
                className="w-full px-3 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-white"
              />
              <button className="bg-purple-600 hover:bg-purple-700 text-whit cursor-pointer px-4 rounded-r-lg font-semibold transition">
                Subscribe
              </button>
            </div>

            <h4 className="text-white font-semibold mt-4 mb-2">Follow Us</h4>
            <div className="flex space-x-4 ">
              <a href="https://www.facebook.com/sksosksdbddhddodhhdbshshsisxjx" className="hover:text-purple-500 transition"><FaFacebook size={20} /></a>
              <a href="#" className="hover:text-purple-500 transition"><FaTwitter size={20} /></a>
              <a href="https://www.instagram.com/imrannazir14765?igsh=MWxiaXUzeWZyc3Jv" className="hover:text-purple-500 transition"><FaInstagram size={20} /></a>
              <a href="https://github.com/imran1476" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition"><FaGithub size={20} /></a>
            </div>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-800 mt-8 pt-6 text-center text-sm text-gray-500">
          Made with ❤️ by IMRAN NAZIR
        </div>
      </div>
    </footer>
  );
};

export default Footer;
