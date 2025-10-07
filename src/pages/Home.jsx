// src/pages/Home.jsx

import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AppCard from '../components/AppCard';
import { appData } from '../data/appData';
import { FaGooglePlay, FaApple, FaDownload, FaRocket, FaStar } from 'react-icons/fa';

// Statistics/State Cards Data (Figma অনুযায়ী)
const statsData = [
  { title: "Total Downloads", value: "29.6M", change: "21% More Than Last Month", color: "text-green-400" },
  { title: "Total Reviews", value: "906K", change: "45% More Than Last Month", color: "text-yellow-400" },
  { title: "Active Apps", value: "132+", change: "31 More Will Launch", color: "text-purple-400" },
];

const Home = () => {
  const navigate = useNavigate();
  // প্রথম 8টি অ্যাপ টপ অ্যাপস হিসেবে দেখাবে
  const topApps = appData.slice(0, 8); 

  // প্লে স্টোর/অ্যাপ স্টোর বাটনের জন্য ডামি হ্যান্ডলার
  const handleStoreLink = (store) => {
    alert(`Redirecting to ${store} Store... (This is a placeholder)`);
  };

  return (
    <div className="text-white">
      
      {/* 1. Banner Section (Figma অনুযায়ী) */}
      <section className="text-center py-20 px-4 bg-gray-900">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-3 leading-tight">
            We Build <span className="text-purple-400">Productive</span> Apps
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            At HERO.IO, we craft innovative ideas designed to make everyday life simpler, smarter, and more exciting. 
            Our goal is to turn your ideas into digital experiences that truly make an impact.
          </p>
          
          {/* Store Buttons */}
          <div className="flex justify-center space-x-4 mb-12">
            <button 
              onClick={() => handleStoreLink('Play')}
              className="flex items-center space-x-2 bg-white text-gray-900 font-bold py-3 px-6 rounded-full hover:bg-gray-200 transition duration-300 shadow-lg"
            >
              <FaGooglePlay className="text-xl" />
              <span>Google Play</span>
            </button>
            <button 
              onClick={() => handleStoreLink('App')}
              className="flex items-center space-x-2 bg-gray-800 border border-gray-700 text-white font-bold py-3 px-6 rounded-full hover:bg-gray-700 transition duration-300 shadow-lg"
            >
              <FaApple className="text-xl" />
              <span>App Store</span>
            </button>
          </div>
          
          {/* Main Illustration (Figma অনুযায়ী ছবি দিন) */}
          {/* এই ইমেজটি আপনার 'assets' ফোল্ডারে রাখুন এবং পথটি সঠিক করুন */}
          <img 
            src="../assets/hero.png" 
            alt="Productive Apps Illustration" 
            className="w-full max-w-xl mx-auto rounded-xl shadow-2xl" 
          />
        </div>
      </section>

      {/* 2. States Section (Figma অনুযায়ী পার্পল ব্যাকগ্রাউন্ড) */}
      <section className="bg-purple-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold mb-8">Trusted By Millions, Built For You</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {statsData.map((stat, index) => (
              <div 
                key={index} 
                className="bg-purple-700 p-6 rounded-xl shadow-xl transform hover:scale-[1.03] transition duration-300"
              >
                <p className="text-4xl font-bold mb-1">{stat.value}</p>
                <h3 className="text-xl font-semibold mb-2">{stat.title}</h3>
                <p className={`text-sm ${stat.color}`}>{stat.change}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Top Apps Section (Trending Apps) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center mb-2">Trending Apps</h2>
        <p className="text-center text-gray-400 mb-10">Explore All Trending Apps on the Market developed by us</p>

        {/* App Card Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {topApps.map((app) => (
            <AppCard key={app.id} app={app} />
          ))}
        </div>
        
        {/* Show All Button */}
        <div className="text-center mt-10">
          <button 
            onClick={() => navigate('/apps')}
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-md"
          >
            Show All
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;